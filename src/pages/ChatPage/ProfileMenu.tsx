import React, { useState } from 'react';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src="/placeholder.svg?height=40&width=40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold">John Doe</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          <a href="#profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
          <a href="#settings" className="block px-4 py-2 hover:bg-gray-100">Account Settings</a>
          <a href="#logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
        </div>
      )}
    </div>
  );
}