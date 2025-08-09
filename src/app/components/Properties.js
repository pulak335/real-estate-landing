import React from 'react';

import Image from 'next/image';

const Properties = () => {
  return (
    <section id="properties" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Featured Properties
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
            {/* Property Card 1 */}
            <div className="flex justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/property1.svg" // Placeholder image
                alt="Modern Family Home"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Modern Family Home
                </h4>
                <p className="text-gray-600 mb-4 text-lg">3 Bed | 2 Bath | 1800 sqft</p>
                <p className="text-3xl font-extrabold text-blue-700">$450,000</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="flex justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/property2.svg" // Placeholder image
                alt="Luxury Downtown Condo"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Luxury Downtown Condo
                </h4>
                <p className="text-gray-600 mb-4 text-lg">2 Bed | 2 Bath | 1200 sqft</p>
                <p className="text-3xl font-extrabold text-blue-700">$620,000</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="flex justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <Image
                src="/property3.svg" // Placeholder image
                alt="Spacious Suburban Villa"
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Spacious Suburban Villa
                </h4>
                <p className="text-gray-600 mb-4 text-lg">5 Bed | 4 Bath | 3500 sqft</p>
                <p className="text-3xl font-extrabold text-blue-700">$980,000</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;