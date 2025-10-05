import express from"express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import { DBConnect } from "./config/db.js";
dotenv.config();
// DBConnect();

// Middleware
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json(),cors());

// Define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bikeNumber: { type: String, required: true }
});

// Create Model
const User = mongoose.model("User", userSchema);

// 1. GET the user details from the DB
app.get("/users", async (req, res) => { 
  try{
    const users = await User.find();
    res.status(200).json(users);
  }
  catch(error){
    res.json(error.message);
  }
});

// 2. POST Sign up page
app.post("/users", async (req, res) => {
  try {
    const { name, phoneNumber, bikeNumber } = req.body;
    const newUser = new User({ name, phoneNumber, bikeNumber });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 3. PUT
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 4. DELETE
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// App listen
app.listen(port, () => {
  DBConnect();
  console.log("App is running on the Port ", port)});