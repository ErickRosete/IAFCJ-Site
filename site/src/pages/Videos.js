import React, { Component } from "react";
import VideosList from "../components/Videos/VideosList/VideosList";
import { Helmet } from "react-helmet";

import "./Videos.css";

export class VideosPage extends Component {
  state = {
    videos: [
      {
        _id: "1",
        name: "Celula Unida Juvenil 2da Iglesia",
        link:
          "https://www.facebook.com/750368241819032/videos/2291895047752800/",
        description: "Parque Benito Juarez. San Luis MX"
      },
      {
        _id: "2",
        name: "Predica Domingo 27, 2019",
        link:
          "https://www.facebook.com/750368241819032/videos/236603740563814/",
        description: "Pastor Jaime Martinez"
      },
      {
        _id: "3",
        name: "Servicio Domingo 27 2019",
        link:
          "https://www.facebook.com/750368241819032/videos/543284446156303/",
        description: ""
      },
      {
        _id: "4",
        name: "2da Iglesia Apostolica Servicio Viernes 🙌⛪❤",
        link:
          "https://www.facebook.com/750368241819032/videos/568995076907919/",
        description: ""
      }
    ]
  };
  render() {
    return (
      <div className="videos">
        <Helmet>
          <title>Videos - IAFCJ</title>
          <meta
            name="description"
            content="Mira nuestros videos y conoce más de nuestra iglesia y Jesús."
          />
        </Helmet>
        <h1 className="videos__title">Videos de 2da IAFCJ</h1>
        <VideosList videos={this.state.videos} />
      </div>
    );
  }
}

export default VideosPage;
