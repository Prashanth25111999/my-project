import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-sm">
            The future of marketing belongs to those who turn data into
            information, information into insights, and insights into
            customer-driven strategies.
          </p>
          <p className="text-sm mt-2">
            We believe in consistent innovation, and a customer-first mindset
            while maintaining the highest quality datasets.
          </p>
          <p className="text-sm mt-2">
            Our team ensures the upkeep of billions of records for your growth.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Headquarters</h2>
          <p className="text-sm">
            2150 SOUTH, 1300 EAST, 500 PMB #1771,
            <br />
            SALT LAKE CITY, UT 84106
            <br />
            UNITED STATES
          </p>
          <p className="text-sm mt-2">Phone: 646-461-2757</p>
          <p className="text-sm">Email: info@galileodata.us</p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us On</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
          <p>
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </p>
          <div className="flex gap-4 items-center text-center">
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
