import Cell from "./Cell/Cell";
import React from 'react'
import { Row, Col } from "react-bootstrap"

const cellsList = (props) => {

    const cells = props.cells.map((cell) => {
        return (
            <Col key={cell._id} md={4}>
                <Cell cell={cell}></Cell>
            </Col>);
    })
    return (
        <div className="Cells__list">
            <Row>
                {cells}
            </Row>
        </div>
    )
}

export default cellsList

