import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            <Link to="/">MyCompany</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                Mailing List ▾
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white shadow-md rounded-md">
                  <Link
                    to="/mailinglist/subscribe"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Subscribe
                  </Link>
                  <Link
                    to="/mailinglist/unsubscribe"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Unsubscribe
                  </Link>
                  <Link
                    to="/mailinglist/manage"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Manage
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden space-y-2 pt-4 pb-4">
            <Link to="/" className="block text-gray-700">
              Home
            </Link>
            <Link to="/about" className="block text-gray-700">
              About Us
            </Link>
            <Link to="/services" className="block text-gray-700">
              Services
            </Link>
            <Link to="/pricing" className="block text-gray-700">
              Pricing
            </Link>
            <Link to="/contact" className="block text-gray-700">
              Contact
            </Link>
            <div>
              <span className="block text-gray-700 font-medium mt-2">
                Mailing List
              </span>
              <Link
                to="/mailinglist/subscribe"
                className="block ml-4 text-sm text-gray-600"
              >
                Subscribe
              </Link>
              <Link
                to="/mailinglist/unsubscribe"
                className="block ml-4 text-sm text-gray-600"
              >
                Unsubscribe
              </Link>
              <Link
                to="/mailinglist/manage"
                className="block ml-4 text-sm text-gray-600"
              >
                Manage
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
