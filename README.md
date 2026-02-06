# Baymax — Smart AI Appointment Booking System

Baymax is an intelligent clinic management web application that automates front-desk appointment booking using voice commands, AI parsing, and Google integrations.

It works like a virtual receptionist — staff can speak the request and Baymax schedules the appointment, updates the doctor's calendar, and sends confirmation emails automatically.

---

## Demo Login
```
Email: aaa@aaa.com
Password: 1234567
```

---

## Features

### AI Voice Booking
- Speech to text using Web Speech API
- Natural language understanding
- Automatic date and time detection
- Slot validation before booking

### Google Calendar Integration
- Automatically creates doctor events
- Prevents overlapping appointments

### Email Notifications
- Confirmation mail to patient
- Reminder mail to doctor
- Powered by Gmail API

### Secure Authentication
- JWT based sessions
- bcrypt password hashing

### User Interface
- Clean responsive UI
- Designed for front desk operators

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios
- Web Speech API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- bcrypt

### Integrations
- Google Calendar API
- Gmail API
- MongoDB Atlas

---

## Architecture
```
Speech → Text → AI Parser → Backend Validation → Database → Calendar + Email
```

---

## Local Setup

### 1. Clone Repository
```bash
git clone https://github.com/suvxn/baymax.git
cd baymax
```

### 2. Backend Setup
```bash
cd server
npm install
npm start
```
Runs on: http://localhost:5000

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Runs on: http://localhost:5173

---

## Environment Variables

Create `.env` inside `server/`

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
GOOGLE_REDIRECT_URI=your_redirect
GOOGLE_REFRESH_TOKEN=your_refresh_token
```

---

## API Endpoints

| Method | Endpoint | Description |
|------|------|------|
| POST | /api/auth/login | Login and get token |
| POST | /api/appointment/create | Create appointment |
| GET | /api/appointment/list | Fetch appointments |

---

## Example Voice Commands
- Book appointment for Rahul tomorrow at 3 PM
- Schedule patient Aman on Monday morning
- Appointment for Neha at 2:30 PM with Dr. Mehta

---

## Google Integration
Baymax connects with:
- Google Calendar → adds appointment events
- Gmail API → sends confirmation emails

Requires Google OAuth credentials.

---

## Contributing
1. Fork the repository
2. Create a feature branch
3. Open a pull request

---

## License
MIT License

---

## Future Improvements
- WhatsApp reminders
- Doctor analytics dashboard
- Multi clinic support
- AI no-show prediction
- Regional language voice support
