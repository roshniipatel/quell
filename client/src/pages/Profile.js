import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import DiscussionList from '../components/DiscussionList';
// import '../assets/css/Profile.css';
// import { Link } from 'react-router-dom';

import { QUERY_USER, USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

export default function Profile() {
  // const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : USER_PROFILE, {
  //   variables: { username: userParam },
  // });
  // const user = data?.userData || data?.user || {};

  // !! TEST
  const { loading, data } = useQuery(USER_PROFILE)
  // const user = data?.userData || {};
  // !!

  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    );
  }

  // if (!user?.username) {
  //   return (
  //     <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  //       <div className="toast-body">
  //         You are not logged in!
  //         <div className="mt-2 pt-2 border-top">
  //           <button type="button" className="btn btn-primary btn-sm" to='/login'>Login</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="card mb-3" style={{maxWidth: 540}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <DiscussionList 
            discussions={data.discussions}
            username={data.username}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
































// const Profile = ({ user, friends, sendFriendRequest, achievements }) => {
//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <div className="profile-avatar">
//           <img src={user.avatar} alt="Profile Avatar" />
//         </div>
//         <div className="profile-info">
//           <h2>{user.username}</h2>
//           <div className="profile-stats">
//             <span>
//               <span className="profile-stat-value">{friends}</span> friends
//             </span>
//           </div>
//           <div className="profile-actions">
//             <button onClick={sendFriendRequest}>Send Friend Request</button>
//           </div>
//           <div className="profile-bio">
//             <p>{user.bio}</p>
//           </div>
//         </div>
//       </div>
//       <div className="profile-achievements">
//         <h3>Achievements</h3>
//         <ul>
//           {achievements.map((achievement, index) => (
//             <li key={index}>
//               <Link to={`/achievements/${achievement.id}`}>{achievement.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Profile;

