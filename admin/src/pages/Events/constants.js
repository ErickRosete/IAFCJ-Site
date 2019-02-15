import gql from "graphql-tag";

export const GET_EVENT = gql`
  query Event($id: ID!) {
    event(id: $id) {
      _id
      title
      imageLink
      shortDescription
      description
      date
      address 
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
    }
  }
`;

export const ADD_EVENT = gql`
  mutation CreateEvent(
    $title: String
    $imageLink: String
    $shortDescription: String
    $description: String
    $date: String
    $address: String
  ) {
    createEvent(
      eventInput: {
        title: $title
        imageLink: $imageLink
        shortDescription: $shortDescription
        description: $description
        date: $date
        address: $address
      }
    ) {
      _id
      title
      imageLink
      shortDescription
      description
      date
      address
    }
  }
`;

export const EDIT_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!
    $title: String
    $date: String
    $imageLink: String
    $shortDescription: String
    $description: String
    $address: String
  ) {
    updateEvent(
      id: $id
      eventInput: {
        title: $title
        imageLink: $imageLink
        shortDescription: $shortDescription
        description: $description
        date: $date
        address: $address
      }
    ) {
      _id
      title
      imageLink
      shortDescription
      description
      date
      address
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
