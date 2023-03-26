const mongoose = require("mongoose");
const conversationSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: [true, "id is required"],
  },
  sellerId: {
    type: String,
    required: [true, "seller id is required"],
  },
  buyerId: {
    type: String,
    required: [true, "buyer id is required"],
  },
  readBySellerId: {
    type: Boolean,
    default: false,
  },
  readByBuyerId: {
    type: Boolean,
    default: false,
  },
  lastMessage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Conversation", conversationSchema);
