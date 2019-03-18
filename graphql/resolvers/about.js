const About = require("../../models/about");

module.exports = {
  createAbout: async args => {
    const about = About({
      ...args.aboutInput
    });
    try {
      const result = await about.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },
  about: async () => {
    try {
      const about = await About.findOne();
      return { ...about._doc };
    } catch (err) {
      throw err;
    }
  },
  updateAbout: async args => {
    try {
      const about = await About.findOneAndUpdate(
        {},
        { $set: { ...args.aboutInput } },
        { new: true }
      );
      return { ...about._doc };
    } catch (err) {
      throw err;
    }
  }
};
