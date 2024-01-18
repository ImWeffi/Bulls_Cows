import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Footer.css";
const Footer = () => {
  const email = "nikita.karpovs2004@inbox.lv";

  return (
    <footer className="bg-light text-dark text-center p-2 fixed-bottom">
      <div className="container">
        <p>&copy; 2024 Nikita Karpovs. All rights reserved.</p>
        <div>
          <a
            href="https://github.com/ImWeffi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-2"
          >
            GitHub
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
