// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({ 
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("passwordHash")) {
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  }
  next();
});

// Method to validate password
UserSchema.methods.isValidPassword = async function (plaintext) {
  return await bcrypt.compare(plaintext, this.passwordHash);
}

export default mongoose.model("User", UserSchema);
