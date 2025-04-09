import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-[70vh] relative py-20 flex items-center bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-4">
                Grow your revenue with us
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                At Octane Data, we empower businesses to grow by providing
                highly targeted, industry-specific B2B email lists that help you
                reach the right audience at the right moment. Our solutions are
                designed to enhance your marketing strategy, identify new
                clients, and maximize your sales potential. With us, you’ll
                unlock new opportunities, expand your global reach, and fuel
                your business success. Let us help you drive profits and
                accelerate growth—because when you grow, we grow!
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-4">
                <Link
                  to="/about"
                  className="inline-block text-sm font-medium tracking-wide px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src="src/assets/body/hero-img.png"
                alt="Hero"
                className="w-full max-w-md mx-auto "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-300"
              >
                <img
                  src={`src/assets/clients/client-${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  className="p-4 max-w-[90%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
