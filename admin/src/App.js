import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";

import MainNavigation from "./components/Navigation/MainNavigation";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// import AuthPage from "./pages/Auth/Auth";
import BlogPage from "./pages/Blog/Blog";
import BlogFormPage from "./pages/Blog/BlogForm";
import CelulasPage from "./pages/Celulas/Celulas";
import EventsPage from "./pages/Events/Events";
import NewsletterPage from "./pages/Newsletter/Newsletter";
import OrganigramaPage from "./pages/Organigrama/Organigrama";
import VideosPage from "./pages/Videos/Videos";

import AuthContext from "./context/auth-context";
import "./App.css";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

//   {
//   palette: {
//     primary: purple,
//     secondary: green,
//   },
//   status: {
//     danger: 'orange',
//   },
// }

class App extends Component {
  state = {
    token: null,
    userId: null,
    title: "IAFCJ"
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  changeTitle = title => {
    console.log(title);
    this.setState({ title });
  };

  render() {
    const theme = createMuiTheme();
    const { classes } = this.props;

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
          <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
              <CssBaseline />
              <MainNavigation title={this.state.title} />

              <main className={classes.content}>
                <div className={classes.toolbar} />

                {/* {this.state.token ? ( */}
                <React.Fragment>
                  <Switch>
                    <Route
                      path="/blog/agregar"
                      render={props => (
                        <BlogFormPage
                          {...props}
                          title={this.state.title}
                          changeTitle={this.changeTitle}
                        />
                      )}
                    />
                    <Route
                      path="/blog/editar/:id"
                      render={props => (
                        <BlogFormPage
                          {...props}
                          title={this.state.title}
                          changeTitle={this.changeTitle}
                        />
                      )}
                    />
                    <Route
                      path="/blog"
                      render={props => (
                        <BlogPage
                          {...props}
                          title={this.state.title}
                          changeTitle={this.changeTitle}
                        />
                      )}
                    />
                    <Route path="/celulas" component={CelulasPage} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/newsletter" component={NewsletterPage} />
                    <Route path="/organigrama" component={OrganigramaPage} />
                    <Route path="/videos" component={VideosPage} />
                    <Redirect to="/events" exact />
                  </Switch>
                </React.Fragment>
                {/* ) : (
              <Switch>
                <Route path="/auth" component={AuthPage} />
                <Redirect to="/auth" exact />
              </Switch>
            )} */}
              </main>
            </div>
          </MuiThemeProvider>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
