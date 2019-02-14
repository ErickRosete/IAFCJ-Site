const styles = theme => ({
    textfield: {
      margin: theme.spacing.unit
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgContainer: {
      display: 'flex',
      maxWidth: '35vw',
      overflowX: 'auto',
      overflowY: 'hidden'
    },
    img: {
      margin: theme.spacing.unit
    },
    wrapper: {
      margin: "auto"
    },
    editor: {
      border: "1px solid lightgray",
      minHeight: "40vh"
    },
    button: {
      margin: theme.spacing.unit
    },
    input: {
      display: "none"
    }
  });
  
  export default styles;
  