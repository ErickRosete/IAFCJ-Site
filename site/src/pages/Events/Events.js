import React, { Component } from "react";
import Newsletter from "../../containers/Newsletter/Newsletter";
import { Helmet } from "react-helmet";
import FeaturedEvent from "../../components/Events/FeaturedEvent/FeaturedEvent";
import Layout from "../../components/Layout/Layout";
import { Query } from "react-apollo";
import { GET_EVENTS, GET_FEATURED_EVENT } from "./constants";
import Spinner from "../../components/Spinner/Spinner";
import { Container, Col, Row } from "react-bootstrap";
import "./Events.css";

export class EventsPage extends Component {
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
              console.log(data);
              return (
                <Container>
                  <Row>
                    {data.events.map(event => {
                      return (
                        <Col
                          key={event._id}
                          xs={12}
                          md={6}
                          xl={4}
                          className="mb-3"
                        >
                          <div className="event__card">
                            <div className="event__card-img-cont">
                              <img src={event.imageLink} alt={event.title} />
                            </div>
                            <div className="event__card-info">
                              <p>{event.title}</p>
                              <p>{event.shortDescription}</p>
                              <p>{new Date(event.date).toLocaleTimeString()}</p>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
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
