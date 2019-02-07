const addressDef = `
    type Address{
        _id: ID!
        street: String!
        exteriorNumber: Int!
        city: String!
        country: String!
        zipCode: Int!
    }

    input AddressInput{
        street: String
        exteriorNumber: Int
        city: String
        country: String
        zipCode: Int
    }
`;

const addressQuery = `
    addresses: [Address!]!
    address(id: ID!): Address!
`;

const addressMutation = `
    createAddress(addressInput: AddressInput): Address
    updateAddress(id: ID!,addressInput: AddressInput): Address
    deleteAddress(id: ID!): Address
`;

exports.addressDef = addressDef;
exports.addressQuery = addressQuery;
exports.addressMutation = addressMutation;