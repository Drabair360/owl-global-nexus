
import React from 'react';
import PortfolioSection from './PortfolioSection';
import Portfolio from '../Portfolio';

const UnifiedPortfolioWrapper = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Unified Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-900" />
      
      {/* Subtle Overall Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Flagship Ventures Section */}
      <Portfolio />
    </div>
  );
};

export default UnifiedPortfolioWrapper;
