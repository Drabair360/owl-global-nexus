
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FlagshipVentureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  primaryColor: string;
  url?: string;
}

const FlagshipVentureCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  primaryColor,
  url
}: FlagshipVentureCardProps) => {
  const colorClasses = {
    blue: {
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      titleGradient: 'from-blue-300 to-blue-100',
      border: 'border-blue-500/20',
      tagBg: 'bg-blue-500/10',
      tagBorder: 'border-blue-400/20',
      tagText: 'text-blue-200'
    },
    emerald: {
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
      titleGradient: 'from-emerald-300 to-emerald-100',
      border: 'border-emerald-500/20',
      tagBg: 'bg-emerald-500/10',
      tagBorder: 'border-emerald-400/20',
      tagText: 'text-emerald-200'
    },
    amber: {
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
      titleGradient: 'from-amber-300 to-amber-100',
      border: 'border-amber-500/20',
      tagBg: 'bg-amber-500/10',
      tagBorder: 'border-amber-400/20',
      tagText: 'text-amber-200'
    },
    purple: {
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
      titleGradient: 'from-purple-300 to-purple-100',
      border: 'border-purple-500/20',
      tagBg: 'bg-purple-500/10',
      tagBorder: 'border-purple-400/20',
      tagText: 'text-purple-200'
    }
  };

  const colors = colorClasses[primaryColor as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="group relative transform transition-all duration-300 hover:-translate-y-2">
      {/* Main Card */}
      <div className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${colors.border} hover:border-opacity-40 transition-all duration-300`}>
        
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mr-4`}>
            <Icon className={`w-6 h-6 ${colors.iconColor}`} />
          </div>
          <div>
            <h3 className={`text-2xl font-bold bg-gradient-to-r ${colors.titleGradient} bg-clip-text text-transparent mb-1`}>
              {title}
            </h3>
            <p className="text-slate-400 text-sm font-medium">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-slate-300 mb-6 font-body leading-relaxed">
          {description}
        </p>
        
        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className={`px-3 py-1 ${colors.tagBg} ${colors.tagText} rounded-full text-xs font-medium border ${colors.tagBorder}`}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagshipVentureCard;
