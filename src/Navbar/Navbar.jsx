import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-black font-medium" : "text-gray-500 hover:text-black";

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-semibold text-gray-900 tracking-tight"
            >
              CarRental
            </NavLink>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/bookings" className={navLinkClass}>
              Bookings
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink
              to="/login"
              className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
            >
              Login
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-1 pb-4 border-t border-gray-200">
            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/bookings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Bookings
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/login"
              className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
