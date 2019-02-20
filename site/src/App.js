import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home/Home";
import IntroPage from "./pages/Intro/Intro";
import CellsPage from "./pages/Cells/Cells";
import EventsPage from "./pages/Events/Events";
import BlogPage from "./pages/Blog/Blog";
import BlogEntryPage from "./pages/Blog/BlogEntry/BlogEntry";
import VideosPage from "./pages/Videos/Videos";
import AboutPage from "./pages/About/About";

import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChevronLeft,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

class App extends Component {
  render() {
    library.add([
      faFacebook,
      faLinkedin,
      faHome,
      faChevronLeft,
      faMapMarkerAlt
    ]);
    return (
      <BrowserRouter>
        <ScrollToTop>
          <ApolloProvider client={client}>
            <Switch>
              <Redirect from="/" to="/inicio" exact />
              <Route path="/inicio" component={HomePage} />
              <Route path="/nuevo" component={IntroPage} />
              <Route path="/encuentra" component={CellsPage} />
              <Route path="/eventos" component={EventsPage} />
              <Route path="/blog/:id" component={BlogEntryPage} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/videos" component={VideosPage} />
              <Route path="/conocenos" component={AboutPage} />
            </Switch>
            <Footer />
          </ApolloProvider>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
