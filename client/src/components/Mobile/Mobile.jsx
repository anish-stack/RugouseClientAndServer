import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Mobile.css';

const Mobile = () => {
  const { pathname } = useLocation();

  return (
    <div className="mobile-dash-footer">
      <Link to="/" className={`single ${pathname === '/' ? 'active' : ''}`}>
        <i className="fa-solid fa-house"></i>
        <small>Home</small>
      </Link>
      <Link to="/shop" className={`single ${pathname.startsWith('/SingleProducts') ||  pathname === '/shop' ? 'active' : ''}`}>
        <i className="fa-solid fa-store"></i>
        <small>Shop</small>
      </Link>
      <Link to="/cart" className={`single ${pathname === '/cart' ? 'active' : ''}`}>
        <i className="fa-solid fa-bag-shopping"></i>
        <small>Cart</small>
      </Link>
      <Link to="/profile" className={`single ${pathname === '/profile' || pathname === '/SignIn' || pathname === '/SignUp' ? 'active' : ''}`}>
        <i className="fa-solid fa-user-tie"></i>
        <small>Profile</small>
      </Link>
    </div>
  );
};

export default Mobile;
