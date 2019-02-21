const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const networkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  leader: {
    type: String,
    required: true
  },
  imageLink: String
});

module.exports = mongoose.model("Network", networkSchema);
