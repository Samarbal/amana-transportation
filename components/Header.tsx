"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <img src="/favicon.ico" alt="Amana Logo" className="w-8 h-8" />
        <h1 className="text-lg font-bold">Amana Transportation</h1>
      </div>
      <button className="bg-green-700 hover:bg-green-800 text-sm px-3 py-1 rounded">
        Menu
      </button>
    </header>
  );
};

export default Header;
