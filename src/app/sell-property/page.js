import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SellPropertyPage = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sell a Property</h2>
        <p className="text-gray-700 text-lg mb-8 text-center">Ready to sell your property? We make the process seamless and stress-free. Get the best value for your home with our expert guidance.</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. List Your Property</h3>
            <p className="text-gray-600">Provide details about your property, including its features, size, and desired price. Our easy-to-use listing tool helps you create an attractive profile for potential buyers.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Marketing and Exposure</h3>
            <p className="text-gray-600">We leverage a wide network and advanced marketing strategies to ensure your property gets maximum exposure. From professional photography to targeted online campaigns, we attract the right buyers.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Close the Deal</h3>
            <p className="text-gray-600">Our agents will assist you through negotiations, offers, and all necessary paperwork. We aim for a smooth and efficient closing process, ensuring you get the best possible outcome.</p>
          </div>

          <div className="text-center pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 text-xl">
              List Your Property Now
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SellPropertyPage;