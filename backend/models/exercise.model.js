const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    exerciseName: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    level: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
