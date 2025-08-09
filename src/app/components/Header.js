'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

const Header = () => {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Initial check for session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/signin');
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <header className="bg-white shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          <a href="/" className="hover:text-blue-700 transition duration-300">RealEstateCo.</a>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li>
              <a href="/buy-property" className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-300">
                Buy a Property
              </a>
            </li>
            <li>
              <a href="/sell-property" className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-300">
                Sell a Property
              </a>
            </li>
              <li>
                <a href="/find-agents" className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-300">Find Agents</a>
              </li>

            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-300">
                Contact
              </a>
            </li>
            {!user ? (
              <>
                <li>
                  <a href="/signin" className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-300">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="/signup" className="text-gray-700 hover:text-blue-700 text-lg font-medium transition duration-300">
                    Sign Up
                  </a>
                </li>
              </>
            ) : (
              <li className="relative">
                <button onClick={toggleProfileMenu} className="focus:outline-none">
                  <svg className="w-8 h-8 text-gray-700 hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                {showProfileMenu && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                    <li>
                      <a href="/agent/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Dashboard</a>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;