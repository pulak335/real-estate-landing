'use client';

import Image from 'next/image';

const PropertyCard = ({ listing, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <Image src={listing.image} alt={listing.title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{listing.title}</h2>
        <p className="text-gray-700 text-lg font-bold mb-1">{listing.price}</p>
        <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            listing.status === 'Active' ? 'bg-green-200 text-green-800' :
            listing.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
            'bg-red-200 text-red-800'
          }`}
        >
          {listing.status}
        </span>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={() => onEdit(listing.id)} className="text-blue-600 hover:text-blue-800">Edit</button>
          <button onClick={() => onDelete(listing.id)} className="text-red-600 hover:text-red-800">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;