const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const networkSchema = new Schema({
  leader: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageLink: String,
});

module.exports = mongoose.model("Network", networkSchema);
