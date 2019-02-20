import React, { Component } from "react";
import Banner from "../../components/Banner/Banner";

import banner400w from "../../assets/images/About/about-banner-400w.jpg";
import banner800w from "../../assets/images/About/about-banner-800w.jpg";
import banner1620w from "../../assets/images/About/about-banner-1620w.jpg";

import Layout from "../../components/Layout/Layout";

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
              Somos una congregación de 7 iglesias ubicadas en san luis rio
              colorado comprometidas con ayudar a quienes lo necesiten "Eramos
              gente que andaba en la oscuridad... hasta que hubo esperanza, hubo
              fe, hubo la promesa del Salvador. Dios amó tanto que nos envió a
              su único hijo "
            </p>
            <p className="about__summary-par2">
              ... hasta que hubo esperanza, hubo fe, hubo la promesa del
              Salvador. Dios amó tanto que nos envió a su único hijo "
            </p>
          </div>
          <hr className="about__divider" />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
