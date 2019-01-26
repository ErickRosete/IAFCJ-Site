import React, { Component } from "react";

import MainAppBar from "./MainAppBar/MainAppBar";
import MainDrawer from "./MainDrawer/MainDrawer";

import "./MainNavigation.css";

export class MainNavigation extends Component {
  state = {
    open: false
  };

  toggleDrawerHandler = boolOpen => {
    this.setState({
      open: boolOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <MainAppBar onClick={this.toggleDrawerHandler} />
        <MainDrawer toggleDrawer={this.toggleDrawerHandler} open={this.state.open} />
      </React.Fragment>
    );
  }
}

export default MainNavigation;
