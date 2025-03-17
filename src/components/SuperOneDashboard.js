import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';

const SuperOneDashboard = () => {
  // Sample data extracted from our analysis
  const superOneData = {
    downloads: {
      total: 4028,
      ios: 2039,
      android: 1989
    },
    revenue: {
      total: 1297.04,
      ios: 373.00,
      android: 924.04
    },
    daily_active_users: {
      jan30: 5782,
      feb15: 6089,
      mar01: 6231,
      mar15: 6302
    }
  };
  
  // Platform comparison data for downloads and revenue
  const platformComparisonData = [
    { 
      name: 'iOS', 
      downloads: superOneData.downloads.ios, 
      revenue: superOneData.revenue.ios 
    },
    { 
      name: 'Android', 
      downloads: superOneData.downloads.android, 
      revenue: superOneData.revenue.android 
    }
  ];
  
  // Data for downloads pie chart
  const downloadsPieData = [
    { name: 'iOS', value: superOneData.downloads.ios },
    { name: 'Android', value: superOneData.downloads.android }
  ];
  
  // Data for revenue pie chart
  const revenuePieData = [
    { name: 'iOS', value: superOneData.revenue.ios },
    { name: 'Android', value: superOneData.revenue.android }
  ];
  
  // Colors for pie charts
  const COLORS = ['#0088FE', '#00C49F'];
  
  // Daily active users trend data
  const dauTrendData = [
    { date: 'Jan 30', dau: 5782 },
    { date: 'Feb 15', dau: 6089 },
    { date: 'Mar 1', dau: 6231 },
    { date: 'Mar 15', dau: 6302 }
  ];
  
  // Formatter for download numbers
  const formatDownloads = (value) => {
    return `${value.toLocaleString()} downloads`;
  };
  
  // Formatter for revenue numbers
  const formatRevenue = (value) => {
    return `$${value.toLocaleString()}`;
  };
  
  return (
    <div className="p-4 bg-gray-100">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-2xl mb-6 text-center">
        Super.One Fan Battle Dashboard (Jan 30 - Mar 15, 2025)
      </div>
      
      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-lg mb-2">Total Downloads</h3>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }} className="text-3xl">{superOneData.downloads.total.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-lg mb-2">Total Revenue</h3>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }} className="text-3xl">${superOneData.revenue.total.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-lg mb-2">Daily Active Users</h3>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }} className="text-3xl">{dauTrendData[dauTrendData.length - 1].dau.toLocaleString()}</p>
        </div>
      </div>
      
      {/* Platform Comparison */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-xl mb-4">Platform Comparison</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={platformComparisonData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="downloads" name="Downloads" fill="#8884d8" />
              <Bar yAxisId="right" dataKey="revenue" name="Revenue ($)" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Distribution Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Downloads Distribution */}
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-lg mb-4">Downloads Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={downloadsPieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {downloadsPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={formatDownloads} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Revenue Distribution */}
        <div className="bg-white p-4 rounded shadow">
          <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-lg mb-4">Revenue Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenuePieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {revenuePieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={formatRevenue} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* DAU Trend */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-xl mb-4">Daily Active Users Trend</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={dauTrendData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="dau" name="Daily Active Users" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Key Insights */}
      <div className="bg-white p-4 rounded shadow">
        <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-xl mb-4">Key Insights</h3>
        <ul style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }} className="list-disc pl-5 space-y-2">
          <li>iOS leads in downloads (50.6%) while Android dominates revenue (71.2%).</li>
          <li>Daily Active Users grew by 9.0% during the analysis period.</li>
          <li>Major updates during the period focused on leaderboard functionality and game rewards.</li>
          <li>Android users have higher engagement with 2.73 sessions per user vs 2.25 for iOS.</li>
          <li>New language support (Arabic) has opened opportunities in new markets.</li>
        </ul>
      </div>
    </div>
  );
};

export default SuperOneDashboard;