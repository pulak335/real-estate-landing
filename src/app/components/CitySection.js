import React from 'react';

const CitySection = () => {
  const cities = [
    { name: 'New York', image: '/property1.svg' },
    { name: 'Los Angeles', image: '/property2.svg' },
    { name: 'Chicago', image: '/property3.svg' },
    { name: 'Houston', image: '/property1.svg' },
    { name: 'Phoenix', image: '/property2.svg' },
    { name: 'Philadelphia', image: '/property3.svg' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Explore Properties by City</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{city.name}</h3>
                <button className="mt-4 px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  View Properties
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitySection;