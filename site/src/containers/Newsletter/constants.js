import gql from "graphql-tag";

export const ADD_NEWSLETTER_EMAIL = gql`
  mutation CreateNewsletterEmail($email: String!) {
    createNewsletterEmail(email: $email) {
      _id
      email
    }
  }
`;