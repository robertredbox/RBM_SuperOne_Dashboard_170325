import React from 'react';

const CompetitiveAnalysis = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">SuperOne Competitive Analysis</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">App Overview</h3>
        <p>SuperOne is a blockchain-based sports trivia gaming platform with cash prizes through Battle Royale-style gameplay.</p>
        
        <h4 className="font-medium mt-4 mb-1">Key Features:</h4>
        <ul className="list-disc pl-5">
          <li>True/false trivia questions with swipe mechanics</li>
          <li>Cash prize competitions</li>
          <li>Blockchain integration with cryptocurrency rewards</li>
          <li>Plans to expand beyond sports to other fan categories</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-600">iOS Market</h3>
          <ul className="list-disc pl-5">
            <li>Average competitor rating: 4.53/5</li>
            <li>95% competitors in Games & Sports categories</li>
            <li>30% paid apps; 70% free apps</li>
            <li>More focused positioning in sports gaming</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-600">Android Market</h3>
          <ul className="list-disc pl-5">
            <li>Average competitor rating: 4.04/5</li>
            <li>Fragmented category distribution</li>
            <li>100% free apps with in-app purchases</li>
            <li>Less clearly defined market positioning</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Strategic Recommendations</h3>
        <ul className="list-disc pl-5">
          <li>Prioritize iOS development to compete in the sports gaming category</li>
          <li>Address technical issues and stability concerns</li>
          <li>Ensure transparency with cryptocurrency/token features</li>
          <li>Expand sports coverage beyond football to compete with multi-sport offerings</li>
          <li>Consider premium features similar to iOS competitors</li>
        </ul>
      </div>
      
      <div className="bg-blue-50 p-3 rounded">
        <h3 className="text-lg font-semibold mb-2">Key Opportunity</h3>
        <p>The most significant opportunity is establishing SuperOne as the dominant player in the crypto-integrated sports trivia niche, leveraging both traditional cash prizes and blockchain rewards to appeal to both mainstream sports fans and crypto enthusiasts.</p>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;