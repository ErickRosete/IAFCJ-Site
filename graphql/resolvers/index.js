const authResolver = require("./auth");
const blogResolver = require("./blog-entry");
const cellResolver = require("./cell");
const eventResolver = require("./event");
const networkResolver = require("./network");
const newsletterResolver = require("./newsletter-email");
const memberResolver = require("./member");
const videoResolver = require("./video");

const rootResolver = {
  ...authResolver,
  ...blogResolver,
  ...cellResolver,
  ...eventResolver,
  ...networkResolver,
  ...newsletterResolver,
  ...memberResolver,
  ...videoResolver
};

module.exports = rootResolver;
