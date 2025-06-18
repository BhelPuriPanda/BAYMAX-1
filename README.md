🏥 Baymax – Smart Appointment Booking System
Baymax is an intelligent, full-stack clinic management web application that simplifies appointment booking using AI, voice commands, and Google integrations. Designed for front desk use, it ensures a seamless experience for booking and managing patient appointments.

📌 Key Features
🎙️ AI-Powered Voice Appointment Booking
Book appointments using speech with automatic transcription and intelligent slot mapping.

📅 Google Calendar Integration
Automatically syncs booked appointments with the doctor's Google Calendar.

📧 Gmail Notifications
Sends confirmation emails to patients and doctors via Gmail API.

💡 User-Friendly Interface
Built with React and Tailwind CSS for a clean, responsive UI.

🛠️ Tech Stack
🔹 Frontend
React

Axios

Web Speech API (Speech Recognition)

Tailwind CSS

🔹 Backend
Node.js

Express

Mongoose

JWT (Authentication)

bcrypt (Password hashing)

🔹 Database
MongoDB Atlas (Cloud)

🔗 API Endpoints
Method	URL	Description
POST	/api/auth/login	Login and generate JWT
POST	/api/appointment/create	Create a new appointment
GET	/api/appointment/list	Retrieve all appointments

⚙️ Installation
bash
Copy
Edit
git clone https://github.com/suvxn/baymax.git
cd baymax
🔧 Environment Variables
Create a .env file in the server/ directory with the following keys:


▶️ Running the Application
Start the backend server:

bash
Copy
Edit
cd server
npm install
npm start
Start the frontend:

bash
Copy
Edit
cd frontend
npm install
npm run dev
Client: http://localhost:5173
Server: http://localhost:5000

📤 Gmail & Calendar Integration
Requires Google OAuth setup. The app uses Gmail API and Google Calendar API for:

Sending email confirmations to patients and doctors.

Automatically adding appointments to Google Calendar.

🤖 AI Voice Booking
Uses the Web Speech API for speech recognition.

Recognizes keywords like "book appointment for tomorrow at 3 PM with Dr. Smith".

AI parses and validates input before creating the booking.

👥 Contributing
We welcome contributions!

Fork the repository

Create a feature branch

Submit a pull request

Issues and feature suggestions are also appreciated.

📄 License
This project is licensed under the MIT License.
