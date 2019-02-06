import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import EventIcon from "@material-ui/icons/Event";
import { NavLink } from "react-router-dom";

import "./MainDrawer.css";
import logo from "../../../assets/images/landing-page/logo.png";

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    alignItems: "center",
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  drawerPaper: {
    width: drawerWidth
  }
});

const ResponsiveDrawer = props => {
  const sideLinks = [
    { id: 1, icon: <EventIcon />, text: "Blog", linkTo: "/blog" },
    { id: 2, icon: <EventIcon />, text: "Celulas", linkTo: "/celulas" },
    { id: 3, icon: <EventIcon />, text: "Eventos", linkTo: "/events" },
    { id: 4, icon: <EventIcon />, text: "Newsletter", linkTo: "/newsletter" },
    { id: 5, icon: <EventIcon />, text: "Organigrama", linkTo: "/organigrama" },
    { id: 6, icon: <EventIcon />, text: "Videos", linkTo: "/videos" }
  ];

  const { classes, theme } = props;

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <NavLink to="/" className="drawer__title">
          <img height="50" src={logo} alt="IAFCJ" />
          <Typography variant="h6" color="inherit">
            IAFCJ
          </Typography>
        </NavLink>
      </div>

      <Divider />

      <List className="drawer__list">
        {sideLinks.map(sideLink => (
          <ListItem
            button
            key={sideLink.id}
            component={NavLink}
            to={sideLink.linkTo}
            onClick={props.toggleDrawer.bind(this, false)}
            onKeyDown={props.toggleDrawer.bind(this, false)}
          >
            <ListItemIcon>{sideLink.icon}</ListItemIcon>
            <ListItemText primary={sideLink.text} />
          </ListItem>
        ))}
      </List>

      <Divider />
    </div>
  );
  
  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.open}
          onClose={props.toggleDrawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
