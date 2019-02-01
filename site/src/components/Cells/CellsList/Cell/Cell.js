import React from "react";
import "./Cell.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cell = props => {
  return (
    <div className="cells__cell-item">
      <div className="cells__cell-item-icon-container">
        <FontAwesomeIcon icon="map-marker-alt" size="2x" />
      </div>
      <label>Lider:</label>
      <span className="cells__cell-item-leader">{props.cell.leader}</span>
      <label>Ubicación:</label>
      <span>
        {props.cell.address.street} #{props.cell.address.exteriorNumber}
      </span>
      <label>Teléfono:</label>
      <span>{props.cell.phone}</span>
      <div className="cells__cell-item-date-container">
        <p>{new Date(props.cell.date).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Cell;
