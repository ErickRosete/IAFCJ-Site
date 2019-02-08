const newsletterEmailDef = `
    type NewsletterEmail {
        _id: ID!
        email: String!
    }
`;

const newsletterEmailQuery = `
    newsletterEmails: [NewsletterEmail!]! 
    newsletterEmail(id: ID!): NewsletterEmail!
`;

const newsletterEmailMutation = `
    createNewsletterEmail(email: String!): NewsletterEmail
    deleteNewsletterEmail(id: ID!): NewsletterEmail
`;

exports.newsletterEmailDef = newsletterEmailDef;
exports.newsletterEmailQuery = newsletterEmailQuery;
exports.newsletterEmailMutation = newsletterEmailMutation;