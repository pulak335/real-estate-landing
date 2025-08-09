import React from 'react';

import Image from 'next/image';

const Agents = () => {
  return (
    <section id="agents" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Meet Our Expert Agents
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
            {/* Agent Card 1 */}
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 p-6">
              <Image
                src="/agent1.svg" // Placeholder image
                alt="Agent Jane Doe"
                width={200}
                height={200}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Jane Doe
              </h4>
              <p className="text-blue-600 mb-4 text-lg">Senior Agent</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Contact
              </button>
            </div>

            {/* Agent Card 2 */}
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 p-6">
              <Image
                src="/agent2.svg" // Placeholder image
                alt="Agent John Smith"
                width={200}
                height={200}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                John Smith
              </h4>
              <p className="text-blue-600 mb-4 text-lg">Lead Agent</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Contact
              </button>
            </div>

            {/* Agent Card 3 */}
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 p-6">
              <Image
                src="/agent3.svg" // Placeholder image
                alt="Agent Emily White"
                width={200}
                height={200}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Emily White
              </h4>
              <p className="text-blue-600 mb-4 text-lg">Associate Agent</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Contact
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;