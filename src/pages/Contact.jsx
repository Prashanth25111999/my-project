import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get in touch with us.
          </h2>
          <p className="mb-6 text-gray-700">
            Our team is dedicated to the upkeep and maintenance of our billions
            of records on a regular basis. We put our customers before
            ourselves. Get in touch with us and we will help your business grow.
          </p>

          <div className="space-y-5 text-base">
            <div>
              <h4 className="font-semibold text-lg">Postal Address</h4>
              <p className="text-gray-600">
                Old Madras Rd, Krishna Reddy Industrial Estate, Dooravani Nagar,
                Bengaluru, Karnataka 560016
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">General Enquiries</h4>
              <p className="text-gray-600">info@octanedb.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Business Phone</h4>
              <p className="text-gray-600">+91 7975465526</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-72 md:h-auto">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.014656351958!2d-96.78702158477954!3d33.07831018088543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c196dce7ce76b%3A0x70b0d0b6dd4b88d!2s4512%20Legacy%20Dr%20%23100%2C%20Plano%2C%20TX%2075024%2C%20USA!5e0!3m2!1sen!2sin!4v1614707953737!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
