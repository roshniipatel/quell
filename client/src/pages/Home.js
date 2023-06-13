import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>✿ Welcome to Quell ✿</h1>
          <p>A mental health support community where you can find resources, connect with others, and seek support on your mental health journey.</p>
          <div className="buttons">
            <Link to="/login" className="button">Sign In</Link>
            <Link to="/register" className="button">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="content-section">
        <h2>✿ Explore, Connect, and Thrive ✿</h2>
        <p>Discover a supportive community where you can share your experiences, learn from others, and find helpful resources to support your mental well-being.</p>
        {/* Add additional content sections as needed */}
      </div>
    </div>
  );
};

export default Home;
