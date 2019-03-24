import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./pages/Auth/Auth";
import UsersPage from "./pages/Users/Users"
import BlogPage from "./pages/Blog/Blog";
import BlogFormPage from "./pages/Blog/Form/BlogForm";
import CelulasPage from "./pages/Celulas/Celulas";
import EventsFormPage from "./pages/Events/Form/EventForm";
import EventsPage from "./pages/Events/Events";
import NewsletterPage from "./pages/Newsletter/Newsletter";
import OrganigramaPage from "./pages/Organigrama/Organigrama";
import VideosPage from "./pages/Videos/Videos";
import NetworksPage from "./pages/Networks/Networks";
import IntroPage from "./pages/Intro/Intro";

//Providers and context
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import AuthContext from "./context/auth-context";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}/graphql`
});

class App extends Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem("jwtToken"));
    if (data) {
      this.state = {
        ...data
      };
    } else {
      this.state = {
        token: null,
        userId: null,
        role: null
      };
    }
  }

  login = (token, userId, tokenExpiration, role) => {
    if (role.toLowerCase() === "admin" || role.toLowerCase() === "editor") {
      const authObject = {
        token,
        userId,
        role
      };
      localStorage.setItem("jwtToken", JSON.stringify(authObject));
      this.setState(authObject);
    }
  };

  logout = () => {
    localStorage.setItem("jwtToken", null);
    this.setState({ token: null, userId: null, role: null });
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: red
      },
      typography: {
        useNextVariants: true
      }
    });

    return (
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userId: this.state.userId,
            role: this.state.role,
            login: this.login,
            logout: this.logout
          }}
        >
          <ApolloProvider client={client}>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              {this.state.token ? (
                <React.Fragment>
                  <Switch>
                    <Route path="/intro" component={IntroPage} />
                    <Route path="/networks" component={NetworksPage} />
                    <Route path="/blog/add" component={BlogFormPage} />
                    <Route path="/blog/edit/:id" component={BlogFormPage} />
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/celulas" component={CelulasPage} />
                    <Route path="/events/add" component={EventsFormPage} />
                    <Route path="/events/edit/:id" component={EventsFormPage} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/newsletter" component={NewsletterPage} />
                    <Route path="/organigrama" component={OrganigramaPage} />
                    <Route path="/videos" component={VideosPage} />
                    {this.state.role && this.state.role.toLowerCase() === "admin" && (
                      <Route path="/users" component={UsersPage} />
                    )}
                    <Redirect to="/events" exact />
                  </Switch>
                </React.Fragment>
              ) : (
                <Switch>
                  <Route path="/auth" component={AuthPage} />
                  <Redirect to="/auth" exact />
                </Switch>
              )}
            </MuiThemeProvider>
          </ApolloProvider>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
