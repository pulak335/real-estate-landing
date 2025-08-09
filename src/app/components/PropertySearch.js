import React from 'react';

const PropertySearch = () => {
  return (
    <section className="bg-white py-12 shadow-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Your Next Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-full md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter city, neighborhood, or address"
            />
          </div>
          <div>
            <label htmlFor="property-type" className="block text-sm font-medium text-gray-700">Property Type</label>
            <select
              id="property-type"
              name="property-type"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Any</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div>
            <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">Price Range</label>
            <select
              id="price-range"
              name="price-range"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Any</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-250000">$100,000 - $250,000</option>
              <option value="250000-500000">$250,000 - $500,000</option>
              <option value="500000+">$500,000+</option>
            </select>
          </div>
          <div className="col-span-full flex justify-center mt-4">
            <button
              type="button"
              className="w-full md:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;