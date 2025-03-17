import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import RevenueForecasting from './RevenueForecasting';

const USDRevenue = () => {
  const [activeView, setActiveView] = useState('weekly');
  
  // Weekly revenue data with shortened labels
  const weeklyData = [
    {week: "W1: Jan 30-Feb 5", shortWeek: "W1", displayWeek: "Week 1", android: 134.58, ios: 52, total: 186.58},
    {week: "W2: Feb 6-12", shortWeek: "W2", displayWeek: "Week 2", android: 132.01, ios: 72, total: 204.01},
    {week: "W3: Feb 13-19", shortWeek: "W3", displayWeek: "Week 3", android: 124.70, ios: 40, total: 164.70},
    {week: "W4: Feb 20-26", shortWeek: "W4", displayWeek: "Week 4", android: 159.51, ios: 59, total: 218.51},
    {week: "W5: Feb 27-Mar 5", shortWeek: "W5", displayWeek: "Week 5", android: 134.99, ios: 57, total: 191.99},
    {week: "W6: Mar 6-12", shortWeek: "W6", displayWeek: "Week 6", android: 153.25, ios: 65, total: 218.25},
    {week: "W7: Mar 13-15", shortWeek: "W7", displayWeek: "Week 7", android: 85.00, ios: 28, total: 113.00}
  ];
  
  // Daily data (selected points for readability)
  const dailyData = [
    {date: "Jan 30", android: 6.94, ios: 5, total: 11.94},
    {date: "Feb 3", android: 16.35, ios: 3, total: 19.35},
    {date: "Feb 7", android: 12.72, ios: 13, total: 25.72},
    {date: "Feb 11", android: 11.15, ios: 7, total: 18.15},
    {date: "Feb 15", android: 24.03, ios: 6, total: 30.03},
    {date: "Feb 19", android: 12.33, ios: 9, total: 21.33},
    {date: "Feb 23", android: 27.25, ios: 11, total: 38.25},
    {date: "Feb 27", android: 13.55, ios: 11, total: 24.55},
    {date: "Mar 3", android: 17.97, ios: 5, total: 22.97},
    {date: "Mar 7", android: 14.30, ios: 4, total: 18.30},
    {date: "Mar 11", android: 24.36, ios: 14, total: 38.36},
    {date: "Mar 15", android: 3.14, ios: 5, total: 8.14}
  ];
  
  // Platform distribution data for pie chart
  const platformDistribution = [
    { name: "Android", value: 924.04, percentage: "71.2%", color: "#34D399" },
    { name: "iOS", value: 373.00, percentage: "28.8%", color: "#60A5FA" }
  ];
  
  // Total revenue
  const totalRevenue = {
    ios: 373.00,
    android: 924.04,
    total: 1297.04,
    iosPercentage: 28.8,
    androidPercentage: 71.2
  };
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Find full week label for tooltip if available
      let displayLabel = label;
      if (activeView === 'weekly') {
        const weekItem = weeklyData.find(item => item.shortWeek === label || item.week === label);
        if (weekItem) {
          displayLabel = weekItem.week;
        }
      }
      
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="font-semibold">{displayLabel}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: $${entry.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Pie chart custom label
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Revenue Analysis
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          USD Revenue by Platform (Jan 30 - Mar 15, 2025)
        </p>
      </div>
      
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Total Revenue</h3>
          <p className="text-3xl font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>${totalRevenue.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Android Revenue</h3>
          <p className="text-3xl font-bold text-green-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            ${totalRevenue.android.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span className="text-base text-gray-500">({totalRevenue.androidPercentage}%)</span>
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>iOS Revenue</h3>
          <p className="text-3xl font-bold text-blue-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            ${totalRevenue.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span className="text-base text-gray-500">({totalRevenue.iosPercentage}%)</span>
          </p>
        </div>
      </div>
      
      {/* View Selector */}
      <div className="flex space-x-2 mb-4">
        <button 
          className={`px-4 py-2 rounded ${activeView === 'weekly' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('weekly')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Weekly View
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'daily' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('daily')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Daily View
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'distribution' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('distribution')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Platform Distribution
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'forecasting' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('forecasting')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Forecasting
        </button>
      </div>
      
      {/* Charts */}
      <div className="bg-gray-50 p-4 rounded shadow">
        {activeView === 'weekly' && (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Weekly Revenue</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="shortWeek" 
                    tick={{ fontSize: 12 }} 
                    height={50}
                  />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="android" name="Android" fill="#34D399" />
                  <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
              W1: Jan 30-Feb 5 • W2: Feb 6-12 • W3: Feb 13-19 • W4: Feb 20-26 • W5: Feb 27-Mar 5 • W6: Mar 6-12 • W7: Mar 13-15
            </p>
          </div>
        )}
        
        {activeView === 'daily' && (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Daily Revenue Trends</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="android" name="Android" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
              Note: This chart shows a subset of days for better readability.
            </p>
          </div>
        )}
        
        {activeView === 'distribution' && (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Revenue Distribution</h3>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {activeView === 'forecasting' && (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Revenue Forecasting Tool</h3>
            <p className="mb-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
              Use the sliders below to forecast future revenue based on different media spend and user lifetime value assumptions.
            </p>
            <RevenueForecasting />
          </div>
        )}
      </div>
      
      {/* Revenue Forecasting Component (always visible, regardless of activeView) */}
      {activeView !== 'forecasting' && <RevenueForecasting />}
    </div>
  );
};

export default USDRevenue;