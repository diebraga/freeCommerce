import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../redux/actions/auth';

/**
 *  Component activate account and redirects to blog.
 */

const Activate = (props) => {
  const [verified, setVerified] = useState(false);

  const verify_account = e => {
    const uid = props.match.params.uid;
    const token = props.match.params.token;

    props.verify(uid, token);
    setVerified(true);

    alert('Your account has been activated!');
  };

  if (verified) 
    return <Redirect to='/shop' />;

  return (
    <div className='container mt-5 col-sm-6'>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
        <h1>Verify your Account</h1>
        <p>Click the button to comfirm activation</p>
        <button 
          onClick={verify_account}
          style={{ marginTop: '20px' }}
          type="button"
          className="btn btn-primary btn-block"
        >
          Comfirm
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
