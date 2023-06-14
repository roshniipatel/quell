import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../assets/css/Register.css';

export default function RegisterForm() {
  const [formValue, setFormValue] = useState({ username: '', email: '', password: '' });
  const [addUser, { error , data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({ variables: { ...formValue } });
      Auth.login(data.addUser.token); // Login the user after successful registration
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      {data ? (<p>Success! Go back to{' '}<Link to='/'>Home</Link></p>) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Create Username:</label>
            <input type="username" id="username" name="username" value={formValue.username} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formValue.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formValue.password} onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
      {error && (
        <div className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
}
