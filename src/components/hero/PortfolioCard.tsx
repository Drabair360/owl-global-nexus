
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PortfolioCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientId: string;
  colorScheme: 'emerald' | 'blue' | 'amber' | 'purple' | 'rose';
  tagIcon: LucideIcon;
  tagText: string;
  animationComponent: React.ReactNode;
}

const PortfolioCard = ({
  icon: Icon,
  title,
  description,
  gradientId,
  colorScheme,
  tagIcon: TagIcon,
  tagText,
  animationComponent
}: PortfolioCardProps) => {
  const colorConfig = {
    emerald: {
      border: 'border-emerald-400/30',
      shadow: 'shadow-[0_8px_32px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)]',
      gradient: 'from-emerald-500/20 via-cyan-500/15 to-blue-500/20',
      titleGradient: 'from-emerald-300 to-cyan-300',
      tagBg: 'bg-emerald-400/10',
      tagBorder: 'border-emerald-400/20',
      tagText: 'text-emerald-300',
      hoverGradient: 'from-emerald-400/0 via-emerald-400/20 to-emerald-400/0'
    },
    blue: {
      border: 'border-blue-400/30',
      shadow: 'shadow-[0_8px_32px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]',
      gradient: 'from-blue-500/20 via-indigo-500/15 to-purple-500/20',
      titleGradient: 'from-blue-300 to-indigo-300',
      tagBg: 'bg-blue-400/10',
      tagBorder: 'border-blue-400/20',
      tagText: 'text-blue-300',
      hoverGradient: 'from-blue-400/0 via-blue-400/20 to-blue-400/0'
    },
    amber: {
      border: 'border-amber-400/30',
      shadow: 'shadow-[0_8px_32px_rgba(245,158,11,0.15)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)]',
      gradient: 'from-amber-500/20 via-orange-500/15 to-red-500/20',
      titleGradient: 'from-amber-300 to-orange-300',
      tagBg: 'bg-amber-400/10',
      tagBorder: 'border-amber-400/20',
      tagText: 'text-amber-300',
      hoverGradient: 'from-amber-400/0 via-amber-400/20 to-amber-400/0'
    },
    purple: {
      border: 'border-purple-400/30',
      shadow: 'shadow-[0_8px_32px_rgba(147,51,234,0.15)] hover:shadow-[0_20px_60px_rgba(147,51,234,0.25)]',
      gradient: 'from-purple-500/20 via-violet-500/15 to-fuchsia-500/20',
      titleGradient: 'from-purple-300 to-violet-300',
      tagBg: 'bg-purple-400/10',
      tagBorder: 'border-purple-400/20',
      tagText: 'text-purple-300',
      hoverGradient: 'from-purple-400/0 via-purple-400/20 to-purple-400/0'
    },
    rose: {
      border: 'border-rose-400/30',
      shadow: 'shadow-[0_8px_32px_rgba(244,63,94,0.15)] hover:shadow-[0_20px_60px_rgba(244,63,94,0.25)]',
      gradient: 'from-rose-500/20 via-pink-500/15 to-red-500/20',
      titleGradient: 'from-rose-300 to-pink-300',
      tagBg: 'bg-rose-400/10',
      tagBorder: 'border-rose-400/20',
      tagText: 'text-rose-300',
      hoverGradient: 'from-rose-400/0 via-rose-400/20 to-rose-400/0'
    }
  };

  const config = colorConfig[colorScheme];

  return (
    <div className="relative group transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700`} />
      <div className={`relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border ${config.border} ${config.shadow} transition-all duration-700 overflow-hidden`}>
        
        {/* Animated Border Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${config.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        {/* Enhanced Icon with Glow */}
        <div className="relative mb-8">
          <div className={`absolute inset-0 bg-${colorScheme}-400/20 rounded-full blur-lg animate-pulse`} />
          <Icon className="relative w-16 h-16 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12" 
               stroke={`url(#${gradientId})`} strokeWidth="1.5" filter="url(#glow)" />
        </div>
        
        <h3 className={`text-xl font-semibold mb-6 leading-tight bg-gradient-to-r ${config.titleGradient} bg-clip-text text-transparent`} style={{
          fontFamily: 'Avenir Next, sans-serif'
        }}>
          {title}
        </h3>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
          {description}
        </p>
        
        <div className="flex items-center text-xs font-medium">
          <div className={`flex items-center ${config.tagText} ${config.tagBg} px-3 py-2 rounded-full border ${config.tagBorder}`}>
            <TagIcon className="w-4 h-4 mr-2" stroke={`url(#${gradientId})`} />
            {tagText}
          </div>
        </div>
        
        {/* Data Visualization Elements */}
        <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
          {animationComponent}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
