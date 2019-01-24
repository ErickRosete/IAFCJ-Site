const authResolver = require("./auth");
const eventResolver = require("./events");

const rootResolver = {
    ...authResolver,
    ...eventResolver,
}

module.exports = rootResolver;