import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth-context";

const drawerWidth = 241;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  appBarRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

const ButtonAppBar = props => {
  const { classes } = props;
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={props.onClick}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                style={{ color: "white", flexGrow: "1" }}
              >
                {props.title}
              </Typography>

              <Button color="inherit"
                onClick={context.logout}
                style={{ flexShrink: "0" }}>
                <Typography variant="subtitle1" style={{ color: "white" }} >
                  Logout
                </Typography>
              </Button>
            </Toolbar>
          </AppBar>
        );
      }}
    </AuthContext.Consumer>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
