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
          Analysis & Observations (Jan 30 - Mar 19, 2025)
        </p>
      </div>
      
      {/* Download Insights */}
      <div className="mb-6">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Download Insights</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Extended Data Period:</span> Data now includes an additional 4 days (through March 19), showing continued user acquisition</li>
          <li><span className="font-medium">Platform Balance:</span> iOS and Android maintain nearly equal market share with a slight shift toward Android in the latest period</li>
          <li><span className="font-medium">Download Trend:</span> Overall downloads peaked during the first week (1,230) and gradually stabilized in March with consistent daily averages</li>
          <li><span className="font-medium">Platform Shift:</span> iOS initially dominated downloads but Android showed stronger consistency in the extended period</li>
          <li><span className="font-medium">Late-March Activity:</span> iOS downloads remained strong March 16-19 with consistent numbers above 25/day</li>
          <li><span className="font-medium">Weekly Cycle:</span> Both platforms show similar cyclical patterns with weekend increases becoming more pronounced in the extended period</li>
        </ul>
      </div>
      
      {/* Revenue Insights */}
      <div className="mb-6">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Revenue Insights</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Platform Distribution:</span> Android continues to dominate revenue with over 70% of total revenue generation</li>
          <li><span className="font-medium">Revenue per User:</span> Android generates approximately $0.46 per download while iOS generates $0.18 per download</li>
          <li><span className="font-medium">Week-over-Week Analysis:</span> The data now includes nearly 8 complete weeks, showing more consistent revenue generation in Week 7 and early Week 8</li>
          <li><span className="font-medium">iOS Revenue Pattern:</span> iOS revenue shows more stability in the extended period compared to earlier fluctuations</li>
          <li><span className="font-medium">Android Revenue Consistency:</span> Android revenue maintains strong performance through mid-March</li>
          <li><span className="font-medium">March 16-19 Performance:</span> The newest data shows continued strong performance with daily revenue averaging above $30</li>
        </ul>
      </div>
      
      {/* Cross-Platform Analysis */}
      <div>
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Cross-Platform Analysis</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Revenue vs Downloads:</span> While download numbers remain relatively balanced, revenue continues to be heavily skewed toward Android</li>
          <li><span className="font-medium">Monetization Efficiency:</span> Android users consistently generate 2.5x more revenue per user than iOS users across the entire period</li>
          <li><span className="font-medium">Extended Period Stability:</span> The additional days of data confirm the platform performance patterns identified earlier</li>
          <li><span className="font-medium">User Retention:</span> Android shows stronger revenue consistency across the full data period</li>
          <li><span className="font-medium">Growth Opportunity:</span> iOS continues to show strong download numbers but lower monetization, indicating potential for revenue growth with adjusted monetization strategy</li>
          <li><span className="font-medium">7-Week Trend:</span> The near-complete 7-week dataset now provides stronger evidence for seasonality and day-of-week effects that can inform marketing strategy</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyInsights;
