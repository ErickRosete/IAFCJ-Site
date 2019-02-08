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
        { ...args.eventInput },
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
