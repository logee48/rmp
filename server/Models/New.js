const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  neww: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("NewDataa", userSchema);
