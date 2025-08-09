'use client';

import React, { useState } from 'react';
import  Sidebar  from '../../../components/Sidebar';

const AddListingPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      <main className={`flex-1 p-6 transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <h1 className="text-3xl font-bold mb-6">Add New Listing</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Property Title</label>
                <input type="text" id="title" name="title" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., Spacious Family Home" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 123 Main St, Anytown, USA" />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
                <input type="number" id="price" name="price" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 500000" />
              </div>
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Property Type</label>
                <select id="type" name="type" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Land</option>
                </select>
              </div>
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
                <input type="number" id="bedrooms" name="bedrooms" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 3" />
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">Bathrooms</label>
                <input type="number" id="bathrooms" name="bathrooms" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 2" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows="5" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Provide a detailed description of the property..."></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="images" className="block text-sm font-medium text-gray-700">Property Images</label>
              <input type="file" id="images" name="images" multiple className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add Listing</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddListingPage;