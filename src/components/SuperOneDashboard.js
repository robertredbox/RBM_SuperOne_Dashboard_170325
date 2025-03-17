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