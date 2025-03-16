import React from 'react';

const Header = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center justify-between">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      <div className="flex items-center mb-4 md:mb-0">
        <div className="mr-4 flex-shrink-0 bg-gray-100 rounded-full p-2">
          <img 
            src="https://play-lh.googleusercontent.com/oCG2RNsN6BrsrAYfKbg5QIu--yG3BMsr8GhOpN3AoBjxx1o8BtVpn0Sto3g9YQZn19s" 
            alt="Super.One Logo" 
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-2xl" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
            Super.One Fan Battle
          </h1>
          <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            Performance Dashboard
          </p>
        </div>
      </div>
      
      <div className="text-right">
        <p className="text-gray-700 font-medium" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          Reporting Period:
        </p>
        <p className="text-gray-800" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          January 30 - March 15, 2025
        </p>
      </div>
    </div>
  );
};

export default Header;
