import React, { Component } from "react";
import Newsletter from "../../containers/Newsletter/Newsletter";
import { Helmet } from "react-helmet";
import FeaturedEvent from "../../components/Events/FeaturedEvent/FeaturedEvent";
import Layout from "../../components/Layout/Layout";

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
          <FeaturedEvent />
          <Newsletter />
        </div>
      </Layout>
    );
  }
}

export default EventsPage;
