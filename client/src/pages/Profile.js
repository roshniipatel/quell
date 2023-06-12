import React from 'react';
import '../assets/css/Profile.css';
import { Link } from 'react-router-dom';

export default function Profile(){

  return(
    
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

