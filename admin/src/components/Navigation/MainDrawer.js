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
import { NavLink } from "react-router-dom";

//Icons
import EventIcon from "@material-ui/icons/Event";
import NetworkIcon from "@material-ui/icons/List";
import CellIcon from "@material-ui/icons/LocationOn";
import BlogIcon from "@material-ui/icons/CollectionsBookmark";
import MemberIcon from "@material-ui/icons/Person";
import VideoIcon from "@material-ui/icons/VideoLibrary";
import NewsletterIcon from "@material-ui/icons/Email";

import logo500w from "../../assets/images/logos/logo-500w.png";
import logo250w from "../../assets/images/logos/logo-250w.png";
import logo120w from "../../assets/images/logos/logo-120w.png";

const drawerWidth = 241;

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
  drawerTitle: {
    color: "white",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    textDecoration: "none"
  },
  drawerPaper: {
    width: drawerWidth
  }
});

const ResponsiveDrawer = props => {
  const sideLinks = [
    { id: 1, icon: <EventIcon />, text: "Eventos", linkTo: "/events" },
    { id: 2, icon: <BlogIcon />, text: "Blog", linkTo: "/blog" },
    { id: 3, icon: <CellIcon />, text: "Celulas", linkTo: "/celulas" },
    { id: 4, icon: <NetworkIcon />, text: "Redes", linkTo: "/networks" },
    {
      id: 5,
      icon: <MemberIcon />,
      text: "Organigrama",
      linkTo: "/organigrama"
    },
    {
      id: 6,
      icon: <NewsletterIcon />,
      text: "Newsletter",
      linkTo: "/newsletter"
    },
    { id: 7, icon: <VideoIcon />, text: "Videos", linkTo: "/videos" }
  ];

  const { classes, theme } = props;
  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <NavLink to="/" className={classes.drawerTitle} exact>
          <img
            height='50'
            style={{ marginRight: "1rem" }}
            src={logo250w}
            srcSet={`${logo120w} 120w, ${logo250w} 250w, ${logo500w} 500w`}
            alt="logo"
          />
          <Typography variant="h6" color="inherit">
            2da IAFCJ
          </Typography>
        </NavLink>
      </div>

      <Divider />

      <List>
        {sideLinks.map(sideLink => (
          <ListItem
            button
            key={sideLink.id}
            component={NavLink}
            to={sideLink.linkTo}
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
