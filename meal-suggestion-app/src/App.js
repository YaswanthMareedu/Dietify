// src/App.js

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ChatBot from 'react-chatbotify';
import logo from './assets/logo.png';
import { FaUtensils, FaLeaf, FaSmile } from 'react-icons/fa';

const App = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section" id="home">
        <img src={logo} alt="Meal Mentor Logo" className="App-logo" />
        <h1>Meal Mentor</h1>
        <h2>Your Personalized Meal Suggestion Chatbot</h2>
        <a href="#chatbot" className="cta-button">Get Started</a>
      </section>

      <section className="features-section" id="about">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <FaUtensils />
            </div>
            <h3>Personalized Meals</h3>
            <p>
              Get meal suggestions tailored to your preferences and dietary needs.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaLeaf />
            </div>
            <h3>Healthy Choices</h3>
            <p>
              Discover nutritious meals that keep you fit and healthy.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaSmile />
            </div>
            <h3>User-Friendly</h3>
            <p>
              Easy-to-use chatbot interface for a seamless experience.
            </p>
          </div>
        </div>
      </section>

      <section id="chatbot">
        <ChatBot />
      </section>
    </>
  );
};

export default App;
