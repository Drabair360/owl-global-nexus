
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HeroFeatureCard = ({ icon: Icon, title, description }: HeroFeatureCardProps) => {
  return (
    <div className="bg-white/20 rounded-xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
      <div className="w-12 h-12 mx-auto mb-6 relative">
        <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" stroke="url(#iconGradient)" strokeWidth="2" />
      </div>
      <h3 className="text-xl font-brand font-semibold text-slate-800 mb-4 tracking-wide">{title}</h3>
      <p className="text-slate-800 font-body">{description}</p>
    </div>
  );
};

export default HeroFeatureCard;
