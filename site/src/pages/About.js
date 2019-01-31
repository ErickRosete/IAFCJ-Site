import React, { Component } from 'react'
import Banner from "../components/Banner/Banner"

import BannerImg from "../assets/images/About/banner-img.jpg"

export class AboutPage extends Component {
  render() {
    return (
      <div>
          <Banner bigTitle img={BannerImg} title="Quiénes Somos"></Banner>
          about
        
      </div>
    )
  }
}

export default AboutPage
