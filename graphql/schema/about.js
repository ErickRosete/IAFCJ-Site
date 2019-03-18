const aboutDef = `
    type About {
        _id: ID!
        about: String!
        imageLink: String!
    }

    input AboutInput{
        about: String
        imageLink: String
    }
`;

const aboutQuery = `
    about: About!
`;

const aboutMutation = `
    createAbout(aboutInput: AboutInput): About
    updateAbout(aboutInput: AboutInput): About
`;

exports.aboutDef = aboutDef;
exports.aboutQuery = aboutQuery;
exports.aboutMutation = aboutMutation;
