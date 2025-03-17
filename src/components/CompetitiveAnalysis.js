import React, { useState } from 'react';

const CompetitiveAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [platform, setPlatform] = useState('both');

  // Define platform colors
  const androidColor = '#3DDC84';
  const iosColor = '#007AFF';
  const bothPlatformsColor = '#6C63FF';

  // Summary data for the app
  const appSummary = {
    name: "SuperOne",
    description: "A blockchain-based sports trivia gaming platform with cash prizes through Battle Royale-style gameplay",
    keyFeatures: [
      "True/false trivia questions with swipe mechanics",
      "Cash prize competitions",
      "Blockchain integration with cryptocurrency rewards",
      "Plans to expand beyond sports to other fan categories"
    ]
  };

  // Competitor ratings data
  const iosRatings = [
    { name: 'MADFUT 24', rating: 4.8 },
    { name: 'Sports Trivia Star', rating: 4.9 },
    { name: 'Rugby League Legends', rating: 5.0 },
    { name: 'Hockey All Stars 24', rating: 4.8 },
    { name: 'Astonishing Basketball Manager', rating: 4.7 }
  ];

  const androidRatings = [
    { name: 'SupreFans', rating: 4.2 },
    { name: 'Super Squares', rating: 4.3 },
    { name: 'Indian Train Simulator', rating: 4.2 },
    { name: 'My 76', rating: 4.3 },
    { name: 'Super 1 Foods', rating: 4.8 }
  ];

  // Category data
  const iosCategories = [
    { name: 'Games', percentage: 95 },
    { name: 'Sports', percentage: 95 },
    { name: 'Simulation', percentage: 35 },
    { name: 'Arcade', percentage: 25 }
  ];

  const androidCategories = [
    { name: 'Social', percentage: 13 },
    { name: 'Sports', percentage: 9 },
    { name: 'Games', percentage: 9 },
    { name: 'Entertainment', percentage: 9 }
  ];

  // User sentiment data
  const userSentiment = {
    ios: {
      positive: [
        "Simple and intuitive gameplay",
        "Attractive visual design",
        "Sports trivia content quality",
        "Cash prize incentives"
      ],
      negative: [
        "Limited iOS-specific user feedback available",
        "Competition from higher-rated sports trivia games",
        "Potential crypto-skepticism from mainstream audience"
      ]
    },
    android: {
      positive: [
        "Instant payment of winnings to wallet",
        "Improving app quality with updates",
        "Visually appealing graphics and user interface",
        "Exciting gameplay combining sports knowledge and earning potential"
      ],
      negative: [
        "Historical login/technical issues",
        "Some allegations of being a 'scam'",
        "Token/cryptocurrency issues (disappeared tokens)",
        "Long development cycle with delayed feature releases"
      ]
    }
  };

  // Recommendations
  const recommendations = [
    {
      title: "Platform Optimization",
      items: [
        "Prioritize iOS development to compete in the defined sports gaming category",
        "Maintain Android presence for broader market reach",
        "Harmonize feature parity across both platforms"
      ]
    },
    {
      title: "Feature Enhancement",
      items: [
        "Address technical issues and stability concerns",
        "Ensure transparency with cryptocurrency/token features",
        "Expand sports coverage beyond football to compete with multi-sport offerings"
      ]
    }
  ];

  // Tab rendering functions
  const renderOverviewTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>SuperOne App Overview</h2>
      <p className="mb-4" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{appSummary.description}</p>
      
      <h3 className="text-lg font-semibold mt-6 mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Key Features</h3>
      <ul className="list-disc pl-5 space-y-1">
        {appSummary.keyFeatures.map((feature, index) => (
          <li key={index} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{feature}</li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: androidColor }}>Android Positioning</h3>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Competing across multiple categories with a fragmented genre focus. SuperOne's identity is less clearly defined on Android.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: iosColor }}>iOS Positioning</h3>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>More clearly positioned as a sports gaming application, with strong category focus consistency among competitors.</p>
        </div>
      </div>
    </div>
  );

  const renderCompetitorsTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Top Competitors</h2>
      
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'android' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('android')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Android
        </button>
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'ios' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('ios')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          iOS
        </button>
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'both' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('both')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Both
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(platform === 'android' || platform === 'both') && (
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: androidColor }}>Android Top Competitors</h3>
            <div className="space-y-3">
              {androidRatings.map((competitor, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{competitor.name}</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(competitor.rating/5)*100}%` }}></div>
                    </div>
                    <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{competitor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Average Rating: 4.04</p>
          </div>
        )}

        {(platform === 'ios' || platform === 'both') && (
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: iosColor }}>iOS Top Competitors</h3>
            <div className="space-y-3">
              {iosRatings.map((competitor, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{competitor.name}</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(competitor.rating/5)*100}%` }}></div>
                    </div>
                    <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{competitor.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Average Rating: 4.53</p>
          </div>
        )}
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Key Insights</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>iOS competitors have higher average ratings (4.53 vs 4.04)</li>
          <li style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Android has 100% free apps while iOS has 30% paid apps</li>
          <li style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>iOS competition is more focused in the sports/games categories</li>
        </ul>
      </div>
    </div>
  );

  const renderCategoriesTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Category Analysis</h2>
      
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'android' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('android')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Android
        </button>
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'ios' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('ios')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          iOS
        </button>
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'both' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('both')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Both
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(platform === 'android' || platform === 'both') && (
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: androidColor }}>Android Categories</h3>
            <div className="space-y-3">
              {androidCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{category.name}</span>
                    <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(platform === 'ios' || platform === 'both') && (
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: iosColor }}>iOS Categories</h3>
            <div className="space-y-3">
              {iosCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{category.name}</span>
                    <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${category.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderSentimentTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>User Sentiment</h2>
      
      <div className="flex space-x-4 mb-6">
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'android' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('android')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Android
        </button>
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'ios' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('ios')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          iOS
        </button>
        <button 
          className={`px-3 py-1 rounded-lg ${platform === 'both' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
          onClick={() => setPlatform('both')}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Both
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(platform === 'android' || platform === 'both') && (
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: androidColor }}>Android User Sentiment</h3>
            
            <div className="bg-green-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Positive Feedback</h4>
              <ul className="list-disc pl-5 space-y-1">
                {userSentiment.android.positive.map((item, index) => (
                  <li key={index} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg">
              <h4 className="font-medium mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Negative Feedback</h4>
              <ul className="list-disc pl-5 space-y-1">
                {userSentiment.android.negative.map((item, index) => (
                  <li key={index} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {(platform === 'ios' || platform === 'both') && (
          <div>
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500, color: iosColor }}>iOS User Sentiment</h3>
            
            <div className="bg-green-50 p-3 rounded-lg mb-4">
              <h4 className="font-medium mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Positive Feedback</h4>
              <ul className="list-disc pl-5 space-y-1">
                {userSentiment.ios.positive.map((item, index) => (
                  <li key={index} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg">
              <h4 className="font-medium mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Negative Feedback</h4>
              <ul className="list-disc pl-5 space-y-1">
                {userSentiment.ios.negative.map((item, index) => (
                  <li key={index} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderRecommendationsTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Strategic Recommendations</h2>
      
      <div className="space-y-6">
        {recommendations.map((section, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>{section.title}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {section.items.map((item, idx) => (
                <li key={idx} style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Key Opportunity</h3>
          <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
            The most significant opportunity appears to be in establishing SuperOne as the dominant player in the crypto-integrated sports trivia niche, leveraging both traditional cash prizes and blockchain rewards to appeal to both mainstream sports fans and crypto enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>SuperOne Competitive Analysis</h1>
        <p style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Comprehensive market analysis across iOS and Android platforms</p>
      </div>
      
      {/* Navigation */}
      <div className="flex flex-wrap mb-6 bg-white rounded-lg shadow overflow-hidden">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('competitors')}
          className={`px-4 py-2 ${activeTab === 'competitors' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Competitors
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-4 py-2 ${activeTab === 'categories' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveTab('sentiment')}
          className={`px-4 py-2 ${activeTab === 'sentiment' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Sentiment
        </button>
        <button
          onClick={() => setActiveTab('recommendations')}
          className={`px-4 py-2 ${activeTab === 'recommendations' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
          style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
        >
          Recommendations
        </button>
      </div>
      
      {/* Content */}
      {activeTab === 'overview' && renderOverviewTab()}
      {activeTab === 'competitors' && renderCompetitorsTab()}
      {activeTab === 'categories' && renderCategoriesTab()}
      {activeTab === 'sentiment' && renderSentimentTab()}
      {activeTab === 'recommendations' && renderRecommendationsTab()}
    </div>
  );
};

export default CompetitiveAnalysis;