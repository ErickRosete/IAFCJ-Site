const Cell = require("../../models/cell");

module.exports = {
  cells: async () => {
    try {
      const cells = await Cell.find();
      return cells.map(cell => {
        return { ...cell._doc };
      });
    } catch (err) {
      throw err;
    }
  },

  cell: async args => {
    try {
      const cell = await Cell.findById(args.id);
      return { ...cell._doc };
    } catch (err) {
      throw err;
    }
  },

  createCell: async args => {
    const cell = Cell({
      ...args.cellInput
    });
    try {
      const result = await cell.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },

  updateCell: async args => {
    try {
      const cell = await Cell.findByIdAndUpdate(
        args.id,
        { ...args.cellInput },
        { new: true }
      );
      return { ...cell._doc };
    } catch (err) {
      throw err;
    }
  },

  deleteCell: async args => {
    try {
      const cell = await Cell.findByIdAndDelete(args.id);
      return { ...cell._doc };
    } catch (err) {
      throw err;
    }
  }
};
