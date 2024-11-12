import React from 'react';
import logo from '../assets/Squeak.png';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          alt="Squeak Logo"
          className="navbar-logo"
        />
      </a>
    </nav>
  );
};

export default Navbar;
