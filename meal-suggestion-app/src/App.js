// src/App.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import ChatBot from 'react-chatbotify';
import logo from './assets/logo.png';
import { FaUtensils, FaLeaf, FaRegSmile } from 'react-icons/fa';

const AppContainer = styled.div`
  text-align: center;
`;

const HeroSection = styled.section`
  background-color: var(--accent-color);
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
  animation: fadeInDown 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #555555;
  margin-bottom: 40px;
`;

const Button = styled.a`
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 60px;

  &:hover {
    background-color: #357ABD;
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 20px;
  background-color: var(--secondary-color);
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  background-color: var(--accent-color);
  padding: 40px 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #666666;
`;

const Content = styled.div`
  padding: 60px 20px;
`;

const Footer = styled.footer`
  background-color: var(--primary-color);
  color: #ffffff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection id="home">
        <Logo src={logo} alt="Meal Mentor Logo" className="App-logo" />
        <Title>Meal Mentor</Title>
        <Subtitle>Your Personalized Meal Suggestion Chatbot</Subtitle>
        <Button href="#chatbot">Get Started</Button>
      </HeroSection>
      <FeaturesSection id="about">
        <h2>Why Choose Us?</h2>
        <FeaturesContainer>
          <FeatureCard>
            <FeatureIcon>
              <FaUtensils />
            </FeatureIcon>
            <FeatureTitle>Personalized Meals</FeatureTitle>
            <FeatureText>
              Get meal suggestions tailored to your preferences and dietary needs.
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaLeaf />
            </FeatureIcon>
            <FeatureTitle>Healthy Choices</FeatureTitle>
            <FeatureText>
              Discover nutritious meals that keep you fit and healthy.
            </FeatureText>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaRegSmile />
            </FeatureIcon>
            <FeatureTitle>User-Friendly</FeatureTitle>
            <FeatureText>
              Easy-to-use chatbot interface for a seamless experience.
            </FeatureText>
          </FeatureCard>
        </FeaturesContainer>
      </FeaturesSection>
      <FeaturesSection id="services">
        <h2>Our Services</h2>
        <FeaturesContainer>
          {/* Add more FeatureCards to list services */}
        </FeaturesContainer>
      </FeaturesSection>
      <section id="chatbot">
        <Content>
          <ChatBot />
        </Content>
      </section>
      <Footer id="contact">
        <h2>Contact Us</h2>
        <FooterText>Email: contact@mealmentor.com</FooterText>
        <FooterText>Phone: +1 234 567 890</FooterText>
        <FooterText>© 2023 Meal Mentor. All rights reserved.</FooterText>
      </Footer>
    </AppContainer>
  );
};

export default App;
