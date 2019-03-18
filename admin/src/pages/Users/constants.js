import gql from "graphql-tag";

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      _id
      email
      password
      role
    }
  }
`;

export const GET_USERS = gql`
  {
    users {
      _id
      email
      password
      role
    }
  }
`;


export const ADD_USER = gql`
  mutation CreateUser($email: String, $password: String, $role: String) {
    createUser(userInput: { email: $email, password: $password, role: $role }) {
      _id
      email
      password
      role
    }
  }
`;

export const EDIT_USER = gql`
  mutation UpdateUser($id: ID!, $email: String, $password: String, $role: String) {
    updateUser(id: $id, userInput: { email: $email, password: $password, role: $role }) {
      _id
      email
      password
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
    }
  }
`;

//CSS
export const styles = theme => ({
  users: {
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
  textfield: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});
