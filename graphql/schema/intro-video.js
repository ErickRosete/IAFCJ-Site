const introVideoDef = `
    type IntroVideo {
        _id: ID!
        videoLink: String!
    }
`;

const introVideoQuery = `
    introVideo: IntroVideo!
`;

const introVideoMutation = `
    createIntroVideo(videoLink: String!): IntroVideo
    updateIntroVideo(videoLink: String!): IntroVideo
`;

exports.introVideoDef = introVideoDef;
exports.introVideoQuery = introVideoQuery;
exports.introVideoMutation = introVideoMutation;
