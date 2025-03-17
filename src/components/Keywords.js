import React, { useState, useEffect } from 'react';
import keywordsData from '../data/keywords_analysis.json';

const KeywordTable = ({ data, title }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Keyword</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Volume</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Jan 30, 2025</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Mar 10-11, 2025</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.keywords.map((keyword, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{keyword.keyword}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{keyword.volume}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{keyword.rankJan30}</td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {keyword.rankMar10 === 'Unranked' ? 'Unranked' : (
                    <span className={parseInt(keyword.rankMar10) <= 50 ? 'font-semibold text-green-600' : ''}>
                      {keyword.rankMar10}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className={
                    keyword.change.includes('↑') ? 'text-green-600' : 
                    keyword.change.includes('↓') ? 'text-red-600' : 'text-gray-500'
                  }>
                    {keyword.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MarketInsights = ({ insights }) => {
  return (
    <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <h3 className="text-xl font-semibold text-blue-800 mb-4">Cross-Market Keyword Insights</h3>
      <ul className="space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-gray-700">{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Keywords = () => {
  const [activeTab, setActiveTab] = useState('uk-ios');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
        Keyword Analysis (Jan 30 - Mar 2025)
      </h2>
      
      <div className="mb-6">
        <div className="flex flex-wrap border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'uk-ios' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('uk-ios')}
          >
            UK iOS
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'uk-android' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('uk-android')}
          >
            UK Android
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'spain-ios' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('spain-ios')}
          >
            Spain iOS
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'spain-android' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('spain-android')}
          >
            Spain Android
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'insights' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('insights')}
          >
            Insights
          </button>
        </div>
      </div>
      
      <div className="mt-4">
        {activeTab === 'uk-ios' && (
          <KeywordTable 
            data={keywordsData.ukIOS} 
            title="UK iOS Top 10 Keywords"
          />
        )}
        {activeTab === 'uk-android' && (
          <KeywordTable 
            data={keywordsData.ukAndroid} 
            title="UK Android Top 10 Keywords"
          />
        )}
        {activeTab === 'spain-ios' && (
          <KeywordTable 
            data={keywordsData.spainIOS} 
            title="Spain iOS Top 10 Keywords"
          />
        )}
        {activeTab === 'spain-android' && (
          <KeywordTable 
            data={keywordsData.spainAndroid} 
            title="Spain Android Top 10 Keywords"
          />
        )}
        {activeTab === 'insights' && (
          <MarketInsights insights={keywordsData.insights} />
        )}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-sm text-gray-500">
          <span className="font-medium">Data Source:</span> AppTweak MCP keyword analysis for Super.One app (ID: 1455333818 for iOS) across UK and Spain markets.
          Period: January 30, 2025 to March 10-11, 2025.
        </p>
      </div>
    </div>
  );
};

export default Keywords;