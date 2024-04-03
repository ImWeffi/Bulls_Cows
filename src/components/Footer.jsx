import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
const Footer = () => {
  const email = "nikita.karpovs2004@inbox.lv";

  return (
    <footer className="bg-light text-dark text-center p-2 fixed-bottom">
      <div className="container">
        <div>
          <a
            href="https://github.com/ImWeffi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-1"
          >
            GitHub
          </a>
          |
          <a
            href="https://linkedin.com/in/nikitakarpovs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-2"
          >
            LinkedIn
          </a>
          |
          <a href={`mailto:${email}`} className="text-dark ms-3">
           Email
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
