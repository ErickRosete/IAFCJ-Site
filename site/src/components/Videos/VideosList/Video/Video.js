import React from "react";
import ReactPlayer from "react-player";

const Video = props => {
  return (
    <ReactPlayer
      url={props.video.link}
      playsInline
      controls
      width="100%"
      height="100%"
      config={{
        facebook: {
          appId: "654046145053856"
        }
      }}
    />
  );
};

export default Video;
