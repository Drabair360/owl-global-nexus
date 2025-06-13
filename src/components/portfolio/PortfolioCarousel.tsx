
import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  primaryColor: string;
  website: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

const PortfolioCarousel = ({ items }: PortfolioCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, items.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-500/20 to-blue-600/30',
        border: 'border-blue-400/30',
        glow: 'shadow-blue-500/20',
        text: 'text-blue-300',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      emerald: {
        bg: 'from-emerald-500/20 to-emerald-600/30',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-500/20',
        text: 'text-emerald-300',
        button: 'bg-emerald-600 hover:bg-emerald-700'
      },
      amber: {
        bg: 'from-amber-500/20 to-amber-600/30',
        border: 'border-amber-400/30',
        glow: 'shadow-amber-500/20',
        text: 'text-amber-300',
        button: 'bg-amber-600 hover:bg-amber-700'
      },
      purple: {
        bg: 'from-purple-500/20 to-purple-600/30',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/20',
        text: 'text-purple-300',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div 
      className="relative w-full h-96 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredCard(null);
      }}
    >
      {/* Carousel Track */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${items.length * 100}%`
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const colors = getColorClasses(item.primaryColor);
          const isHoveredCard = hoveredCard === index;
          
          return (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 px-4"
              style={{ width: `${100 / items.length}%` }}
              onMouseEnter={() => setHoveredCard(index)}
            >
              <div className={`
                relative h-full bg-gradient-to-br ${colors.bg} backdrop-blur-xl 
                rounded-2xl border ${colors.border} 
                shadow-2xl ${colors.glow} 
                transition-all duration-700 ease-out
                ${isHoveredCard ? 'scale-105 shadow-4xl' : 'scale-100'}
                overflow-hidden group
              `}>
                
                {/* Animated Background Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${colors.bg} 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500
                `} />
                
                {/* Floating Particles Effect */}
                {isHoveredCard && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full animate-ping`}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + i * 10}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header with Icon and Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`
                        w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} 
                        flex items-center justify-center mr-4
                        ${isHoveredCard ? 'animate-pulse' : ''}
                        transition-all duration-500
                      `}>
                        <Icon className={`w-8 h-8 ${colors.text} ${isHoveredCard ? 'scale-125' : ''} transition-transform duration-500`} />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.text} font-heading`}>
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm font-body">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Interactive Link Button */}
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group/link relative p-3 rounded-full ${colors.button} 
                        transition-all duration-300 hover:scale-110
                        ${isHoveredCard ? 'animate-bounce' : ''}
                      `}
                    >
                      <Globe className="w-5 h-5 text-white transition-transform duration-300 group-hover/link:rotate-12" />
                      <ExternalLink className="absolute inset-0 w-5 h-5 text-white m-auto opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      
                      {/* Ripple Effect */}
                      <div className={`
                        absolute inset-0 rounded-full ${colors.button.split(' ')[0]} 
                        animate-ping opacity-20 group-hover/link:opacity-40
                      `} />
                    </a>
                  </div>
                  
                  {/* Description */}
                  <p className={`
                    text-slate-300 mb-6 leading-relaxed font-body
                    ${isHoveredCard ? 'text-slate-200' : ''}
                    transition-colors duration-500
                  `}>
                    {item.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          bg-slate-800/50 ${colors.text} border ${colors.border}
                          ${isHoveredCard ? 'animate-pulse' : ''}
                          transition-all duration-300
                        `}
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover Indicator */}
                  {isHoveredCard && (
                    <div className="absolute bottom-4 right-4">
                      <div className={`flex items-center ${colors.text} text-xs font-medium animate-bounce`}>
                        <Zap className="w-4 h-4 mr-1" />
                        Click to visit
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
              ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      {/* Futuristic Edge Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse pointer-events-none" />
    </div>
  );
};

export default PortfolioCarousel;
