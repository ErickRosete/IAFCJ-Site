const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Event {
  _id: ID!
  title: String!
  description: String!
  date: String!
}

input EventInput {
  title: String!
  description: String!
  date: String!
}   

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type User {
  _id: ID!
  email: String!
  password: String
}

input UserInput{
  email: String!
  password: String!
}

type RootQuery {
    events: [Event!]!
    users: [User!]!
    login(userInput: UserInput!): AuthData!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
