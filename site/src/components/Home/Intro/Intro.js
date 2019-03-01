import React from "react";
import Button from "react-bootstrap/Button";
import { HashLink as Link } from "react-router-hash-link";
import Query from "react-apollo/Query";
import { GET_INTRO } from "./constants";
import Spinner from "../../Spinner/Spinner";

import logobgw1000w from "../../../assets/images/logos/logo-bgw-1000w.png";
import logobgw500w from "../../../assets/images/logos/logo-bgw-500w.png";
import logobgw250w from "../../../assets/images/logos/logo-bgw-250w.png";
import logobgw120w from "../../../assets/images/logos/logo-bgw-120w.png";

import "./Intro.css";

const intro = () => {
  return (
    <Query query={GET_INTRO}>
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) return <p>Error :(</p>;

        const attentionSchedule = data.intro.attentionSchedule.split("\n");
        return (
          <div className="home__intro">
            <div className="home__intro-container">
              <img
                className="home__intro-main"
                src={data.intro.imageLink}
                alt="main-bg"
              />
              <div className="home__intro-cover" />
              <img
                className="home__intro-logo"
                src={logobgw500w}
                srcSet={`${logobgw120w} 120w, ${logobgw250w} 250w, ${logobgw500w} 500w, ${logobgw1000w} 1000w`}
                alt="main-logo"
              />
              <div className="home__intro-text">
                <h1 className="home__intro-title">
                  Tenemos un lugar reservado{" "}
                  <div className="text-white">para tí</div>
                </h1>
                <div className="home__intro-time">
                  {attentionSchedule.map(day => {
                    const dayArray = day.split(" ");
                    return (
                      <h2 key={day}>
                        {dayArray.splice(0, 1)}{" "}
                        <div className="text-white">{dayArray.join(" ")}</div>
                      </h2>
                    );
                  })}
                </div>
                <div className="home__intro-action-bar">
                  <Link smooth to="/inicio#ubicacion">
                    <Button variant="primary">
                      <h3>Visítanos</h3>
                    </Button>
                  </Link>
                  <Link to="/nuevo">
                    <Button variant="primary">
                      <h3>Soy nuevo</h3>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default intro;
