import Cell from "./Cell/Cell";
import React from 'react'
import { Row, Col } from "react-bootstrap"

const cellsList = (props) => {

    const cells = props.cells.map((cell) => {
        return (
            <Col md={4}>
                <Cell key={cell._id} cell={cell}></Cell>
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

