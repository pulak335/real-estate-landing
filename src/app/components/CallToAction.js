import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Find Your Perfect Property?
        </h3>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Join thousands of satisfied clients who found their dream homes with RealEstateCo. Your journey starts here.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
};

export default CallToAction;