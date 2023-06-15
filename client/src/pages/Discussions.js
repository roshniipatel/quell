import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { DISCUSSION_LIST } from '../utils/queries';
import DiscussionList from '../components/DiscussionList';
import Auth from '../utils/auth';
import '../assets/css/Profile.css';
import '../assets/css/Discussions.css';

const Discussions = () => {
  const { loading, data } = useQuery(DISCUSSION_LIST);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  const discussionList = data?.discussions || [];
  const loggedIn=Auth.loggedIn()

  if (!loggedIn) {
    return (
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body">
          You are not logged in!
          <div className="mt-2 pt-2 border-top">
            <button type="button" className="btn btn-primary btn-sm" to="/login">
              Login
            </button>
          </div>
        </div>
      </div>
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
