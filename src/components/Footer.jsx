import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  const email = "nikita.karpovs2004@inbox.lv";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-dark text-center p-2 fixed-bottom">
      <div className="container">
        <div>
          <a
            href="https://github.com/ImWeffi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-3"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/nikitakarpovs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-3"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={`mailto:${email}`} className="text-dark ms-3">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <p className="m-0">Copyright © {currentYear} Nikita Karpovs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
