import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Networks.css";
import Spinner from "../../Spinner/Spinner";
import Query from "react-apollo/Query";
import { GET_NETWORKS } from "./constants";

const networks = () => {
  return (
    <div className="home__networks">
      <Query query={GET_NETWORKS}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <p>Error :(</p>;

          return (
            <Container fluid className="home__networks-list">
              <Row>
                {data.networks.map(network => {
                  return (
                    <Col key={network._id} xs={12} md={4} className="p-md-0">
                      <div className="home__networks-leader">
                        <div className="home__networks-img-containers">
                          <img src={network.imageLink} alt="lider" />
                        </div>
                        <div className="home__networks-leader-info">
                          <h3>Lider de {network.name}</h3>
                          <p>{network.leader}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          );
        }}
      </Query>
      <div className="home__networks-info">
        <h2>Líderes de red</h2>
      </div>
    </div>
  );
};

export default networks;
