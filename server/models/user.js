const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please enter your username"],
    max: [30, "Please enter name less than 30 characters"],
    min: [4, "Please enter name more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    max: [30, "Please enter name less than 30 characters"],
    validate: [validator.isEmail, "Please enter email correctly"],
  },
  password: {
    type: String,
    required: [true, "Please enter your Password"],
    max: [30, "Please enter name less than 30 characters"],
    min: [8, "Please enter password more than 7 characters"],
    select: false,
  },
  image: {
    type: String,
  },
  country: {
    type: String,
  },
  description: {
    type: String,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});
module.exports = mongoose.model("User", userSchema);
