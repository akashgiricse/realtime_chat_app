const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Group = mongoose.model("group", GroupSchema);
