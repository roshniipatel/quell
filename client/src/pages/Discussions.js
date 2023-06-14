import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, USER_PROFILE } from '../utils/queries';
import DiscussionList from '../components/DiscussionList';
import DiscussionForm from '../components/DiscussionForm';
import Auth from '../utils/auth';
import '../assets/css/Profile.css';

const Discussions = () => {
  const { loading, data } = useQuery(USER_PROFILE);
  // const {loading, data}=useQuery(QUERY_USER);
  const [isEditing, setIsEditing] = useState(false);
  const [aboutMe, setAboutMe] = useState('');

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

  const handleAboutMeChange = (event) => {
    setAboutMe(event.target.value);
  };

  const handleAboutMeSubmit = (event) => {
    event.preventDefault();
    // Update the about me information in the backend
    console.log(aboutMe); // Replace this with your mutation or API call
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setAboutMe(user.aboutMe);
  };

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
      <div className="profile-details">
        <div className="profile-image">
          <img src={user.profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <h2 className="username">{user.username}</h2>
          <button className="add-friend-button">Add Friend</button>
          {!isEditing ? (
            <div className="about-me-text">{aboutMe || user.aboutMe}</div>
          ) : (
            <form className="about-me-form" onSubmit={handleAboutMeSubmit}>
              <textarea
                className="about-me-textarea"
                placeholder="Write something about yourself..."
                value={aboutMe}
                onChange={handleAboutMeChange}
              ></textarea>
              <button type="submit" className="about-me-button">
                Save
              </button>
            </form>
          )}
          <button className="edit-button" onClick={handleEditClick}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>
      <div className="discussion-list">
        <h3>My Discussions:</h3>
        <DiscussionList user={user} />
      </div>

      <div>
        <h3>Discuss:</h3>
        <DiscussionForm />
      </div>

    </div>
  );
};

export default Discussions;
