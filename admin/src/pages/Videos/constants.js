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

export const ADD_VIDEO = gql`
  mutation CreateVideo($name: String, $description: String, $link: String) {
    createVideo(
      videoInput: { name: $name, description: $description, link: $link }
    ) {
      _id
      name
      description
      link
    }
  }
`;

export const EDIT_VIDEO = gql`
  mutation UpdateVideo($id: ID!, $name: String, $description: String, $link: String) {
    updateVideo(id: $id, videoInput: { name: $name, description: $description, link: $link }
    ) {
      _id
      name
      description
      link
    }
  }
`;

export const DELETE_VIDEO = gql`
  mutation DeleteVideo($id: ID!) {
    deleteVideo(id: $id) {
      _id
    }
  }
`;

//CSS
export const styles = theme => ({
  videos: {
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
