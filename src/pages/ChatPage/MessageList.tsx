import React from 'react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'other';
  images?: string[];
}

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            <p className="whitespace-pre-wrap">{message.content}</p>
            {message.images && (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {message.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-auto rounded"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}