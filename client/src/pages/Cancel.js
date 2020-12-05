import React from "react";
import { Link } from 'react-router-dom';
import { MdCancel } from 'react-icons/md';

// Redirect to cancel page when payment canceled

const Cancel = () => {
  return (
    <>
    <div className='text-center align-middle' style={{ marginTop: '40px' }}>
      <MdCancel className='text-danger' size={100} />
      <h1 className='mt-3'>cancelled!</h1>
      <p style={{ fontSize: '20px' }}>Your payment has been cancelled.</p>
      <br/>
      <Link className='btn btn-primary' to='shop'>Shop</Link>
      <br/>
      <br/>
      <Link className='btn btn-primary' to=''>Home Page</Link>
    </div>
    </>
  );
}; 
 
export default Cancel;