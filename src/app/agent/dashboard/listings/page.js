'use client';

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PropertyCard from '../../../components/PropertyCard';
import Sidebar from '../../../components/Sidebar';

const ListingsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const listings = [
    {
      id: 1,
      image: '/property1.svg',
      title: 'Modern Family Home',
      price: '$450,000',
      location: '123 Main St, Anytown',
      status: 'Active',
    },
    {
      id: 2,
      image: '/property2.svg',
      title: 'Cozy Downtown Apartment',
      price: '$250,000',
      location: '456 Oak Ave, Cityville',
      status: 'Pending',
    },
    {
      id: 3,
      image: '/property3.svg',
      title: 'Spacious Suburban Villa',
      price: '$750,000',
      location: '789 Pine Ln, Suburbia',
      status: 'Sold',
    },
  ];

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">My Listings</h1>

            {/* Filter and Search Bar (Placeholder) */}
            <div className="mb-6 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search listings..."
                className="w-1/3 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-4">
                <select className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Sold</option>
                </select>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <PropertyCard 
                  key={listing.id}
                  listing={listing}
                  onEdit={(id) => console.log('Edit listing:', id)}
                  onDelete={(id) => console.log('Delete listing:', id)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListingsPage;