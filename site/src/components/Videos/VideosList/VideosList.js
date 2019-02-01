import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

import Video from './Video/Video';
import "./VideosList.css"

const VideosList = (props) => {
    return (
        <div className="videos__list">
            <Container>
                <Row>
                    {props.videos.map(video => {
                        return (
                            <Col className="videos__list-col" key={video._id} xs={12} md={6}>
                                <Video video={video} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default VideosList
