import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    
    <footer className="bg-gray-50 text-gray-00 py-10 shadow-md">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Name */}
        <div className="text-gray-00 text-2xl font-bold">
          Jugesh Kumar
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6">
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/" className="hover:text-blue-500 transition">Portfolio</Link>
          <Link to="/skills" className="hover:text-blue-500 transition">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/jugesh-kumar-975741246/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="mailto:email@example.com" className="hover:text-red-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Jugesh kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default footer;
