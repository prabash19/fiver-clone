const mongoose = require("mongoose");
const gigSchema = new mongoose.Schema({
  gigId: {
    type: String,
    required: [true, "gig id is req"],
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "user ID is required"],
  },
  star: {
    type: Number,
    required: [true, "Star is required"],
    enum: [1, 2, 3, 4, 5],
  },
  gigDiscription: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Gig", gigSchema);
