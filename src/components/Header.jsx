import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo/logo1.png";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) =>
    currentPath === path
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-600";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-4 md:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Octane Data Logo"
            className="h-10 md:h-14 w-auto object-contain rounded"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className={`${mobileNavOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className={getLinkClass("/services")}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/industry" className={getLinkClass("/industry")}>
                Industry List
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden text-gray-700 text-2xl ml-4"
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
