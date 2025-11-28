
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

interface PortfolioItemCardProps {
  item: {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ComponentType<any>;
    features: string[];
    website: string;
    launchDate?: string;
    gradient: string;
    borderColor: string;
    glowColor: string;
    iconBg: string;
    buttonColor: string;
  };
  index: number;
}

const PortfolioItemCard = ({ item, index }: PortfolioItemCardProps) => {
  const Icon = item.icon;

  return (
    <div className="group relative transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700`} />
      <div className={`relative bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95 backdrop-blur-xl rounded-2xl p-8 border ${item.borderColor} ${item.glowColor} hover:shadow-xl transition-all duration-700 overflow-hidden`}>
        
        {item.launchDate && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              <Zap className="w-3 h-3 mr-1" />
              {item.launchDate}
            </div>
          </div>
        )}

        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 font-heading">{item.title}</h3>
            <p className="text-slate-600 font-body">{item.subtitle}</p>
          </div>
        </div>
        
        <p className="text-slate-700 mb-6 font-body leading-relaxed">
          {item.description}
        </p>

        <div className="space-y-3 mb-6">
          {item.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-600 font-body">{feature}</p>
            </div>
          ))}
        </div>

        <Button className={`${item.buttonColor} text-white font-subtitle group/btn relative overflow-hidden`} asChild>
          <a href={item.website} target="_blank" rel="noopener noreferrer">
            <span className="relative z-10 flex items-center">
              {item.title === "OWLOMA" ? "Discover More" : item.title === "AKOULA" ? "Explore Platform" : "Learn More"}
              <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
            </span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default PortfolioItemCard;
