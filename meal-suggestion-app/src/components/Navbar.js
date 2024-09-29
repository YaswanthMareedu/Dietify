// src/components/Navbar.js

import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <a href="#home" className="nav-logo">
        <span>Meal Mentor</span>
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">Why Choose Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
