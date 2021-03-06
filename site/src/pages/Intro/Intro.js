import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";
import Helmet from "react-helmet";
import Contact from "../../containers/Contact/Contact";
import ReactPlayer from "react-player";
import { HashLink as Link } from "react-router-hash-link";
import Layout from "../../components/Layout/Layout";

import Query from "react-apollo/Query"
import { GET_INTRO_VIDEO } from "./constants";

import Spinner from "../../components/Spinner/Spinner";
import poster from "../../assets/images/logos/logo-500w.png";
import banner400w from "../../assets/images/Intro/intro-banner-400w.jpg";
import banner800w from "../../assets/images/Intro/intro-banner-800w.jpg";
import banner1620w from "../../assets/images/Intro/intro-banner-1600w.jpg";

import { GET_INTRO } from "../../components/Home/Intro/constants";

import "./intro.css";

export class IntroPage extends Component {
  render() {
    return (
      <Layout>
        <div className="Intro bg-gray">
          <Helmet>
            <title>Nuevos miembros - 2da IAFCJ</title>
            <meta
              name="description"
              content="Bienvenido, conoce e integrate a nuestra iglesia"
            />
          </Helmet>
          <Banner
            srcSet={`${banner400w} 400w, ${banner800w} 800w, ${banner1620w} 1620w`}
            img={banner800w}
            bigTitle
            title="Bienvenido!"
          />
          <h2 className="intro__first-text">
            Seguramente tendrás muchas dudas... <br />
            No te preocupes! estamos mas que contentos de ayudarte a responderlas.
          </h2>

          <Query query={GET_INTRO_VIDEO}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;
              return (
                <div className="intro__video-cont">

                  <div className="intro__video">
                    <ReactPlayer
                      url={data.introVideo.videoLink}
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
                </div>)
            }}
          </Query>

          <div className="intro__faq">
            <h1 className="intro__faq-title">Preguntas frecuentes</h1>
            <div className="intro__faq-cont">
              <h2 className="intro__faq-question">
                ¿Qué son los grupos celulares?
              </h2>
              <p className="intro__faq-answer">
                Nuestra organizacion ofrece grupos celulares donde podrás convivir
                con gente de la comunidad y conocer la palabra de Diós. No importa donde
                te encuentres ni tu disponibilidad de horario, seguro que hay un grupo que
                se ajuste a tus necesidades.
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
                desea conocer a Jesús y servir a los demás juntos.
                Independientemente de tu historia, queremos conocerte.
              </p>
              <p className="intro__faq-note">Te esperamos!</p>

              <h2 className="intro__faq-question">
                ¿Comó recibir información reciente de la iglesia?
              </h2>
              <p className="intro__faq-answer">
                Para recibir la información más actualizada, visita nuestra página y redes sociales,
                si te interesa recibir correos con información reciente también puedes registrarte a nuestro
                <Link smooth to="/blog#newsletter"> Newsletter</Link>
              </p>
              <h2 className="intro__faq-question">
                ¿Cuándo son los servicios?
              </h2>
              <div className="intro__faq-answer">
                Puedes asistir a nuestros servicios en los siguientes horarios:
                <div className="intro__faq-horarios">
                  <Query query={GET_INTRO}>
                    {({ loading, error, data }) => {
                      if (loading) return <Spinner />;
                      if (error) return <p>Error :(</p>;

                      const attentionSchedule = data.intro.attentionSchedule.split("\n");
                      return (
                        attentionSchedule.map(day => {
                          const dayArray = day.split(" ");
                          return (
                            <p className="m-0" key={day}>
                              <span className="font-weight-bold">{dayArray.splice(0, 1)}{" "}</span>{dayArray.join(" ")}
                            </p>
                          );
                        })
                      );
                    }}
                  </Query>
                  <p className="m-0">
                    <span className="font-weight-bold">Ubicación: </span>{" "}
                    Avenida Colima y 1ra. San Luis Rio Colorado, Son.
                  </p>
                </div>
              </div>
              <p className="intro__faq-note">
                ¿Más dudas? Aquí puedes contactarnos!
              </p>
            </div>
          </div>
          <Contact />
        </div>

      </Layout>
    );
  }
}

export default IntroPage;
