const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  conversationId: {
    type: String,
    required: [true, "conversation id is required"],
  },
  userId: {
    type: String,
    required: [true, "user id is required"],
  },
  messageId: {
    type: String,
    required: [true, "message is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Message", messageSchema);
