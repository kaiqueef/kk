import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faInstagram,
  faArtstation,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <section className="footer">
      <div>
        <div className="logo">
          <Link to="/">KK</Link>
        </div>
        <div className="contact-info">
          <a
            href="https://www.linkedin.com/in/kaique-ferreira-854a75139/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/kkaique.ferreira/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.artstation.com/kaiqueferreira" target="_blank">
            <FontAwesomeIcon icon={faArtstation} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+55 27 99510-5454"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </section>
  );
};
