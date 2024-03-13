import { NavLink } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="py-2 bg-light text-black">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-auto">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Game
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/rules"
                className="nav-link"
                activeClassName="active"
              >
                Rules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/history"
                className="nav-link"
                activeClassName="active"
              >
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
