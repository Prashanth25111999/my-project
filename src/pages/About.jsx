import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaBriefcase,
  FaGem,
  FaBroadcastTower,
  FaChalkboardTeacher,
  FaSmile,
  FaBook,
  FaHeadset,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaSmile />,
    end: 232,
    label: "Happy Clients",
    sub: "consequuntur quae",
  },
  {
    icon: <FaBook />,
    end: 521,
    label: "Projects",
    sub: "adipisci atque cum quia aut",
  },
  {
    icon: <FaHeadset />,
    end: 1453,
    label: "Hours Of Support",
    sub: "aut commodi quaerat",
  },
  {
    icon: <FaUsers />,
    end: 32,
    label: "Hard Workers",
    sub: "rerum asperiores dolor",
  },
];

const About = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-24">
      {/* About Us Section */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-lg">
          At <strong>Octane Data</strong>, we have seen the data market at its
          best and its worst. No matter how tricky the situation, our
          data-driven approach is designed to guide you through challenges and
          transform your investments into valuable sales and marketing
          opportunities. While we’re not the only data provider out there, we
          stand apart due to the exceptional quality of our services. Our goal
          is to deliver clean, highly qualified contact lists, working closely
          with ISPs and ESPs to keep our email databases up to date. Unlike our
          competitors, who may offer complicated mailing lists, we provide
          actual data files that are ready to be seamlessly integrated into your
          CRM software. With a guaranteed 95% deliverability rate, you can trust
          that our contacts will support the success of your marketing
          campaigns. Whether you're targeting businesses or consumers, we are
          here to ensure your marketing efforts are backed by reliable,
          high-quality data.
        </p>
      </Motion.div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* About Content */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-5/12"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            This is why choose us?
          </h3>
          <p className="text-gray-700 mb-6">
            At Octane Data, we empower hundreds of international brands and
            agencies with comprehensive multi-channel marketing solutions. Our
            global network, combined with regional offices and local experts,
            ensures that we deliver tailored strategies that drive success for
            both local and international organizations. End-to-End Marketing
            Solutions Our dedicated team of professionals offers a full spectrum
            of services, including design, preparation, campaign execution, and
            marketing data management. From start to finish, we are here to
            support you every step of the way. Cutting-Edge Technology &
            Expertise With the latest technology and advanced management
            capabilities, we enhance the flexibility, efficiency, and accuracy
            of your enterprise data, providing a seamless experience for your
            marketing initiatives. Commitment to Security & Integrity We take
            data protection seriously. Our commitment to maintaining the
            confidentiality, integrity, and security of your business
            information ensures peace of mind for all our current and
            prospective partners, investment professionals, and their clients.
            Choose Octane Data for a trusted partner that delivers innovative
            solutions and exceptional results.
          </p>
        </Motion.div>

        {/* Why Choose Us Section */}
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-7/12"
        >
          {/* Box 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <FaBriefcase className="text-4xl text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-blue-800 mb-2">
              End-to-End Marketing Solutions
            </h4>
            <p className="text-sm text-gray-600">
              Our team offers a full spectrum of services—from design to
              campaign execution and data management—supporting you every step
              of the way.
            </p>
          </div>
          {/* Box 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <FaGem className="text-4xl text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-blue-800 mb-2">
              Cutting-Edge Technology & Expertise
            </h4>
            <p className="text-sm text-gray-600">
              We enhance flexibility, efficiency, and accuracy using the latest
              technologies to streamline your marketing data experience.
            </p>
          </div>
          {/* Box 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <FaBroadcastTower className="text-4xl text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-blue-800 mb-2">
              Commitment to Security & Integrity
            </h4>
            <p className="text-sm text-gray-600">
              We are serious about protecting your data—ensuring
              confidentiality, integrity, and security across all operations.
            </p>
          </div>
        </Motion.div>
      </div>

      {/* Stats Section */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <img
            src="src/assets/status/stats-img.svg"
            alt="stats"
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-4xl text-blue-600">{stat.icon}</div>
              <div>
                <div className="text-3xl font-bold text-gray-900">
                  <span>{stat.end}</span>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>{stat.label}</strong> <span>{stat.sub}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default About;
