import React, { Component } from "react";
import VideosList from "../../components/Videos/VideosList/VideosList";
import Layout from "../../components/Layout/Layout";
import { Helmet } from "react-helmet";
import { Query } from "react-apollo";
import { GET_VIDEOS } from "./constants";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "../../components/Spinner/Spinner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Videos.css";

export class VideosPage extends Component {
  state = {
    filter: ""
  };

  changeFilterHandler = event => {
    this.setState({ filter: event.target.value });
  };

  filterVideos = videos => {
    let filteredVideos = videos;
    if (this.state.filter) {
      const filter = this.state.filter.toUpperCase();
      filteredVideos = videos.filter(
        video =>
          video.name.toUpperCase().includes(filter) ||
          video.link.toUpperCase().includes(filter) ||
          video.description.toUpperCase().includes(filter)
      );
    }
    return filteredVideos;
  };

  render() {
    return (
      <Layout>
        <div className="videos">
          <Helmet>
            <title>Videos - IAFCJ</title>
            <meta
              name="description"
              content="Mira nuestros videos y conoce más de nuestra iglesia y Jesús."
            />
          </Helmet>

          <h1 className="videos__title">Videos de 2da IAFCJ</h1>

          <Form style={{ maxWidth: "90%", margin: "auto", marginTop: "2rem" }}>
            <Form.Group controlId="Buscador">
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="icon">
                    <FontAwesomeIcon
                      icon="search"
                      size="lg"
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  onChange={this.changeFilterHandler}
                  value={this.state.filter}
                  type="text"
                  placeholder="buscar video..."
                />
              </InputGroup>
            </Form.Group>
          </Form>

          <Query query={GET_VIDEOS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;

              const filteredVideos = this.filterVideos(data.videos);
              return (<VideosList videos={filteredVideos} />);
            }}
          </Query>
        </div>
      </Layout>
    );
  }
}

export default VideosPage;
