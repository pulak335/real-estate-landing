import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">RealEstateCo.</h4>
            <p className="text-gray-400">Your dream home awaits.</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">Sitemap</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-700 pt-8 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} RealEstateCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;