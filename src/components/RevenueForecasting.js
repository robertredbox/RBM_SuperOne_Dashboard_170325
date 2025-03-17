import React, { useState, useEffect } from 'react';

const RevenueForecasting = () => {
  const [mediaSpend, setMediaSpend] = useState(25000);
  const [userLifetimeValue, setUserLifetimeValue] = useState(2.50);
  const [projectedInstalls, setProjectedInstalls] = useState(22935);
  const [projectedRevenue, setProjectedRevenue] = useState(57337);
  const [roi, setRoi] = useState(229.3);
  
  // Update projections when inputs change
  useEffect(() => {
    // Calculate projections based on media spend and user LTV
    // These are simplified calculations based on the shown values
    // In a real app, you'd use more complex formulas
    
    // For installs: (media spend / baseline) * constant
    const calculatedInstalls = Math.round((mediaSpend / 25000) * 22935);
    
    // For revenue: installs * user lifetime value
    const calculatedRevenue = Math.round(calculatedInstalls * userLifetimeValue);
    
    // For ROI: (revenue / media spend) * 100
    const calculatedRoi = ((calculatedRevenue / mediaSpend) * 100).toFixed(1);
    
    setProjectedInstalls(calculatedInstalls);
    setProjectedRevenue(calculatedRevenue);
    setRoi(calculatedRoi);
  }, [mediaSpend, userLifetimeValue]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
        Revenue Forecasting
      </h2>
      
      {/* Media Spend Slider */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <label style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }} className="text-gray-700">
            Media Spend (USD)
          </label>
          <span className="font-medium text-indigo-600">${mediaSpend.toLocaleString()}</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 w-16">$5,000</span>
          <input
            type="range"
            min="5000"
            max="100000"
            step="1000"
            value={mediaSpend}
            onChange={(e) => setMediaSpend(Number(e.target.value))}
            className="w-full mx-2 accent-indigo-600"
          />
          <span className="text-xs text-gray-500 w-16 text-right">$100,000</span>
        </div>
      </div>
      
      {/* User Lifetime Value Slider */}
      <div className="mb-8">
        <div className="flex justify-between mb-1">
          <label style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }} className="text-gray-700">
            User Lifetime Value (USD)
          </label>
          <span className="font-medium text-indigo-600">${userLifetimeValue.toFixed(2)}</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 w-16">$0.50</span>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.10"
            value={userLifetimeValue}
            onChange={(e) => setUserLifetimeValue(Number(e.target.value))}
            className="w-full mx-2 accent-indigo-600"
          />
          <span className="text-xs text-gray-500 w-16 text-right">$10.00</span>
        </div>
      </div>
      
      {/* Projections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Projected Installs */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-blue-800 text-sm uppercase font-medium mb-1" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            Projected Installs
          </h3>
          <div className="text-3xl font-bold text-blue-900" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            {projectedInstalls.toLocaleString()}
          </div>
          <div className="text-xs text-blue-600 mt-1" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            Based on Avg CPI: $1.09
          </div>
        </div>
        
        {/* Projected Revenue */}
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="text-green-800 text-sm uppercase font-medium mb-1" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            Projected Revenue
          </h3>
          <div className="text-3xl font-bold text-green-900" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            ${projectedRevenue.toLocaleString()}
          </div>
          <div className="text-xs text-green-600 mt-1" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            ROI: {roi}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueForecasting;