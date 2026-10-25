import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState( JSON.parse(localStorage.getItem('messages')) || []);
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  //const setChatMessages = array[1];
  useEffect(() => {
    Chatbot.addResponses({
      'bye': 'Bye. Have a great day boss!',
      'who are you' : 'I am someone',
      'who created you' : 'well, technically by Super simple dev but Muhammad Ahmad has made this desgin copy of me',
      'heads or tails' : 'Heads always',
      'what is your favourite number' : function() {
        return `well its a little long but it is ${crypto.randomUUID()}`;
      }
    });
  }, []);
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p
        className="welcome-message"
        >
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
        
      <ChatMessages
      chatMessages = {chatMessages}
      />
      <ChatInput
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages}
      />
    </div>
  );
  }

export default App
