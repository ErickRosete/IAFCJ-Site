const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageLink: String,
    subtitle: String,
    shortDescription: String,
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogEntry", blogEntrySchema);
