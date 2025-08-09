'use client';

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, setSelectedConversation, markAsRead, updateLastMessage } from '../../../../redux/slices/chatSlice';
import io from 'socket.io-client';

const ChatPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const dispatch = useDispatch();
  const { conversations, messages, selectedConversationId } = useSelector((state) => state.chat);
  const selectedConversation = conversations.find(conv => conv.id === selectedConversationId);

  const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const newSocket = io(); // Connect to the Socket.IO server
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    newSocket.on('receiveMessage', (msg) => {
      dispatch(addMessage(msg));
      dispatch(updateLastMessage({ conversationId: msg.conversationId, lastMessage: msg.text }));
    });

    return () => {
      newSocket.disconnect();
    };
  }, [dispatch]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    if (socket) {
      const messageToSend = { ...newMsg, conversationId: selectedConversationId };
      socket.emit('sendMessage', messageToSend);
    }
    dispatch(addMessage(newMsg));
    dispatch(updateLastMessage({ conversationId: selectedConversationId, lastMessage: newMsg.text }));
    setNewMessage('');
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main content */}
      <main className={`flex-1 flex ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        {/* Conversation List */}
        <div className="w-1/3 bg-white shadow-md p-4 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Conversations</h2>
          <ul>
            {conversations.map((conv) => (
              <li
                key={conv.id}
                className={`p-3 mb-2 rounded-lg cursor-pointer ${selectedConversationId === conv.id ? 'bg-blue-100' : 'hover:bg-gray-50'}`}
                onClick={() => {
                  dispatch(setSelectedConversation(conv.id));
                  dispatch(markAsRead(conv.id));
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{conv.name}</span>
                  {conv.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-white shadow-md">
          <header className="bg-gray-200 p-4 border-b border-gray-300">
            <h2 className="text-xl font-bold text-gray-800">{selectedConversation?.name}</h2>
          </header>
          <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            {messages.filter(msg => msg.conversationId === selectedConversationId).map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}
              >
                <span
                  className={`inline-block p-3 rounded-lg ${msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                >
                  {msg.text}
                </span>
                <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <footer className="p-4 border-t border-gray-300 bg-gray-100">
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </footer>
        </div>
      </main>
      </div>
  );

};

export default ChatPage;