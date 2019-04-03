import React, { Component } from "react";
import Newsletter from "../../containers/Newsletter/Newsletter";
import { Helmet } from "react-helmet";
import FeaturedEvent from "../../components/Events/FeaturedEvent/FeaturedEvent";
import Layout from "../../components/Layout/Layout";
import { Query } from "react-apollo";
import { GET_EVENTS, GET_FEATURED_EVENT } from "./constants";
import Spinner from "../../components/Spinner/Spinner";
// import { Container, Col, Row } from "react-bootstrap";
import "./Events.css";

/*Calendar*/
import CalendarView from "../../components/Events/CalendarView/CalendarView";

export class EventsPage extends Component {
  state = {
    modalShow: false,
    selectedEvent: null
  };

  showModal = (event) => {
    this.setState(
      {
        modalShow: true,
        selectedEvent: event
      }
    );
  }
  closeModal = () => this.setState({ modalShow: false });

  render() {
    return (
      <Layout>
        <div className="events">
          <Helmet>
            <title>Eventos - 2da IAFCJ</title>
            <meta
              name="description"
              content="Conoce y participa en nuestros eventos, seguro hay uno para ti."
            />
          </Helmet>
          <h1 className="events__title">Eventos</h1>

          <Query query={GET_FEATURED_EVENT}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error)
                return (
                  <p>
                    Error :( favor de recargar la página, si el error persiste
                    contacte al administrador
                  </p>
                );
              return <FeaturedEvent event={data.featuredEvent} />;
            }}
          </Query>

          <Query query={GET_EVENTS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error)
                return (
                  <p>
                    Error :( favor de recargar la página, si el error persiste
                    contacte al administrador
                  </p>
                );
              /*Fetch events */

              let ev = []
              data.events.forEach(event => {
                ev.push({
                  id: event._id,
                  title: event.title,
                  start: new Date(event.startDate),
                  end: new Date(event.endDate),
                  desc: event.shortDescription,
                  description: event.description,
                  address: event.address,
                  imageLink: event.imageLink,
                  selectable: true,
                });
              })

              // const ev = data.events.map(event => {
              //   return ({
              //     id: event._id,
              //     title: event.title,
              //     start: new Date(event.startDate),
              //     end: new Date(event.endDate),
              //     desc: event.shortDescription,
              //     description: event.description,
              //     address: event.address,
              //     selectable: true,
              //   })
              // })

              return (
                <div className="calendar-container">
                  <CalendarView events={ev}
                    showModal={this.showModal}
                    closeModal={this.closeModal}
                    modalShow={this.state.modalShow}
                    selectedEvent={this.state.selectedEvent} />
                </div>
              );
            }}
          </Query>

          <Newsletter />
        </div>
      </Layout>
    );
  }
}

export default EventsPage;
