
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FlagshipVentureCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  features: string[];
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  borderColor: string;
  shadowColor: string;
  animationComponent: React.ReactNode;
  url?: string;
}

const FlagshipVentureCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  iconBg,
  gradientFrom,
  gradientTo,
  glowColor,
  features,
  primaryColor,
  secondaryColor,
  tertiaryColor,
  borderColor,
  shadowColor,
  animationComponent,
  url
}: FlagshipVentureCardProps) => {
  return (
    <div className="group relative transform transition-all duration-1000 hover:-translate-y-6 hover:scale-105">
      {/* Premium Outer Glow */}
      <div className={`absolute -inset-8 bg-gradient-to-br ${glowColor} rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-1000 animate-pulse`} style={{animationDuration: '4s'}} />
      
      {/* Main Product Card */}
      <div className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-2xl rounded-3xl p-10 border ${borderColor} ${shadowColor} hover:shadow-[0_30px_120px_rgba(59,130,246,0.4)] transition-all duration-1000 overflow-hidden`}>
        
        {/* Holographic Grid Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse" />
        </div>
        
        {/* Data Flow Visualization */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          {animationComponent}
        </div>
        
        {/* Premium Header */}
        <div className="flex items-center mb-8">
          <div className="relative mr-6">
            <div className={`absolute inset-0 ${iconBg} rounded-2xl blur-xl animate-pulse`} />
            <div className={`relative w-16 h-16 bg-gradient-to-br ${primaryColor} ${secondaryColor} ${tertiaryColor} rounded-2xl flex items-center justify-center shadow-xl`}>
              <Icon className="w-8 h-8 text-white filter drop-shadow-lg" filter="url(#premiumGlow)" />
            </div>
          </div>
          <div>
            <h3 className={`text-3xl font-bold bg-gradient-to-r ${primaryColor}-200 ${secondaryColor}-200 ${tertiaryColor}-200 bg-clip-text text-transparent mb-2`} style={{fontFamily: 'Avenir Next, sans-serif'}}>{title}</h3>
            <div className={`flex items-center ${primaryColor}-300`}>
              <Icon className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">{subtitle}</span>
            </div>
          </div>
        </div>
        
        <p className="text-slate-200 mb-8 font-body leading-relaxed text-lg">
          {description}
        </p>
        
        {/* Premium Feature Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {features.map((feature, index) => (
            <span key={index} className={`px-4 py-2 bg-gradient-to-r ${primaryColor}-500/20 ${secondaryColor}-500/20 ${primaryColor}-200 rounded-full text-sm font-medium border ${primaryColor}-400/30 backdrop-blur-sm`}>
              <Icon className="w-4 h-4 inline mr-2" />
              {feature}
            </span>
          ))}
        </div>
        
        {/* Real-time Activity Indicator */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${primaryColor}-200 font-medium`}>
            <Icon className="w-5 h-5 mr-3" stroke={`url(#premium${primaryColor.charAt(0).toUpperCase() + primaryColor.slice(1)})`} />
            <span>{subtitle}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-8 ${primaryColor}-400 rounded animate-pulse`} />
            <div className={`w-2 h-12 ${secondaryColor}-400 rounded animate-pulse`} style={{animationDelay: '0.2s'}} />
            <div className={`w-2 h-6 ${tertiaryColor}-400 rounded animate-pulse`} style={{animationDelay: '0.4s'}} />
            <div className={`w-2 h-10 ${primaryColor}-300 rounded animate-pulse`} style={{animationDelay: '0.6s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagshipVentureCard;
