// addUser.js
import mongoose from "mongoose";
import User from "./models/User.js";
import dotenv from "dotenv";

dotenv.config();

async function addUser() {
  try {
    // Connect to your Atlas database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Database.");

    // Get email and password from command line
    const email = process.argv[2];
    const password = process.argv[3 ];

    if (!email || !password) {
      console.error("Please provide email and password.");
      process.exit(1);
    }

    // Store password directly — User Schema will hash it
    const newUser = new User({ email, passwordHash: password });
    await newUser.save();

    console.log("User added successfully.");

    await mongoose.disconnect();

    console.log("Database connection closed.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

addUser();
