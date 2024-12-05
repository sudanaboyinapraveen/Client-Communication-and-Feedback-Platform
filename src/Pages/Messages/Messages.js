import React, { useState, useEffect } from 'react';
import './Messages.css';

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Fetch conversations from the API (replace with real API call in production)
  useEffect(() => {
    fetch('http://localhost:5000/conversations')
      .then((response) => response.json())
      .then((data) => setConversations(data));
  }, []);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() === '') return;

    const updatedConversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, { sender: 'client', content: newMessage }],
    };

    // Replace with real API call to update conversation in backend
    setSelectedConversation(updatedConversation);

    setNewMessage('');
  };

  return (
    <div className="content-container">
    <div className="messages-container">
      <div className="conversations-list">
        <h2>Your Conversations</h2>
        {conversations.length > 0 ? (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation ${selectedConversation && selectedConversation.id === conv.id ? 'active' : ''}`}
              onClick={() => setSelectedConversation(conv)}
            >
              <h3>{conv.projectName}</h3>
              <p>{conv.messages[conv.messages.length - 1].content}</p>
            </div>
          ))
        ) : (
          <p>No conversations available. Start a project to begin messaging.</p>
        )}
      </div>

      {selectedConversation && (
        <div className="message-box">
          <h3>Conversation for {selectedConversation.projectName}</h3>
          <div className="message-history">
            {selectedConversation.messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <p>{message.content}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="message-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>

    </div>
  );
};

export default Messages;
