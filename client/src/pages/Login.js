import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../assets/css/Login.css';

export default function Login() {
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // This is going to update State as the form input is changing
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue({ ...formValue, [name]: value, });
  }

  // logic to submit form input
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValue);
    try {
      const { data } = await login({
        variables: { ...formValue },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormValue({
      email: '',
      password: '',
    });
  };

  return (
      <div className="login">
        <h2>Login</h2>
        {data ? (<p>Success! Go to{' '}<Link to='/profile'>Profile</Link></p>) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formValue.email} onChange={handleChange} required />
              {/* {emailError && <div className="error-message">{emailError}</div>} */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={formValue.password} onChange={handleChange} required />
            </div>
            <button type="submit">Login</button>
          </form>
        )}
        {error && (
          <div className="error-message">
            {error.message}
          </div>
        )}
      </div>
  )
}
