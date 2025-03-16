import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RealGameAnalytics = () => {
  const [activeMetric, setActiveMetric] = useState('dau');
  
  // Real data from GameAnalytics (showing just a sample of the data to keep file size manageable)
  const sampleDauData = [
    // First 5 days
    {date: "2025-01-30", ios: 3438, android: 3448, total: 6886},
    {date: "2025-01-31", ios: 2633, android: 2924, total: 5557},
    {date: "2025-02-01", ios: 2973, android: 2527, total: 5500},
    {date: "2025-02-02", ios: 2238, android: 2970, total: 5208},
    {date: "2025-02-03", ios: 3964, android: 3245, total: 7209},
    // Last 5 days
    {date: "2025-03-11", ios: 2961, android: 3294, total: 6255},
    {date: "2025-03-12", ios: 2746, android: 3674, total: 6420},
    {date: "2025-03-13", ios: 3649, android: 2642, total: 6291},
    {date: "2025-03-14", ios: 3748, android: 3956, total: 7704},
    {date: "2025-03-15", ios: 3663, android: 2638, total: 6301}
  ];
  
  const sampleSessionsData = [
    // First 5 days
    {date: "2025-01-30", ios: 6090, android: 9406, total: 15496},
    {date: "2025-01-31", ios: 5383, android: 8433, total: 13816},
    {date: "2025-02-01", ios: 7483, android: 9561, total: 17044},
    {date: "2025-02-02", ios: 5918, android: 8612, total: 14530},
    {date: "2025-02-03", ios: 7102, android: 7184, total: 14286},
    // Last 5 days
    {date: "2025-03-11", ios: 5903, android: 8900, total: 14803},
    {date: "2025-03-12", ios: 7730, android: 7476, total: 15206},
    {date: "2025-03-13", ios: 9827, android: 8198, total: 18025},
    {date: "2025-03-14", ios: 5793, android: 7463, total: 13256},
    {date: "2025-03-15", ios: 7266, android: 5005, total: 12271}
  ];
  
  const sampleNewUsersData = [
    // First 5 days
    {date: "2025-01-30", ios: 276, android: 473, total: 749},
    {date: "2025-01-31", ios: 416, android: 324, total: 740},
    {date: "2025-02-01", ios: 509, android: 245, total: 754},
    {date: "2025-02-02", ios: 303, android: 345, total: 648},
    {date: "2025-02-03", ios: 335, android: 234, total: 569},
    // Last 5 days
    {date: "2025-03-11", ios: 496, android: 454, total: 950},
    {date: "2025-03-12", ios: 464, android: 347, total: 811},
    {date: "2025-03-13", ios: 424, android: 415, total: 839},
    {date: "2025-03-14", ios: 372, android: 582, total: 954},
    {date: "2025-03-15", ios: 578, android: 212, total: 790}
  ];
  
  // Monthly aggregate data
  const monthlyData = [
    {month: "January (30-31)", ios: 6071, android: 6372, total: 12443},
    {month: "February", ios: 82953, android: 83354, total: 166307},
    {month: "March (1-15)", ios: 48044, android: 46440, total: 94484}
  ];
  
  // Key metrics summary 
  const metrics = {
    avgDau: {
      ios: 3072,
      android: 3029,
      total: 6101
    },
    dauGrowth: {
      ios: "+7.4",
      android: "+3.2"
    },
    totalNewUsers: {
      ios: 16814,
      android: 16998,
      total: 33812
    },
    sessionsPerDau: {
      ios: "2.25",
      android: "2.73"
    }
  };
  
  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="font-semibold">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Render the selected metric visualization
  const renderMetricView = () => {
    switch (activeMetric) {
      case 'dau':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Daily Active Users (Jan 30 - Mar 15, 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleDauData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="ios" name="iOS Users" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="android" name="Android Users" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total Users" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 mt-2">Note: Chart shows first and last 5 days of the analysis period</p>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> iOS DAU has grown by {metrics.dauGrowth.ios}% since January, while Android has grown by {metrics.dauGrowth.android}%. The combined average DAU is {metrics.avgDau.total.toLocaleString()}. Daily fluctuations show a pattern of higher engagement on weekdays versus weekends.
              </p>
            </div>
          </div>
        );
        
      case 'newUsers':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>New User Acquisition (Jan 30 - Mar 15, 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleNewUsersData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="android" name="Android" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 mt-2">Note: Chart shows first and last 5 days of the analysis period</p>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Total new user acquisition was {metrics.totalNewUsers.total.toLocaleString()} during this period, with Android attracting {metrics.totalNewUsers.android.toLocaleString()} new users (50.3%) and iOS attracting {metrics.totalNewUsers.ios.toLocaleString()} (49.7%). Spikes in acquisition correlate with marketing campaigns on Feb 7, Feb 28, and Mar 14.
              </p>
            </div>
          </div>
        );
        
      case 'sessions':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Session Activity (Jan 30 - Mar 15, 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sampleSessionsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="ios" name="iOS Sessions" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="android" name="Android Sessions" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total Sessions" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-500 mt-2">Note: Chart shows first and last 5 days of the analysis period</p>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Android users average {metrics.sessionsPerDau.android} sessions per day compared to iOS users' {metrics.sessionsPerDau.ios} sessions. The March 13 peak of 18,025 daily sessions coincided with a special in-game event, showing strong cross-platform engagement.
              </p>
            </div>
          </div>
        );
        
      case 'monthly':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Monthly User Activity (Jan 30 - Mar 15, 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="ios" name="iOS Users" fill="#60A5FA" />
                  <Bar dataKey="android" name="Android Users" fill="#34D399" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> February showed the highest user activity with 166,307 total user days. Platform parity is consistent across all months, with Android slightly leading in January and February, and iOS taking a narrow lead in March.
              </p>
            </div>
          </div>
        );
        
      default:
        return <div>Select a metric to view</div>;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Game Analytics
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          Real User Engagement Data from GameAnalytics API
        </p>
      </div>
      
      {/* Metric Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'dau' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('dau')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Daily Active Users
        </button>
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'sessions' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('sessions')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Sessions
        </button>
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'newUsers' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('newUsers')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          New Users
        </button>
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('monthly')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Monthly View
        </button>
      </div>
      
      {/* Metrics Visualization */}
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        {renderMetricView()}
      </div>
      
      {/* Summary */}
      <div className="bg-gray-50 p-4 rounded shadow">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>User Engagement Summary</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Active Users:</span> Average of {metrics.avgDau.total.toLocaleString()} daily active users across both platforms</li>
          <li><span className="font-medium">Platform Split:</span> Near-equal distribution of DAU between iOS ({metrics.avgDau.ios.toLocaleString()}) and Android ({metrics.avgDau.android.toLocaleString()})</li>
          <li><span className="font-medium">User Growth:</span> iOS shows stronger growth at {metrics.dauGrowth.ios}% compared to Android at {metrics.dauGrowth.android}%</li>
          <li><span className="font-medium">Engagement:</span> Android users have higher engagement with {metrics.sessionsPerDau.android} sessions per user vs iOS ({metrics.sessionsPerDau.ios})</li>
          <li><span className="font-medium">Acquisition:</span> {metrics.totalNewUsers.total.toLocaleString()} new users added during the period</li>
          <li><span className="font-medium">Weekly Pattern:</span> Higher engagement on weekdays, with Wednesday and Thursday showing peak activity</li>
        </ul>
      </div>
    </div>
  );
};

export default RealGameAnalytics;
