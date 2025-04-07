import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get in touch with us.
          </h2>
          <p className="mb-6 text-gray-700">
            Our team is dedicated to the up keep and maintenance of our billions
            of records on a regular basis. We put our customers before
            ourselves. Get in touch with us and we will help your business grow.
          </p>

          <div className="space-y-5 text-base">
            <div>
              <h4 className="font-semibold">Postal Address</h4>
              <p>4512 Legacy Drive, Suite 100 Plano, TX 75024</p>
            </div>
            <div>
              <h4 className="font-semibold">General Enquiries</h4>
              <p>info@execela.com</p>
            </div>
            <div>
              <h4 className="font-semibold">Business Phone</h4>
              <p>+1 (469) 850 6029</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Looking for an excellent business idea?
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
              <input
                type="email"
                placeholder="E-mail*"
                className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            ></textarea>
            <button
              type="submit"
              className=" bg-blue-600 text-white py-2 px-6 rounded transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 shadow-lg rounded overflow-hidden">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0795508389514!2d-122.42067968468296!3d37.77902657975805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f1b1c25%3A0x4aaac0a8a743cd9f!2sCity%20Hall%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sin!4v1614707953737!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
export default Contact;
