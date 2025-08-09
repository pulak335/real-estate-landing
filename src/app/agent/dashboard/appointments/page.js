'use client';

'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/Sidebar';

const AppointmentsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const sampleAppointments = [
    {
      id: 1,
      title: 'Property Showing - 123 Main St',
      date: new Date(2024, 7, 10, 10, 0),
      client: 'Alice Johnson',
      status: 'Confirmed',
    },
    {
      id: 2,
      title: 'Client Meeting - Bob Williams',
      date: new Date(2024, 7, 12, 14, 30),
      client: 'Bob Williams',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Open House - 456 Oak Ave',
      date: new Date(2024, 7, 15, 11, 0),
      client: 'N/A',
      status: 'Confirmed',
    },
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="p-2 text-center text-gray-400"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();

      calendarDays.push(
        <div
          key={i}
          className={`p-2 text-center cursor-pointer rounded-full ${isToday ? 'bg-blue-200' : ''} ${isSelected ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          {i}
        </div>
      );
    }
    return calendarDays;
  };

  const goToPreviousMonth = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const filteredAppointments = sampleAppointments.filter(app =>
    app.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main Content */}
      <main className={`flex-1 p-8 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Appointments</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
          <div className="flex justify-between items-center mb-4">
            <button onClick={goToPreviousMonth} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Previous</button>
            <h3 className="text-xl font-medium">{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
            <button onClick={goToNextMonth} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Next</button>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-600 mb-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {renderCalendar()}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Appointments for {selectedDate.toDateString()}</h2>
          {filteredAppointments.length > 0 ? (
            <ul className="space-y-4">
              {filteredAppointments.map(app => (
                <li key={app.id} className="border p-4 rounded-lg flex justify-between items-center">
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
            <p className="text-gray-600">No appointments for this date.</p>
          )}
        </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentsPage;