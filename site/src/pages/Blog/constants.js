import gql from "graphql-tag";

export const GET_BLOGENTRY = gql`
  query BlogEntry($id: ID!) {
    blogEntry(id: $id) {
      _id
      title
      imageLink
      subtitle
      shortDescription
      description
    }
  }
`;

export const GET_BLOG = gql`
  {
    blog {
      _id
      title
      subtitle
      imageLink
    }
  }
`;