// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background-color: var(--secondary-color);
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
`;

const NavLogo = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
`;

const NavLinks = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  margin-left: 30px;
  font-size: 1rem;
  color: var(--text-color);
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-color);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo href="#home">Meal Mentor</NavLogo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Why Choose Us</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
