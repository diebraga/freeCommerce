import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated)
    return <Redirect to='/blog' />;
    
  return (
    <div className='container mt-5 col-sm-6'>
      <Fade duration={1200}>
        <h1>Login</h1>
        <p>Login into your Account</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              className='form-control'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='6'
              required
            />
          </div>
          <button className='btn btn-primary btn-block' type='submit'>Login</button>
        </form>
        <p className='mt-3'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        <p className='mt-3'>
          Forgot your Password? <Link to='/reset_password'>Reset Password</Link>
        </p>
      </Fade>
    </div>
  );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);