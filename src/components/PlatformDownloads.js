import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const PlatformDownloads = () => {
  // Daily data combining both iOS and Android
  const dailyData = [
    {date: "Jan 30", android: 81, ios: 176, total: 257},
    {date: "Jan 31", android: 66, ios: 186, total: 252},
    {date: "Feb 1", android: 105, ios: 86, total: 191},
    {date: "Feb 2", android: 81, ios: 67, total: 148},
    {date: "Feb 3", android: 73, ios: 70, total: 143},
    {date: "Feb 4", android: 64, ios: 68, total: 132},
    {date: "Feb 5", android: 54, ios: 53, total: 107},
    {date: "Feb 6", android: 62, ios: 48, total: 110},
    {date: "Feb 7", android: 46, ios: 38, total: 84},
    {date: "Feb 8", android: 39, ios: 41, total: 80},
    {date: "Feb 9", android: 38, ios: 43, total: 81},
    {date: "Feb 10", android: 46, ios: 51, total: 97},
    {date: "Feb 11", android: 37, ios: 35, total: 72},
    {date: "Feb 12", android: 44, ios: 29, total: 73},
    {date: "Feb 13", android: 46, ios: 40, total: 86},
    {date: "Feb 14", android: 31, ios: 33, total: 64},
    {date: "Feb 15", android: 36, ios: 40, total: 76},
    {date: "Feb 16", android: 41, ios: 26, total: 67},
    {date: "Feb 17", android: 21, ios: 27, total: 48},
    {date: "Feb 18", android: 30, ios: 26, total: 56},
    {date: "Feb 19", android: 16, ios: 19, total: 35},
    {date: "Feb 20", android: 24, ios: 22, total: 46},
    {date: "Feb 21", android: 23, ios: 29, total: 52},
    {date: "Feb 22", android: 23, ios: 29, total: 52},
    {date: "Feb 23", android: 40, ios: 20, total: 60},
    {date: "Feb 24", android: 35, ios: 26, total: 61},
    {date: "Feb 25", android: 32, ios: 14, total: 46},
    {date: "Feb 26", android: 43, ios: 22, total: 65},
    {date: "Feb 27", android: 44, ios: 14, total: 58},
    {date: "Feb 28", android: 31, ios: 18, total: 49},
    {date: "Mar 1", android: 29, ios: 17, total: 46},
    {date: "Mar 2", android: 46, ios: 31, total: 77},
    {date: "Mar 3", android: 58, ios: 33, total: 91},
    {date: "Mar 4", android: 37, ios: 25, total: 62},
    {date: "Mar 5", android: 38, ios: 28, total: 66},
    {date: "Mar 6", android: 41, ios: 18, total: 59},
    {date: "Mar 7", android: 39, ios: 50, total: 89},
    {date: "Mar 8", android: 43, ios: 25, total: 68},
    {date: "Mar 9", android: 45, ios: 43, total: 88},
    {date: "Mar 10", android: 61, ios: 50, total: 111},
    // Data from March 11-15 (using previous Android pattern since Android data wasn't provided)
    {date: "Mar 11", android: 40, ios: 50, total: 90},
    {date: "Mar 12", android: 40, ios: 49, total: 89},
    {date: "Mar 13", android: 40, ios: 68, total: 108},
    {date: "Mar 14", android: 40, ios: 45, total: 85},
    {date: "Mar 15", android: 40, ios: 80, total: 120}
  ];

  // Platform totals
  const totals = {
    android: 1989, // 1789 + estimated 200 for Mar 11-15
    ios: 2039,
    total: 4028
  };

  // Calculate percentages
  const androidPercentage = parseFloat((totals.android / totals.total * 100).toFixed(1));
  const iosPercentage = parseFloat((totals.ios / totals.total * 100).toFixed(1));

  // Weekly data for comparison with shortened labels
  const weeklyData = [
    {week: "Week 1 (Jan 30-Feb 5)", shortWeek: "W1", displayWeek: "Week 1", android: 524, ios: 706, total: 1230},
    {week: "Week 2 (Feb 6-12)", shortWeek: "W2", displayWeek: "Week 2", android: 312, ios: 285, total: 597},
    {week: "Week 3 (Feb 13-19)", shortWeek: "W3", displayWeek: "Week 3", android: 221, ios: 211, total: 432},
    {week: "Week 4 (Feb 20-26)", shortWeek: "W4", displayWeek: "Week 4", android: 220, ios: 162, total: 382},
    {week: "Week 5 (Feb 27-Mar 5)", shortWeek: "W5", displayWeek: "Week 5", android: 283, ios: 166, total: 449},
    {week: "Week 6 (Mar 6-12)", shortWeek: "W6", displayWeek: "Week 6", android: 269, ios: 235, total: 504},
    {week: "Week 7 (Mar 13-15)", shortWeek: "W7", displayWeek: "Week 7", android: 120, ios: 193, total: 313}
  ];
  
  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Find full week label for tooltip if weeklyData includes the label
      let displayLabel = label;
      const weekItem = weeklyData.find(item => item.shortWeek === label);
      if (weekItem) {
        displayLabel = weekItem.week;
      }
      
      return (
        <div className="bg-white p-3 rounded border shadow-sm">
          <p className="font-semibold text-gray-800">{displayLabel}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
          {payload.length > 1 && (
            <p className="text-gray-600 text-sm mt-1">
              {`Total: ${payload.reduce((sum, entry) => sum + (entry.value || 0), 0)}`}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Platform Downloads
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          iOS vs. Android Downloads (Jan 30 - Mar 15, 2025)
        </p>
      </div>
      
      {/* Platform Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Total Downloads</h3>
          <p className="text-3xl font-bold" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{totals.total.toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Android</h3>
          <p className="text-3xl font-bold text-green-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            {totals.android.toLocaleString()} <span className="text-base text-gray-500">({androidPercentage}%)</span>
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>iOS</h3>
          <p className="text-3xl font-bold text-blue-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            {totals.ios.toLocaleString()} <span className="text-base text-gray-500">({iosPercentage}%)</span>
          </p>
        </div>
      </div>
      
      {/* Daily Downloads Line Chart */}
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Daily Downloads</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={dailyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                interval={4} // Show only every 5th label for better spacing
                height={40}
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="android" 
                name="Android" 
                stroke="#34D399" 
                strokeWidth={2}
                dot={{ r: 1 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="ios" 
                name="iOS" 
                stroke="#60A5FA" 
                strokeWidth={2}
                dot={{ r: 1 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="total" 
                name="Total" 
                stroke="#9333EA" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          Note: Android data for Mar 11-15 is estimated based on previous trends.
        </p>
      </div>
      
      {/* Weekly Comparison Bar Chart */}
      <div className="bg-gray-50 p-4 rounded shadow">
        <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Weekly Downloads</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="shortWeek" 
                tick={{ fontSize: 12 }} 
                height={40}
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
              <Bar dataKey="android" name="Android" fill="#34D399" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-gray-600 mt-3 text-center" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          W1: Jan 30-Feb 5 • W2: Feb 6-12 • W3: Feb 13-19 • W4: Feb 20-26 • W5: Feb 27-Mar 5 • W6: Mar 6-12 • W7: Mar 13-15
        </p>
      </div>
    </div>
  );
};

export default PlatformDownloads;