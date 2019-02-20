import React, { Component } from "react";
import CellsList from "../../components/Cells/CellsList/CellsList";

import banner400w from "../../assets/images/Cells/cells-banner-400w.jpg";
import banner800w from "../../assets/images/Cells/cells-banner-800w.jpg";
import banner1620w from "../../assets/images/Cells/cells-banner-1620w.jpg";

import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Map from "../../components/Map/Map";

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
      <Layout>
        <div className="Cells">
          <Helmet>
            <title>Encuentranos! - 2da IAFCJ</title>
            <meta
              name="description"
              content="Descubre donde se encuentra tu célula y forma parte de nuestra Iglesia"
            />
          </Helmet>
          <Banner
            srcSet={`${banner400w} 400w, ${banner800w} 800w, ${banner1620w} 1620w`}
            img={banner800w}
            title="Encuentra el tuyo!"
            subtitle="Todos son bienvenidos gratuitamente a nuestros grupos celulares"
          />
          <CellsList cells={this.state.cells} />
          <Map />
        </div>
      </Layout>
    );
  }
}

export default CellsPage;
