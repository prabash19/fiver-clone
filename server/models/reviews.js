const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "user id is req"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description id is required"],
  },
  totalStars: {
    type: Number,
    default: 0,
  },
  starNumber: {
    type: String,
    default: 0,
  },
  category: {
    type: String,
    required: [true, "category is req"],
  },
  price: {
    type: Number,
    required: [true, "price is req"],
  },
  images: {
    type: [String],
  },
  coverImage: {
    type: String,
    required: [true, "images is req"],
  },
  shortTitle: {
    type: String,
    required: [true, "shortTitle is req"],
  },
  shortDescription: {
    type: String,
    required: [true, "Short Description is req"],
  },
  delieveryTime: {
    type: Number,
    required: [true, "delievery Time is req"],
  },
  revisionNumber: {
    type: String,
    required: [true, "revision Number is req"],
  },
  features: {
    type: [String],
  },
  sales: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Review", reviewSchema);
