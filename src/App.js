import React, { useState } from 'react';
import Header from './components/Header';
import PlatformDownloads from './components/PlatformDownloads';
import USDRevenue from './components/USDRevenue';
import KeyInsights from './components/KeyInsights';
import RealGameAnalytics from './components/RealGameAnalytics';
import SuperOneDashboard from './components/SuperOneDashboard';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import Keywords from './components/Keywords';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('downloads');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'downloads':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PlatformDownloads />
            <USDRevenue />
          </div>
        );
      case 'analytics':
        return <RealGameAnalytics />;
      case 'dashboard':
        return <SuperOneDashboard />;
      case 'competitors':
        return <CompetitiveAnalysis />;
      case 'keywords':
        return <Keywords />;
      case 'insights':
        return <KeyInsights />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <PlatformDownloads />
            <USDRevenue />
          </div>
        );
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Header />
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-wrap">
            <button 
              className={`px-4 py-2 mr-2 mb-2 rounded transition-colors ${activeTab === 'downloads' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('downloads')}
            >
              Downloads & Revenue
            </button>
            <button 
              className={`px-4 py-2 mr-2 mb-2 rounded transition-colors ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('analytics')}
            >
              Game Analytics
            </button>
            <button 
              className={`px-4 py-2 mr-2 mb-2 rounded transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`px-4 py-2 mr-2 mb-2 rounded transition-colors ${activeTab === 'competitors' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('competitors')}
            >
              Competitors
            </button>
            <button 
              className={`px-4 py-2 mr-2 mb-2 rounded transition-colors ${activeTab === 'keywords' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('keywords')}
            >
              Keywords
            </button>
            <button 
              className={`px-4 py-2 mr-2 mb-2 rounded transition-colors ${activeTab === 'insights' ? 'bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('insights')}
            >
              Key Insights
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        {renderTabContent()}
        
        <Footer />
      </div>
    </div>
  );
}

export default App;