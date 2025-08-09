'use client';

'use client';

import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const ProfileSettingsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Real Estate Rd, Agent City, AC 12345',
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // In a real application, send updated profile to backend
    alert('Profile updated successfully!');
    console.log('Updated Profile:', profile);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.new !== password.confirm) {
      alert('New password and confirm password do not match.');
      return;
    }
    // In a real application, send updated password to backend
    alert('Password updated successfully!');
    console.log('Updated Password:', password.new);
    setPassword({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main content */}
      <main className={`flex-1 p-6 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile & Settings</h1>

        {/* Profile Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile Information</h2>
          <form onSubmit={handleProfileSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
              <textarea
                id="address"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
                rows="3"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Profile
            </button>
          </form>
        </div>

        {/* Change Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Change Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">Current Password:</label>
              <input
                type="password"
                id="currentPassword"
                name="current"
                value={password.current}
                onChange={handlePasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">New Password:</label>
              <input
                type="password"
                id="newPassword"
                name="new"
                value={password.new}
                onChange={handlePasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirm"
                value={password.confirm}
                onChange={handlePasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Change Password
            </button>
          </form>
        </div>
        </div>
      </main>
        </div>

  );
};

export default ProfileSettingsPage;