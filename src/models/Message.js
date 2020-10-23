const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group",
  },
});

module.exports = Message = mongoose.model("message", MessageSchema);
