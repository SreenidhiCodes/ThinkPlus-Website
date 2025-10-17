import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving message." });
  }
});

export default router;
