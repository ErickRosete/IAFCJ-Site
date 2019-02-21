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

export const EDIT_NETWORK = gql`
  mutation UpdateNetwork(
    $id: ID!
    $name: String
    $leader: String
    $imageLink: String
  ) {
    updateNetwork(
      id: $id
      networkInput: { name: $name, leader: $leader, imageLink: $imageLink }
    ) {
      _id
      name
      leader
      imageLink
    }
  }
`;

//CSS
export const styles = theme => ({
  networks: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing.unit
  }
});
