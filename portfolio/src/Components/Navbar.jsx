import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Topprofile from "../assets/Anup6.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Profile section */}
          <div className="flex items-center space-x-4">
            <img 
              src={Topprofile}
              alt="Profile" 
              className="w-12 h-12 rounded-full border-2 border-amber-100 shadow-md"
            />
            <h1 className="text-2xl font-bold text-gray-800">Anup Dangi</h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="text-gray-700 hover:text-amber-600 transition">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-amber-600 transition">About</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-amber-600 transition">Projects</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-amber-600 transition">Skills</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a></li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none transition"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-4 py-2 space-y-3">
            <li><a href="#" className="block py-2 text-gray-700 hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="block py-2 text-gray-700 hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="block py-2 text-gray-700 hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="block py-2 text-gray-700 hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="block py-2 text-gray-700 hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;