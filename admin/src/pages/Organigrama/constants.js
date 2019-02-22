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

export const ADD_MEMBER = gql`
  mutation CreateMember(
    $name: String
    $job: String
    $description: String
    $imageLink: String
  ) {
    createMember(
      memberInput: {
        name: $name
        job: $job
        description: $description
        imageLink: $imageLink
      }
    ) {
      _id
      name
      job
      description
      imageLink
    }
  }
`;

export const EDIT_MEMBER = gql`
  mutation UpdateMember(
    $id: ID!
    $name: String
    $job: String
    $description: String
    $imageLink: String
  ) {
    updateMember(
      id: $id
      memberInput: {
        name: $name
        job: $job
        description: $description
        imageLink: $imageLink
      }
    ) {
      _id
      name
      job
      description
      imageLink
    }
  }
`;

export const DELETE_MEMBER = gql`
  mutation DeleteMember($id: ID!) {
    deleteMember(id: $id) {
      _id
    }
  }
`;

//CSS
export const styles = theme => ({
  members: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  textfield: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});
