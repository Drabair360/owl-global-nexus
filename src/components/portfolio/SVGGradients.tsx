
import React from 'react';

const SVGGradients = () => {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="premiumBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="30%" stopColor="#1d4ed8" />
          <stop offset="70%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="premiumGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="30%" stopColor="#059669" />
          <stop offset="70%" stopColor="#047857" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
        <linearGradient id="premiumAmber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="30%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
        <linearGradient id="premiumPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="30%" stopColor="#7c3aed" />
          <stop offset="70%" stopColor="#6d28d9" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>
        <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="hologram" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="softGlow"/>
          <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="rgba(59,130,246,0.3)"/>
        </filter>
      </defs>
    </svg>
  );
};

export default SVGGradients;
