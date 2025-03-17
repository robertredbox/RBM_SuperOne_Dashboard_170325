import React from 'react';

const CompetitiveAnalysis = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">SuperOne Competitive Analysis</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">App Overview</h3>
        <p>SuperOne is a blockchain-based sports trivia gaming platform with cash prizes through Battle Royale-style gameplay, currently focused on football with plans to expand to other fan-based interests.</p>
        
        <h4 className="font-medium mt-4 mb-1">Key Features:</h4>
        <ul className="list-disc pl-5">
          <li>True/false trivia questions with swipe mechanics (right for true, left for false)</li>
          <li>Battle Royale-style competition with cash prizes and instant payouts</li>
          <li>Blockchain integration with cryptocurrency rewards (SRX token)</li>
          <li>Plans to expand beyond sports to other fan categories (music, films, etc.)</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-3 text-blue-600">iOS Competitor Analysis</h3>
          
          <h4 className="font-medium mb-2">Top Competitors:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li><b>MADFUT 24</b> (4.8★) - Football card/team building game</li>
            <li><b>Sports Trivia Star</b> (4.9★) - Direct competitor with trivia focus</li>
            <li><b>Rugby League Legends</b> (5.0★) - Sports management with trivia elements</li>
            <li><b>Hockey All Stars</b> (4.8★) - Sports simulation with trivia integration</li>
            <li><b>Astonishing Basketball Manager</b> (4.7★) - Sports management sim</li>
          </ul>
          
          <h4 className="font-medium mb-2">Market Characteristics:</h4>
          <ul className="list-disc pl-5">
            <li>95% of competitors in Games & Sports categories</li>
            <li>30% paid apps ($0.99-$5.99) vs 70% free apps</li>
            <li>Average competitor rating: 4.53/5</li>
            <li>Strong category focus consistency</li>
            <li>Emphasis on high-quality visual design and UX</li>
            <li>Higher barrier to entry with premium pricing models</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-3 text-green-600">Android Competitor Analysis</h3>
          
          <h4 className="font-medium mb-2">Top Competitors:</h4>
          <ul className="list-disc pl-5 mb-4">
            <li><b>SupreFans</b> (4.2★) - Social fan engagement platform</li>
            <li><b>Super Squares</b> (4.3★) - Sports game show with trivia</li>
            <li><b>Indian Train Simulator</b> (4.2★) - Gaming app with social elements</li>
            <li><b>My 76</b> (4.3★) - Location-based rewards app</li>
            <li><b>Super 1 Foods</b> (4.8★) - Shopping rewards app</li>
          </ul>
          
          <h4 className="font-medium mb-2">Market Characteristics:</h4>
          <ul className="list-disc pl-5">
            <li>Fragmented category distribution across Social, Games, Entertainment, etc.</li>
            <li>100% free apps with in-app purchase monetization</li>
            <li>Average competitor rating: 4.04/5</li>
            <li>Less clearly defined market positioning</li>
            <li>Greater emphasis on social features and community</li>
            <li>More lenient user expectations for app stability</li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">User Sentiment Analysis</h3>
          
          <div className="bg-green-50 p-3 rounded mb-4">
            <h4 className="font-medium mb-1">Positive Feedback:</h4>
            <ul className="list-disc pl-5">
              <li>"Instant payment of winnings to wallet"</li>
              <li>"Improving app quality with updates"</li>
              <li>"Visually appealing graphics and interface"</li>
              <li>"Simple and intuitive gameplay"</li>
              <li>"Exciting cash prize incentives"</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-3 rounded">
            <h4 className="font-medium mb-1">Negative Feedback:</h4>
            <ul className="list-disc pl-5">
              <li>"Historical login/technical issues"</li>
              <li>"Token/cryptocurrency issues"</li>
              <li>"Long development cycle"</li>
              <li>"Competition from higher-rated games"</li>
              <li>"Some allegations of being a 'scam'"</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">SWOT Analysis</h3>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50 p-2 rounded">
              <h4 className="font-medium">Strengths</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Unique crypto + trivia combination</li>
                <li>Instant payout mechanism</li>
                <li>Simple, intuitive gameplay</li>
                <li>Strong visual design</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-2 rounded">
              <h4 className="font-medium">Weaknesses</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Technical stability issues</li>
                <li>Limited sport coverage</li>
                <li>Trust issues in crypto space</li>
                <li>Long development cycle</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-2 rounded">
              <h4 className="font-medium">Opportunities</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Expand to multiple sports</li>
                <li>iOS premium feature model</li>
                <li>Cross-category expansion</li>
                <li>Mainstream crypto adoption</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-2 rounded">
              <h4 className="font-medium">Threats</h4>
              <ul className="list-disc pl-5 text-sm">
                <li>Higher-rated competitors</li>
                <li>Crypto market volatility</li>
                <li>Platform policy changes</li>
                <li>User retention challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Strategic Recommendations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">Platform Strategy</h4>
            <ul className="list-disc pl-5">
              <li>Prioritize iOS development for higher monetization potential</li>
              <li>Maintain Android presence for broader market reach</li>
              <li>Harmonize feature parity across both platforms</li>
              <li>Consider iOS premium features ($0.99-$3.99)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Product Enhancements</h4>
            <ul className="list-disc pl-5">
              <li>Address technical issues and stability concerns</li>
              <li>Ensure transparency with cryptocurrency features</li>
              <li>Expand sports coverage beyond football</li>
              <li>Improve user onboarding experience</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Marketing Focus</h4>
            <ul className="list-disc pl-5">
              <li>Emphasize instant cash payouts in advertising</li>
              <li>Target mainstream sports fans, not just crypto enthusiasts</li>
              <li>Develop referral program to increase organic growth</li>
              <li>Partner with sports influencers for promotion</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-1">Growth Opportunities</h4>
            <ul className="list-disc pl-5">
              <li>Explore esports and gaming trivia categories</li>
              <li>Develop tournament and league structures</li>
              <li>Create team-based competitions</li>
              <li>Introduce seasonal content tied to real-world sports events</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Key Competitive Advantage</h3>
        <p className="mb-2">SuperOne's unique position at the intersection of sports trivia, cash prizes, and blockchain technology creates a distinctive competitive advantage. Few competitors have successfully integrated these three elements into a cohesive product.</p>
        <p>The most significant opportunity is establishing SuperOne as the dominant player in the crypto-integrated sports trivia niche, leveraging both traditional cash prizes and blockchain rewards to appeal to both mainstream sports fans and crypto enthusiasts while expanding beyond football to other popular sports and entertainment categories.</p>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;