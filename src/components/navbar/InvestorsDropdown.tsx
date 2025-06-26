
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const InvestorsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsOpen(false), 300);
    setHoverTimeout(timeout);
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-slate-600 hover:text-slate-800 transition-all duration-300 font-subtitle text-sm font-medium relative group py-2 px-2">
        Investors
        <ChevronDown className="ml-1 w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-amber-500" />
        <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-[calc(100%-1rem)]"></span>
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl py-3 z-50 animate-elegant-scale"
          style={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute -top-1 left-6 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
          <Link 
            to="/investors" 
            onClick={() => window.scrollTo(0, 0)}
            className="block px-6 py-4 text-sm text-slate-800 hover:bg-gray-50 hover:text-slate-900 transition-all duration-300 font-subtitle relative group/item"
          >
            <span className="relative">
              Investor Portal
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
            </span>
          </Link>
          <Link 
            to="/scouts" 
            onClick={() => window.scrollTo(0, 0)}
            className="block px-6 py-4 text-sm text-slate-800 hover:bg-gray-50 hover:text-slate-900 transition-all duration-300 font-subtitle relative group/item"
          >
            <span className="relative">
              Scouts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover/item:w-full"></span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default InvestorsDropdown;
