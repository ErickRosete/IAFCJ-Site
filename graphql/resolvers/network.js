const Network = require("../../models/network");

module.exports = {
  networks: async () => {
    try {
      const networks = await Network.find();
      return networks.map(network => {
        return { ...network._doc };
      });
    } catch (err) {
      throw err;
    }
  },

  network: async args => {
    try {
      const network = await Network.findById(args.id);
      return { ...network._doc };
    } catch (err) {
      throw err;
    }
  },

  createNetwork: async args => {
    const network = Network({
      ...args.networkInput
    });

    try {
      const result = await network.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },

  updateNetwork: async args => {
    try {
      const network = await Network.findByIdAndUpdate(
        args.id,
        { ...args.networkInput },
        { new: true }
      );
      return { ...network._doc };
    } catch (err) {
      throw err;
    }
  },

  deleteNetwork: async args => {
    try {
      const network = await Network.findByIdAndDelete(args.id);
      return { ...network._doc };
    } catch (err) {
      throw err;
    }
  }
};
