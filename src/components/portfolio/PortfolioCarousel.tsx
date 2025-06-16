
import React, { useState, useEffect } from 'react';
import { ExternalLink, Globe, ChevronLeft, ChevronRight, Cpu, Network, Zap, TrendingUp, Users, Building2, Factory, BarChart3, Target, Workflow } from 'lucide-react';
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
  statistics?: {
    value: string;
    label: string;
  }[];
  synergies?: string[];
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
        accent: 'bg-blue-500',
        statBg: 'bg-blue-500/10'
      },
      emerald: {
        bg: 'from-emerald-500/20 to-emerald-600/30',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-500/20',
        text: 'text-emerald-300',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        accent: 'bg-emerald-500',
        statBg: 'bg-emerald-500/10'
      },
      amber: {
        bg: 'from-amber-500/20 to-amber-600/30',
        border: 'border-amber-400/30',
        glow: 'shadow-amber-500/20',
        text: 'text-amber-300',
        button: 'bg-amber-600 hover:bg-amber-700',
        accent: 'bg-amber-500',
        statBg: 'bg-amber-500/10'
      },
      purple: {
        bg: 'from-purple-500/20 to-purple-600/30',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/20',
        text: 'text-purple-300',
        button: 'bg-purple-600 hover:bg-purple-700',
        accent: 'bg-purple-500',
        statBg: 'bg-purple-500/10'
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
      className="relative w-full h-[650px] overflow-hidden rounded-2xl"
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
                transition-all duration-500 ease-out
                ${isHoveredCard ? 'scale-[1.02]' : 'scale-100'}
                overflow-hidden group
              `}>
                
                {/* Platform Indicators */}
                {item.isCore && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-xs font-bold`}>
                      <Cpu className="w-3 h-3 mr-1" />
                      CORE AI PLATFORM
                    </div>
                  </div>
                )}

                {item.poweredBy && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-xs font-medium`}>
                      <Network className="w-3 h-3 mr-1" />
                      {item.poweredBy}
                    </div>
                  </div>
                )}

                {item.launchDate && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`flex items-center ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} text-xs font-medium`}>
                      <Zap className="w-3 h-3 mr-1" />
                      {item.launchDate}
                    </div>
                  </div>
                )}
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center flex-1">
                      <div className={`
                        w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.bg} 
                        flex items-center justify-center mr-6
                        transition-all duration-300 shadow-lg
                      `}>
                        <Icon className={`w-10 h-10 ${colors.text}`} />
                      </div>
                      <div className="flex-1 flex items-center">
                        <div>
                          <h3 className={`text-3xl font-semibold ${colors.text} mb-2`} style={{ fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                            {item.title}
                          </h3>
                          <p className="text-slate-300 text-sm font-body leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                        {/* CAO Logo for CAOAGRO card - positioned next to title */}
                        {item.title === "CAOAGRO.COM" && (
                          <div className="ml-4">
                            <img 
                              src="/lovable-uploads/f047b8be-2f3b-434f-96ae-443cb5d8c522.png" 
                              alt="CAO Logo" 
                              className="w-12 h-12 opacity-70 filter invert brightness-0 contrast-100"
                              style={{ filter: 'invert(1) brightness(2) contrast(1)' }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-slate-300 leading-relaxed font-body text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Statistics Section */}
                  {item.statistics && (
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <Target className={`w-5 h-5 ${colors.text} mr-2`} />
                        <span className={`text-lg font-semibold ${colors.text}`} style={{ fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                          Targets
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {item.statistics.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className={`${colors.statBg} rounded-lg p-3 border ${colors.border}`}
                          >
                            <div className={`text-lg font-bold ${colors.text}`}>
                              {stat.value}
                            </div>
                            <div className="text-slate-400 text-xs">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Synergies Section */}
                  {item.synergies && (
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <Workflow className={`w-4 h-4 ${colors.text} mr-2`} />
                        <span className={`text-sm font-medium ${colors.text}`}>Platform Synergies</span>
                      </div>
                      <div className="space-y-2">
                        {item.synergies.map((synergy, synergyIndex) => (
                          <div key={synergyIndex} className="flex items-start">
                            <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full mt-2 mr-3 flex-shrink-0`} />
                            <span className="text-slate-300 text-sm">{synergy}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mt-auto mb-16">
                    {item.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium
                          bg-slate-800/60 ${colors.text} border ${colors.border}
                          transition-all duration-300 backdrop-blur-sm
                        `}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Website Link - Bottom Right */}
                  <div className="absolute bottom-6 right-6">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group/link relative p-4 rounded-full ${colors.button} 
                        transition-all duration-300 hover:scale-110
                        shadow-lg hover:shadow-xl
                        ${isHoveredCard ? 'animate-[bounce_3s_ease-in-out_infinite]' : ''}
                      `}
                    >
                      <Globe className="w-6 h-6 text-white transition-transform duration-300 group-hover/link:rotate-12" />
                      <ExternalLink className="absolute inset-0 w-6 h-6 text-white m-auto opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
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
    </div>
  );
};

export default PortfolioCarousel;
