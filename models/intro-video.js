const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const introVideoSchema = new Schema({
  videoLink: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("IntroVideo", introVideoSchema);
