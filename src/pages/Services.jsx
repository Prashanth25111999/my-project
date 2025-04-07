// src/components/Services.jsx
import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive and modern websites tailored to your needs.",
    icon: "🌐",
  },
  {
    title: "SEO Optimization",
    description: "Improve your website ranking with our SEO services.",
    icon: "⚙️",
  },
  {
    title: "Content Writing",
    description: "Engaging content to attract and retain customers.",
    icon: "✍️",
  },
  {
    title: "Social Media Marketing",
    description: "Boost your brand presence on all major social platforms.",
    icon: "📱",
  },
  {
    title: "Email Marketing",
    description: "Reach your audience with beautifully crafted emails.",
    icon: "📧",
  },
  {
    title: "UI/UX Design",
    description: "User-first design strategies to keep your customers engaged.",
    icon: "🎨",
  },
  {
    title: "Brand Strategy",
    description: "Craft a brand identity that speaks to your audience.",
    icon: "🚀",
  },
  {
    title: "Analytics & Reporting",
    description: "Track, measure, and analyze your digital performance.",
    icon: "📊",
  },
  {
    title: "PPC Advertising",
    description: "Maximize ROI with targeted Pay-Per-Click ad campaigns.",
    icon: "💰",
  },
  {
    title: "Video Production",
    description: "Professional video content for web and social media.",
    icon: "🎬",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl text-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
