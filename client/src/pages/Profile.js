import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';
import '../assets/css/Profile.css';
import DiscussionForm from '../components/DiscussionForm';
import UserDiscussionList from '../components/UserDiscussionList/UserDiscussionList';
import blankProfileImage from '../assets/images/blank-profile-picture.png';
import { useEffect } from 'react';

const Profile = () => {
  const thisUser = Auth.getProfile();
  const thisUsername = thisUser.data.username;
  console.log(thisUsername)

  const [isEditing, setIsEditing] = useState(false);

  const { loading, data } = useQuery(USER_PROFILE, {
    variables: { username: thisUsername },
  });
  const user = data?.user || {};

  useEffect(() => {
    const storedAboutMe = localStorage.getItem('aboutMe');
    if (storedAboutMe) {
      setAboutMe(storedAboutMe);
    }
  }, []);
  
  const [aboutMe, setAboutMe] = useState('');

  console.log("Data: " + user.discussions);

  // Check login status
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

  function discussionList() {
    if (!thisUsername) {
      return (
        <div>
          No Discussions yet!
        </div>
      );
    } else {
      return (
        <UserDiscussionList discussions={user}/>
      );
    }
  }


  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

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

  function displayProfileImage() {
    if (user.profileImage) {
      return (
      <div className="profile-image">
          <img src={user.profileImage} alt="Profile" />
      </div>
      )
    } else {
      return (
        <div className="profile-image">
          <img src={blankProfileImage} alt="Profile Picture" />
        </div>
      )
    }
  }

  // Return content
  return (
    <div className="profile-container">
      <div className="profile-details">
        {displayProfileImage()}
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
          {discussionList()}
        </div>
      </div>
    </div>
  );
}

export default Profile;



// !PREVIOUS CODE
// import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../utils/queries';
// import Auth from '../utils/auth';
// import '../assets/css/Profile.css';
// import DiscussionForm from '../components/DiscussionForm';
// import blankProfileImage from '../assets/images/blank-profile-picture.png';

// const Profile = () => {
//   const thisUser = Auth.getProfile();
//   const thisUsername = thisUser.data.username;
//   console.log(thisUsername)

//   const [isEditing, setIsEditing] = useState(false);

//   const { loading, data } = useQuery(QUERY_USER, {
//     variables: { username: thisUsername },
//   });
//   const user = data?.user || {};

//   const [aboutMe, setAboutMe] = useState('');

//   console.log("Data: " + user.discussions);

//   // Check login status
//   if (!Auth.loggedIn()) {
//     return (
//       <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
//         <div className="toast-body">
//           You are not logged in!
//           <div className="mt-2 pt-2 border-top">
//             <button type="button" className="btn btn-primary btn-sm" to="/login">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   function discussionList() {
//     if (!user.discussions) {
//       return (
//         user.discussions.map((discussion, i) => (
//           <div className="card discussion-card" key={i}>
//             <div className='card-header'>{discussion.username}</div>
//             {discussion.discussions.map((item, j) => (
//               <div className="card-body" key={j}>
//                 <h5 className="card-title">{item.discussionText}</h5>
//                 <p className="card-text">By {item.discussionAuthor} at {item.createdAt}</p>
//                 <a href="" className="btn btn-primary">Start Discussion</a>
//               </div>
//             ))}
//           </div>
//         ))
//       );
//     } else {
//       return (
//         <div>
//           No Discussions yet!
//         </div>
//       );
//     }
//   }


//   if (loading) {
//     return (
//       <div className="loading-container">
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   const handleAboutMeChange = (event) => {
//     setAboutMe(event.target.value);
//   };

//   const handleAboutMeSubmit = (event) => {
//     event.preventDefault();
//     console.log(aboutMe); 
//     setIsEditing(false);
//   };

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//     setAboutMe(user.aboutMe);
//   };

//   function displayProfileImage() {
//     if (user.profileImage) {
//       return (
//       <div className="profile-image">
//           <img src={user.profileImage} alt="Profile" />
//       </div>
//       )
//     } else {
//       return (
//         <div className="profile-image">
//           <img src={blankProfileImage} alt="Profile Picture" />
//         </div>
//       )
//     }
//   }

//   // Return content
//   return (
//     <div className="profile-container">
//       <div className="profile-details">
//         {displayProfileImage()}
//         <div className="profile-info">
//           <div className="username-addfriend-container">
//             <h2 className="username">{user.username}</h2>
//             <button className="add-friend-button">Add Friend</button>
//           </div>
//           {!isEditing ? (
//             <div className="about-me-text">{aboutMe || user.aboutMe}</div>
//           ) : (
//             <form className="about-me-form" onSubmit={handleAboutMeSubmit}>
//               <textarea
//                 className="about-me-textarea"
//                 placeholder="Tell something about yourself..."
//                 value={aboutMe}
//                 onChange={handleAboutMeChange}
//               ></textarea>
//               <button className="about-me-button" type="submit">
//                 Save
//               </button>
//             </form>
//           )}
//           <button className="edit-button" onClick={handleEditClick}>
//             {isEditing ? 'Cancel' : 'Edit'}
//           </button>
//         </div>
//       </div>
//       <div className="discussion-list">
//         <h3>My Discussions:</h3>
//         <div>
//           {discussionList()}
//         </div>
//       </div>
//       <div>
//         <h3>Discuss:</h3>
//         <DiscussionForm />
//       </div>
//     </div>
//   );
// }

// export default Profile;





