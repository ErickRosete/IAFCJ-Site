const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageLink: String,
    shortDescription: String,
    description: {
      type: String,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    },
    address: String,
    googlemaps: String,
    lat: Number,
    lng: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
