// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Nav = styled.nav`
  a {
    margin: 0 15px;
    text-decoration: none;
    color: #555;
    font-weight: 500;
    &:hover {
      color: #000;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Meal Suggestion</Logo>
    <Nav>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </Nav>
  </HeaderContainer>
);

export default Header;

