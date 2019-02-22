import gql from "graphql-tag";

export const GET_MEMBERS = gql`
  {
    members {
      _id
      name
      job
      description
      imageLink
    }
  }
`;
