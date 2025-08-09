import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FindAgentsPage = () => {
  return (

    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Find Your Perfect Agent</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Connect with experienced real estate agents who can help you navigate the market.
        </p>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Search for Agents</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter city, state, or zip code"
              />
            </div>
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
              <select
                id="specialty"
                name="specialty"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a specialty</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="luxury">Luxury Properties</option>
                <option value="first-time">First-Time Homebuyers</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Search Agents
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/agent1.svg" alt="Agent 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Doe</h3>
            <p className="text-gray-600 mb-4">Residential Specialist</p>
            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              View Profile
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/agent2.svg" alt="Agent 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">John Smith</h3>
            <p className="text-gray-600 mb-4">Commercial Properties</p>
            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              View Profile
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/agent3.svg" alt="Agent 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily White</h3>
            <p className="text-gray-600 mb-4">Luxury Homes</p>
            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FindAgentsPage;