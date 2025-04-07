import React from "react";
import { Link } from "react-router-dom";

const ErrorRoute = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[70vh] px-4">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorRoute;
