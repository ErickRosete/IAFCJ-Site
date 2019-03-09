import React, { Component } from "react";
import CellsList from "../../components/Cells/CellsList/CellsList";
import Spinner from "../../components/Spinner/Spinner";

import banner400w from "../../assets/images/Cells/cells-banner-400w.jpg";
import banner800w from "../../assets/images/Cells/cells-banner-800w.jpg";
import banner1620w from "../../assets/images/Cells/cells-banner-1620w.jpg";

import Layout from "../../components/Layout/Layout";
import Banner from "../../components/Banner/Banner";
import Map from "../../components/Map/Map";
import { Query } from "react-apollo";
import { GET_CELLS } from "./constants";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Helmet } from "react-helmet";

export class CellsPage extends Component {
  state = {
    coords: { lat: 32.442408, lng: -114.743104 }
  };

  changeCoords = coords => {
    this.setState({ coords });
  };

  changeFilterHandler = event => {
    this.setState({ filter: event.target.value });
  };

  filterCells = cells => {
    let filteredCells = cells;
    if (this.state.filter) {
      const filter = this.state.filter.toUpperCase();
      filteredCells = cells.filter(
        cell =>
          cell.leader.toUpperCase().includes(filter) ||
          cell.address.toUpperCase().includes(filter) ||
          cell.date.toUpperCase().includes(filter) ||
          cell.phone.toUpperCase().includes(filter) ||
          cell.googlemaps.toUpperCase().includes(filter)
      );
    }
    return filteredCells;
  };

  render() {
    return (
      <Layout>
        <div className="cells bg-gray">
          <Helmet>
            <title>Encuéntranos! - 2da IAFCJ</title>
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

          <Form style={{ maxWidth: "90%", margin: "auto", marginTop: "2rem" }}>
            <Form.Group controlId="Buscador">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="icon">
                    <FontAwesomeIcon
                      icon="search"
                      size="lg"
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={this.changeFilterHandler}
                  value={this.state.filter}
                  type="text"
                  placeholder="buscar célula..."
                />
              </InputGroup>
            </Form.Group>
          </Form>

          <Query query={GET_CELLS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;

              const filteredCells = this.filterCells(data.cells);
              return (
                <CellsList
                  changeCoords={this.changeCoords}
                  cells={filteredCells}
                />
              );
            }}
          </Query>
          <div style={{ height: "40vh" }}>
            <Map coords={this.state.coords} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default CellsPage;
