import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter
} from 'recharts';

const SuperOneDashboard = () => {
  const [activeCompTab, setActiveCompTab] = useState('market');
  
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
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFF', '#FF6B6B'];
  
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

  // Competitive landscape data
  const competitors = [
    { 
      id: 'comp1',
      name: 'Battle Royale Tycoon', 
      developer: 'Evolution Games GmbH',
      rating: 4.8,
      downloads: 245000,
      revenue: 680000,
      releaseDate: '2023-04-15',
      lastUpdate: '2025-02-28'
    },
    { 
      id: 'comp2',
      name: '1v1.LOL', 
      developer: 'JustPlay.LOL LTD',
      rating: 4.7,
      downloads: 890000,
      revenue: 1250000,
      releaseDate: '2022-08-22',
      lastUpdate: '2025-01-15'
    },
    { 
      id: 'comp3',
      name: 'Battle Prime', 
      developer: 'Press Fire Games Limited',
      rating: 4.7,
      downloads: 650000,
      revenue: 950000,
      releaseDate: '2021-11-03',
      lastUpdate: '2025-03-01'
    },
    { 
      id: 'comp4',
      name: 'Super.One Fan Battle', 
      developer: 'Super One',
      rating: 4.6,
      downloads: 175000,
      revenue: 420000,
      releaseDate: '2024-06-10',
      lastUpdate: '2025-03-10'
    },
    { 
      id: 'comp5',
      name: 'Evolution 2', 
      developer: 'MY.GAMES',
      rating: 4.7,
      downloads: 520000,
      revenue: 850000,
      releaseDate: '2022-05-17',
      lastUpdate: '2025-02-10'
    }
  ];

  // Market position data for scatter plot
  const marketPositionData = [
    { x: 890, y: 1250, name: '1v1.LOL', rating: 4.7 },
    { x: 650, y: 950, name: 'Battle Prime', rating: 4.7 },
    { x: 520, y: 850, name: 'Evolution 2', rating: 4.7 },
    { x: 245, y: 680, name: 'Battle Royale Tycoon', rating: 4.8 },
    { x: 175, y: 420, name: 'Super.One Fan Battle', rating: 4.6 }
  ];

  // Feature comparison data for radar chart
  const featureComparisonData = [
    { feature: 'User Interface', SuperOne: 85, Competitor1: 90, Competitor2: 75 },
    { feature: 'Game Mechanics', SuperOne: 90, Competitor1: 85, Competitor2: 80 },
    { feature: 'Monetization', SuperOne: 70, Competitor1: 95, Competitor2: 90 },
    { feature: 'Social Features', SuperOne: 95, Competitor1: 75, Competitor2: 70 },
    { feature: 'Content Variety', SuperOne: 80, Competitor1: 90, Competitor2: 85 },
    { feature: 'User Retention', SuperOne: 85, Competitor1: 80, Competitor2: 75 }
  ];

  // Keyword volume and difficulty data
  const keywordAnalysisData = [
    { keyword: 'fan battle', volume: 5, difficulty: 1 },
    { keyword: 'mobile competition', volume: 5, difficulty: 0 },
    { keyword: 'esports', volume: 31, difficulty: 39 },
    { keyword: 'gaming contest', volume: 5, difficulty: 2 },
    { keyword: 'Super.One', volume: 5, difficulty: 0 },
    { keyword: 'battle royale', volume: 48, difficulty: 62 }
  ];

  // Popular keywords for SuperOne
  const topKeywordsData = [
    { keyword: 'fc mobile 25', ranking: 97, volume: 50 },
    { keyword: 'madfut 25', ranking: 33, volume: 37 },
    { keyword: 'madfut', ranking: 50, volume: 36 },
    { keyword: 'superfan', ranking: 24, volume: 35 },
    { keyword: 'taka', ranking: 40, volume: 28 }
  ];

  // Market share data
  const marketShareData = [
    { name: '1v1.LOL', value: 30 },
    { name: 'Battle Prime', value: 22 },
    { name: 'Evolution 2', value: 18 },
    { name: 'Battle Royale Tycoon', value: 12 },
    { name: 'Super.One Fan Battle', value: 8 },
    { name: 'Others', value: 10 }
  ];

  // SWOT Analysis
  const swotAnalysis = {
    strengths: [
      'Innovative fan battle mechanics',
      'Strong social sharing features',
      'Highly engaging community features',
      'Clean, modern UI design',
      'Low user acquisition cost'
    ],
    weaknesses: [
      'Lower download numbers compared to competitors',
      'Limited monetization strategy',
      'Newer to market with less brand recognition',
      'Lower keyword visibility',
      'Fewer localization options'
    ],
    opportunities: [
      'Emerging esports segment with growing popularity',
      'Untapped international markets',
      'Partnership opportunities with influencers',
      'Expansion into related content categories',
      'Low competition for key niche keywords'
    ],
    threats: [
      'Established competitors with larger user bases',
      'Rising user acquisition costs',
      'Platform policy changes affecting competitive apps',
      'Market saturation in gaming category',
      'Potential IP challenges in fan content'
    ]
  };
  
  // Render the selected competitive analysis tab content
  const renderCompetitiveTabContent = () => {
    switch (activeCompTab) {
      case 'market':
        return (
          <div>
            <h3 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-lg mb-4">Market Position Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Market Position Scatter Plot */}
              <div className="bg-white p-4 rounded shadow h-80">
                <h4 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-base mb-2">Downloads vs Revenue (K)</h4>
                <ResponsiveContainer width="100%" height="90%">
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Downloads (K)" unit="K" />
                    <YAxis type="number" dataKey="y" name="Revenue (K)" unit="K" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} formatter={(value) => `${value}K`} />
                    <Scatter name="Companies" data={marketPositionData} fill="#8884d8">
                      {marketPositionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'Super.One Fan Battle' ? '#FF5733' : '#8884d8'} />
                      ))}
                    </Scatter>
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              
              {/* Market Share Pie Chart */}
              <div className="bg-white p-4 rounded shadow h-80">
                <h4 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-base mb-2">Market Share Analysis</h4>
                <ResponsiveContainer width="100%" height="90%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'Super.One Fan Battle' ? '#FF5733' : COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Competitors Table */}
            <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto">
              <h4 style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }} className="text-base mb-3">Key Competitors Overview</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500 }}>App Name</th>
                    <th className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500 }}>Developer</th>
                    <th className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500 }}>Rating</th>
                    <th className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500 }}>Downloads</th>
                    <th className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500 }}>Revenue</th>
                    <th className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 500 }}>Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp) => (
                    <tr key={comp.id} className={comp.name === 'Super.One Fan Battle' ? 'bg-orange-50' : ''}>
                      <td className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: comp.name === 'Super.One Fan Battle' ? 500 : 400 }}>{comp.name}</td>
                      <td className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{comp.developer}</td>
                      <td className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{comp.rating}</td>
                      <td className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{comp.downloads.toLocaleString()}</td>
                      <td className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>${comp.revenue.toLocaleString()}</td>
                      <td className="py-2 px-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{comp.lastUpdate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );