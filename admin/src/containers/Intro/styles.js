const styles = theme => ({
  form: {
    width: "100%",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "70%"
    }
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  textfield: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  buttonCenter: {
    display: "block",
    margin: "auto",
    marginTop: 3 * theme.spacing.unit
  },
  imagefield: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing.unit
  },
  imgContainer: {
    marginLeft: "1rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "2rem"
    }
  },
  image: {
    width: "100%",
    maxWidth: "25rem"
  },
  input: {
    display: "none"
  }
});

export default styles;
