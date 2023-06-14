import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import DiscussionList from '../components/DiscussionList';
import DiscussionForm from '../components/DiscussionForm';
// import '../assets/css/Profile.css';
// import { Link } from 'react-router-dom';

import { QUERY_USER, USER_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

export default function Profile() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : USER_PROFILE, {
    variables: { username: userParam },
  });
  const users = data?.users || data?.user || [];

  // !! TEST
  // const { loading, data } = useQuery(USER_PROFILE)
  
  // console.log(data)
  // const users = data?.users || [];
  // !!

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>
    );
  }

  if (!users?.username) {
    return (
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-body">
          You are not logged in!
          <div className="mt-2 pt-2 border-top">
            <button type="button" className="btn btn-primary btn-sm" to='/login'>Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
          {/* <div className="col-md-8"> */}
            <div className="card-body">
              <DiscussionList
                users={users}
              />
            </div>
          {/* </div> */}
      <div>
        <DiscussionForm />
      </div>
    </div>
  )
}
