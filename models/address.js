const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: {
    type: String,
    required: true
  },
  exteriorNumber: {
    type: Number,
    required: true
  },
  city: String,
  postalCode: Number,
});

module.exports = mongoose.model("Address", addressSchema);
