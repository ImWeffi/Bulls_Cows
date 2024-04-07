import { NavLink } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  
  const isLoggedIn = localStorage.getItem("username");

  return (
    <header className="py-2 bg-light text-black">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-auto">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Game
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/rules" className="nav-link">
                Rules
              </NavLink>
            </li>
            {isLoggedIn && ( 
              <li className="nav-item">
                <NavLink to="/history" className="nav-link">
                  History
                </NavLink>
              </li>
            )}
            {isLoggedIn && ( 
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link">
                  Dashboard
                </NavLink>
              </li>
            )}
            {!isLoggedIn && ( 
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
