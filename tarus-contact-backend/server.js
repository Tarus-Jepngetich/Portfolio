require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoute = require("./routes/contact");

const app = express();

// If your frontend is on a different domain, lock this down later:
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => {
    console.error("Mongo connection error:", err.message);
    process.exit(1);
  });
