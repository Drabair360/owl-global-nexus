
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProfessionalCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ProfessionalCard = ({ icon: Icon, title, description, delay = 0 }: ProfessionalCardProps) => {
  return (
    <div 
      className="group relative bg-white rounded-xl p-8 border border-slate-200 shadow-elegant hover:shadow-sophisticated transition-all duration-300 transform hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon Container */}
      <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-semibold mb-4 text-slate-900 font-heading">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed font-body">
        {description}
      </p>
    </div>
  );
};

export default ProfessionalCard;
