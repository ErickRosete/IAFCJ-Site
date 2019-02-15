const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cellSchema = new Schema({
  leader: {
    type: String,
    required: true
  },
  address: String,
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Cell", cellSchema);
