// src/App.js
import React from 'react';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import logo from './assets/logo.png'; // Add your logo path

const AppContainer = styled.div`
  text-align: center;
  background-color: #e8f5e9; /* Light green background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 150px; /* Adjust logo size */
  margin: 20px 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #388e3c; /* Dark green */
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #6fbf6f; /* Medium green */
  margin-bottom: 30px;
`;

const Content = styled.div`
  flex: 1; /* Take up available space */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeSection = styled.section`
  padding: 50px 0;
`;

const AboutSection = styled.section`
  padding: 50px 0;
  background-color: #f1f8e9; /* Light green for About section */
`;

const ContactSection = styled.section`
  padding: 50px 0;
`;

const ServicesSection = styled.section`
  padding: 50px 0;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Content>
        <Logo src={logo} alt="Business Logo" />
        <Title>Welcome to Meal Mentor</Title>
        <Subtitle>Your Personalized Meal Suggestion Chatbot</Subtitle>
        <Chatbot />
      </Content>
      <HomeSection id="home">
        <h2>Home</h2>
        <p>Welcome to your meal suggestion app!</p>
      </HomeSection>
      <AboutSection id="about">
        <h2>About Us</h2>
        <p>Learn more about our services and philosophy.</p>
      </AboutSection>
      <ContactSection id="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@mealmentor.com</p>
      </ContactSection>
      <ServicesSection id="services">
        <h2>Our Services</h2>
        <p>We offer personalized meal suggestions to suit your diet.</p>
      </ServicesSection>
    </AppContainer>
  );
};

export default App;

