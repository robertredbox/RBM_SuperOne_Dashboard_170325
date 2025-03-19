import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Papa from 'papaparse';

const PlatformDownloads = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Data states
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [totals, setTotals] = useState({ android: 0, ios: 0, total: 0 });
  
  // Function to standardize dates across datasets
  function standardizeDate(dateStr) {
    let standardDate = null;
    
    // iOS date format M/D/YY
    if (dateStr.includes('/')) {
      const [month, day, yearShort] = dateStr.split('/');
      const year = parseInt(yearShort) + 2000; // Assume 20xx
      standardDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    } 
    // Android date format DD MMM YYYY
    else if (dateStr.includes(' ')) {
      const months = {
        'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06',
        'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
      };
      
      const [day, monthStr, year] = dateStr.split(' ');
      if (months[monthStr]) {
        standardDate = `${year}-${months[monthStr]}-${day.padStart(2, '0')}`;
      }
    }
    
    return standardDate;
  }

  // Function to filter data by date range
  function filterByDays(data, days) {
    const now = new Date();
    const cutoffDate = new Date(now.setDate(now.getDate() - days)).toISOString().split('T')[0];
    return data.filter(item => item.date >= cutoffDate);
  }

  // Function to calculate totals
  function calculateTotals(data) {
    return {
      android: data.reduce((sum, item) => sum + (item.android || 0), 0),
      ios: data.reduce((sum, item) => sum + (item.ios || 0), 0),
      total: data.reduce((sum, item) => sum + (item.total || 0), 0)
    };
  }

  // Function to aggregate data by week
  function aggregateByWeek(data) {
    // Function to get week of the year
    function getWeekOfYear(dateStr) {
      const date = new Date(dateStr);
      const startDate = new Date(date.getFullYear(), 0, 1);
      const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
      return Math.ceil((days + startDate.getDay() + 1) / 7);
    }
    
    // Group by week
    const weekMap = new Map();
    
    data.forEach(item => {
      const date = new Date(item.date);
      const weekNum = getWeekOfYear(item.date);
      const yearWeek = `${date.getFullYear()}-W${weekNum}`;
      const displayWeek = `W${weekNum}`;
      
      if (!weekMap.has(yearWeek)) {
        weekMap.set(yearWeek, {
          week: `Week ${weekNum} (${date.getFullYear()})`,
          shortWeek: displayWeek,
          displayWeek: `Week ${weekNum}`,
          android: 0,
          ios: 0,
          total: 0
        });
      }
      
      const weekData = weekMap.get(yearWeek);
      weekData.android += item.android || 0;
      weekData.ios += item.ios || 0;
      weekData.total += item.total || 0;
    });
    
    return Array.from(weekMap.values())
      .sort((a, b) => {
        // Extract year and week number for sorting
        const [yearA, weekA] = a.week.match(/Week (\d+) \((\d+)\)/).slice(1, 3);
        const [yearB, weekB] = b.week.match(/Week (\d+) \((\d+)\)/).slice(1, 3);
        
        if (yearA !== yearB) return yearA - yearB;
        return weekA - weekB;
      });
  }

  // Format display date from standard format
  function formatDisplayDate(dateStr) {
    const date = new Date(dateStr);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }

  // Process iOS data from multiple files if necessary
  async function loadIosData() {
    try {
      let iosData = [];
      
      // Try to load the combined file first
      try {
        const mainFile = await window.fs.readFile('ios_downloads.csv', { encoding: 'utf8' });
        const parsed = Papa.parse(mainFile, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true
        });
        
        iosData = parsed.data;
      } catch (mainError) {
        console.warn('Main iOS file not found, trying parts...', mainError);
        
        // If combined file doesn't exist, try to load parts
        const parts = ['ios_downloads.csv', 'ios_downloads_part2.csv', 'ios_downloads_part3.csv', 
                      'ios_downloads_part4.csv', 'ios_downloads_part5.csv', 'ios_downloads_part6.csv'];
        
        for (const part of parts) {
          try {
            const fileContent = await window.fs.readFile(part, { encoding: 'utf8' });
            const parsed = Papa.parse(fileContent, {
              header: true,
              skipEmptyLines: true,
              dynamicTyping: true
            });
            
            // Add valid entries to our data array
            iosData = [...iosData, ...parsed.data];
          } catch (partError) {
            console.warn(`Part file ${part} not found or invalid`, partError);
          }
        }
      }
      
      // Process the data to keep only rows with valid date format
      return iosData
        .filter(row => {
          if (!row.Name || !row["Super.One Fan Battle"]) return false;
          const dateParts = row.Name.split('/');
          return dateParts.length === 3;
        })
        .map(row => ({
          date: row.Name,
          downloads: typeof row["Super.One Fan Battle"] === 'number' ? row["Super.One Fan Battle"] : 0
        }));
      
    } catch (err) {
      console.error('Error loading iOS data:', err);
      throw new Error('Failed to load iOS download data');
    }
  }

  // Load and process data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        
        // Load Android data
        const androidDataRaw = await window.fs.readFile('android_data.csv', { encoding: 'utf8' });
        const parsedAndroidData = Papa.parse(androidDataRaw, {
          header: true,
          skipEmptyLines: true,
          dynamicTyping: true
        });
        
        // Process Android data
        const androidDownloads = parsedAndroidData.data.map(row => ({
          date: row.Date,
          downloads: row["Store listing acquisitions: All countries / regions"] || 0
        }));
        
        // Load iOS data using our specialized function
        const iosDownloads = await loadIosData();
        
        // Combine the datasets
        const dateMap = new Map();
        
        // Process Android downloads
        androidDownloads.forEach(item => {
          const standardDate = standardizeDate(item.date);
          if (standardDate) {
            dateMap.set(standardDate, { 
              date: standardDate, 
              displayDate: formatDisplayDate(standardDate),
              android: item.downloads,
              ios: 0,
              total: item.downloads
            });
          }
        });
        
        // Merge with iOS downloads
        iosDownloads.forEach(item => {
          const standardDate = standardizeDate(item.date);
          if (standardDate) {
            if (dateMap.has(standardDate)) {
              const existing = dateMap.get(standardDate);
              existing.ios = item.downloads;
              existing.total = existing.android + item.downloads;
            } else {
              dateMap.set(standardDate, { 
                date: standardDate, 
                displayDate: formatDisplayDate(standardDate),
                android: 0,
                ios: item.downloads,
                total: item.downloads
              });
            }
          }
        });
        
        // Convert to array and sort by date
        const sortedCombinedData = Array.from(dateMap.values())
          .sort((a, b) => a.date.localeCompare(b.date));
        
        // Update state based on selected time range
        updateDataByTimeRange(sortedCombinedData, timeRange);
        
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Failed to load download data: " + err.message);
        setLoading(false);
      }
    }
    
    loadData();
  }, []);
  
  // Update data when time range changes
  useEffect(() => {
    // If we already have data in dailyData, we can just filter it
    if (dailyData.length > 0) {
      const allData = [...dailyData]; // Clone the data
      updateDataByTimeRange(allData, timeRange);
    }
  }, [timeRange]);
  
  // Helper function to update data based on time range
  const updateDataByTimeRange = (allData, selectedRange) => {
    let filteredData;
    
    switch (selectedRange) {
      case '7days':
        filteredData = filterByDays(allData, 7);
        break;
      case '30days':
        filteredData = filterByDays(allData, 30);
        break;
      case '365days':
      default:
        filteredData = allData;
        break;
    }
    
    // Update states
    setDailyData(filteredData);
    setWeeklyData(aggregateByWeek(filteredData));
    setTotals(calculateTotals(filteredData));
  };
  
  // Calculate percentages
  const androidPercentage = totals.total === 0 ? 0 : parseFloat((totals.android / totals.total * 100).toFixed(1));
  const iosPercentage = totals.total === 0 ? 0 : parseFloat((totals.ios / totals.total * 100).toFixed(1));
  
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

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading downloads data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="bg-red-50 p-4 rounded-md">
          <h3 className="text-red-800 font-medium">Error Loading Data</h3>
          <p className="text-red-700 mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Platform Downloads
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          iOS vs. Android Downloads
        </p>
      </div>
      
      {/* Time Range Selector */}
      <div className="mb-4">
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded transition-colors ${timeRange === '7days' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
            onClick={() => setTimeRange('7days')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            Last 7 Days
          </button>
          <button 
            className={`px-4 py-2 rounded transition-colors ${timeRange === '30days' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
            onClick={() => setTimeRange('30days')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            Last 30 Days
          </button>
          <button 
            className={`px-4 py-2 rounded transition-colors ${timeRange === '365days' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
            onClick={() => setTimeRange('365days')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            Last 365 Days
          </button>
        </div>
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
                dataKey="displayDate" 
                tick={{ fontSize: 12 }} 
                interval={timeRange === '7days' ? 0 : timeRange === '30days' ? 3 : 15} 
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
        <p className="text-sm text-gray-600 mt-3" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          {timeRange === '7days' ? 'Showing data for the last 7 days' : 
           timeRange === '30days' ? 'Showing data for the last 30 days' : 
           'Showing data for the last 365 days'}
        </p>
      </div>
    </div>
  );
};

export default PlatformDownloads;