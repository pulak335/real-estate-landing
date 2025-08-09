'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });
      if (response.ok) {
        router.push('/'); // Redirect to home page after successful logout
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };


  const navItems = [
    { name: 'Dashboard Overview', href: '/agent/dashboard' },
    { name: 'My Listings', href: '/agent/dashboard/listings' },
    { name: 'Add New Listing', href: '/agent/dashboard/add-listing' },
    { name: 'Leads & Clients', href: '/agent/dashboard/leads' },
    { name: 'Appointments', href: '/agent/dashboard/appointments' },
    { name: 'Commissions', href: '/agent/dashboard/commissions' },
    { name: 'Documents', href: '/agent/dashboard/documents' },
    { name: 'Chat / Messages', href: '/agent/dashboard/chat' },
    { name: 'Profile & Settings', href: '/agent/dashboard/settings' },
  ];

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && <h1 className="text-2xl font-semibold">Agent Dashboard</h1>}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className={`flex items-center p-2 rounded-md ${pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
            <span className="mr-3">
              {/* Icon placeholder */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5l-1-1H9l-1 1v5m5 0h-5" /></svg>
            </span>
            {!isCollapsed && item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button onClick={handleLogout} className="flex items-center p-2 rounded-md hover:bg-gray-700 w-full text-left">
          <span className="mr-3">
            {/* Icon placeholder */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </span>
          {!isCollapsed && 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;