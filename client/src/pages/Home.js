import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { FiCornerDownRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="position-relative col text-center bg-primary min-vh-100">
      -
      <div className="col p-4 d-flex flex-column mt-5 mb-5 position-static align-items-center">
      <Fade duration={1200}>
        <h1 className='text-white'>
          FreeCommerce
        </h1>
        <h5 className='text-white mt-4'>
          <Link className="text-white h3" to='/shop'>
            Shop <FiCornerDownRight />
          </Link>
        </h5>
        </Fade>
      </div>
      
      <h6>
        <Link className="text-white mr-4" to='/login'>Login</Link> - <Link className="text-white ml-4" to='/register'>Register</Link>
      </h6>
      
    </div>
  )
}

export default Home;