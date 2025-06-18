import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./routes/authRouter.js";
import authMiddleware from "./middleware/authMiddleware.js";
import appointmentRouter from "./routes/appointment.js";

import { extractDetails } from "./parse.js";

dotenv.config();

const app = express();

app.use(cors()); // enable CORS
app.use(express.json()); // parses incoming requests with JSON

// routes
app.use('/api/auth', authRouter);
app.use('/api/appointment', appointmentRouter);

// NEW: route for parsing
app.post('/api/parse', (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: "Transcript is required." });
  }

  try {
    console.log("Received transcript.", transcript);
    const parsed = extractDetails(transcript);
    console.log("Parsed.", parsed);
    res.json(parsed);
  } catch (error) {
    res.status(500).json({ error: "Failed to extract details.", details: error.toString() });
  }
});

// connect to db
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to Database.");

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}.`) 
  });
} catch (err) {
  console.error(err);
}

