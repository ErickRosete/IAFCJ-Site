const Event = require("../../models/event");

const { transformEvent } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },

  featuredEvent: async () => {
    try {
      //search next event
      let event = await Event.findOne({ startDate: { $gt: new Date() } }).sort({
        startDate: 1
      });

      if (!event) {
        //if no future events show last event
        event = await Event.findOne().sort({ startDate: -1 });
      }

      return transformEvent(event);
    } catch (err) {
      throw err;
    }
  },

  event: async args => {
    try {
      const event = await Event.findById(args.id);
      return transformEvent(event);
    } catch (err) {
      throw err;
    }
  },

  createEvent: async args => {
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated");
    // }
    const event = Event({
      ...args.eventInput,
      date: new Date(args.eventInput.date)
    });

    try {
      const result = await event.save();
      return transformEvent(result);
    } catch (err) {
      throw err;
    }
  },

  updateEvent: async args => {
    try {
      const event = await Event.findByIdAndUpdate(
        args.id,
        { ...args.eventInput, date: new Date(args.eventInput.date) },
        { new: true }
      );
      return transformEvent(event);
    } catch (err) {
      throw err;
    }
  },

  deleteEvent: async args => {
    try {
      const event = await Event.findByIdAndDelete(args.id);
      return transformEvent(event);
    } catch (err) {
      throw err;
    }
  }
};
