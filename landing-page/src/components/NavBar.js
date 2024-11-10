import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#Home');

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className="navbar navbar-light bg-white">
      <a className="navbar-logo" href="#">
        <h2>Squeak</h2>
      </a>
      <button className="join-waitlist-button">Join Waitlist</button>
    </nav>
  );
};

export default Navbar;
