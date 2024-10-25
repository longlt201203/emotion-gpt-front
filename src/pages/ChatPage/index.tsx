import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'other';
  images?: string[];
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (content: string, images: string[]) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      sender: 'user',
      images: images.length > 0 ? images : undefined,
    };
    setMessages([...messages, newMessage]);
    // Here you would typically send the message to your backend
    // and then add the response to the messages array
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow overflow-y-auto">
          <MessageList messages={messages} />
        </div>
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}