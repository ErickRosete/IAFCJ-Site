const memberDef = `
    type Member {
        _id: ID!
        name: String!
        job: String!
        description: String!
        imageLink: String
    }

    input MemberInput {
        name: String
        job: String
        description: String
        imageLink: String
    }
`;

const memberQuery = `
    members: [Member!]! 
    member(id: ID!): Member!
`;

const memberMutation = `
    createMember(memberInput: MemberInput): Member
    updateMember(id: ID!, memberInput: MemberInput): Member
    deleteMember(id: ID!): Member
`;

exports.memberDef = memberDef;
exports.memberQuery = memberQuery;
exports.memberMutation = memberMutation;