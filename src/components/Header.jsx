import { NavLink } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="d-flex justify-content-center py-2 bg-light text-black">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/game" className="nav-link" activeclassname="active">
            Game
          </NavLink>
        </li>   
        <li className="nav-item">
          <NavLink to="/rules" className="nav-link" activeclassname="active">
            Rules
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/history" className="nav-link" activeclassname="active">
            History
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
