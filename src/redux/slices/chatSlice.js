import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  conversations: [
    { id: 1, name: 'Client A', lastMessage: 'Looking for a 3-bed house.', unread: 2 },
    { id: 2, name: 'Client B', lastMessage: 'When can we view the property?', unread: 0 },
    { id: 3, name: 'Client C', lastMessage: 'Offer submitted!', unread: 1 },
  ],
  messages: [
    { id: 1, sender: 'Client A', text: 'Hi John, I saw the listing for 123 Main St.', timestamp: '10:00 AM' },
    { id: 2, sender: 'You', text: 'Great! What are your thoughts?', timestamp: '10:05 AM' },
    { id: 3, sender: 'Client A', text: 'I\'m looking for a 3-bedroom house with a backyard.', timestamp: '10:10 AM' },
  ],
  selectedConversationId: 1,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setSelectedConversation: (state, action) => {
      state.selectedConversationId = action.payload;
    },
    markAsRead: (state, action) => {
      const conversation = state.conversations.find(conv => conv.id === action.payload);
      if (conversation) {
        conversation.unread = 0;
      }
    },
    updateLastMessage: (state, action) => {
      const { conversationId, lastMessage } = action.payload;
      const conversation = state.conversations.find(conv => conv.id === conversationId);
      if (conversation) {
        conversation.lastMessage = lastMessage;
      }
    },
  },
});

export const { addMessage, setSelectedConversation, markAsRead, updateLastMessage } = chatSlice.actions;

export default chatSlice.reducer;