const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const introSchema = new Schema({
  attentionSchedule: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Intro", introSchema);
