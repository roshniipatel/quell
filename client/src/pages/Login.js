import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../assets/css/Login.css';

const Login = () => {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  // This is going to update State as the form input is changing
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value });
  };

  // logic to submit form input
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formValue },
      });
      
      Auth.login(data.login.token, () => {
        navigate('/profile');
        console.log('rude')
      });
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormValue({
      email: '',
      password: '',
    });
  };

  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {data ? (
        <div>
          <p>
            Success! Go to{' '}
            <Link to="/profile">Profile</Link>
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p className='button2'>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      )}
      {error && <div className="error-message">{error.message}</div>}
    </div>
  );
}
