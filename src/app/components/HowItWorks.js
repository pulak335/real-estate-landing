import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <Image src="/file.svg" alt="Search Icon" width={48} height={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">1. Search & Discover</h4>
            <p className="text-gray-600 text-lg">
              Browse thousands of listings, filter by your preferences, and find properties that match your dreams.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <Image src="/agent1.svg" alt="Agent Icon" width={48} height={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">2. Connect with Agents</h4>
            <p className="text-gray-600 text-lg">
              Get expert advice and personalized assistance from our top-rated real estate professionals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <Image src="/property1.svg" alt="Home Icon" width={48} height={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">3. Close the Deal</h4>
            <p className="text-gray-600 text-lg">
              Navigate the buying or selling process smoothly with our support, from offer to closing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;