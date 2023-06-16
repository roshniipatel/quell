import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';
import '../assets/css/Profile.css';
import DiscussionForm from '../components/DiscussionForm';
import UserDiscussionList from '../components/UserDiscussionList/UserDiscussionList';
import blankProfileImage from '../assets/images/blank-profile-picture.png';

const Profile = () => {
  const thisUser = Auth.getProfile();
  const thisUsername = thisUser.data.username;
  const [isEditing, setIsEditing] = useState(false);
  const { loading, data } = useQuery(USER_PROFILE, {
    variables: { username: thisUsername },
  });
  const [aboutMe, setAboutMe] = useState('');
  const user = data?.user || {};

  useEffect(() => {
    const storedAboutMe = localStorage.getItem('aboutMe');
    if (storedAboutMe) {
      setAboutMe(storedAboutMe);
    }
  }, []);
  
  const handleAboutMeChange = (event) => {
    setAboutMe(event.target.value);
    localStorage.setItem('aboutMe', event.target.value);
  };


  const handleAboutMeSubmit = (event) => {
    event.preventDefault();
    console.log(aboutMe);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setAboutMe(user.aboutMe);
  };


  if (loading) {
    return <h2>Loading...</h2>  
  }

  // Return content
  return (
    <>
      {!Auth.loggedIn() ? (
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-body">
            You are not logged in!
            <div className="mt-2 pt-2 border-top">
              <button type="button" className="btn btn-primary btn-sm" to="/login">
                Login
              </button>
            </div>
          </div>
        </div>) : (

        <div className="profile-container">
          <div className="profile-details">
            {user.profileImage ? (
              <div className="profile-image">
                <img src={user.profileImage} alt="Profile" />
              </div>
            ) : (
              <div className="profile-image">
                <img src={blankProfileImage} alt="Profile avatar" />
              </div>
            )}
            <div className="profile-info">
              <div className="username-addfriend-container">
                <h2 className="username">{user.username}</h2>
                <button className="add-friend-button">Add Friend</button>
              </div>
              {!isEditing ? (
                <div className="about-me-text">{aboutMe || user.aboutMe}</div>
              ) : (
                <form className="about-me-form" onSubmit={handleAboutMeSubmit}>
                  <textarea
                    className="about-me-textarea"
                    placeholder="Tell something about yourself..."
                    value={aboutMe}
                    onChange={handleAboutMeChange}
                  ></textarea>
                  <button className="about-me-button" type="submit">
                    Save
                  </button>
                </form>
              )}
              <button className="edit-button" onClick={handleEditClick}>
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>
          </div>
          <div>
            <h3>Discuss:</h3>
            <DiscussionForm />
          </div>
          <div className="discussion-list">
            <h3>My Discussions:</h3>
            <div>
              {user.discussions?.length === 0 ? (<p>No Discussions Yet...</p>) : (<UserDiscussionList discussions={user} />)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;