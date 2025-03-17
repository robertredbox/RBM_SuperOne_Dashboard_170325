import React, { useState, useEffect } from 'react';
import keywordsData from '../data/keywords_analysis.json';

const KeywordTable = ({ data, title }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Keyword</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Volume</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Jan 30, 2025</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Mar 10-11, 2025</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.keywords.map((keyword, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{keyword.keyword}</td>
                <td className="px-4 py-3 text-sm text-gray-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{keyword.volume}</td>
                <td className="px-4 py-3 text-sm text-gray-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>{keyword.rankJan30}</td>
                <td className="px-4 py-3 text-sm text-gray-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
                  {keyword.rankMar10 === 'Unranked' ? 'Unranked' : (
                    <span className={parseInt(keyword.rankMar10) <= 50 ? 'font-semibold text-green-600' : ''}
                      style={{ fontFamily: '"Roboto", sans-serif' }}>
                      {keyword.rankMar10}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
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
      <h3 className="text-lg mb-3" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>Cross-Market Keyword Insights</h3>
      <ul className="list-disc pl-5 space-y-2" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
        {insights.map((insight, index) => (
          <li key={index} className="text-gray-700">
            {insight}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Keywords = () => {
  const [activeTab, setActiveTab] = useState('uk-ios');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2" style={{ fontFamily: '"Roboto Slab", serif', fontWeight: 500 }}>
          Keyword Analysis
        </h2>
        <p className="text-gray-600" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          Ranking & Volume Data (Jan 30 - Mar 2025)
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'uk-ios' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('uk-ios')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            UK iOS
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'uk-android' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('uk-android')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            UK Android
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'spain-ios' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('spain-ios')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            Spain iOS
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'spain-android' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('spain-android')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
          >
            Spain Android
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'insights' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('insights')}
            style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}
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
        <p className="text-sm text-gray-500" style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 400 }}>
          <span className="font-medium">Data Source:</span> AppTweak MCP keyword analysis for Super.One app (ID: 1455333818 for iOS) across UK and Spain markets.
          Period: January 30, 2025 to March 10-11, 2025.
        </p>
      </div>
    </div>
  );
};

export default Keywords;