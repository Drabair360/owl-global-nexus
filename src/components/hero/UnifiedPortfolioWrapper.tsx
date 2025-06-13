
import React from 'react';

interface UnifiedPortfolioWrapperProps {
  children: React.ReactNode;
}

const UnifiedPortfolioWrapper = ({ children }: UnifiedPortfolioWrapperProps) => {
  return (
    <div className="relative">
      {/* Unified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
      
      {/* Additional depth layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-700/40" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default UnifiedPortfolioWrapper;
