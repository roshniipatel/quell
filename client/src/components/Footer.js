import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Quell. All rights reserved.</p>
        {/* we can add additional footer content as needed */}
      </div>
    </footer>
  );
}

export default Footer;
