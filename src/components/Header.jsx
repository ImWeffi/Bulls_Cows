import {Link} from "react-router-dom";

import '../styles/Header.css'

export default function Header(){
    return (
        <nav className="navbar">
        
        <ul className="nav-links">
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/rules">Rules</Link></li>
          <li><Link to="/history">History</Link></li>
          
        </ul>
      </nav>
    );
}