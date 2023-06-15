import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import '../assets/css/Header.css';
import logoutIcon from '../assets/images/logout-icon.png';

const Header = () => {
  const loggedIn = Auth.loggedIn();
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    // localStorage.removeItem('token');
    navigate('/');
  };

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
          {loggedIn ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </>
          ) : null}
          <li>
            <Link to="/discussions">Discussions</Link>
          </li>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          {loggedIn ? (
            <>
              <li>
                <img src={logoutIcon} alt="Logout" onClick={handleLogout} className="logout-icon" />
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

