'use client';

import React from 'react';
import Image from 'next/image';

const PropertyTypeSection = () => {
  const propertyTypes = [
    {
      name: 'Palaces',
      description: 'Luxurious and grand residences offering unparalleled elegance and space.',
      image: '/property1.svg', // Placeholder image
      link: '/buy-property?type=palace',
    },
    {
      name: 'Villas',
      description: 'Spacious and private homes, perfect for families seeking comfort and exclusivity.',
      image: '/property2.svg', // Placeholder image
      link: '/buy-property?type=villa',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">Explore Property Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {propertyTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative h-64 w-full">
                <Image
                  src={type.image}
                  alt={type.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{type.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.description}</p>
                <a
                  href={type.link}
                  className="inline-block bg-indigo-600 text-white text-lg font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  View {type.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeSection;