const Video = require("../../models/video");

module.exports = {
  videos: async () => {
    try {
      const videos = await Video.find();
      return videos.map(video => {
        return { ...video._doc };
      });
    } catch (err) {
      throw err;
    }
  },

  video: async args => {
    try {
      const video = await Video.findById(args.id);
      return { ...video._doc };
    } catch (err) {
      throw err;
    }
  },

  createVideo: async args => {
    const video = Video({
      ...args.videoInput
    });

    try {
      const result = await video.save();
      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },

  updateVideo: async args => {
    try {
      const video = await Video.findByIdAndUpdate(
        args.id,
        { ...args.videoInput },
        { new: true }
      );
      return { ...video._doc };
    } catch (err) {
      throw err;
    }
  },

  deleteVideo: async args => {
    try {
      const video = await Video.findByIdAndDelete(args.id);
      return { ...video._doc };
    } catch (err) {
      throw err;
    }
  }
};
