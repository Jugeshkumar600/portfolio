import React from "react";

const contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-3xl shadow-lg max-w-2xl w-full p-8 md:p-12">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Have questions or comments? We’d love to hear from you!
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-4 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Optional Info */}
        <div className="mt-8 text-center text-gray-500">
          <p>Email: support@example.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
