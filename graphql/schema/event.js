const eventDef = `
    type Event {
        _id: ID!
        title: String!
        imageLink: String
        shortDescription: String
        description: String!
        date: String!
        address: String
        lat: String
        lng: String
        createdAt: String!
        updatedAt: String!
    }

    input EventInput{
        title: String
        imageLink: String
        shortDescription: String
        description: String
        date: String
        address: String
        lat: String
        lng: String
    }
`;

const eventQuery = `
    events: [Event!]!
    event(id: ID!): Event!
`;

const eventMutation = `
    createEvent(eventInput: EventInput): Event
    updateEvent(id: ID!, eventInput: EventInput): Event
    deleteEvent(id: ID!): Event
`;

exports.eventDef = eventDef;
exports.eventQuery = eventQuery;
exports.eventMutation = eventMutation;