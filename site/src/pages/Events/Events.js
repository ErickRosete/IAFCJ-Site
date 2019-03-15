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

/*Calendar*/
import CalendarView from "../../components/Events/CalendarView/CalendarView";

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
              /*Fetch events */
              
              let ev = []
              data.events.map (event=>{
                ev.push({
                  id:event._id,
                  title:event.title,
                  start:new Date(event.startDate),
                  end: new Date(event.endDate),
                  desc: event.shortDescription,
                  selectable:true,
                });
              })
/*
              let ev=[
                {
                  id: 'ewrijiw0133',
                  title: 'All Day Event very long title',
                  allDay: true,
                  start: new Date(2019, 3, 0),
                  end: new Date(2019, 3, 1),
                },
                {
                  id: 1,
                  title: 'Long Event',
                  start: new Date(2019, 3, 7),
                  end: new Date(2019, 3, 10),
                },
              ]*/

              console.log(ev);
              /*show events */
              return (
                <div className= "calendar-container">
                  <CalendarView events= {ev} />
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

/*<Row>
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
*/

export default EventsPage;
