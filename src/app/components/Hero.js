import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Add a subtle pattern or image here if desired */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up">
          Find Your Dream Home with Ease
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up animation-delay-200">
          Explore a curated selection of properties or connect with our top-rated real estate experts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#properties"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 animate-fade-in-up animation-delay-400"
          >
            Buy a Property
          </a>
          <a
            href="#contact"
            className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition duration-300 animate-fade-in-up animation-delay-600"
          >
            Sell a Property
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;