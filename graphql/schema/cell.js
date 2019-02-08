const cellDef = `
    type Cell {
        _id: ID!
        leader: String!
        address: Address
        phone: String!
        date: String!
    }

    input CellInput{
        leader: String
        address: AddressInput
        phone: String
        date: String
    }
`;

const cellQuery = `
    cells: [Cell!]!
    cell(id: ID!): Cell!

`;

const cellMutation = `
    createCell(cellInput: CellInput): Cell
    updateCell(id: ID!, cellInput: CellInput): Cell
    deleteCell(id: ID!): Cell
`;

exports.cellDef = cellDef;
exports.cellQuery = cellQuery;
exports.cellMutation = cellMutation;