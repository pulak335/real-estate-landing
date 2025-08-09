import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const BuyPropertyPage = () => {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Buy a Property</h2>
        <p className="text-gray-700 text-lg mb-8 text-center">Your journey to finding the perfect home starts here. Explore our listings, connect with expert agents, and secure your dream property.</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Search for Properties</h3>
            <p className="text-gray-600">Browse our extensive database of properties. Use filters to narrow down your search by location, price, property type, and more. Each listing includes detailed information, high-quality photos, and virtual tours.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Connect with Agents</h3>
            <p className="text-gray-600">Our experienced real estate agents are here to guide you. They can provide insights into local markets, arrange viewings, and help you negotiate the best deals. Find an agent that specializes in your desired area.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Secure Financing</h3>
            <p className="text-gray-600">We can connect you with trusted mortgage lenders to help you secure financing. Get pre-approved, understand your loan options, and make your offer stand out.</p>
          </div>

          <div className="text-center pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 text-xl">
              Start Your Property Search
            </button>
          </div>
        </div>
      </div>
    </div>


  );
};

export default BuyPropertyPage;