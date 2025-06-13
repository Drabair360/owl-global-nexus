
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
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

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-600 to-blue-800 border-blue-300',
      emerald: 'from-emerald-600 to-emerald-800 border-emerald-300',
      amber: 'from-amber-600 to-amber-800 border-amber-300',
      purple: 'from-purple-600 to-purple-800 border-purple-300'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColorClasses = (color: string) => {
    const iconColorMap = {
      blue: 'text-blue-400',
      emerald: 'text-emerald-400',
      amber: 'text-amber-400',
      purple: 'text-purple-400'
    };
    return iconColorMap[color as keyof typeof iconColorMap] || iconColorMap.blue;
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className={`relative bg-gradient-to-br ${getColorClasses(item.primaryColor)} rounded-2xl p-8 text-white border-2 group hover:scale-[1.02] transition-transform duration-300 ease-out overflow-hidden`}>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" className="absolute inset-0">
                      <defs>
                        <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                    </svg>
                  </div>

                  {/* Core Badge */}
                  {item.isCore && (
                    <Badge className="absolute top-6 right-6 bg-white/20 text-white border-white/30 font-medium">
                      Core Platform
                    </Badge>
                  )}

                  {/* Powered By Badge */}
                  {item.poweredBy && (
                    <Badge className="absolute top-6 right-6 bg-white/20 text-white border-white/30 font-medium">
                      Powered by {item.poweredBy}
                    </Badge>
                  )}

                  {/* Launch Date Badge */}
                  {item.launchDate && (
                    <Badge className="absolute top-6 right-6 bg-white/20 text-white border-white/30 font-medium">
                      Launching {item.launchDate}
                    </Badge>
                  )}

                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6 relative z-10">
                    <div className={`w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center ${getIconColorClasses(item.primaryColor)}`}>
                      <IconComponent size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold font-heading mb-2">{item.title}</h3>
                      <p className="text-white/90 font-subtitle text-lg">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/90 mb-6 font-body leading-relaxed relative z-10">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 relative z-10">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full flex-shrink-0"></div>
                        <span className="text-white/90 text-sm font-body">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Website Link */}
                  <div className="flex items-center space-x-4 relative z-10">
                    <Button 
                      size="sm" 
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-subtitle" 
                      asChild
                    >
                      <a href={item.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Visit Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
