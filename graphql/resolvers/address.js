const Address = require("../../models/address");

module.exports = {
    addresses: async () => {
        try {
            const addresses = await Address.find();
            return addresses.map(address => {
                return { ...address._doc };
            });
        } catch (err) {
            throw err;
        }
    },

    address: async (args, req) => {
        try {
            const address = await Address.findById(args.id);
            return { ...address._doc };
        } catch (err) {
            throw err;
        }
    },

    createAddress: async (args, req) => {
        console.log(args)
        const address = Address({
            ...args.addressInput
        });
        try {
            const result = await address.save();
            return { ...result._doc };
        } catch (err) {
            throw err;
        }
    },

    updateAddress: async (args) => {
        try {
            const address = await Address.findByIdAndUpdate(args.id,
                { ...args.addressInput },
                { new: true });
            return { ...address._doc };
        } catch (err) {
            throw err;
        }
    },

    deleteAddress: async (args) => {
        try {
            const address = await Address.findByIdAndDelete(args.id);
            return { ...address._doc };
        } catch (err) {
            throw err;
        }
    }
};
