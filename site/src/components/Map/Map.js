import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <div className="google-maps">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://maps.google.com/maps?q=Avenida%20Colima%20y%201ra.%20San%20Luis%20Rio%20Colorado%2C%20Son"
      >
        <iframe
          width="600"
          height="200"
          title="map_network"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Avenida%20Colima%20y%201ra.%20San%20Luis%20Rio%20Colorado%2C%20Son.&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </a>
    </div>
  );
};

export default Map;
