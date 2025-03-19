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
          Analysis & Observations (Dec 13, 2024 - Mar 17, 2025)
        </p>
      </div>
      
      {/* Download Insights */}
      <div className="mb-6">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Download Insights</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">90-Day Performance:</span> Data now covers a full 90-day period (Dec 13 to Mar 17), showing complete acquisition patterns across platforms</li>
          <li><span className="font-medium">Platform Balance:</span> iOS downloads (2,973) slightly exceed Android (2,479) across the 90-day period, with iOS representing 54.5% of total downloads</li>
          <li><span className="font-medium">Download Trend:</span> Weekly patterns show consistent engagement with stronger weekend performance, particularly on iOS</li>
          <li><span className="font-medium">Regional Diversity:</span> iOS data reveals strong performance across multiple countries with Japan, Germany, US and UK leading engagement</li>
          <li><span className="font-medium">Growth Pattern:</span> Both platforms show stabilization in February followed by modest growth in early March</li>
          <li><span className="font-medium">Time-Based Analysis:</span> The dashboard now supports distinct 7-day, 30-day, and 90-day views for more targeted analysis</li>
        </ul>
      </div>
      
      {/* Revenue Insights */}
      <div className="mb-6">
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Revenue Insights</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Platform Distribution:</span> Android continues to dominate revenue with approximately 70% of total revenue generation despite fewer downloads</li>
          <li><span className="font-medium">Revenue per User:</span> Android generates approximately $0.46 per download while iOS generates $0.18 per download</li>
          <li><span className="font-medium">Week-over-Week Analysis:</span> The full 13-week dataset shows more consistent revenue generation in late February through mid-March</li>
          <li><span className="font-medium">iOS Revenue Pattern:</span> iOS revenue shows positive correlation with weekend download spikes</li>
          <li><span className="font-medium">Android Revenue Consistency:</span> Android revenue maintains strong performance through the entire period with less volatility</li>
          <li><span className="font-medium">Last 7-Day Performance:</span> March 11-17 shows particularly strong combined revenue performance, suggesting positive momentum</li>
        </ul>
      </div>
      
      {/* Cross-Platform Analysis */}
      <div>
        <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Cross-Platform Analysis</h3>
        <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <li><span className="font-medium">Revenue vs Downloads:</span> While download numbers remain relatively balanced, revenue continues to be heavily skewed toward Android</li>
          <li><span className="font-medium">Monetization Efficiency:</span> Android users consistently generate 2.5x more revenue per user than iOS users across the entire 90-day period</li>
          <li><span className="font-medium">Country Performance:</span> Country-level iOS data shows significant potential for targeted marketing in top-performing regions</li>
          <li><span className="font-medium">User Retention:</span> Both platforms show consistent engagement without significant drop-offs across the full 90-day window</li>
          <li><span className="font-medium">Growth Opportunity:</span> iOS continues to show strong download numbers but lower monetization, suggesting potential for revenue growth with adjusted monetization strategy</li>
          <li><span className="font-medium">Seasonal Impact:</span> The complete December-March dataset provides evidence of holiday and seasonal effects that can inform future marketing efforts</li>
        </ul>
      </div>
    </div>
  );
};

export default KeyInsights;