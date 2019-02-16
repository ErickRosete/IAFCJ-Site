const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cellSchema = new Schema({
  leader: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  address: String,
  googlemaps: String,
  lat: Number,
  lng: Number
});

module.exports = mongoose.model("Cell", cellSchema);
