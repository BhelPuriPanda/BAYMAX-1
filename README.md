🏥 Baymax — Smart AI Appointment Booking System

Baymax is an intelligent clinic management web application that automates front-desk appointment booking using voice commands, AI parsing, and Google integrations.

It acts like a virtual receptionist — staff can simply speak the request and Baymax schedules the appointment, updates the doctor’s calendar, and sends confirmation emails automatically.

Built as a full-stack system focusing on real-world usability, automation, and accessibility.

✨ Demo Login
Email: aaa@aaa.com
Password: 1234567

🧠 What Makes Baymax Different?

Traditional systems → manual typing → slow
Baymax → speak → understand → schedule → notify

The system converts natural speech like:

“Book an appointment for Rahul tomorrow at 3 PM with Dr. Sharma”

into a structured appointment using AI-based parsing and validation.

🚀 Features
🎙️ AI Voice Booking

Speech → text using Web Speech API

Natural language parsing

Intelligent date & time detection

Slot validation before booking

📅 Google Calendar Sync

Automatically creates doctor events

Prevents overlapping appointments

Real-time schedule visibility

📧 Automatic Email Notifications

Confirmation mail to patient

Reminder mail to doctor

Powered by Gmail API

🔐 Secure Authentication

JWT-based login sessions

bcrypt password hashing

💻 Clean UI/UX

Responsive interface

Built for front-desk operators

Minimal training required

🛠️ Tech Stack
Frontend

React

Tailwind CSS

Axios

Web Speech API

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

bcrypt

Cloud & Integrations

Google Calendar API

Gmail API

MongoDB Atlas

🏗️ System Architecture
User Speech
     ↓
Speech Recognition
     ↓
AI Parser
     ↓
Backend Validation
     ↓
Database Storage
     ↓
Google Calendar + Gmail Notification

⚙️ Local Setup
1️⃣ Clone the repository
git clone https://github.com/suvxn/baymax.git
cd baymax

2️⃣ Setup Backend
cd server
npm install
npm start


Backend runs on: http://localhost:5000

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev


Frontend runs on: http://localhost:5173

🔑 Environment Variables

Create a .env file inside server/

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
GOOGLE_REDIRECT_URI=your_redirect
GOOGLE_REFRESH_TOKEN=your_refresh_token

📡 API Endpoints
Method	Endpoint	Description
POST	/api/auth/login	Login & get token
POST	/api/appointment/create	Create appointment
GET	/api/appointment/list	Fetch appointments
🤖 Voice Command Examples

Try saying:

“Book appointment for Aman tomorrow at 5 PM”

“Schedule patient Ravi on Monday morning”

“Appointment for Neha at 2:30 PM with Dr. Mehta”

📬 Google Integrations

Baymax connects with:

Google Calendar → Adds appointment events

Gmail API → Sends confirmation emails

Requires Google OAuth credentials setup

👨‍💻 Contributing

Contributions are welcome!

Fork the repo

Create a feature branch

Open a Pull Request

📄 License

MIT License

🌟 Future Improvements

WhatsApp reminders

Doctor dashboard analytics

Multi-clinic support

AI no-show prediction

Voice support in regional languages
