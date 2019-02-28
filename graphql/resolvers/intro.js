const Intro = require("../../models/intro");

module.exports = {
  createIntro: async args => {
    const intro = Intro({
      ...args.introInput
    });
    try {
      const result = await intro.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },
  intro: async () => {
    try {
      const intro = await Intro.findOne();
      return { ...intro._doc };
    } catch (err) {
      throw err;
    }
  },
  updateIntro: async args => {
    try {
      const intro = await Intro.findOneAndUpdate(
        {},
        { $set: { ...args.introInput } },
        { new: true }
      );
      return { ...intro._doc };
    } catch (err) {
      throw err;
    }
  }
};
