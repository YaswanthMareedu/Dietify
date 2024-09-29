// src/components/Chatbot.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 450px;
  
  background-color: #ffffff; /* White background for the chat */
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #388e3c; /* Dark green for header */
  color: #ffffff;
`;

const ChatTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MinimizeButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
`;

const ChatBody = styled.div`
  padding: 15px;
  display: ${(props) => (props.isMinimized ? 'none' : 'block')}; /* Hide body when minimized */
  max-height: 400px;
  overflow-y: auto;
`;

const ChatBubble = styled.div`
  background-color: ${(props) => (props.isUser ? '#4caf50' : '#e9ecef')}; /* Light green for user messages */
  color: ${(props) => (props.isUser ? '#fff' : '#333')};
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  max-width: 75%;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 10px;
  display: ${(props) => (props.hidden ? 'none' : 'block')}; /* Hide until meal type is selected */
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #4caf50; /* Green for send button */
  color: #fff;
  cursor: pointer;
  display: ${(props) => (props.hidden ? 'none' : 'block')}; /* Hide until meal type is selected */
  &:hover {
    background-color: #388e3c; /* Darker green on hover */
  }
`;

const MealTypeButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #66bb6a; /* Medium green for meal type buttons */
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #4caf50; /* Darker green on hover */
  }
`;

const PreferencesContainer = styled.div`
  margin-top: 10px;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [mealType, setMealType] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      if (mealType) {
        handlePreviousMealResponse(input);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Please select a meal type: breakfast, brunch, lunch, or dinner.', isUser: false },
        ]);
      }

      setInput('');
    }
  };

  const handleMealTypeSelection = (type) => {
    setMealType(type);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: `You selected ${type}. Did you have something in your previous meal? (yes/no)`, isUser: false },
    ]);
  };

  const handlePreviousMealResponse = (response) => {
    if (response.toLowerCase() === 'yes' || response.toLowerCase() === 'no') {
      const suggestion = response.toLowerCase() === 'yes'
        ? `Great! Based on your choice of ${mealType}, here’s a suggestion: How about a nice salad or grilled chicken?`
        : `Okay! Based on your choice of ${mealType}, how about pasta or tacos?`;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: suggestion, isUser: false },
      ]);
      // Reset meal type
      setMealType('');
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Please respond with yes or no.', isUser: false },
      ]);
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatTitle>Meal Suggestion Bot</ChatTitle>
        <MinimizeButton onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? '▼' : '▲'}
        </MinimizeButton>
      </ChatHeader>
      <ChatBody isMinimized={isMinimized}>
        {messages.map((msg, index) => (
          <ChatBubble key={index} isUser={msg.isUser}>
            {msg.text}
          </ChatBubble>
        ))}
        
        {/* Meal Type Selection */}
        <PreferencesContainer>
          <MealTypeButton onClick={() => handleMealTypeSelection('breakfast')}>Breakfast</MealTypeButton>
          <MealTypeButton onClick={() => handleMealTypeSelection('brunch')}>Brunch</MealTypeButton>
          <MealTypeButton onClick={() => handleMealTypeSelection('lunch')}>Lunch</MealTypeButton>
          <MealTypeButton onClick={() => handleMealTypeSelection('dinner')}>Dinner</MealTypeButton>
        </PreferencesContainer>

        <InputContainer>
          <InputField 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type your response..."
            hidden={!mealType} // Show only after meal type is selected
          />
          <SendButton onClick={handleSend} hidden={!mealType}>Send</SendButton>
        </InputContainer>
      </ChatBody>
    </ChatContainer>
  );
};

export default Chatbot;

