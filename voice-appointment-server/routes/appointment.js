// routes/appointment.js
import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

// CREATE a new appointment
router.post('/create', async (req, res) => {
  try {
    const { patientName, symptoms, preferredDoctor } = req.body;

    if (!patientName || !symptoms || !preferredDoctor) {
      return res.status(400).json({error:'All fields are required'})
    }

    // Find the last appointment for the preferred doctor
    const lastAppointment = await Appointment.findOne({ preferredDoctor })
      .sort({ scheduledAt: -1 });

    let scheduledAt = new Date();

    if (lastAppointment) {
      // If there's a previous appointment, add 15 minutes
      scheduledAt = addMinutes(lastAppointment.scheduledAt, 15);
    }

    // Create a new appointment
    const newAppointment = new Appointment({ 
      patientName, 
      symptoms, 
      preferredDoctor,
      scheduledAt
    });

    await newAppointment.save();

    res.json({ message:'Appointment successfully booked!', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({error:'Server Error'})
  }
});

// export router
export default router;
