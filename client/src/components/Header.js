import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';

const Header = ({ isAuthenticated, logout }) => {
  const authLinks = (
    <li className="nav-item">
      <a className='nav-link' onClick={logout} href='/'>Logout</a>
    </li>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to='/login'>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='/register'>Register</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to='/'> FREECOMMERCE</Link>
    <button 
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/shop'>Shop</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact us</Link >
        </li>
        { <>{ isAuthenticated ? authLinks : guestLinks }</> }
      </ul>
    </div>
  </nav>
  );
};

const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Header);