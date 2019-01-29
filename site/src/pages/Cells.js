import React, { Component } from 'react';
import CellsList from "../components/Cells/CellsList/CellsList";

import { Grid } from "react-bootstrap";

export class CellsPage extends Component {
    state = {
        cells: [
            {
                _id: "1",
                leader: "Teresa Leyva Huizar",
                address: { _id: "1", street: "Dalias B y 35", exteriorNumber: 3500, city: "San Luis" },
                phone: "016535387142",
                date: "2019-01-29T17:25:26.872Z"
            },
            {
                _id: "2",
                leader: "Teresa Leyva Huizar",
                address: { _id: "1", street: "Dalias B y 35", exteriorNumber: 3500, city: "San Luis" },
                phone: "016535387142",
                date: "2019-01-29T17:25:26.872Z"
            },
            {
                _id: "3",
                leader: "Teresa Leyva Huizar",
                address: { _id: "1", street: "Dalias B y 35", exteriorNumber: 3500, city: "San Luis" },
                phone: "016535387142",
                date: "2019-01-29T17:25:26.872Z"
            },
            {
                _id: "4",
                leader: "Teresa Leyva Huizar",
                address: { _id: "1", street: "Dalias B y 35", exteriorNumber: 3500, city: "San Luis" },
                phone: "016535387142",
                date: "2019-01-29T17:25:26.872Z"
            }
        ]
    }
    render() {
        return (
            <Grid>
                <h1>Encuentra tu grupo</h1>
                <CellsList cells={this.state.cells}></CellsList>
                <h1>Mapita</h1>
            </Grid>
        )
    }
}

export default CellsPage;
