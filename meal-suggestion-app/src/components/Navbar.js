// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #388e3c; /* Dark green */
  padding: 15px;
  color: #ffffff;
  position: relative;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;

  &:hover {
    background-color: #4caf50; /* Lighter green on hover */
  }
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <NavLink href="#services">Services</NavLink>
    </NavBarContainer>
  );
};

export default Navbar;

