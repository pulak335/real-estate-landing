'use client';

'use client';

import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const LeadsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const leads = [
    {
      id: 1,
      name: 'Alice Smith',
      contact: 'alice.smith@example.com',
      status: 'New',
      propertyOfInterest: '4-bed villa',
    },
    {
      id: 2,
      name: 'Bob Johnson',
      contact: 'bob.j@example.com',
      status: 'Contacted',
      propertyOfInterest: '2-bed apartment',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      contact: 'charlie.b@example.com',
      status: 'Qualified',
      propertyOfInterest: 'Commercial property',
    },
    {
      id: 4,
      name: 'Diana Prince',
      contact: 'diana.p@example.com',
      status: 'Closed',
      propertyOfInterest: 'Luxury condo',
    },
  ];

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Client Leads</h1>

            {/* Filter and Search Bar (Placeholder) */}
            <div className="mb-6 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search leads..."
                className="w-1/3 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
                Add New Client
              </button>
              <div className="flex space-x-4">
                <select className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Statuses</option>
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                  <option>Closed</option>
                </select>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Client Name</th>
                    <th className="py-3 px-6 text-left">Contact Info</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-left">Property of Interest</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">{lead.name}</td>
                      <td className="py-3 px-6 text-left">{lead.contact}</td>
                      <td className="py-3 px-6 text-left">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            lead.status === 'New' ? 'bg-blue-200 text-blue-800' :
                            lead.status === 'Contacted' ? 'bg-yellow-200 text-yellow-800' :
                            lead.status === 'Qualified' ? 'bg-green-200 text-green-800' :
                            'bg-gray-200 text-gray-800'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-left">{lead.propertyOfInterest}</td>
                      <td className="py-3 px-6 text-center">
                        <button className="bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-700 transition duration-300">
                          Contact
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeadsPage;