
import React from 'react';
import { ExternalLink, Globe, Cpu, Network, Zap, Target, Workflow } from 'lucide-react';
import { PortfolioItem } from './types';
import { getColorClasses } from './utils';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
}

const PortfolioCard = ({ item, index, isHovered, onMouseEnter }: PortfolioCardProps) => {
  const Icon = item.icon;
  const colors = getColorClasses(item.primaryColor);

  return (
    <div
      className="w-full h-full flex-shrink-0 px-6"
      onMouseEnter={onMouseEnter}
    >
      <div className={`
        relative h-full bg-gradient-to-br ${colors.bg} backdrop-blur-xl 
        rounded-2xl border ${colors.border} 
        shadow-2xl ${colors.glow} 
        transition-all duration-500 ease-out
        ${isHovered ? 'scale-[1.02]' : 'scale-100'}
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
        
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header with Icon and Title */}
          <div className="flex items-start justify-between mb-4">
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
                {/* CAO Logo for CAOAGRO card - positioned next to title with same height as icon */}
                {item.title === "CAOAGRO.COM" && (
                  <div className="ml-4">
                    <img 
                      src="/lovable-uploads/f047b8be-2f3b-434f-96ae-443cb5d8c522.png" 
                      alt="CAO Logo" 
                      className="w-20 h-20 opacity-70 filter invert brightness-0 contrast-100"
                      style={{ filter: 'invert(1) brightness(2) contrast(1)' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-4">
            <p className="text-slate-300 leading-relaxed font-body text-base">
              {item.description}
            </p>
          </div>

          {/* Statistics Section */}
          {item.statistics && (
            <div className="mb-4">
              <div className="flex items-center mb-3">
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
            <div className="mb-4">
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
          <div className="flex flex-wrap gap-3 mt-auto mb-8">
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
                ${isHovered ? 'animate-[bounce_3s_ease-in-out_infinite]' : ''}
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
};

export default PortfolioCard;
