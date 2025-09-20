import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "../../Confug";
import { HiMenu, HiX } from "react-icons/hi";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium transition-all duration-300 ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="p-4 shadow-md bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-extrabold text-blue-600">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClasses} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/skills" className={linkClasses}>
              Skills
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
             <NavLink to="/project" className={linkClasses} onClick={toggleMenu}>
              Project
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-gray-700">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            <NavLink to="/" className={linkClasses} end onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/skills" className={linkClasses} onClick={toggleMenu}>
              Skills
            </NavLink>
            <NavLink to="/contact" className={linkClasses} onClick={toggleMenu}>
              Contact
            </NavLink>
             <NavLink to="/project" className={linkClasses} onClick={toggleMenu}>
              Project
            </NavLink>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
