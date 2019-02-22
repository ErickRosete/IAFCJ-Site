import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";

import banner400w from "../../assets/images/About/about-banner-400w.jpg";
import banner800w from "../../assets/images/About/about-banner-800w.jpg";
import banner1620w from "../../assets/images/About/about-banner-1620w.jpg";

import Layout from "../../components/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import { Query } from "react-apollo";
import { GET_MEMBERS } from "./constants";
import Spinner from "../../components/Spinner/Spinner";

import { Helmet } from "react-helmet";

import "./About.css";

export class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about">
          <Helmet>
            <title>Sobre Nosotros - 2da IAFCJ</title>
            <meta
              name="description"
              content="Conocenos! Somos una iglesia de San Luis Río
            Colorado comprometidas con ayudar a quienes lo necesiten"
            />
          </Helmet>

          <Banner
            bigTitle
            srcSet={`${banner400w} 400w, ${banner800w} 800w, ${banner1620w} 1620w`}
            img={banner800w}
            title="Quiénes Somos"
          />
          <div className="about__summary">
            <p className="about__summary-par1">
              Somos una iglesia sana, vivificada en el Espiritu Santo,
              fundamentada en apóstoles y profetas, siendo la principal piedra
              del ángulo JESUCRISTO mismo, con la mision de llevar el evangelio
              a toda persona, ejercitándonos en el amor y las buenas obras,
              sirviendo a Dios en Santidad.
            </p>
            <p className="about__summary-par2">
              ... hasta que hubo esperanza, hubo fe, hubo la promesa del
              Salvador. Dios amó tanto que nos envió a su único hijo "
            </p>
          </div>
          <hr className="about__divider" />
        </div>
        <Container className="about__members">
          <h2 className="about__members-title">Nuestros miembros</h2>
          <Query query={GET_MEMBERS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;

              return data.members.map(member => {
                return (
                  <Row key={member._id} className="about__member">
                    <Col xs={6} md={4}>
                      <img src={member.imageLink} alt={member.name} />
                    </Col>
                    <Col xs={6} md={8}>
                      <h3 className="mt-0">{member.name}</h3>
                      <h4>{member.job}</h4>
                      <p>{member.description}</p>
                    </Col>
                    <hr className="about__members-divider" />
                  </Row>
                );
              });
            }}
          </Query>
        </Container>
      </Layout>
    );
  }
}

export default AboutPage;
