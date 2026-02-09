const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  try {
    const { name, email, subject = "", message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "name, email, and message are required." });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email format." });
    }

    const saved = await Message.create({ name, email, subject, message });
    return res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "Server error." });
  }
});

module.exports = router;
