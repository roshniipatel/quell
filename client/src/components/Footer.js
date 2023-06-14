import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // the footer will only show on the allowed paths
  const allowedPaths = ['/', '/podcasts', '/resources'];

  const shouldShowFooter = allowedPaths.includes(location.pathname);

  if (!shouldShowFooter) {
    return null;
  }

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Quell. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
