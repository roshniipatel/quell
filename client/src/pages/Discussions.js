import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, DISCUSSIONS } from '../utils/queries';
import DiscussionList from '../components/DiscussionList';
import Auth from '../utils/auth';
import '../assets/css/Profile.css';

const Discussions = () => {
  const { loading, data } = useQuery(DISCUSSIONS);
  // const {loading, data}=useQuery(QUERY_USER);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  // const user = data?.userProfile || {};
  const user = data?.users || [];
  // const user = data?.user || [];

  if (!Auth.loggedIn()) {
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
        <DiscussionList user={user} />
      </div>
    </div>
  );
};

export default Discussions;
