import React from 'react';
import ProfileMenu from './ProfileMenu';

export default function Sidebar() {
  const chatHistory = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'How are you?' },
    // Add more chat history items as needed
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <ProfileMenu />
      </div>
      <div className="flex-grow overflow-y-auto">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="p-4 hover:bg-gray-100 cursor-pointer">
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}