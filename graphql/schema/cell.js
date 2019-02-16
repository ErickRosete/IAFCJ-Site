const cellDef = `
    type Cell {
        _id: ID!
        leader: String!
        phone: String!
        date: String!
        address: String
        googlemaps: String
        lat: Float
        lng: Float
    }

    input CellInput{
        leader: String
        phone: String
        date: String
        address: String
        googlemaps: String
        lat: Float
        lng: Float
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