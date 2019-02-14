import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";
import Link from "react-router-dom/Link";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Spinner from "../../components/Spinner/Spinner";
import { DELETE_EVENT, GET_EVENTS } from "./constants";

import CardList from "../../components/Events/CardList/CardList";

//Buttons
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";

//Dialog
import DeleteDialog from "../../components/Dialog/DeleteDialog";
import { Query, Mutation } from "react-apollo";

const styles = theme => ({
  events: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

export class EventsPage extends Component {
  state = {
    openDialog: false,
    selectedId: null
  };

  handleClickOpenDeleteDialog = id => {
    this.setState({
      selectedId: id,
      openDialog: true
    });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout title="Lista de eventos">
        <div className={classes.events}>
          <Query query={GET_EVENTS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :( recarga la pagina!</p>;
              return (
                <CardList
                  events={data.events}
                  openDeleteDialog={this.handleClickOpenDeleteDialog}
                />
              );
            }}
          </Query>

          <Mutation
            mutation={DELETE_EVENT}
            update={(cache, { data: { deleteEvent } }) => {
              const { events } = cache.readQuery({ query: GET_EVENTS });
              const eventIndex = events.findIndex(
                event => event._id === deleteEvent._id
              );
              events.splice(eventIndex, 1);
              cache.writeQuery({
                query: GET_EVENTS,
                data: { events }
              });
            }}
          >
            {deleteEvent => (
              <DeleteDialog
                info="evento"
                open={this.state.openDialog}
                onConfirm={() => {
                  deleteEvent({
                    variables: { id: this.state.selectedId }
                  });
                  this.setState({
                    selectedId: null,
                    openDialog: false
                  });
                }}
                onCancel={this.handleCloseDialog}
              />
            )}
          </Mutation>

          <Link className={classes.fab} to="/events/add">
            <Fab color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </Layout>
    );
  }
}

EventsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventsPage);
