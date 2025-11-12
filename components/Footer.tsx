"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white text-center py-3 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} Amana Transportation. All rights reserved.
        Samar Balousha
      </p>
    </footer>
  );
};

export default Footer;
