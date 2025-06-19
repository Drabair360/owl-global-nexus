
import React from 'react';
import VisionHeader from './vision/VisionHeader';
import PortfolioSynergy from './vision/PortfolioSynergy';
import VisionStatement from './vision/VisionStatement';
import MilestoneTrajectory from './vision/MilestoneTrajectory';
import JoinTransformation from './vision/JoinTransformation';

const VisionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23334155' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Enhanced SVG Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        <VisionHeader />
        <PortfolioSynergy />
        <VisionStatement />
        <MilestoneTrajectory />
        <JoinTransformation />
      </div>
    </section>
  );
};

export default VisionSection;
