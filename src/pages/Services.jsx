import React from "react";
import { motion as Motion } from "framer-motion";

const services = [
  {
    title: "Consumer Lists",
    icon: "👥",
    description: `Our extensive collection of consumer lists is tailored to drive higher response rates, expand your sales opportunities, and optimize your marketing budget for maximum efficiency.`,
  },
  {
    title: "Business Lists",
    icon: "🏢",
    description: `Octane Data's business lists provide accurate, deliverable information with global coverage, ranging from home-based operations to Fortune 500 companies. Our comprehensive database spans every industry and job title across nearly every country, ensuring you have access to a vast array of decision-makers.

Our targeted business lists enable you to quickly connect with key prospects, offering advanced business targeting selects to help you pinpoint your ideal audience. This guarantees that your B2B marketing campaigns reach only the most qualified leads.

With our meticulous data hygiene practices and cutting-edge targeting techniques, your marketing efforts will reach their full potential, maximizing your ROI. We deliver lists tailored to your needs, available in Excel format or any other format you prefer.

There are no contracts, subscriptions, or complicated downloads—our lists are ready to use. We provide only the contacts you need, saving you time and effort by eliminating irrelevant data.`,
  },
  {
    title: "Data Hygiene",
    icon: "🧹",
    description: `We specialize in accurate and efficient data hygiene services. If you have an outdated or old list or database and plan to use it for your next marketing campaign, we offer a range of hygiene services to ensure your list is in optimal condition before deployment.`,
  },
  {
    title: "Phone Append",
    icon: "📞",
    description: `Missing phone numbers in your database? Our phone append services can fill the gap, ensuring you have the contact information you need to reach your audience effectively.`,
  },
  {
    title: "Address Append",
    icon: "🏠",
    description: `We add missing physical address information to your existing email list, ensuring you have a complete and accurate database for all your marketing efforts.`,
  },
  {
    title: "Social Media Append",
    icon: "📱",
    description: `Connect with your clients on their preferred platform. While some may not prefer calls or emails, many enjoy engaging on social media. Our social media append services help you expand your outreach.`,
  },
  {
    title: "Reverse Phone Append",
    icon: "🔁",
    description: `Our reverse phone append service adds missing name and address details to your list of telephone numbers, enriching your database for better targeting.`,
  },
  {
    title: "Email Append",
    icon: "📧",
    description: `We enhance your existing email list by adding missing physical address information, ensuring a more complete and accurate database for your marketing campaigns.`,
  },
  {
    title: "Reverse Email Append",
    icon: "🔄",
    description: `We help by adding missing name, title, and address information to your email list, giving you a fuller picture of your contacts to optimize your outreach efforts.`,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-blue-800"
        >
          Our Services
        </Motion.h2>
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Octane Data offers premium consumer and business lists, data hygiene,
          and append services to power your marketing and sales strategies.
        </Motion.p>

        <div className="mt-12 space-y-8">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow hover:bg-blue-50"
            >
              <div className="text-4xl text-blue-600 mb-3 text-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line text-justify leading-relaxed">
                {service.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
