import gql from "graphql-tag";

export const GET_EVENT = gql`
  query Event($id: ID!) {
    event(id: $id) {
      _id
      title
      imageLink
      shortDescription
      description
      startDate
      endDate
      address
      googlemaps
      lat
      lng
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
      startDate
      endDate
      address
      googlemaps
      lat
      lng
    }
  }
`;

export const ADD_EVENT = gql`
  mutation CreateEvent(
    $title: String
    $imageLink: String
    $shortDescription: String
    $description: String
    $startDate: String
    $endDate: String
    $address: String
    $googlemaps: String
    $lat: Float
    $lng: Float
  ) {
    createEvent(
      eventInput: {
        title: $title
        imageLink: $imageLink
        shortDescription: $shortDescription
        description: $description
        startDate: $startDate
        endDate: $endDate
        address: $address
        googlemaps: $googlemaps
        lat: $lat
        lng: $lng
      }
    ) {
      _id
      title
      imageLink
      shortDescription
      description
      startDate
      endDate
      address
      googlemaps
      lat
      lng
    }
  }
`;

export const EDIT_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!
    $title: String
    $startDate: String
    $endDate: String
    $imageLink: String
    $shortDescription: String
    $description: String
    $address: String
    $googlemaps: String
    $lat: Float
    $lng: Float
  ) {
    updateEvent(
      id: $id
      eventInput: {
        title: $title
        imageLink: $imageLink
        shortDescription: $shortDescription
        description: $description
        startDate: $startDate
        endDate: $endDate
        address: $address
        googlemaps: $googlemaps
        lat: $lat
        lng: $lng
      }
    ) {
      _id
      title
      imageLink
      shortDescription
      description
      startDate
      endDate
      address
      googlemaps
      lat
      lng
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      _id
    }
  }
`;
