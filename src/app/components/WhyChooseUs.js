import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <Image src="/globe.svg" alt="Global Reach Icon" width={48} height={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h4>
            <p className="text-gray-600 text-lg">
              Access a vast network of properties and buyers worldwide, expanding your opportunities.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <Image src="/window.svg" alt="Expert Guidance Icon" width={48} height={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h4>
            <p className="text-gray-600 text-lg">
              Our experienced agents provide personalized support, ensuring a smooth and informed process.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <Image src="/file.svg" alt="Seamless Process Icon" width={48} height={48} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Seamless Process</h4>
            <p className="text-gray-600 text-lg">
              From browsing to closing, our streamlined platform makes your real estate journey effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;