const { buildSchema } = require("graphql");

const { authDef, authQuery, authMutation } = require("./auth");
const { blogEntryDef, blogEntryQuery, blogEntryMutation } = require("./blog-entry");
const { cellDef, cellQuery, cellMutation } = require("./cell");
const { eventDef, eventQuery, eventMutation } = require("./event");
const { networkDef, networkQuery, networkMutation } = require("./network");
const { newsletterEmailDef, newsletterEmailQuery, newsletterEmailMutation } = require("./newsletter-email");
const { memberDef, memberQuery, memberMutation } = require("./member");
const { videoDef, videoQuery, videoMutation } = require("./video");
const { introDef, introQuery, introMutation } = require("./intro");
const { introVideoDef, introVideoQuery, introVideoMutation } = require("./intro-video");
const { aboutDef, aboutQuery, aboutMutation } = require("./about");

module.exports = buildSchema(`
  ${authDef}
  ${blogEntryDef}
  ${cellDef}
  ${eventDef}
  ${networkDef}
  ${newsletterEmailDef}
  ${memberDef}
  ${videoDef}
  ${introDef}
  ${introVideoDef}
  ${aboutDef}

  type RootQuery {
    ${authQuery}
    ${blogEntryQuery}
    ${cellQuery}
    ${eventQuery}
    ${networkQuery}
    ${newsletterEmailQuery}
    ${memberQuery}
    ${videoQuery}
    ${introQuery}
    ${introVideoQuery}
    ${aboutQuery}
  }

  type RootMutation {
    ${authMutation}
    ${blogEntryMutation}
    ${cellMutation}
    ${eventMutation}
    ${networkMutation}
    ${newsletterEmailMutation}
    ${memberMutation}
    ${videoMutation}
    ${introMutation}
    ${introVideoMutation}
    ${aboutMutation}
  }

  schema {
      query: RootQuery
      mutation: RootMutation
  }
`);
