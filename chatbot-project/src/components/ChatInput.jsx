import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];

    setChatMessages([
      ...newChatMessages,
      { 
        message: <img src={LoadingSpinner} className="loading-spinner" />,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
        
    setInputText('');

    setIsLoading(true);

    const response = await Chatbot.getResponseAsync(inputText);
    //console.log(response);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);
    
    setIsLoading(false);

  }
  

  function keyPressed(event) {
    if (event.key === 'Enter') {
        sendMessage();  
    }
    if (event.key === 'Escape') {
      setInputText('');
    }
  }

  return (
    <div
      className="chat-input-container"
    >
      <input 
        className="chat-input"
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange= {saveInputText}
        value= {inputText}
        onKeyDown= {keyPressed}
        disabled = {isLoading}
      />
      <button
        onClick={sendMessage}
        className="send-button"
        disabled = {isLoading || inputText === ''}
      >Send</button>
    </div>
  );
}