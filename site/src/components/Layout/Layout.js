import React from "react";
import MainNavigation from "./MainNavigation/MainNavigation";
import "./Layout.css";

const Layout = props => {
  return (
    <React.Fragment>
      <MainNavigation navbarColor={props.navbarColor} />
      <main className="main-content">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
