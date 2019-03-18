import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

import logo500w from "../../../assets/images/logos/logo-500w.png";
import logo250w from "../../../assets/images/logos/logo-250w.png";
import logo120w from "../../../assets/images/logos/logo-120w.png";
import Query from "react-apollo/Query";
import { GET_ABOUT } from "./constants";
import Spinner from "../../Spinner/Spinner";


const about = () => {
  return (
    <Query query={GET_ABOUT}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) return <p>Error :(</p>;
        return (

          <Container fluid className="home__about">
            <Row>
              <Col
                className="home__about-img-container d-none d-sm-block"
                sm={4}
                md={6}
              >
                <img
                  src={data.about.imageLink}
                  alt="about"
                />
              </Col>
              <Col xs={12} sm={8} md={6}>
                <div className="home__about-info">
                  <div className="home__about-title">
                    <img
                      className="home__about-logo"
                      src={logo250w}
                      srcSet={`${logo120w} 120w, ${logo250w} 250w, ${logo500w} 500w`}
                      alt="logo"
                    />
                    <h2>Quiénes Somos</h2>
                  </div>
                  <div className="home__about-text">
                    <p>
                      {data.about.about}
                    </p>
                  </div>
                  <Link to="/conocenos">
                    <Button variant="primary">Conócenos</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>)
      }}
    </Query>
  );
};

export default about;
