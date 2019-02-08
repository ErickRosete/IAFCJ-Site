const Member = require("../../models/member");

module.exports = {
  members: async () => {
    try {
      const members = await Member.find();
      return members.map(member => {
        return { ...member._doc };
      });
    } catch (err) {
      throw err;
    }
  },

  member: async args => {
    try {
      const member = await Member.findById(args.id);
      return { ...member._doc };
    } catch (err) {
      throw err;
    }
  },

  createMember: async args => {
    const member = Member({
      ...args.memberInput
    });

    try {
      const result = await member.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },

  updateMember: async args => {
    try {
      const member = await Member.findByIdAndUpdate(
        args.id,
        { ...args.memberInput },
        { new: true }
      );
      return { ...member._doc };
    } catch (err) {
      throw err;
    }
  },

  deleteMember: async args => {
    try {
      const member = await Member.findByIdAndDelete(args.id);
      return { ...member._doc };
    } catch (err) {
      throw err;
    }
  }
};
