const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type Address {
  _id: ID!
  street: String!
  exteriorNumber: Int!
  city: String
  postalCode: Int
}

input AddressInput{
  street: String!
  exteriorNumber: Int!
  city: String
  postalCode: Int
}

type BlogEntry {
  _id: ID!
  title: String!
  imageLink: String
  subtitle: String
  shortDescription: String
  description: String!
  createdAt: String!
  updatedAt: String!
}

input BlogEntryInput{
  title: String!
  imageLink: String
  subtitle: String
  shortDescription: String
  description: String!
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
  address: Address
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
  addresses: [Address!]!
  blog: [BlogEntry!]!
  cells: [cell!]!
  events: [Event!]!
  networks: [Network!]!
  newsletterEmails: [NewsletterEmail!]! 
  members: [Member!]! 
  users: [User!]!
  videos: [Video!]!
  login(userInput: UserInput!): AuthData!
}

type RootMutation {
    createAddress(addressInput: AddressInput): Address
    createBlogEntry(blogEntryInput: BlogEntryInput): BlogEntry
    createCell(cellInput: CellInput): Cell
    createEvent(eventInput: EventInput): Event
    createNetwork(networkInput: NetworkInput): Network
    createNewsletterEmail(email: String): Newsletter
    createMember(memberInput: MemberInput): Member
    createUser(userInput: UserInput): User
    createVideo(videoInput: VideoInput): Video
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
