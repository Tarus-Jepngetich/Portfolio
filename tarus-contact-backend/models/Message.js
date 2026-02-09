const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 120 },
    subject: { type: String, trim: true, maxlength: 120, default: "" },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 2000 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
