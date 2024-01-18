import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="d-flex justify-content-center py-2 bg-light">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/game" className="nav-link active text-light">
            Game
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/rules" className="nav-link text-dark">
            Rules
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/history" className="nav-link text-dark">
            History
          </Link>
        </li>
      </ul>
    </header>
  );
}
