import React, { Component } from "react";
import Newsletter from "../containers/Newsletter/Newsletter";
import { Helmet } from "react-helmet";
import FeaturedEvent from "../components/Events/FeaturedEvent/FeaturedEvent";

import "./Events.css";

export class EventsPage extends Component {
  render() {
    return (
      <div className="events">
        <Helmet>
          <title>Eventos - 2da IAFCJ</title>
          <meta
            name="description"
            content="Conoce y participa en nuestros eventos, seguro hay uno para ti."
          />
        </Helmet>
        <h1 className="events__title">Eventos</h1>
        <FeaturedEvent />
        <Newsletter />
      </div>
    );
  }
}

export default EventsPage;
