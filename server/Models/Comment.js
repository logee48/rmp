const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true],
  },
  prof_name: {
    type: String,
    required: [true],
  },
  comment: {
    type: String,
    required: [true],
  },
  overall_rating: {
    type: Number,
    required: [true],
  },
//   review_1: {
//     type: Number,
//     required: [true],
//   },
//   review_2: {
//     type: Number,
//     required: [true],
//   },
//   review_3: {
//     type: Number,
//     required: [true],
//   },
  like: {
    type: Number,
    required: [true],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Comment", userSchema);
