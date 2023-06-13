// !!!! THIS IS A TEST FOR LOGIN
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

export default Login;

// !!!!!!!!

// ! LAST VERSION OF CODE
// import React, { useState } from 'react';
// import '../assets/css/Login.css';

// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     // login logic

//     setEmail('');
//     setPassword('');
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//           {emailError && <div className="error-message">{emailError}</div>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// !!






// import React, { useState } from 'react';
// import '../assets/css/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform validation
//     if (!validateEmail(email)) {
//       setErrorMessage('Please enter a valid email address.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setErrorMessage(
//         'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
//       );
//       return;
//     }

//     login(email, password)
//       .then((response) => {
//         if (response.success) {
//           console.log('Successfully logged in!');
//         } else {
//           setErrorMessage(response.message);
//         }
//       })
//       .catch((error) => {
//         setErrorMessage('An error occurred during login.');
//         console.error(error);
//       });
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const validatePassword = (password) => {
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
//     return passwordPattern.test(password);
//   };


//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={handleEmailChange} required />
//           {emailError && <div className="error-message">{emailError}</div>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
//           {passwordError && <div className="error-message">{passwordError}</div>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
