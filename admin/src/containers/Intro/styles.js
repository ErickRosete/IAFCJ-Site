const styles = theme => ({
  form: {
    width: "100%",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "70%"
    },
    marginBottom: '1rem'
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
  },
  playerWrapper: {
    marginBottom: '0.5rem',
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0
  },
});

export default styles;
