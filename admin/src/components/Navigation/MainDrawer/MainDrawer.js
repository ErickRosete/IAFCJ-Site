import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import EventIcon from "@material-ui/icons/Event";
import { NavLink } from "react-router-dom";

import "./MainDrawer.css";
import logo from "../../../assets/images/landing-page/logo.png";

const TemporaryDrawer = props => {
  const sideLinks = [
    { id: 1, icon: <EventIcon />, text: "Blogs", linkTo: "/blogs" },
    { id: 2, icon: <EventIcon />, text: "Celulas", linkTo: "/celulas" },
    { id: 3, icon: <EventIcon />, text: "Eventos", linkTo: "/events" },
    { id: 4, icon: <EventIcon />, text: "Newsletter", linkTo: "/newsletter" },
    { id: 5, icon: <EventIcon />, text: "Organigrama", linkTo: "/organigrama" },
    { id: 6, icon: <EventIcon />, text: "Videos", linkTo: "/videos" }
  ];

  return (
    <Drawer
      className="drawer"
      open={props.open}
      onClose={props.toggleDrawer.bind(this, false)}
    >
      <NavLink
        to="/"
        className="drawer__title"
        onClick={props.toggleDrawer.bind(this, false)}
        onKeyDown={props.toggleDrawer.bind(this, false)}
      >
        <img height="50" src={logo} alt="IAFCJ" />
        <Typography variant="h6" color="inherit">
          IAFCJ
        </Typography>
      </NavLink>

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
    </Drawer>
  );
};

export default TemporaryDrawer;
