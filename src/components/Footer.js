import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      <p className="text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
        Super.One Fan Battle Analytics Dashboard
      </p>
      <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
        Data Compiled by RedBox Mobile • Last Updated: March 16, 2025
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <button 
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer" 
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          onClick={() => alert("Download report functionality will be implemented here")}
        >
          Download Full Report
        </button>
        <button 
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer" 
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          onClick={() => alert("Schedule update functionality will be implemented here")}
        >
          Schedule Update
        </button>
        <button 
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer" 
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          onClick={() => alert("Share dashboard functionality will be implemented here")}
        >
          Share Dashboard
        </button>
      </div>
    </div>
  );
};

export default Footer;