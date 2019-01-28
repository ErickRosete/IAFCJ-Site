const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: String
});

module.exports = mongoose.model("Video", videoSchema);
