import gql from "graphql-tag";

export const GET_CELLS = gql`
  {
    cells {
      _id
      leader
      phone
      date
      address
      googlemaps
      lat
      lng
    }
  }
`;
