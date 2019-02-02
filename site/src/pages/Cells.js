import React, { Component } from "react";
import CellsList from "../components/Cells/CellsList/CellsList";

import bannerImg from "../assets/images/Cells/banner-img.jpg";
import Banner from "../components/Banner/Banner";
import Map from "../components/Map/Map";

import { Helmet } from "react-helmet";

export class CellsPage extends Component {
  state = {
    cells: [
      {
        _id: "1",
        leader: "Teresa Leyva Huizar",
        address: {
          _id: "1",
          street: "Dalias B y 35",
          exteriorNumber: 3500,
          city: "San Luis"
        },
        phone: "016535387142",
        date: "2019-01-29T17:25:26.872Z"
      },
      {
        _id: "2",
        leader: "Teresa Leyva Huizar",
        address: {
          _id: "1",
          street: "Dalias B y 35",
          exteriorNumber: 3500,
          city: "San Luis"
        },
        phone: "016535387142",
        date: "2019-01-29T17:25:26.872Z"
      },
      {
        _id: "3",
        leader: "Teresa Leyva Huizar",
        address: {
          _id: "1",
          street: "Dalias B y 35",
          exteriorNumber: 3500,
          city: "San Luis"
        },
        phone: "016535387142",
        date: "2019-01-29T17:25:26.872Z"
      },
      {
        _id: "4",
        leader: "Teresa Leyva Huizar",
        address: {
          _id: "1",
          street: "Dalias B y 35",
          exteriorNumber: 3500,
          city: "San Luis"
        },
        phone: "016535387142",
        date: "2019-01-29T17:25:26.872Z"
      },
      {
        _id: "5",
        leader: "Teresa Leyva Huizar",
        address: {
          _id: "1",
          street: "Dalias B y 35",
          exteriorNumber: 3500,
          city: "San Luis"
        },
        phone: "016535387142",
        date: "2019-01-29T17:25:26.872Z"
      }
    ]
  };
  render() {
    return (
      <div className="Cells">
        <Helmet>
          <title>Encuentranos! - 2da IAFCJ</title>
          <meta
            name="description"
            content="Descubre donde se encuentra tu célula y forma parte de nuestra Iglesia"
          />
        </Helmet>
        <Banner
          img={bannerImg}
          title="Encuentra el tuyo!"
          subtitle="Todos son bienvenidos gratuitamente a nuestros grupos celulares"
        />
        <CellsList cells={this.state.cells} />
        <Map />
      </div>
    );
  }
}

export default CellsPage;
