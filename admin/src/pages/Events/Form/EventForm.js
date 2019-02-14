import React, { Component } from "react";
import Form from "../../../containers/Events/Form";
import Redirect from "react-router-dom/Redirect";
import Spinner from "../../../components/Spinner/Spinner";
import Layout from "../../../containers/Layout/Layout";
import { Query, Mutation } from "react-apollo";

import {
  GET_EVENTS, GET_EVENT,
  EDIT_EVENT, ADD_EVENT
} from "../constants";

class EventFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      return: false
    };
  }

  render() {
    return (
      <Layout
        title={this.props.match.params.id ? "Editar evento" : "Añadir evento"}
      >

        {this.state.return && <Redirect push to="/events"></Redirect>}

        {this.props.match.params.id ? (
          // Edit
          <Query query={GET_EVENT} variables={{ id: this.props.match.params.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :( recarga la página!</p>;
              return (
                <Mutation
                  mutation={EDIT_EVENT}
                  update={(cache, { data: { updateEvent } }) => {
                    const { events } = cache.readQuery({
                      query: GET_EVENTS
                    });
                    const editedEventIndex = events.findIndex(
                      event => event._id === updateEvent._id
                    );
                    events[editedEventIndex] = updateEvent;
                    cache.writeQuery({
                      query: GET_EVENTS,
                      data: { events }
                    });
                  }}
                >
                  {updateEvent => (
                    <Form
                      event={data.event}
                      onSubmit={event => {
                        updateEvent({
                          variables: { ...event }
                        });
                        this.setState({ return: true })
                      }}
                    />
                  )}
                </Mutation>
              );
            }}
          </Query>
        ) : (
            // ADD
            <Mutation
              mutation={ADD_EVENT}
              update={(cache, { data: { createEvent } }) => {
                const { events } = cache.readQuery({ query: GET_EVENTS });
                events.push(createEvent);
                cache.writeQuery({
                  query: GET_EVENTS,
                  data: { events }
                });
              }}
            >
              {createEvent => (
                <Form
                  onSubmit={event => {
                    createEvent({
                      variables: { ...event }
                    });
                    this.setState({ return: true })
                  }}
                />
              )}
            </Mutation>
          )}
      </Layout>
    );
  }
}

export default EventFormPage;
