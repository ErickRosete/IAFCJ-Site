import React, { Component } from 'react';
import Banner from "../components/Banner/Banner";
import BannerImg from "../assets/images/About/banner-img.jpg";
import "./About.css";

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <Banner bigTitle img={BannerImg} title="Quiénes Somos"></Banner>
        <div className="about__summary">
          <p className="about__summary-par1">
            Somos una congregación de 7 iglesias ubicadas en san luis rio colorado comprometidas con ayudar a quienes lo necesiten "Eramos gente que andaba en la oscuridad... hasta que hubo esperanza, hubo fe, hubo la promesa del Salvador. Dios amó tanto que nos envió a su único hijo "</p>
          <p className="about__summary-par2">
            ... hasta que hubo esperanza, hubo fe, hubo la promesa del Salvador. Dios amó tanto que nos envió a su único hijo "</p>
        </div>
        <hr className="about__divider"></hr>
      </div>
    )
  }
}

export default AboutPage
