import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Banner = props => {
  const titleClasses = [];
  const subtitleClasses = [];
  subtitleClasses.push("banner__subtitle");
  titleClasses.push("banner__title");
  if (props.white) {
    titleClasses.push("text-white");
  }
  if (props.bigTitle) {
    titleClasses.push("big-title");
  }
  if (props.smTitle) {
    titleClasses.push("sm-title");
  }
  if (props.subtitle) {
    titleClasses.push("banner__bottom");
    subtitleClasses.push("banner__top");
  } else {
    titleClasses.push("banner__center");
    subtitleClasses.push("d-none");
  }

  return (
    <div className="banner">
      <img
        src={props.img}
        srcSet={props.srcSet}
        className="banner__img"
        alt="banner"
      />
      {props.subtitle && (
        <h2 className={subtitleClasses.join(" ")}>{props.subtitle}</h2>
      )}
      <h1 className={titleClasses.join(" ")}>{props.title}</h1>
      <div className="banner__cover" />
      {props.returnAddress && (
        <Link className="banner__return" to={props.returnAddress}>
          <FontAwesomeIcon icon="chevron-left" size="2x" /> Regresar
        </Link>
      )}
    </div>
  );
};

export default Banner;
