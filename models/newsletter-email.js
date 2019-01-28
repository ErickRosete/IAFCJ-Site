const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newsletterEmailSchema = new Schema({
  email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("NewsletterEmail", newsletterEmailSchema);
