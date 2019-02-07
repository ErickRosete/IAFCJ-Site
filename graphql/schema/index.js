const { buildSchema } = require("graphql");
const { blogEntryDef, blogEntryQuery, blogEntryMutation } = require("./blog-entry");
const { addressDef, addressQuery, addressMutation } = require("./address");

module.exports = buildSchema(`
  ${blogEntryDef}
  ${addressDef}

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Cell {
    _id: ID!
    leader: String!
    address: Address
    phone: String!
    date: String!
  }

  input CellInput{
    leader: String!
    address: AddressInput
    phone: String!
    date: String!
  }

  type Event {
    _id: ID!
    title: String!
    imageLink: String
    shortDescription: String
    description: String!
    date: String!
    address: Address
    createdAt: String!
    updatedAt: String!
  }

  input EventInput{
    title: String!
    imageLink: String
    shortDescription: String
    description: String!
    date: String!
    address: AddressInput
  }

  type Network {
    _id: ID!
    leader: String!
    category: String!
    imageLink: String
  }

  input NetworkInput{
    leader: String!
    category: String!
    imageLink: String
  }

  type NewsletterEmail {
    _id: ID!
    email: String!
  }

  type Member {
    _id: ID!
    name: String!
    job: String!
    description: String!
  }

  input MemberInput {
    name: String!
    job: String!
    description: String!
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

  type Video {
    _id: ID!
    name: String!
    link: String!
    description: String
  }

  input VideoInput {
    name: String!
    link: String!
    description: String
  }

  type RootQuery {
    ${addressQuery}
    ${blogEntryQuery}
    cells: [Cell!]!
    events: [Event!]!
    networks: [Network!]!
    newsletterEmails: [NewsletterEmail!]! 
    members: [Member!]! 
    users: [User!]!
    videos: [Video!]!
    login(userInput: UserInput!): AuthData!
  }

  type RootMutation {
    ${addressMutation}
    ${blogEntryMutation}
      createCell(cellInput: CellInput): Cell
      createEvent(eventInput: EventInput): Event
      createNetwork(networkInput: NetworkInput): Network
      createNewsletterEmail(email: String): NewsletterEmail
      createMember(memberInput: MemberInput): Member
      createUser(userInput: UserInput): User
      createVideo(videoInput: VideoInput): Video
  }

  schema {
      query: RootQuery
      mutation: RootMutation
  }
`);
