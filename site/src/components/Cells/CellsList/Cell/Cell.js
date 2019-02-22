import React from "react";
import "./Cell.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink as Link } from "react-router-hash-link";

const Cell = props => {
  const coords = { lat: props.cell.lat, lng: props.cell.lng };
  return (
    <Link to="#map" onClick={props.changeCoords.bind(this, coords)}>
      <div className="cells__cell-item">
        <div className="cells__cell-item-icon-container">
          <FontAwesomeIcon icon="map-marker-alt" size="2x" />
        </div>

        <div className="cells__info">
          <p>
            <label>Lider:</label>
            <span className="cells__cell-item-leader">{props.cell.leader}</span>
          </p>
          <p>
            <label>Ubicación:</label>
            <span>{props.cell.address}</span>
          </p>
          <p>
            <label>Teléfono:</label>
            <span>{props.cell.phone}</span>
          </p>
        </div>

        <div className="cells__cell-item-date-container">
          <p>{props.cell.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cell;
