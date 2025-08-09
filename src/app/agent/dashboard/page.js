'use client';


import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import PropertyCard from '../../components/PropertyCard';
import { useRouter } from 'next/navigation';
import { supabase } from "../../../lib/supabaseClient";

const sampleAppointments = [
  {
    id: 1,
    title: 'Property Showing - 123 Main St',
    date: new Date(new Date().setDate(new Date().getDate() + 1), 10, 0), // Tomorrow
    client: 'Alice Johnson',
    status: 'Confirmed',
  },
  {
    id: 2,
    title: 'Client Meeting - Bob Williams',
    date: new Date(new Date().setDate(new Date().getDate() + 3), 14, 30), // 3 days from now
    client: 'Bob Williams',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Open House - 456 Oak Ave',
    date: new Date(new Date().setDate(new Date().getDate() + 7), 11, 0), // 7 days from now
    client: 'N/A',
    status: 'Confirmed',
  },
  {
    id: 4,
    title: 'Property Showing - 789 Pine Rd',
    date: new Date(new Date().setDate(new Date().getDate() + 2), 9, 0), // 2 days from now
    client: 'Charlie Brown',
    status: 'Confirmed',
  },
];


const AgentDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        router.push('/signin'); // Redirect to sign-in if not logged in
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.user_metadata && user.user_metadata.user_type !== 'agent') {
        router.push('/'); // Redirect to home if not an agent
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="flex bg-gray-100">
        <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome back, John Doe!</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1: Total Listings */}
          <div className="bg-blue-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Total Listings</h2>
            <p className="text-4xl font-bold text-blue-900">125</p>
          </div>

          {/* Card 2: Active Leads */}
          <div className="bg-green-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">Active Leads</h2>
            <p className="text-4xl font-bold text-green-900">48</p>
          </div>

          {/* Card 3: Upcoming Appointments */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-2">Upcoming Appointments</h2>
            <p className="text-4xl font-bold text-yellow-900">7</p>
          </div>

          {/* Card 4: Total Earnings (Commission) */}
          <div className="bg-purple-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">Total Earnings</h2>
            <p className="text-4xl font-bold text-purple-900">$150,000</p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Add New Listing
            </button>
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM12 14c-1.47 0-2.85.6-3.85 1.6S6 18.53 6 20h12c0-1.47-.6-2.85-1.6-3.85S13.47 14 12 14z"></path></svg>
              Invite New Client
            </button>
          </div>
        </div>

        {/* Property Card UI */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">My Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
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
            ].map((listing) => (
              <PropertyCard
                key={listing.id}
                listing={listing}
                onEdit={(id) => console.log('Edit listing:', id)}
                onDelete={(id) => console.log('Delete listing:', id)}
              />
            ))}
          </div>
        </div>

        {/* Upcoming Appointments Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>
          {
            sampleAppointments.length > 0 ? (
              <ul className="space-y-4">
                {sampleAppointments
                  .filter(app => app.date >= new Date())
                  .sort((a, b) => a.date - b.date)
                  .slice(0, 3) // Display next 3 upcoming appointments
                  .map(app => (
                    <li key={app.id} className="border p-4 rounded-lg flex justify-between items-center bg-white">
                      <div>
                        <p className="text-lg font-medium">{app.title}</p>
                        <p className="text-gray-600">{app.date.toLocaleString()}</p>
                        <p className="text-gray-600">Client: {app.client}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${app.status === 'Confirmed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {app.status}
                      </span>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-gray-600">No upcoming appointments.</p>
            )
          }
        </div>

        {/* Lead Table (Placeholder) */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Client Leads</h2>
          <p className="text-gray-600">[Lead Table: client name, contact info, status, property of interest, contact button]</p>
        </div>
      </div>
        </div>
    </main>
    </div>
  );
};

export default AgentDashboard;
// Remove the duplicate import below
