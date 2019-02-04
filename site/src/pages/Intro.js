import React, { Component } from "react";
import Banner from "../components/Banner/Banner";
import BannerImg from "../assets/images/Intro/intro-banner.jpg";
import Helmet from "react-helmet";
import Contact from "../containers/Contact/Contact";
import ReactPlayer from "react-player";
import poster from "../assets/images/landing-page/logo.png";
import introVideo from "../assets/videos/main.mp4";
import Link from "react-router-dom/Link";

import "./intro.css";

export class IntroPage extends Component {
  render() {
    return (
      <div className="Intro">
        <Helmet>
          <title>Nuevos miembros - 2da IAFCJ</title>
          <meta
            name="description"
            content="Bienvenido, conoce e integrate a nuestra iglesia"
          />
        </Helmet>
        <Banner bigTitle img={BannerImg} title="Bienvenido!" />

        <h2 className="intro__first-text">
          Seguramente tendrás muchas dudas... no te preocupes! estamos mas que
          contentos de ayudarte a responderlas.
        </h2>
        <div className="intro__video-cont">
          <div className="intro__video">
            <ReactPlayer
              url={introVideo}
              config={{
                file: {
                  attributes: { poster: poster }
                }
              }}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
        <div className="intro__faq">
          <h1 className="intro__faq-title">Preguntas frecuentes</h1>
          <div className="intro__faq-cont">
            <h2 className="intro__faq-question">
              ¿Qué son los grupos celulares?
            </h2>
            <p className="intro__faq-answer">
              Nuestra organizacion ofrece grupos celulares donde podrás....
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p className="intro__faq-note">
              Todos son bienvenidos gratuitamente a nuestros grupos celulares,
              <Link to="/encuentra"> encuentra el tuyo!</Link>
            </p>
            <h2 className="intro__faq-question">
              ¿Qué debo esperar de mi visita?
            </h2>
            <p className="intro__faq-answer">
              No nos importa tu vestimenta, de donde vienes, el color de tu
              pelo, tus intereses políticos, el color de tu piel, ni cuantos
              tatuajes tienes. Somos una iglesia llena de gente imperfecta que
              desea conocer a -- y servir a los demás juntos. Independientemente
              de tu historia, queremos conocerte.
            </p>
            <p className="intro__faq-note">Te esperamos!</p>

            <h2 className="intro__faq-question">¿Cuándo son los servicios?</h2>
            <p className="intro__faq-answer">
              Puedes asistir a nuestros servicios en los siguientes horarios:
              <div className="intro__faq-horarios">
                <p className="m-0">
                  <span className="font-weight-bold">Viernes: </span> 7:30 pm
                </p>
                <p className="m-0">
                  <span className="font-weight-bold"> Domingos: </span> 2:00pm
                </p>
                <p className="m-0">
                  <span className="font-weight-bold">Ubicación: </span> Avenida
                  Colima y 1ra. San Luis Rio Colorado, Son.
                </p>
              </div>
            </p>
            <p className="intro__faq-note">
              ¿Más dudas? Aquí puedes contactarnos!
            </p>
          </div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default IntroPage;
