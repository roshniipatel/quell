import React from 'react';
import '../assets/css/Home.css';

import DiscussionList from '../components/DiscussionList';
import DiscussionForm from '../components/DiscussionForm';

import { QUERY_DISCUSSIONS } from '../utils/queries';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Quell</h2>
      <p>
        Quell is a mental health support community where individuals can find resources, connect with others, and seek support on their mental health journey.
      </p>
      {/* we can add additional content and components as needed */}
    </div>
  );
}

export default Home;
