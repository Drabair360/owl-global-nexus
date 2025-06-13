
import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, Zap, ChevronLeft, ChevronRight, Cpu, Network } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  primaryColor: string;
  website: string;
  isCore?: boolean;
  poweredBy?: string;
  launchDate?: string;
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
      }, 4000);
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
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'bg-blue-500'
      },
      emerald: {
        bg: 'from-emerald-500/20 to-emerald-600/30',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-500/20',
        text: 'text-emerald-300',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        accent: 'bg-emerald-500'
      },
      amber: {
        bg: 'from-amber-500/20 to-amber-600/30',
        border: 'border-amber-400/30',
        glow: 'shadow-amber-500/20',
        text: 'text-amber-300',
        button: 'bg-amber-600 hover:bg-amber-700',
        accent: 'bg-amber-500'
      },
      purple: {
        bg: 'from-purple-500/20 to-purple-600/30',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/20',
        text: 'text-purple-300',
        button: 'bg-purple-600 hover:bg-purple-700',
        accent: 'bg-purple-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredCard(null);
      }}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const colors = getColorClasses(item.primaryColor);
          const isHoveredCard = hoveredCard === index;
          
          return (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 px-6"
              onMouseEnter={() => setHoveredCard(index)}
            >
              <div className={`
                relative h-full bg-gradient-to-br ${colors.bg} backdrop-blur-xl 
                rounded-2xl border ${colors.border} 
                shadow-2xl ${colors.glow} 
                transition-all duration-700 ease-out
                ${isHoveredCard ? 'scale-[1.02] shadow-4xl' : 'scale-100'}
                overflow-hidden group
              `}>
                
                {/* Core Platform Indicator */}
                {item.isCore && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-xs font-bold`}>
                      <Cpu className="w-3 h-3 mr-1" />
                      CORE AI
                    </div>
                  </div>
                )}

                {/* Powered By Indicator */}
                {item.poweredBy && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-xs font-medium`}>
                      <Network className="w-3 h-3 mr-1" />
                      Powered by {item.poweredBy}
                    </div>
                  </div>
                )}

                {/* Launch Date Indicator */}
                {item.launchDate && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-xs font-medium`}>
                      <Zap className="w-3 h-3 mr-1" />
                      {item.launchDate}
                    </div>
                  </div>
                )}
                
                {/* Animated Background Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r ${colors.bg} 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500
                `} />
                
                {/* Floating Particles Effect */}
                {isHoveredCard && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 ${colors.accent} rounded-full animate-ping`}
                        style={{
                          left: `${15 + i * 12}%`,
                          top: `${10 + i * 8}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                )}
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center flex-1">
                      <div className={`
                        w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.bg} 
                        flex items-center justify-center mr-6
                        ${isHoveredCard ? 'animate-pulse' : ''}
                        transition-all duration-500 shadow-lg
                      `}>
                        <Icon className={`w-10 h-10 ${colors.text} ${isHoveredCard ? 'scale-110' : ''} transition-transform duration-500`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-3xl font-bold ${colors.text} font-heading mb-2`}>
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm font-body leading-relaxed">
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
                        group/link relative p-4 rounded-full ${colors.button} 
                        transition-all duration-300 hover:scale-110
                        ${isHoveredCard ? 'animate-bounce' : ''}
                        shadow-lg hover:shadow-xl
                      `}
                    >
                      <Globe className="w-6 h-6 text-white transition-transform duration-300 group-hover/link:rotate-12" />
                      <ExternalLink className="absolute inset-0 w-6 h-6 text-white m-auto opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      
                      {/* Ripple Effect */}
                      <div className={`
                        absolute inset-0 rounded-full ${colors.button.split(' ')[0]} 
                        animate-ping opacity-20 group-hover/link:opacity-40
                      `} />
                    </a>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1 mb-6">
                    <p className={`
                      text-slate-300 leading-relaxed font-body text-base
                      ${isHoveredCard ? 'text-slate-200' : ''}
                      transition-colors duration-500
                    `}>
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium
                          bg-slate-800/60 ${colors.text} border ${colors.border}
                          ${isHoveredCard ? 'animate-pulse shadow-lg' : ''}
                          transition-all duration-300 backdrop-blur-sm
                        `}
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover Indicator */}
                  {isHoveredCard && (
                    <div className="absolute bottom-6 right-6">
                      <div className={`flex items-center ${colors.text} text-sm font-medium animate-bounce`}>
                        <Zap className="w-4 h-4 mr-2" />
                        Visit Platform
                      </div>
                    </div>
                  )}
                </div>

                {/* Connection Lines for AKOULA-powered platforms */}
                {item.poweredBy && isHoveredCard && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
                    <div className="w-8 h-px bg-gradient-to-r from-blue-400/60 to-transparent animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full -mt-1 animate-ping"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`
              h-2 rounded-full transition-all duration-300 cursor-pointer
              ${index === currentIndex ? 'bg-white w-8 scale-125' : 'bg-white/40 hover:bg-white/70 w-2'}
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      {/* Enhanced Edge Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse pointer-events-none" />
    </div>
  );
};

export default PortfolioCarousel;
