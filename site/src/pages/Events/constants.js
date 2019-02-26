import gql from "graphql-tag";

export const GET_FEATURED_EVENT = gql`
  {
    featuredEvent {
      _id
      title
      imageLink
      shortDescription
      description
      date
      address
      googlemaps
      lat
      lng
      createdAt
      updatedAt
    }
  }
`;

export const GET_EVENTS = gql`
  {
    events {
      _id
      title
      imageLink
      shortDescription
      description
      date
      address
      googlemaps
      lat
      lng
      createdAt
      updatedAt
    }
  }
`;
