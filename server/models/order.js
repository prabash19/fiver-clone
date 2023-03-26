const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  gigId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "user ID is required"],
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: [true, "title is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  sellerId: {
    type: String,
    required: [true, "seller id is required"],
  },
  buyerId: {
    type: String,
    required: [true, "buyer id is required"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  payment_intent: {
    type: String,
    required: [true, "payment intent is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Order", orderSchema);
