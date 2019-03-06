const eventDef = `
    type Event {
        _id: ID!
        title: String!
        imageLink: String
        shortDescription: String
        description: String!
        startDate: String!
        endDate: String!
        address: String
        googlemaps: String
        lat: Float
        lng: Float
        createdAt: String!
        updatedAt: String!
    }

    input EventInput{
        title: String
        imageLink: String
        shortDescription: String
        description: String
        startDate: String
        endDate: String
        address: String
        googlemaps: String
        lat: Float
        lng: Float
    }
`;

const eventQuery = `
    events: [Event!]!
    event(id: ID!): Event!
    featuredEvent: Event
`;

const eventMutation = `
    createEvent(eventInput: EventInput): Event
    updateEvent(id: ID!, eventInput: EventInput): Event
    deleteEvent(id: ID!): Event
`;

exports.eventDef = eventDef;
exports.eventQuery = eventQuery;
exports.eventMutation = eventMutation;