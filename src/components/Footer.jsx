import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 py-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-sm">
        {/* Logo & Social */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-blue-800">Octane Data</h2>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 mb-1">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/industry" className="hover:underline">
                Industry List
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900 mb-1">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} <strong>Octane Data</strong>. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
