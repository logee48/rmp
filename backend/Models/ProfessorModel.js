const mongoose = require("mongoose");


// username, Prof_id, comment, email, avg_rating, rating1, rating2, rating3, like
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your name is required"],
  },
  prof_id: {
    type: String,
    required: [true, "Your college/uni name is required"],
  },
  comment: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  overall_rating: {
    type: Number,
    required: [true],
  },
  review_1: {
    type: Number,
    required: [true],
  },
  review_2: {
    type: Number,
    required: [true],
  },
  review_3: {
    type: Number,
    required: [true],
  },
  like: {
    type: Number,
    required: [true],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Professor", userSchema);
