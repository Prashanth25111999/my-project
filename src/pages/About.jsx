import React from "react";
import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-32">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-6">
          Who We Are
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
          At <span className="font-semibold text-blue-700">YourCompany</span>,
          we specialize in delivering cutting-edge data solutions, AI
          integration, and scalable software systems tailored to your business
          needs. Our mission is to empower innovation, boost performance, and
          help organizations thrive in a digital-first world.
        </p>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {[
          {
            title: "Our Vision",
            text: "To revolutionize the way businesses harness technology.",
            icon: "🌍",
          },
          {
            title: "Our Mission",
            text: "Deliver quality-driven digital solutions that scale.",
            icon: "🚀",
          },
          {
            title: "Our Values",
            text: "Innovation. Integrity. Impact.",
            icon: "💡",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </Motion.div>
    </section>
  );
};

export default About;
