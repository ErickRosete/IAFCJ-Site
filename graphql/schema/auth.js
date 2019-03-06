const authDef = `
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
        role: String!
    }

    type User {
        _id: ID!
        email: String!
        password: String!
        role: String!
    }

    input UserInput{
        email: String
        password: String
        role: String
    }
`;

const authQuery = `
    users: [User!]!
    user(id: ID!): User!
    login(userInput: UserInput!): AuthData!
`;

const authMutation = `
    createUser(userInput: UserInput!): User
    updatePassword(id: ID!, password: String!): User
    deleteUser(id: ID!): User
`;

exports.authDef = authDef;
exports.authQuery = authQuery;
exports.authMutation = authMutation;