import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../redux/actions/auth';

const Register = ({ signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_password: ''
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const { name, email, password, re_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password === re_password) {
      signup({ name, email, password, re_password });
      setAccountCreated(true);
      alert('Verify in your email account!');
    }

    if (password !== re_password) {
      alert('Password does not match!');
    }
  };

  if (isAuthenticated)
    return <Redirect to='/blog' />;

  if (accountCreated)
    return <Redirect to='login' />;
  
  return (
    <div className='container mt-5 col-sm-6 pb-5'>
      <Fade duration={1200}>
        <h1>Register</h1>
        <p>Create a New Account</p>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              className='form-control'
              type='text'
              placeholder='Name*'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required 
            />
          </div>
          <div className='form-group'>
            <input 
              className='form-control'
              type='email'
              placeholder='Email*'
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
              placeholder='Password*'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='7'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}'
              title="Must contain at least one  number and one uppercase 
              and lowercase letter, and at least 7 or more characters"
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Confirm Password*'
              name='re_password'
              value={re_password}
              onChange={e => onChange(e)}
              minLength='7'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}'
              title="Must contain at least one  number and one uppercase 
              and lowercase letter, and at least 7 or more characters."
              required
            />
          </div>
        <button className='btn btn-primary btn-block' type='submit'>Register</button>
      </form>
      <p className='mt-3'>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
      <label className='text-danger p-5'>
        <small>
          Must contain at least one  number and one uppercase 
          and lowercase letter, and at least 7 or more characters.
        </small>
      </label>
      </Fade>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Register);