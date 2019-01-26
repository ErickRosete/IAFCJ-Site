import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

import AuthContext from "../../../context/auth-context";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ButtonAppBar = props => {
  const { classes } = props;
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={props.onClick.bind(this, true)}
                >
                  <MenuIcon />
                </IconButton>

                <NavLink
                  to="/"
                  style={{ color: "white", textDecoration: "none" }}
                  className={classes.grow}
                >
                  <Typography variant="h6" color="inherit">
                    IAFCJ
                  </Typography>
                </NavLink>

                <Button color="inherit" onClick={context.logout}>
                  Logout
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
