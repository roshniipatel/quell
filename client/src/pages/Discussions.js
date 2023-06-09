import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { DISCUSSION_LIST } from '../utils/queries';
import DiscussionList from '../components/DiscussionList';
import Card from 'react-bootstrap/Card';
import Auth from '../utils/auth';
import '../assets/css/Profile.css';
import '../assets/css/Discussions.css';

const Discussions = () => {
  const { loading, data } = useQuery(DISCUSSION_LIST);
  const discussionList = data?.discussions || [];
  const loggedIn = Auth.loggedIn();

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <Card style={{ width: '33rem' }} className='position-absolute top-50 start-50 translate-middle notLoggedIn'>
        <Card.Body>
          <Card.Title className='title'>We are sorry!!</Card.Title>
          <Card.Text >
            Perhaps you forgot to sign in or if you're new in the community try registering!
          </Card.Text>
          <Card.Text className='links'>
            {/* <Card.Link href="/login">Sign In</Card.Link>
            <Card.Link href="/register">Sign Up</Card.Link> */}
            <Link to="/login">Sign In </Link>
            <Link to="/register">Sign Up</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div className="profile-container">
      <div className="discussion-list">
        <h3>Discussions:</h3>
        <DiscussionList discussionList={discussionList} />
      </div>
    </div>
  );
};

export default Discussions;
