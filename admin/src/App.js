import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import MainNavigation from "./components/Navigation/MainNavigation";

import AuthPage from "./pages/Auth/Auth";
import BlogsPage from "./pages/Blogs/Blogs";
import CelulasPage from "./pages/Celulas/Celulas";
import EventsPage from "./pages/Events/Events";
import NewsletterPage from "./pages/Newsletter/Newsletter";
import OrganigramaPage from "./pages/Organigrama/Organigrama";
import VideosPage from "./pages/Videos/Videos";

import AuthContext from "./context/auth-context";
import "./App.css";

class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userId: this.state.userId,
            login: this.login,
            logout: this.logout
          }}
        >
          <main className="main-content">
            {this.state.token ? (
              <React.Fragment>
                <MainNavigation />
                <Switch>
                  <Route path="/blogs" component={BlogsPage} />
                  <Route path="/celulas" component={CelulasPage} />
                  <Route path="/events" component={EventsPage} />
                  <Route path="/newsletter" component={NewsletterPage} />
                  <Route path="/organigrama" component={OrganigramaPage} />
                  <Route path="/videos" component={VideosPage} />
                  <Redirect to="/events" exact />
                </Switch>
              </React.Fragment>
            ) : (
              <Switch>
                <Route path="/auth" component={AuthPage} />
                <Redirect to="/auth" exact />
              </Switch>
            )}
          </main>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
