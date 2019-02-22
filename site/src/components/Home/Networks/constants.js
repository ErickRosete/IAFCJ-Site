import gql from "graphql-tag";

export const GET_NETWORKS = gql`
  {
    networks {
      _id
      name
      leader
      imageLink
    }
  }
`;