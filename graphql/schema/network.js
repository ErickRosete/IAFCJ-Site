const networkDef = `
    type Network {
        _id: ID!
        leader: String!
        category: String!
        imageLink: String
    }

    input NetworkInput{
        leader: String
        category: String
        imageLink: String
    }
`;

const networkQuery = `
    networks: [Network!]!
    network(id: ID!): Network!

`;

const networkMutation = `
    createNetwork(networkInput: NetworkInput): Network
    updateNetwork(id: ID!, networkInput: NetworkInput): Network
    deleteNetwork(id: ID!): Network
`;

exports.networkDef = networkDef;
exports.networkQuery = networkQuery;
exports.networkMutation = networkMutation;