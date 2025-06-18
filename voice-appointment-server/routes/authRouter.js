// routes/auth.js
import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();


// Login route
router.post('/login', async (req, res) => {
  try {
    console.log("Login attempt with", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("Missing fields.");
      return res.status(400).json({error:'All fields are required'})
    }

    // Find the user by email
    const user = await User.findOne({ email });
    console.log("User found?", user);

    if (!user) {
      console.log("User not found.");
      return res.status(404).json({error:'User not found'})
    }

    // Validate password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    console.log("Password is valid?", isValid);

    if (!isValid) {
      console.log("Invalid password.");
      return res.status(400).json({error:'Invalid password'})
    }

    // Generate JWT
    const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET, { expiresIn:'1h'})
    console.log("JWT generated.");
    res.json({ message:'Login successful!', token });

  } catch (error) {
    console.error("Server Error.", error);
    res.status(500).json({error:'Server Error'})
  }
});

// export router
export default router;

