const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
  about: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("About", aboutSchema);
