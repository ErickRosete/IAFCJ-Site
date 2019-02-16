import gql from "graphql-tag";

export const GET_CELL = gql`
  query Cell($id: ID!) {
    cell(id: $id) {
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

export const ADD_CELL = gql`
  mutation CreateCell(
    $leader: String
    $phone: String
    $date: String
    $address: String
    $googlemaps: String
    $lat: Float
    $lng: Float
  ) {
    createCell(
      cellInput: {
        leader: $leader
        phone: $phone
        date: $date
        address: $address
        googlemaps: $googlemaps
        lat: $lat
        lng: $lng
      }
    ) {
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

export const EDIT_CELL = gql`
  mutation UpdateCell(
    $id: ID!
    $leader: String
    $phone: String
    $date: String
    $address: String
    $googlemaps: String
    $lat: Float
    $lng: Float
  ) {
    updateCell(
      id: $id
      cellInput: {
        leader: $leader
        phone: $phone
        date: $date
        address: $address
        googlemaps: $googlemaps
        lat: $lat
        lng: $lng
      }
    ) {
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

export const DELETE_CELL = gql`
  mutation DeleteCell($id: ID!) {
    deleteCell(id: $id) {
      _id
    }
  }
`;

//CSS
export const styles = theme => ({
  cells: {
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
