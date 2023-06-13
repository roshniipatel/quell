// !!!! This is a test for Registration Form

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





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER, LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
// import '../assets/css/Register.css';

// export default function RegisterForm() {

//   const [formValue, setFormValue] = useState({ username: '', email: '', password: '', });

//   const [addUser, { error, data }] = useMutation(ADD_USER);
//   const [login, { error: loginError }] = useMutation(LOGIN_USER);


//   // Updating state according to form input
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     console.log("Username value:", value);
//     setFormValue({ ...formValue, [name]: value, });
//   };

//   // logic to submit form input
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formValue);

//     try {
//       const { data } = await addUser({
//         variables: { ...formValue},
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
//       {data ? (<p>Success! Go back to{' '}<Link to='/'>Home</Link></p>) : (

//         <form onSubmit={handleSubmit}>
//           {/* div tag for user name, I followed Add_user mutation*/}
//           <div className="form-group">
//             <label htmlFor="username">Create Username:</label>
//             <input type="username" id="username" value={formValue.username} onChange={handleChange} required />
//             {/* {emailError && <div className="error-message">{emailError}</div>} */}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={formValue.email} onChange={handleChange} required />
//             {/* {emailError && <div className="error-message">{emailError}</div>} */}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={formValue.password} onChange={handleChange} required />
//             {/* {passwordError && <div className="error-message">{passwordError}</div>} */}
//           </div>
//           {/* <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
//         </div> */}
//           <button type="submit">Register</button>
//         </form>
//       )}
//       {error && (
//         <div className="error-message">
//           {error.message}
//         </div>
//       )}

//     </div>
//   )
// }
// !!!!!!



// !Previous code
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';
// import '../assets/css/Register.css';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError('');
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError('');
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setConfirmPasswordError('');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setPasswordError(
//         'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match.');
//       return;
//     }

//     //  registration logic

//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
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
//     <div className="register">
//       <h2>Register</h2>
//       {data ? (<p>Success! Go back to{' '}<Link to='/'>Home</Link></p>) : (
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
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//             required
//           />
//           {confirmPasswordError && <div className="error-message">{confirmPasswordError}</div>}
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       )}
//     </div>
//   );
// };

// export default Register;
