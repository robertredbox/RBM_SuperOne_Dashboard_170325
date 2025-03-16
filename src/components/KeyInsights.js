import React from 'react';

const KeyInsights = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Key Insights
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          Analysis & Observations (Jan 30 - Mar 15, 2025)
        </p>
      </div>
      
      {/* Download Insights */}
      <div className="mb-6">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Download Insights</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Platform Balance:</span> iOS and Android have nearly equal market share with iOS at 50.6% (2,039 downloads) and Android at 49.4% (1,989 downloads)</li>
          <li><span className="font-medium">Download Trend:</span> Overall downloads peaked during the first week (1,230) and gradually declined before stabilizing in March</li>
          <li><span className="font-medium">Platform Shift:</span> iOS initially dominated downloads but Android showed stronger performance in mid-February</li>
          <li><span className="font-medium">Recovery Pattern:</span> iOS downloads surged again in March with high activity on March 7, 13, and 15</li>
          <li><span className="font-medium">Weekly Cycle:</span> Both platforms show similar cyclical patterns but with different timing for peaks</li>
        </ul>
      </div>
      
      {/* Revenue Insights */}
      <div className="mb-6">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Revenue Insights</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Platform Distribution:</span> Android accounts for 71.2% of total revenue ($924.04) while iOS contributes 28.8% ($373.00)</li>
          <li><span className="font-medium">Revenue per User:</span> Android generates $0.46 per download while iOS generates $0.18 per download</li>
          <li><span className="font-medium">Weekly Performance:</span> Week 4 (Feb 20-26) had the highest total revenue at $218.51</li>
          <li><span className="font-medium">iOS Revenue Peak:</span> iOS revenue peaked in Week 2 (Feb 6-12) at $72.00</li>
          <li><span className="font-medium">Android Revenue Peak:</span> Android revenue peaked in Week 4 at $159.51</li>
          <li><span className="font-medium">Peak Revenue Days:</span> February 23 and March 11 were the highest revenue days with ~$38 each</li>
        </ul>
      </div>
      
      {/* Cross-Platform Analysis */}
      <div>
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Cross-Platform Analysis</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Revenue vs Downloads:</span> While download numbers are balanced (50.6% iOS vs 49.4% Android), revenue is heavily skewed toward Android (71.2% vs 28.8%)</li>
          <li><span className="font-medium">Monetization Efficiency:</span> Android users generate 2.5x more revenue per user than iOS users</li>
          <li><span className="font-medium">Trend Correlation:</span> High download periods don't always correlate with high revenue periods for either platform</li>
          <li><span className="font-medium">User Retention:</span> Android shows stronger revenue consistency despite fluctuating download numbers</li>
          <li><span className="font-medium">Growth Opportunity:</span> iOS has strong download numbers but lower monetization, indicating potential for revenue growth with adjusted monetization strategy</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyInsights;
