import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <span>
        ©2019 Developed by <a target="_blank" rel="noopener noreferrer" href="http://ErickRosete.com">Erick Rosete Beas</a>
      </span>
      <div className="social-networks">
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.com//2da-IAFCJ-San-Luis-750368241819032/">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
        </a>
        <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/">
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"  />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
