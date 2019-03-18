const IntroVideo = require("../../models/intro-video");

module.exports = {
    createIntroVideo: async args => {
        const introVideo = IntroVideo({
            videoLink: args.videoLink
        });
        try {
            const result = await introVideo.save();
            return { ...result._doc };
        } catch (err) {
            throw err;
        }
    },
    introVideo: async () => {
        try {
            const introVideo = await IntroVideo.findOne();
            return { ...introVideo._doc };
        } catch (err) {
            throw err;
        }
    },
    updateIntroVideo: async args => {
        try {
            const introVideo = await IntroVideo.findOneAndUpdate(
                {},
                { $set: { videoLink: args.videoLink } },
                { new: true }
            );
            return { ...introVideo._doc };
        } catch (err) {
            throw err;
        }
    }
};