const videoDef = `
    type Video {
        _id: ID!
        name: String!
        link: String!
        description: String
    }

    input VideoInput {
        name: String
        link: String
        description: String
    }
`;

const videoQuery = `
    videos: [Video!]!
    video(id: ID!): Video!
`;

const videoMutation = `
    createVideo(videoInput: VideoInput): Video
    updateVideo(id: ID!, videoInput: VideoInput): Video
    deleteVideo(id: ID!): Video
`;

exports.videoDef = videoDef;
exports.videoQuery = videoQuery;
exports.videoMutation = videoMutation;