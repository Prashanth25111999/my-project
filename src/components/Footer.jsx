import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-10 pb-6 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Social & Site Name */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-bold text-blue-800">Octane Data</h2>

          {/* Social Icons */}
          <div className="flex space-x-5 text-xl">
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

        {/* Footer Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm">
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Copyright & Credits */}
        <div className="text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} <strong>Octane Data</strong>. All
            Rights Reserved.
          </p>
          {/* <p className="mt-1">
            Designed by{" "}
            <a
              href="https://bootstrapmade.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-700"
            >
              BootstrapMade
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
