import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import EventsPage from "./pages/Events";
import BlogPage from "./pages/Blog";
import VideosPage from "./pages/Videos";

import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

class App extends Component {
  render() {
    library.add([faFacebook, faLinkedin, faHome]);
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/inicio" exact />
              <Route path="/inicio" component={HomePage} />
              <Route path="/conocenos" component={AboutPage} />
              <Route path="/eventos" component={EventsPage} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/videos" component={VideosPage} />
            </Switch>
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
