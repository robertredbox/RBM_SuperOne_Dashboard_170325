import React from 'react';

const CompetitiveAnalysis = () => {
  // Simple data structures for the competitive analysis
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

  const positiveAndroid = [
    "Instant payment of winnings to wallet",
    "Improving app quality with updates",
    "Visually appealing graphics and user interface",
    "Exciting gameplay combining sports knowledge and earning potential"
  ];

  const negativeAndroid = [
    "Historical login/technical issues",
    "Some allegations of being a 'scam'",
    "Token/cryptocurrency issues (disappeared tokens)",
    "Long development cycle with delayed feature releases"
  ];

  const positiveIos = [
    "Simple and intuitive gameplay",
    "Attractive visual design",
    "Sports trivia content quality",
    "Cash prize incentives"
  ];

  const negativeIos = [
    "Limited iOS-specific user feedback available",
    "Competition from higher-rated sports trivia games",
    "Potential crypto-skepticism from mainstream audience"
  ];

  const recommendations = [
    "Prioritize iOS development to compete in the sports gaming category",
    "Address technical issues and stability concerns",
    "Ensure transparency with cryptocurrency/token features",
    "Expand sports coverage beyond football to compete with multi-sport offerings",
    "Consider premium features similar to iOS competitors"
  ];

  return (
    <div className="bg-gray-100 p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">SuperOne Competitive Analysis</h1>
        <p>Comprehensive analysis across iOS and Android platforms</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* iOS Competitors Analysis */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-blue-600">iOS Competitors</h2>
          <div className="space-y-3">
            {iosRatings.map((competitor, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{competitor.name}</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: `${competitor.rating * 20}%`}}></div>
                  </div>
                  <span>{competitor.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm">Average Rating: 4.53</p>
          
          <h3 className="font-bold mt-4 mb-2">iOS Category Focus</h3>
          <div className="space-y-2">
            {iosCategories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{category.name}</span>
                  <span>{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: `${category.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Android Competitors Analysis */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-green-600">Android Competitors</h2>
          <div className="space-y-3">
            {androidRatings.map((competitor, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{competitor.name}</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${competitor.rating * 20}%`}}></div>
                  </div>
                  <span>{competitor.rating}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm">Average Rating: 4.04</p>
          
          <h3 className="font-bold mt-4 mb-2">Android Category Focus</h3>
          <div className="space-y-2">
            {androidCategories.map((category, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{category.name}</span>
                  <span>{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: `${category.percentage}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* iOS User Sentiment */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-blue-600">iOS User Sentiment</h2>
          
          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Positive Feedback</h3>
            <ul className="list-disc pl-5 space-y-1">
              {positiveIos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 p-3 rounded-lg">
            <h3 className="font-bold mb-2">Negative Feedback</h3>
            <ul className="list-disc pl-5 space-y-1">
              {negativeIos.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Android User Sentiment */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4 text-green-600">Android User Sentiment</h2>
          
          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <h3 className="font-bold mb-2">Positive Feedback</h3>
            <ul className="list-disc pl-5 space-y-1">
              {positiveAndroid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-red-50 p-3 rounded-lg">
            <h3 className="font-bold mb-2">Negative Feedback</h3>
            <ul className="list-disc pl-5 space-y-1">
              {negativeAndroid.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">Strategic Recommendations</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Key Opportunity */}
      <div className="bg-blue-50 rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-2">Key Opportunity</h2>
        <p>
          The most significant opportunity appears to be in establishing SuperOne as the dominant player in the crypto-integrated sports trivia niche, leveraging both traditional cash prizes and blockchain rewards to appeal to both mainstream sports fans and crypto enthusiasts.
        </p>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;