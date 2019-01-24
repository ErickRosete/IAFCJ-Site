import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import EventsPage from "./pages/Events"
import BlogPage from "./pages/Blog"
import VideosPage from "./pages/Videos"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/inicio" exact></Redirect>
              <Route path="/inicio" component={HomePage}></Route>
              <Route path="/conocenos" component={AboutPage}></Route>
              <Route path="/eventos" component={EventsPage}></Route>
              <Route path="/blog" component={BlogPage}></Route>
              <Route path="/videos" component={VideosPage}></Route>
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
