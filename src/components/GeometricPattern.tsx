
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
        {/* Logo-inspired concentric circles with wavelength patterns */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-amber-400 animate-geometric-pulse">
          <div className="absolute inset-2 rounded-full border border-blue-400 animate-geometric-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-4 rounded-full border border-amber-300 animate-geometric-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="absolute bottom-20 right-16 w-40 h-40 rounded-full border-2 border-blue-500 animate-geometric-pulse" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-3 rounded-full border border-amber-400 animate-geometric-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute inset-6 rounded-full border border-blue-300 animate-geometric-pulse" style={{ animationDelay: '1.3s' }} />
        </div>
        
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border border-orange-300 animate-geometric-pulse" style={{ animationDelay: '2s' }}>
          <div className="absolute inset-2 rounded-full border border-blue-200 animate-geometric-pulse" style={{ animationDelay: '2.5s' }} />
        </div>
        
        <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full border border-blue-300 animate-geometric-pulse" style={{ animationDelay: '1.5s' }}>
          <div className="absolute inset-1 rounded-full border border-amber-200 animate-geometric-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Wavelength-inspired patterns */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <path 
            d="M0 200 Q100 150 200 200 T400 200" 
            fill="none" 
            stroke="rgba(251, 146, 60, 0.1)" 
            strokeWidth="2"
            className="animate-geometric-pulse"
          />
          <path 
            d="M0 180 Q100 130 200 180 T400 180" 
            fill="none" 
            stroke="rgba(59, 130, 246, 0.1)" 
            strokeWidth="1.5"
            className="animate-geometric-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M0 220 Q100 170 200 220 T400 220" 
            fill="none" 
            stroke="rgba(251, 146, 60, 0.08)" 
            strokeWidth="1"
            className="animate-geometric-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>

        {/* Community/ethnicity representation dots */}
        <div className="absolute top-1/4 left-1/3">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-geometric-pulse opacity-60" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-geometric-pulse opacity-60 ml-3 mt-2" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-geometric-pulse opacity-60 ml-6 mt-1" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="absolute bottom-1/4 right-1/3">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-geometric-pulse opacity-60" />
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-geometric-pulse opacity-60 ml-3 mt-2" style={{ animationDelay: '0.7s' }} />
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-geometric-pulse opacity-60 ml-6 mt-1" style={{ animationDelay: '1.2s' }} />
        </div>
      </div>
    </div>
  );
};

export default GeometricPattern;
