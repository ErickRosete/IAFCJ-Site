import React from "react";
import "./EventItem.css";

const eventItem = props => {
  return (
    <li className="event__list-item">
      <div>
        <h1>{props.event.title}</h1>
        <h2>{new Date(props.event.date).toLocaleDateString()}</h2>
      </div>
      <div>
        <button
          className="btn"
          onClick={props.onDetail.bind(this, props.event._id)}
        >
          View Details
        </button>
      </div>
    </li>
  );
};

export default eventItem;
