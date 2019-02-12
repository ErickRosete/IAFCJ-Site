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

export const ADD_BLOGENTRY = gql`
  mutation CreateBlogEntry(
    $title: String
    $imageLink: String
    $subtitle: String
    $shortDescription: String
    $description: String
  ) {
    createBlogEntry(
      blogEntryInput: {
        title: $title
        imageLink: $imageLink
        subtitle: $subtitle
        shortDescription: $shortDescription
        description: $description
      }
    ) {
      _id
      title
      imageLink
      subtitle
      shortDescription
      description
    }
  }
`;

export const EDIT_BLOGENTRY = gql`
  mutation UpdateBlogEntry(
    $id: ID!
    $title: String
    $imageLink: String
    $subtitle: String
    $shortDescription: String
    $description: String
  ) {
    updateBlogEntry(
      id: $id
      blogEntryInput: {
        title: $title
        imageLink: $imageLink
        subtitle: $subtitle
        shortDescription: $shortDescription
        description: $description
      }
    ) {
      _id
      title
      imageLink
      subtitle
      shortDescription
      description
    }
  }
`;

export const DELETE_BLOGENTRY = gql`
  mutation DeleteBlogEntry($id: ID!) {
    deleteBlogEntry(id: $id) {
      _id
    }
  }
`;
