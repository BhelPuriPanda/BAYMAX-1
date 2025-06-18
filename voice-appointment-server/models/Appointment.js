import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({ 
  patientName: { type: String, required: true },
  symptoms: { type: String, required: true },
  preferredDoctor: { type: String, required: true },
  scheduledAt: { 
    type: Date, 
    default: Date.now 
  },
});

// The Appointment model
const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;