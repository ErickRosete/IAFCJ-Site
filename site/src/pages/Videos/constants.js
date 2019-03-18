import gql from "graphql-tag";

export const GET_VIDEOS = gql`
  {
    videos {
      _id
      name
      description
      link
    }
  }
`;
