const introDef = `
    type Intro {
        _id: ID!
        attentionSchedule: String!
        imageLink: String!
    }

    input IntroInput{
        attentionSchedule: String
        imageLink: String
    }
`;

const introQuery = `
    intro: Intro!
`;

const introMutation = `
    createIntro(introInput: IntroInput): Intro
    updateIntro(introInput: IntroInput): Intro
`;

exports.introDef = introDef;
exports.introQuery = introQuery;
exports.introMutation = introMutation;
