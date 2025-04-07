// src/components/Hero.jsx
import React from "react";

const Body = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Your Company
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide top-notch services to help your business grow.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Body;
