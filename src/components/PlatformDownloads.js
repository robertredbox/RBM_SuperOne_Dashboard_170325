import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Papa from 'papaparse';

const PlatformDownloads = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Data states
  const [allDailyData, setAllDailyData] = useState([]); // Store ALL data
  const [dailyData, setDailyData] = useState([]); // Store filtered data to display
  const [weeklyData, setWeeklyData] = useState([]);
  const [totals, setTotals] = useState({ android: 0, ios: 0, total: 0 });
  
  // Sample data to use if loading fails
  const sampleData = [
    {date: "2025-01-30", displayDate: "Jan 30", android: 81, ios: 176, total: 257},
    {date: "2025-01-31", displayDate: "Jan 31", android: 66, ios: 186, total: 252},
    {date: "2025-02-01", displayDate: "Feb 1", android: 105, ios: 86, total: 191},
    {date: "2025-02-02", displayDate: "Feb 2", android: 81, ios: 67, total: 148},
    {date: "2025-02-03", displayDate: "Feb 3", android: 73, ios: 70, total: 143},
    {date: "2025-02-04", displayDate: "Feb 4", android: 64, ios: 68, total: 132},
    {date: "2025-02-05", displayDate: "Feb 5", android: 54, ios: 53, total: 107},
    {date: "2025-02-06", displayDate: "Feb 6", android: 62, ios: 48, total: 110},
    {date: "2025-02-07", displayDate: "Feb 7", android: 46, ios: 38, total: 84},
    {date: "2025-02-08", displayDate: "Feb 8", android: 39, ios: 41, total: 80},
    {date: "2025-02-09", displayDate: "Feb 9", android: 38, ios: 43, total: 81},
    {date: "2025-02-10", displayDate: "Feb 10", android: 46, ios: 51, total: 97},
    {date: "2025-02-11", displayDate: "Feb 11", android: 37, ios: 35, total: 72},
    {date: "2025-02-12", displayDate: "Feb 12", android: 44, ios: 29, total: 73},
    {date: "2025-02-13", displayDate: "Feb 13", android: 46, ios: 40, total: 86},
    {date: "2025-02-14", displayDate: "Feb 14", android: 47, ios: 42, total: 89},
    {date: "2025-02-15", displayDate: "Feb 15", android: 42, ios: 28, total: 70},
    {date: "2025-02-16", displayDate: "Feb 16", android: 38, ios: 23, total: 61},
    {date: "2025-02-17", displayDate: "Feb 17", android: 35, ios: 22, total: 57},
    {date: "2025-02-18", displayDate: "Feb 18", android: 32, ios: 16, total: 48},
    {date: "2025-02-19", displayDate: "Feb 19", android: 29, ios: 17, total: 46},
    {date: "2025-03-13", displayDate: "Mar 13", android: 35, ios: 31, total: 66},
    {date: "2025-03-14", displayDate: "Mar 14", android: 38, ios: 42, total: 80},
    {date: "2025-03-15", displayDate: "Mar 15", android: 41, ios: 37, total: 78},
    {date: "2025-03-16", displayDate: "Mar 16", android: 43, ios: 36, total: 79},
    {date: "2025-03-17", displayDate: "Mar 17", android: 40, ios: 29, total: 69},
    {date: "2025-03-18", displayDate: "Mar 18", android: 37, ios: 28, total: 65},
    {date: "2025-03-19", displayDate: "Mar 19", android: 35, ios: 30, total: 65}
  ];
  
  // Weekly sample data
  const sampleWeeklyData = [
    {week: "Week 1 (2025-01-30)", shortWeek: "W1", displayWeek: "Week 1", android: 524, ios: 706, total: 1230},
    {week: "Week 2 (2025-02-06)", shortWeek: "W2", displayWeek: "Week 2", android: 312, ios: 285, total: 597},
    {week: "Week 3 (2025-02-13)", shortWeek: "W3", displayWeek: "Week 3", android: 221, ios: 211, total: 432},
    {week: "Week 4 (2025-02-20)", shortWeek: "W4", displayWeek: "Week 4", android: 220, ios: 162, total: 382},
    {week: "Week 5 (2025-02-27)", shortWeek: "W5", displayWeek: "Week 5", android: 283, ios: 166, total: 449},
    {week: "Week 6 (2025-03-06)", shortWeek: "W6", displayWeek: "Week 6", android: 269, ios: 235, total: 504},
    {week: "Week 7 (2025-03-13)", shortWeek: "W7", displayWeek: "Week 7", android: 234, ios: 223, total: 457}
  ];

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

  // Fixed function to filter data by date range
  function filterByDays(data, days) {
    if (!data || data.length === 0) return [];
    
    // Sort the data by date
    const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Find the most recent date in the data
    const latestDate = new Date(sortedData[0].date);
    
    // Calculate the cutoff date based on the latest date
    const cutoffDate = new Date(latestDate);
    cutoffDate.setDate(cutoffDate.getDate() - days);
    const cutoffDateStr = cutoffDate.toISOString().split('T')[0];
    
    // Filter the data to include only dates within the range
    return data.filter(item => item.date >= cutoffDateStr);
  }

  // Function to calculate totals
  function calculateTotals(data) {
    return {
      android: data.reduce((sum, item) => sum + (item.android || 0), 0),
      ios: data.reduce((sum, item) => sum + (item.ios || 0), 0),
      total: data.reduce((sum, item) => sum + (item.total || 0), 0)
    };
  }
  
  // Function to generate weekly data from daily data
  function generateWeeklyData(dailyData) {
    if (!dailyData || dailyData.length === 0) return [];
    
    // Sort data by date
    const sortedData = [...dailyData].sort((a, b) => a.date.localeCompare(b.date));
    
    // Find the first date
    const firstDate = new Date(sortedData[0].date);
    
    // Group data by week
    const weeklyData = [];
    let currentWeek = 1;
    let weekStart = new Date(firstDate);
    let weekAndroid = 0;
    let weekIOS = 0;
    let weekTotal = 0;
    let daysInWeek = 0;
    
    sortedData.forEach(dayData => {
      const currentDate = new Date(dayData.date);
      const daysDiff = Math.floor((currentDate - weekStart) / (1000 * 60 * 60 * 24));
      
      // If we've moved to a new week
      if (daysDiff >= 7) {
        // Save the completed week
        const weekDateStr = weekStart.toISOString().split('T')[0].substring(5); // MM-DD format
        weeklyData.push({
          week: `Week ${currentWeek} (${weekDateStr})`,
          shortWeek: `W${currentWeek}`,
          displayWeek: `Week ${currentWeek}`,
          android: weekAndroid,
          ios: weekIOS,
          total: weekTotal
        });
        
        // Start a new week
        currentWeek++;
        weekStart = new Date(currentDate);
        weekAndroid = dayData.android || 0;
        weekIOS = dayData.ios || 0;
        weekTotal = dayData.total || 0;
        daysInWeek = 1;
      } else {
        // Add to current week
        weekAndroid += dayData.android || 0;
        weekIOS += dayData.ios || 0;
        weekTotal += dayData.total || 0;
        daysInWeek++;
      }
    });
    
    // Add the last week if it has data
    if (daysInWeek > 0) {
      const weekDateStr = weekStart.toISOString().split('T')[0].substring(5); // MM-DD format
      weeklyData.push({
        week: `Week ${currentWeek} (${weekDateStr})`,
        shortWeek: `W${currentWeek}`,
        displayWeek: `Week ${currentWeek}`,
        android: weekAndroid,
        ios: weekIOS,
        total: weekTotal
      });
    }
    
    return weeklyData;
  }

  // Load and process data
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        
        // Try to load data from files
        try {
          // Check if window.fs is available
          if (typeof window.fs !== 'undefined' && typeof window.fs.readFile === 'function') {
            // Load Android data
            const androidDataRaw = await window.fs.readFile('android_data.csv', { encoding: 'utf8' });
            const parsedAndroidData = Papa.parse(androidDataRaw, {
              header: true,
              skipEmptyLines: true,
              dynamicTyping: true
            });
            
            // Load iOS data
            const iosDataRaw = await window.fs.readFile('ios_downloads.csv', { encoding: 'utf8' });
            const parsedIOSRaw = Papa.parse(iosDataRaw, {
              header: true,
              skipEmptyLines: true,
              dynamicTyping: true
            });
            
            // Process iOS data
            const iosDownloads = parsedIOSRaw.data
              .filter(row => {
                if (!row.Name || row["Super.One Fan Battle"] === undefined) return false;
                const dateParts = row.Name.split('/');
                return dateParts.length === 3;
              })
              .map(row => ({
                date: row.Name,
                downloads: typeof row["Super.One Fan Battle"] === 'number' ? row["Super.One Fan Battle"] : 
                            (parseInt(row["Super.One Fan Battle"]) || 0)
              }));
            
            // Process Android data
            const androidDownloads = parsedAndroidData.data
              .filter(row => row.Date && row["Store listing acquisitions: All countries / regions"] !== undefined)
              .map(row => ({
                date: row.Date,
                downloads: row["Store listing acquisitions: All countries / regions"] || 0
              }));
            
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
            
            // Store all data
            setAllDailyData(sortedCombinedData);
            
            // Generate weekly data
            const generatedWeeklyData = generateWeeklyData(sortedCombinedData);
            setWeeklyData(generatedWeeklyData);
            
            // Filter data based on selected time range
            updateDataByTimeRange(sortedCombinedData, timeRange);
          } else {
            // If window.fs is not available, throw an error to use sample data
            throw new Error('File system API not available');
          }
        } catch (fileError) {
          console.warn('Error loading data from files, using sample data:', fileError);
          // Store all sample data
          setAllDailyData(sampleData);
          // Filter based on selected time range
          updateDataByTimeRange(sampleData, timeRange);
          setWeeklyData(sampleWeeklyData);
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Unable to load download data. Using sample data instead.");
        // Store all sample data
        setAllDailyData(sampleData);
        // Filter based on selected time range
        updateDataByTimeRange(sampleData, timeRange);
        setWeeklyData(sampleWeeklyData);
        setLoading(false);
      }
    }
    
    loadData();
  }, []);
  
  // Update data when time range changes
  useEffect(() => {
    if (allDailyData.length > 0) {
      updateDataByTimeRange(allDailyData, timeRange);
    }
  }, [timeRange, allDailyData]);
  
  // Format display date from standard format
  function formatDisplayDate(dateStr) {
    const date = new Date(dateStr);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }
  
  // Helper function to update data based on time range
  const updateDataByTimeRange = (data, selectedRange) => {
    let filteredData;
    
    switch (selectedRange) {
      case '7days':
        filteredData = filterByDays(data, 7);
        break;
      case '30days':
        filteredData = filterByDays(data, 30);
        break;
      case '365days':
      default:
        // Use all data for "All Data" option
        filteredData = [...data];
        break;
    }
    
    // Update states
    setDailyData(filteredData);
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Platform Downloads
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          iOS vs. Android Downloads (Jan 30 - Mar 19, 2025)
        </p>
      </div>
      
      {/* Display error as a warning but still show data */}
      {error && (
        <div className="mb-4 p-3 bg-yellow-50 text-yellow-800 rounded border border-yellow-200">
          <p>{error}</p>
        </div>
      )}
      
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
            All Data
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
           'Showing all available data (Jan 30 - Mar 19, 2025)'}
        </p>
      </div>
    </div>
  );
};

export default PlatformDownloads;