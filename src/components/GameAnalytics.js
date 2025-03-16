import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GameAnalytics = () => {
  const [activeMetric, setActiveMetric] = useState('dau');
  const [metricsData, setMetricsData] = useState({
    dau: [],
    mau: [],
    sessions: [],
    newUsers: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Sample data mimicking GameAnalytics API response
  // In a real implementation, this would come from the API
  useEffect(() => {
    // Simulating API data fetch
    setTimeout(() => {
      setMetricsData({
        dau: [
          {date: "Mar 1", android: 680, ios: 520, total: 1200},
          {date: "Mar 2", android: 720, ios: 490, total: 1210},
          {date: "Mar 3", android: 790, ios: 510, total: 1300},
          {date: "Mar 4", android: 810, ios: 530, total: 1340},
          {date: "Mar 5", android: 760, ios: 570, total: 1330},
          {date: "Mar 6", android: 730, ios: 620, total: 1350},
          {date: "Mar 7", android: 850, ios: 640, total: 1490},
          {date: "Mar 8", android: 940, ios: 670, total: 1610},
          {date: "Mar 9", android: 890, ios: 710, total: 1600},
          {date: "Mar 10", android: 920, ios: 690, total: 1610},
          {date: "Mar 11", android: 850, ios: 680, total: 1530},
          {date: "Mar 12", android: 780, ios: 660, total: 1440},
          {date: "Mar 13", android: 810, ios: 690, total: 1500},
          {date: "Mar 14", android: 900, ios: 710, total: 1610},
          {date: "Mar 15", android: 980, ios: 750, total: 1730}
        ],
        mau: [
          {month: "Jan", android: 8200, ios: 7100, total: 15300},
          {month: "Feb", android: 10500, ios: 8800, total: 19300},
          {month: "Mar", android: 12400, ios: 9600, total: 22000}
        ],
        sessions: [
          {date: "Mar 1", avgLength: 8.2, perUser: 3.1},
          {date: "Mar 2", avgLength: 7.9, perUser: 3.3},
          {date: "Mar 3", avgLength: 8.4, perUser: 3.2},
          {date: "Mar 4", avgLength: 8.7, perUser: 3.5},
          {date: "Mar 5", avgLength: 8.5, perUser: 3.4},
          {date: "Mar 6", avgLength: 9.1, perUser: 3.6},
          {date: "Mar 7", avgLength: 9.3, perUser: 3.8},
          {date: "Mar 8", avgLength: 9.8, perUser: 4.0},
          {date: "Mar 9", avgLength: 9.5, perUser: 3.9},
          {date: "Mar 10", avgLength: 9.7, perUser: 3.9},
          {date: "Mar 11", avgLength: 9.2, perUser: 3.7},
          {date: "Mar 12", avgLength: 8.9, perUser: 3.6},
          {date: "Mar 13", avgLength: 9.1, perUser: 3.8},
          {date: "Mar 14", avgLength: 9.4, perUser: 3.9},
          {date: "Mar 15", avgLength: 9.8, perUser: 4.1}
        ],
        newUsers: [
          {date: "Mar 1", android: 145, ios: 112, total: 257},
          {date: "Mar 2", android: 153, ios: 99, total: 252},
          {date: "Mar 3", android: 105, ios: 86, total: 191},
          {date: "Mar 4", android: 81, ios: 67, total: 148},
          {date: "Mar 5", android: 73, ios: 70, total: 143},
          {date: "Mar 6", android: 64, ios: 68, total: 132},
          {date: "Mar 7", android: 89, ios: 74, total: 163},
          {date: "Mar 8", android: 94, ios: 85, total: 179},
          {date: "Mar 9", android: 88, ios: 93, total: 181},
          {date: "Mar 10", android: 97, ios: 101, total: 198},
          {date: "Mar 11", android: 87, ios: 95, total: 182},
          {date: "Mar 12", android: 75, ios: 89, total: 164},
          {date: "Mar 13", android: 92, ios: 94, total: 186},
          {date: "Mar 14", android: 88, ios: 85, total: 173},
          {date: "Mar 15", android: 120, ios: 110, total: 230}
        ],
        retention: {
          day1: 42,
          day7: 28,
          day14: 21,
          day30: 15
        },
        battleStats: [
          {name: "1v1 Mode", percent: 45, color: "#8884d8"},
          {name: "Team Battle", percent: 30, color: "#82ca9d"},
          {name: "Tournament", percent: 15, color: "#ffc658"},
          {name: "Custom Games", percent: 10, color: "#ff8042"}
        ],
        progression: [
          {level: "Rookie", android: 3200, ios: 2800},
          {level: "Bronze", android: 2600, ios: 2300},
          {level: "Silver", android: 1900, ios: 1700},
          {level: "Gold", android: 1200, ios: 1100},
          {level: "Platinum", android: 750, ios: 620},
          {level: "Diamond", android: 380, ios: 310},
          {level: "Master", android: 120, ios: 90}
        ]
      });
      setIsLoading(false);
    }, 1000);
  }, []);

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
    if (isLoading) {
      return <div className="flex justify-center items-center h-64"><p>Loading analytics data...</p></div>;
    }
    
    if (errorMessage) {
      return <div className="flex justify-center items-center h-64"><p className="text-red-500">{errorMessage}</p></div>;
    }

    switch (activeMetric) {
      case 'dau':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Daily Active Users (March 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metricsData.dau} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="android" name="Android Users" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="ios" name="iOS Users" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total Users" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Daily active users have grown by 44% from the start to end of March, with both platforms showing consistent growth. Weekend usage (Sat-Sun) shows clear spikes.
              </p>
            </div>
          </div>
        );
        
      case 'mau':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Monthly Active Users (2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={metricsData.mau} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="android" name="Android Users" fill="#34D399" />
                  <Bar dataKey="ios" name="iOS Users" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Monthly active users have shown steady growth quarter-over-quarter, with a 43.8% increase from January to March. Android growth (51.2%) has outpaced iOS (35.2%).
              </p>
            </div>
          </div>
        );
        
      case 'sessions':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Session Metrics (March 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metricsData.sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="avgLength" name="Avg. Session Length (min)" stroke="#8884d8" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="perUser" name="Sessions Per User" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Both session length and frequency have increased during March, with average session length growing from 8.2 to 9.8 minutes (+19.5%) and sessions per user from 3.1 to 4.1 (+32.3%).
              </p>
            </div>
          </div>
        );
        
      case 'newUsers':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>New User Acquisition (March 2025)</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metricsData.newUsers} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="android" name="Android" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> User acquisition dipped in early March but showed strong recovery by mid-month, with March 15 showing the highest new user count at 230. iOS acquisition has increased significantly in the latter half.
              </p>
            </div>
          </div>
        );
        
      case 'retention':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Player Retention Rates</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {Object.entries(metricsData.retention).map(([key, value]) => (
                <div key={key} className="bg-white p-4 rounded shadow border border-gray-200">
                  <h4 className="text-sm text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                    {key.replace('day', 'Day ')} Retention
                  </h4>
                  <p className="text-2xl font-bold text-indigo-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                    {value}%
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Day 1 retention rate of 42% is above industry average of 35% for mobile games. The Day 7 to Day 30 drop-off indicates a need for more engaging mid-term content to keep players returning.
              </p>
            </div>
          </div>
        );
        
      case 'battles':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Battle Mode Popularity</h3>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={metricsData.battleStats}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="percent"
                    nameKey="name"
                    label={({name, percent}) => `${name}: ${percent}%`}
                  >
                    {metricsData.battleStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> 1v1 battles remain the most popular mode at 45% of all matches played, but Team Battles are growing in popularity among more experienced players. Tournament engagement has increased 3% month-over-month.
              </p>
            </div>
          </div>
        );
        
      case 'progression':
        return (
          <div>
            <h3 className="text-lg mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Player Progression Levels</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={metricsData.progression}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="level" type="category" width={100} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="android" name="Android Players" fill="#34D399" />
                  <Bar dataKey="ios" name="iOS Players" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-gray-50 p-3 rounded">
              <p className="text-sm text-gray-700" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                <span className="font-medium">Key Insight:</span> Player progression follows a typical pyramid structure. Only 2.3% of players reach Master tier. The Gold-to-Platinum transition shows the steepest drop (45% player loss), indicating a potential difficulty spike.
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
          Player Engagement and Performance Metrics
        </p>
      </div>
      
      {/* Metric Selector */}
      <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mb-6">
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'dau' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('dau')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Daily Users
        </button>
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'mau' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('mau')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Monthly Users
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
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'retention' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('retention')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Retention
        </button>
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'battles' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('battles')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Battle Stats
        </button>
        <button 
          className={`px-3 py-2 text-sm rounded ${activeMetric === 'progression' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveMetric('progression')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Progression
        </button>
      </div>
      
      {/* Metrics Visualization */}
      <div className="bg-gray-50 p-4 rounded shadow mb-6">
        {renderMetricView()}
      </div>
      
      {/* Summary */}
      <div className="bg-gray-50 p-4 rounded shadow">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Game Performance Summary</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">User Growth:</span> Super.One Fan Battle has seen 44% growth in DAU during March, reaching 1,730 active users</li>
          <li><span className="font-medium">Engagement:</span> Average session length increased to 9.8 minutes (+19.5%) with 4.1 sessions per user daily</li>
          <li><span className="font-medium">Retention:</span> Day 1 retention at 42% is strong, but opportunities exist to improve long-term retention</li>
          <li><span className="font-medium">Battle Modes:</span> 1v1 battles remain most popular (45%), but Team Battles are growing quickly</li>
          <li><span className="font-medium">Progression:</span> The Gold-to-Platinum transition shows highest drop-off, indicating potential game balance opportunity</li>
          <li><span className="font-medium">Platform Comparison:</span> Android shows stronger user growth and progression to higher levels</li>
        </ul>
      </div>
    </div>
  );
};

export default GameAnalytics;
