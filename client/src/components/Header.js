import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>✿ Quell</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          {/* we can add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
