import React, { useState } from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../redux/actions/auth';

const ResetPasswordConfirm = (props) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    
    const uid = props.match.params.uid;
    const token = props.match.params.token;

    props.reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);

    if (new_password !== re_new_password) {
      alert('Password does not match!');
    }  
  };

  if (requestSent && new_password === re_new_password)
    return <Redirect to='/login' />;

  return (
    <div className='container mt-5 col-sm-6'>
      <h1>Enter Your New Password</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              className='form-control'
              type='password'
              placeholder='New Password'
              name='new_password'
              value={new_password}
              onChange={e => onChange(e)}
              minLength='9'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
              required
            />
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              type='password'
              placeholder='Confirm New Password'
              name='re_new_password'
              value={re_new_password}
              onChange={e => onChange(e)}
              minLength='7'
              pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}'
              title="Must contain at least one  number and one uppercase 
              and lowercase letter, and at least 7 or more characters."
              required
            />
          </div>
          <button className='btn btn-primary btn-block' type='submit'>Reset Password</button>
      </form>
      <p className='mt-3'>
        <Link to="/login"><FiCornerDownLeft /> Back to Login</Link>
      </p>
      <label className='text-danger'>
        <small>
          Must contain at least one  number and one uppercase 
          and lowercase letter, and at least 7 or more characters.
        </small>
      </label>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);