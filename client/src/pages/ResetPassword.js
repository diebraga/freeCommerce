import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../redux/actions/auth';
import { FiCornerDownLeft } from 'react-icons/fi';

const ResetPassword = (props) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    alert('Verify in you email account!')

    props.reset_password(email);
    setRequestSent(true);
  };

  if (requestSent)
    return <Redirect to='/login' />;

  return (
    <div className='container mt-5 col-sm-6'>
      <Fade duration={1200}>
      <h1>Enter Your Email</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input 
            className='form-control'
            type='email'
            placeholder='Your Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <button className='btn btn-primary btn-block' type='submit'>Request Password</button>
      </form>
        <p className='mt-3'>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        <p className='mt-3'>
          <Link to="/login"><FiCornerDownLeft />  Back to Login</Link>
        </p>
      </Fade>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);