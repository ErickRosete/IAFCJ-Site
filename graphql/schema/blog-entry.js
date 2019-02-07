const blogEntryDef = `
    type BlogEntry {
        _id: ID!
        title: String!
        imageLink: String
        subtitle: String
        shortDescription: String
        description: String!
        createdAt: String!
        updatedAt: String!
    }

    input BlogEntryInput{
        title: String
        imageLink: String
        subtitle: String
        shortDescription: String
        description: String
    }
`;

const blogEntryQuery = `
    blog: [BlogEntry!]!
    blogEntry(id: ID!): BlogEntry!
`;

const blogEntryMutation = `
    createBlogEntry(blogEntryInput: BlogEntryInput!): BlogEntry
    updateBlogEntry(id: ID!, blogEntryInput: BlogEntryInput!): BlogEntry
    deleteBlogEntry(id: ID!): BlogEntry
`;

exports.blogEntryDef = blogEntryDef;
exports.blogEntryQuery = blogEntryQuery;
exports.blogEntryMutation = blogEntryMutation;