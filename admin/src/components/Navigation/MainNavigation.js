import React, { Component } from "react";

import MainAppBar from "./MainAppBar/MainAppBar";
import MainDrawer from "./MainDrawer/MainDrawer";

import "./MainNavigation.css";

export class MainNavigation extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    return (
      <React.Fragment>
        <MainAppBar
          title={this.props.title}
          onClick={this.handleDrawerToggle}
        />
        <MainDrawer
          toggleDrawer={this.handleDrawerToggle}
          open={this.state.mobileOpen}
        />
      </React.Fragment>
    );
  }
}

export default MainNavigation;
