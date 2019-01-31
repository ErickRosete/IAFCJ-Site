import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import CellsPage from "./pages/Cells";
import EventsPage from "./pages/Events";
import BlogPage from "./pages/Blog/Blog";
import BlogEntryPage from "./pages/Blog/BlogEntry/BlogEntry"
import VideosPage from "./pages/Videos";
import AboutPage from "./pages/About";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

class App extends Component {
  state = {
    navbarColor: "black",
  };

  changeNavbarColorHandler = (color) => {
    this.setState({ navbarColor: color });
  }

  render() {
    library.add([faFacebook, faLinkedin, faHome, faChevronLeft]);
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation navbarColor={this.state.navbarColor} />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/inicio" exact />
              <Route path="/inicio"
                render={(props) => <HomePage {...props}
                  currentNavbarColor={this.state.navbarColor}
                  changeNavbarColor={this.changeNavbarColorHandler} />} />
              <Route path="/encuentra" component={CellsPage} />
              <Route path="/eventos" component={EventsPage} />
              <Route path="/blog" component={BlogPage} exact />
              <Route path="/blog/:id" component={BlogEntryPage} />
              <Route path="/videos" component={VideosPage} />
              <Route path="/conocenos" component={AboutPage} />
            </Switch>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
