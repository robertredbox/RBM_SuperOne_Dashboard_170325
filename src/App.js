import React from 'react';
import Header from './components/Header';
import PlatformDownloads from './components/PlatformDownloads';
import USDRevenue from './components/USDRevenue';
import KeyInsights from './components/KeyInsights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <PlatformDownloads />
          <USDRevenue />
        </div>
        
        <KeyInsights />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
