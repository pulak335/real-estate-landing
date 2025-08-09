'use client';

'use client';

import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';

const DocumentsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Client Agreement - John Doe', type: 'PDF', date: '2024-07-15', status: 'Signed' },
    { id: 2, name: 'Property Disclosure - 123 Main St', type: 'PDF', date: '2024-07-10', status: 'Pending' },
    { id: 3, name: 'Offer Letter - Jane Smith', type: 'DOCX', date: '2024-07-01', status: 'Approved' },
    { id: 4, name: 'Lease Agreement - Apt 4B', type: 'PDF', date: '2024-06-20', status: 'Signed' },
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newDocument, setNewDocument] = useState({
    name: '',
    type: '',
    date: '',
    status: 'Pending',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDocument({ ...newDocument, [name]: value });
  };

  const handleFileChange = (e) => {
    // In a real application, you would handle file uploads here.
    // For now, we'll just set the name.
    setNewDocument({ ...newDocument, name: e.target.files[0].name });
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend.
    setDocuments([...documents, { id: documents.length + 1, ...newDocument }]);
    setNewDocument({ name: '', type: '', date: '', status: 'Pending' });
    setShowUploadModal(false);
  };

  return (
    <div className="flex bg-gray-100">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />

      {/* Main content */}
      <main className={`flex-1 p-6 overflow-y-auto ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Document Management</h1>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search documents..."
              className="p-2 border border-gray-300 rounded-md w-1/2"
            />
            <select className="p-2 border border-gray-300 rounded-md">
              <option value="">All Types</option>
              <option value="PDF">PDF</option>
              <option value="DOCX">DOCX</option>
              <option value="JPG">JPG</option>
            </select>
            <select className="p-2 border border-gray-300 rounded-md">
              <option value="">All Statuses</option>
              <option value="Signed">Signed</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
            </select>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Upload Document
            </button>
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">My Documents</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Document Name</th>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{doc.name}</td>
                  <td className="py-2 px-4 border-b">{doc.type}</td>
                  <td className="py-2 px-4 border-b">{doc.date}</td>
                  <td className="py-2 px-4 border-b">{doc.status}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-600 hover:underline mr-2">View</button>
                    <button className="text-green-600 hover:underline mr-2">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </main>

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">Upload New Document</h2>
            <form onSubmit={handleUploadSubmit}>
              <div className="mb-4">
                <label htmlFor="documentName" className="block text-gray-700 text-sm font-bold mb-2">
                  Document Name:
                </label>
                <input
                  type="text"
                  id="documentName"
                  name="name"
                  value={newDocument.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g., Client Agreement"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="documentType" className="block text-gray-700 text-sm font-bold mb-2">
                  Document Type:
                </label>
                <select
                  id="documentType"
                  name="type"
                  value={newDocument.type}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="PDF">PDF</option>
                  <option value="DOCX">DOCX</option>
                  <option value="JPG">JPG</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="documentDate" className="block text-gray-700 text-sm font-bold mb-2">
                  Date:
                </label>
                <input
                  type="date"
                  id="documentDate"
                  name="date"
                  value={newDocument.date}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="documentFile" className="block text-gray-700 text-sm font-bold mb-2">
                  Upload File:
                </label>
                <input
                  type="file"
                  id="documentFile"
                  name="file"
                  onChange={handleFileChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;