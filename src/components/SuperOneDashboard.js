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