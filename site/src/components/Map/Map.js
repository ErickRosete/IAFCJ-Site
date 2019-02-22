import React from "react";
import Marker from "./Marker";
import GoogleMapReact from "google-map-react";

const Map = props => {
  const key = "AIzaSyAn8wwQMrPlwu9WXVaow-05DZ8YblELc34";
  return (
    <div id="map" style={{ height: "100%", minHeight: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
        center={[props.coords.lat, props.coords.lng]}
        defaultZoom={17}
      >
        <Marker {...props.coords} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
