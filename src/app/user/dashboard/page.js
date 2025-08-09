'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from "../../../lib/supabaseClient";

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        router.push('/signin'); // Redirect to sign-in if not logged in
        return;
      }

      // Optional: Check if the user is NOT an agent, if you want to separate dashboards strictly
      // const { data: { user } } = await supabase.auth.getUser();
      // if (user && user.user_metadata && user.user_metadata.user_type === 'agent') {
      //   router.push('/agent/dashboard'); // Redirect agents to their dashboard
      // }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Your Dashboard!</h1>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <svg className="w-12 h-12 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h2a1 1 0 001-1m-6-4a1 1 0 011-1h2a1 1 0 011 1v4m-6-4h4"></path></svg>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Browse Properties</h2>
            <p className="text-gray-700">Find your dream home or investment property.</p>
            <button onClick={() => router.push('/buy-property')} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Start Browsing</button>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <svg className="w-12 h-12 text-green-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 2.872 1.15 5.51 3.02 7.416L12 21l6.06-4.584A12.001 12.001 0 0021.08 12c0-2.872-1.15-5.51-3.02-7.416z"></path></svg>
            <h2 className="text-xl font-semibold text-green-800 mb-2">List Your Property</h2>
            <p className="text-gray-700">Ready to sell? List your property with ease.</p>
            <button onClick={() => router.push('/sell-property')} className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">Sell Property</button>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <svg className="w-12 h-12 text-purple-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-1.47 0-2.85.6-3.85 1.6S6 18.53 6 20h12c0-1.47-.6-2.85-1.6-3.85S13.47 14 12 14z"></path></svg>
            <h2 className="text-xl font-semibold text-purple-800 mb-2">Find an Agent</h2>
            <p className="text-gray-700">Connect with experienced real estate agents.</p>
            <button onClick={() => router.push('/find-agents')} className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300">Find Agents</button>
          </div>
        </div>

        {/* Saved Properties Section (Placeholder) */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">My Saved Properties</h2>
          <p className="text-gray-600">You haven't saved any properties yet. Start browsing to add some!</p>
          {/* Future: Map through saved properties here */}
        </div>

        {/* My Listings Section (Placeholder) */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">My Listings</h2>
          <p className="text-gray-600">You don't have any active listings. List your property today!</p>
          {/* Future: Map through user's listed properties here */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;