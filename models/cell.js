const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cellSchema = new Schema({
  leader: {
    type: String,
    required: true
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "Address"
  },
  phone: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Cell", cellSchema);
