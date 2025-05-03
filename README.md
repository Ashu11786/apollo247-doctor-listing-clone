# 🩺 Apollo247 Doctor Listing Clone

This project is a clone of the Apollo247 destination page for **General Physicians & Internal Medicine**, built as part of an internship assignment.

## 🚀 Features

- Built with **Next.js** (App Router) for frontend
- SEO-friendly using off-page SEO implementation
- Functional **filter system** with city, gender, and specialty
- Backend built with **Express.js** and **MongoDB (Mongoose)**
- REST APIs for:
  - Adding a new doctor
  - Listing doctors with filters and pagination
- Clean, responsive UI


## 📁 Project Structure

├── frontend/
│ ├── app/
│ │ └── specialties/
│ │ └── general-physician-internal-medicine/
│ │ └── page.tsx
│ └── public/
│ └── ...
├── backend/
│ ├── models/
│ │ └── Doctor.js
│ ├── routes/
│ │ └── doctorRoutes.js
│ ├── index.js
│ └── ...


---

## Screenshot

![screenshot](https://github.com/user-attachments/assets/e34d08b4-0350-4524-9019-41b53b49178e)

## 🧪 API Endpoints

### ➕ Add Doctor
`POST /add-doctor`

**Body:**
```json
{
  "name": "Dr. John Doe",
  "city": "New York",
  "gender": "Male",
  "specialty": "General Physician"
}

```
🔍 List Doctors with Filter
GET /list-doctor-with-filter?city=Boston&gender=Female&page=1&limit=10

Returns filtered list of doctors with pagination.

⚙️ Technologies Used
Frontend: Next.js, Tailwind CSS

Backend: Node.js, Express.js, MongoDB

Tools: Postman, Git, GitHub

🧑‍💻 Author
Achal Laxman Deshmukh
📍 Nagpur, Maharashtra, India

📌 How to Run Locally
Backend
```
cd backend
npm install
node server.js
```

Frontend
```
cd frontend
npm install
npm run dev
```

Make sure MongoDB is running locally or replace with your cloud DB URI in ```.env.```

📄 License
This project is created for educational and assignment purposes only.
```

---

Let me know if you want this saved as a file or need help pushing it to GitHub.
```





