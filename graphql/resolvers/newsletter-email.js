const NewsletterEmail = require("../../models/newsletter-email");

module.exports = {
  newsletterEmails: async () => {
    try {
      const newsletterEmails = await NewsletterEmail.find();
      return newsletterEmails.map(newsletterEmail => {
        return { ...newsletterEmail._doc };
      });
    } catch (err) {
      throw err;
    }
  },

  newsletterEmail: async args => {
    try {
      const newsletterEmail = await NewsletterEmail.findById(args.id);
      return { ...newsletterEmail._doc };
    } catch (err) {
      throw err;
    }
  },

  createNewsletterEmail: async args => {
    const newsletterEmailInDB = await NewsletterEmail.findOne({
      email: args.email.toLowerCase()
    });
    if (newsletterEmailInDB) {
      return { ...newsletterEmailInDB._doc };
    }

    const newsletterEmail = NewsletterEmail({
      email: args.email.toLowerCase()
    });

    try {
      const result = await newsletterEmail.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },

  deleteNewsletterEmail: async args => {
    try {
      const newsletterEmail = await NewsletterEmail.findByIdAndDelete(args.id);
      return { ...newsletterEmail._doc };
    } catch (err) {
      throw err;
    }
  }
};
