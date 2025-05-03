// backend/routes/doctorRoutes.js
const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

// API to add a doctor
router.post("/add-doctor", async (req, res) => {
  const { name, city, gender, specialty } = req.body;

  try {
    const newDoctor = new Doctor({
      name,
      city,
      gender,
      specialty,
    });

    await newDoctor.save();
    res.status(201).json({ message: "Doctor added", doctor: newDoctor });
  } catch (error) {
    res.status(400).json({ message: "Failed to add doctor", error });
  }
});

// API to list doctors with filter and pagination
router.get("/list-doctor-with-filter", async (req, res) => {
  const { city, gender, specialty, page = 1, limit = 10 } = req.query;

  try {
    const filters = {};

    // Apply filters only if the values are present
    if (city) filters.city = city;
    if (gender) filters.gender = gender;
    if (specialty) filters.specialty = specialty;

    // Fetch doctors with the filters
    const doctors = await Doctor.find(filters)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(doctors);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch doctors", error });
  }
});

module.exports = router;
