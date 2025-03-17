import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const CompetitiveAnalysis = () => {
  // iOS Ratings Chart Data
  const iosRatingsData = [
    { name: 'MADFUT 24', rating: 4.8 },
    { name: 'Sports Trivia Star', rating: 4.9 },
    { name: 'Rugby League Legends', rating: 5.0 },
    { name: 'Hockey All Stars', rating: 4.8 },
    { name: 'SuperOne', rating: 4.5 }
  ];

  // Android Ratings Chart Data
  const androidRatingsData = [
    { name: 'SupreFans', rating: 4.2 },
    { name: 'Super Squares', rating: 4.3 },
    { name: 'My 76', rating: 4.3 },
    { name: 'Super 1 Foods', rating: 4.8 },
    { name: 'SuperOne', rating: 4.1 }
  ];

  // Category Distribution Chart Data
  const categoryData = [
    { name: 'SuperOne iOS', Games: 95, Sports: 95, Simulation: 35, Arcade: 25 },
    { name: 'SuperOne Android', Social: 13, Sports: 9, Games: 9, Entertainment: 9 }
  ];

  // App Store Pricing Model Data
  const pricingData = [
    { name: 'iOS', Free: 70, Paid: 30 },
    { name: 'Android', Free: 100, Paid: 0 }
  ];

  // SWOT Data for Radar Chart
  const competitiveFactors = [
    { subject: 'Unique Features', SuperOne: 9, Competitors: 5 },
    { subject: 'Visual Design', SuperOne: 8, Competitors: 7 },
    { subject: 'Cash Rewards', SuperOne: 9, Competitors: 4 },
    { subject: 'User Engagement', SuperOne: 7, Competitors: 8 },
    { subject: 'Technical Stability', SuperOne: 5, Competitors: 8 },
    { subject: 'Market Position', SuperOne: 6, Competitors: 7 }
  ];

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  const IOS_COLOR = '#007AFF';
  const ANDROID_COLOR = '#3DDC84';

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">SuperOne Competitive Analysis</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">App Overview</h3>
        <p>SuperOne is a blockchain-based sports trivia gaming platform with cash prizes through Battle Royale-style gameplay, currently focused on football with plans to expand to other fan-based interests.</p>
      </div>
      
      {/* Competitor Ratings Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-600">iOS Competitor Ratings</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={iosRatingsData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 5]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => [`${value}/5`, 'Rating']} />
                <Bar dataKey="rating" fill={IOS_COLOR} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-600">Android Competitor Ratings</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={androidRatingsData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 5]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip formatter={(value) => [`${value}/5`, 'Rating']} />
                <Bar dataKey="rating" fill={ANDROID_COLOR} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Pricing Model & Category Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">App Store Pricing Models</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={pricingData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'App Distribution']} />
                <Legend />
                <Bar dataKey="Free" fill="#8884d8" />
                <Bar dataKey="Paid" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-center mt-2">iOS shows monetization potential with 30% paid apps, while Android is 100% free-to-download.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Competitive Position</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={competitiveFactors}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                <Radar name="SuperOne" dataKey="SuperOne" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Competitors" dataKey="Competitors" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-center mt-2">SuperOne excels in unique features and cash rewards, but lags in technical stability.</p>
        </div>
      </div>
      
      {/* User Sentiment & Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">User Sentiment Analysis</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded">
              <h4 className="font-medium mb-1">Positive Feedback:</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>"Instant payment of winnings"</li>
                <li>"Improving app quality"</li>
                <li>"Visually appealing graphics"</li>
                <li>"Simple gameplay"</li>
                <li>"Exciting cash prizes"</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-3 rounded">
              <h4 className="font-medium mb-1">Negative Feedback:</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>"Login/technical issues"</li>
                <li>"Token/crypto problems"</li>
                <li>"Development delays"</li>
                <li>"Tough competition"</li>
                <li>"Trust concerns"</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="font-medium mb-1">Key Differentiators:</h4>
            <ul className="list-disc pl-5">
              <li>Only app combining sports trivia + cash prizes + blockchain</li>
              <li>Real-time payout system unlike most competitors</li>
              <li>True/false swipe interface for intuitive gameplay</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Strategic Recommendations</h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-blue-50 p-2 rounded">
              <h4 className="font-medium">Platform</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Prioritize iOS development</li>
                <li>Maintain Android presence</li>
                <li>Consider iOS premium features</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-2 rounded">
              <h4 className="font-medium">Product</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Fix technical stability</li>
                <li>Ensure crypto transparency</li>
                <li>Expand sports coverage</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-medium">Marketing</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Highlight instant payouts</li>
                <li>Target mainstream fans</li>
                <li>Partner with influencers</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-2 rounded">
              <h4 className="font-medium">Growth</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Add esports/gaming trivia</li>
                <li>Create tournaments</li>
                <li>Add seasonal content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Key Competitive Advantage</h3>
        <p>SuperOne's unique position at the intersection of sports trivia, cash prizes, and blockchain technology creates a distinctive competitive advantage. The greatest opportunity is establishing dominance in the crypto-integrated sports trivia niche, appealing to both mainstream sports fans and crypto enthusiasts.</p>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;