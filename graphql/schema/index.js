const { buildSchema } = require("graphql");

const { addressDef, addressQuery, addressMutation } = require("./address");
const { authDef, authQuery, authMutation } = require("./auth");
const { blogEntryDef, blogEntryQuery, blogEntryMutation } = require("./blog-entry");
const { cellDef, cellQuery, cellMutation } = require("./cell");
const { eventDef, eventQuery, eventMutation } = require("./event");
const { networkDef, networkQuery, networkMutation } = require("./network");
const { newsletterEmailDef, newsletterEmailQuery, newsletterEmailMutation } = require("./newsletter-email");
const { memberDef, memberQuery, memberMutation } = require("./member");
const { videoDef, videoQuery, videoMutation } = require("./video");


module.exports = buildSchema(`
  ${addressDef}
  ${authDef}
  ${blogEntryDef}
  ${cellDef}
  ${eventDef}
  ${networkDef}
  ${newsletterEmailDef}
  ${memberDef}
  ${videoDef}

  type RootQuery {
    ${addressQuery}
    ${authQuery}
    ${blogEntryQuery}
    ${cellQuery}
    ${eventQuery}
    ${networkQuery}
    ${newsletterEmailQuery}
    ${memberQuery}
    ${videoQuery}
  }

  type RootMutation {
    ${addressMutation}
    ${authMutation}
    ${blogEntryMutation}
    ${cellMutation}
    ${eventMutation}
    ${networkMutation}
    ${newsletterEmailMutation}
    ${memberMutation}
    ${videoMutation}
  }

  schema {
      query: RootQuery
      mutation: RootMutation
  }
`);
