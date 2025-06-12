
import React from 'react';

interface GeometricPatternProps {
  className?: string;
  variant?: 'subtle' | 'prominent' | 'background';
}

const GeometricPattern = ({ className = '', variant = 'subtle' }: GeometricPatternProps) => {
  const getOpacity = () => {
    switch (variant) {
      case 'subtle': return 'opacity-10';
      case 'prominent': return 'opacity-20';
      case 'background': return 'opacity-5';
      default: return 'opacity-10';
    }
  };

  return (
    <div className={`absolute inset-0 ${getOpacity()} ${className}`}>
      <div className="relative w-full h-full overflow-hidden">
        {/* Concentric circles inspired by the logo */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-amber-400 animate-geometric-pulse" />
        <div className="absolute top-12 left-12 w-28 h-28 rounded-full border border-orange-400 animate-geometric-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-14 left-14 w-24 h-24 rounded-full border border-blue-400 animate-geometric-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="absolute bottom-20 right-16 w-40 h-40 rounded-full border-2 border-blue-500 animate-geometric-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-22 right-18 w-36 h-36 rounded-full border border-amber-500 animate-geometric-pulse" style={{ animationDelay: '1.5s' }} />
        
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full border border-orange-300 animate-geometric-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full border border-blue-300 animate-geometric-pulse" style={{ animationDelay: '2.5s' }} />
      </div>
    </div>
  );
};

export default GeometricPattern;
