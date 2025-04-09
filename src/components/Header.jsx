import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars } from "react-icons/fa";
import logo from "../assets/logo/logo1.png";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deepDropdownOpen, setDeepDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) =>
    currentPath === path
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-600";

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-4 md:px-8 flex items-center justify-between py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Octane Data Logo"
            className="h-10 md:h-14 w-auto object-contain rounded"
          />
        </Link>

        {/* Nav Menu */}
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
              <Link to="/team" className={getLinkClass("/team")}>
                Team
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Dropdown <FaChevronDown className="text-xs" />
              </button>

              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50">
                  <li>
                    <Link
                      to="/dropdown1"
                      className={`block px-4 py-2 hover:bg-gray-100 ${getLinkClass(
                        "/dropdown1"
                      )}`}
                    >
                      Dropdown 1
                    </Link>
                  </li>
                  <li className="relative group">
                    <button
                      onClick={() => setDeepDropdownOpen(!deepDropdownOpen)}
                      className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100"
                    >
                      Deep Dropdown <FaChevronDown className="text-xs" />
                    </button>
                    {deepDropdownOpen && (
                      <ul className="absolute left-full top-0 mt-0 ml-1 bg-white shadow-lg rounded-md w-48 z-50">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <li key={num}>
                            <Link
                              to={`/deep${num}`}
                              className={`block px-4 py-2 hover:bg-gray-100 ${getLinkClass(
                                `/deep${num}`
                              )}`}
                            >
                              Deep Dropdown {num}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/dropdown2"
                      className={`block px-4 py-2 hover:bg-gray-100 ${getLinkClass(
                        "/dropdown2"
                      )}`}
                    >
                      Dropdown 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dropdown3"
                      className={`block px-4 py-2 hover:bg-gray-100 ${getLinkClass(
                        "/dropdown3"
                      )}`}
                    >
                      Dropdown 3
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dropdown4"
                      className={`block px-4 py-2 hover:bg-gray-100 ${getLinkClass(
                        "/dropdown4"
                      )}`}
                    >
                      Dropdown 4
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <Link
          to="/about"
          className="hidden md:inline-block text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm ml-4"
        >
          Get Started
        </Link>

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
