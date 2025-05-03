const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Define a simple Doctor schema for MongoDB
const doctorSchema = new mongoose.Schema({
  name: String,
  city: String,
  gender: String,
  specialty: String
});

const Doctor = mongoose.model('Doctor', doctorSchema);

// Endpoint to get doctors with filtering
app.get('/list-doctor-with-filter', async (req, res) => {
  const { city, gender, specialty, page = 1, limit = 10 } = req.query;

  // Construct filter object
  const filter = {};
  if (city) filter.city = city;
  if (gender) filter.gender = gender;
  if (specialty) filter.specialty = specialty;

  try {
    // Query the database with filtering and pagination
    const doctors = await Doctor.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalDoctors = await Doctor.countDocuments(filter);

    // Return the filtered and paginated results
    res.json({
      doctors,
      totalDoctors,
      totalPages: Math.ceil(totalDoctors / limit),
      currentPage: parseInt(page)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors', error });
  }
});

// Connect to MongoDB and start the server
mongoose.connect('mongodb://localhost:27017/doctorDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
