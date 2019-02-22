import Cell from "./Cell/Cell";
import React from "react";
import "./CellsList.css";
import { Container, Row, Col } from "react-bootstrap";

const cellsList = props => {
  const cells = props.cells.map(cell => {
    return (
      <Col className="mb-4" key={cell._id} md={4}>
        <Cell changeCoords={props.changeCoords} cell={cell} />
      </Col>
    );
  });
  return (
    <div className="cells__list">
      <Container>
        <Row>{cells}</Row>
      </Container>
    </div>
  );
};

export default cellsList;
