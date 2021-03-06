import React, { useState, Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
//Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/actions/userActions';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const errors = useSelector(state => state.UI.errors);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const registerData = {
      username: username.toLowerCase().replace(/\s+/g, ''),
      email: email.toLowerCase().replace(/\s+/g, ''),
      password,
      confirmPassword
    };

    dispatch(registerUser(registerData));
  };

  return (
    <Fragment>
      <Navbar page="forms" />
      <div className="forms-page">
        <div className="form-container">
          <h5>Register for Budgy</h5>
          <form className="form" onSubmit={handleSubmit}>
            {errors ? (
              <div className="form-errors">
                <p>{errors.username}</p>
                <p>{errors.email}</p>
                <p>{errors.password}</p>
              </div>
            ) : null}

            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="username"
              autoComplete="off"
              onChange={e => setUsername(e.target.value)}
            />

            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="email"
              autoComplete="off"
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              autoComplete="off"
              onChange={e => setPassword(e.target.value)}
            />

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="confirm password"
              autoComplete="off"
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-gradient">
              sign up
            </button>
          </form>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M0,192L120,208C240,224,480,256,720,250.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
