import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <span>
        ©2019 Developed by <a href="ErickRosete.com">Erick Rosete Beas</a>
      </span>
      <div className="social-networks">
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
        </a>
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg"  />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
