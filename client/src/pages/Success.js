import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Confetti from "react-confetti";
import { MdCheckCircle } from 'react-icons/md';

// Redirect to success page when payment succesfully

const Success = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <>
    <div className='text-center align-middle' style={{ marginTop: '40px' }}>
      <Confetti width={width} height={height} numberOfPieces={450} />
      <MdCheckCircle className='text-success' size={100} />
      <h1 className='mt-3'>congrats!</h1>
      <p style={{ fontSize: '20px' }}>Your payment has been processed successfully!</p>
      <br/>
      <Link className='btn btn-primary' to='shop'>Shop</Link>
      <br/>
      <br/>
      <Link className='btn btn-primary' to=''>Home Page</Link>
    </div>
    </>
  );
}; 
 
export default Success;