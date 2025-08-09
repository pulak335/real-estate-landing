'use client';

'use client';

import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const CommissionsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const sampleCommissions = [
    {
      id: 1,
      transaction: 'Sale of 123 Main St',
      date: '2024-07-20',
      amount: 7500,
      status: 'Paid',
    },
    {
      id: 2,
      transaction: 'Rental of 456 Oak Ave',
      date: '2024-07-25',
      amount: 1200,
      status: 'Pending',
    },
    {
      id: 3,
      transaction: 'Sale of 789 Pine Ln',
      date: '2024-08-01',
      amount: 9200,
      status: 'Paid',
    },
    {
      id: 4,
      transaction: 'Referral Bonus',
      date: '2024-08-05',
      amount: 500,
      status: 'Pending',
    },
  ];

  const totalEarned = sampleCommissions.reduce((sum, comm) => sum + comm.amount, 0);
  const pendingCommissions = sampleCommissions.filter(comm => comm.status === 'Pending').reduce((sum, comm) => sum + comm.amount, 0);

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Commissions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Earned</h2>
            <p className="text-3xl font-bold text-green-600">${totalEarned.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Pending Commissions</h2>
            <p className="text-3xl font-bold text-yellow-600">${pendingCommissions.toLocaleString()}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Commission History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Transaction
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleCommissions.map(comm => (
                  <tr key={comm.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comm.transaction}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{comm.date}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">${comm.amount.toLocaleString()}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${comm.status === 'Paid' ? 'text-green-900' : 'text-yellow-900'}`}>
                        <span aria-hidden="true" className={`absolute inset-0 opacity-50 rounded-full ${comm.status === 'Paid' ? 'bg-green-200' : 'bg-yellow-200'}`}></span>
                        <span className="relative">{comm.status}</span>
                      </span>
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

export default CommissionsPage;