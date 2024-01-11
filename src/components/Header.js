import '../styles/Header.css'

export default function Header(){
    return (
        <nav className="navbar">
        
        <ul className="nav-links">
          <li><a href="/game">Game</a></li>
          <li><a href="/rules">Rules</a></li>
          <li><a href="/history">History</a></li>
          
        </ul>
      </nav>
    );
}