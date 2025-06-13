
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const CompanyDropdown = () => {
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
      <button className="flex items-center text-foreground hover:text-primary transition-all duration-300 font-subtitle text-sm font-medium relative group py-2 px-2">
        Company
        <ChevronDown className="ml-1 w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-amber-500" />
        <span className="absolute bottom-0 left-2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-[calc(100%-1rem)]"></span>
      </button>
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-56 bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl shadow-sophisticated py-3 z-50 animate-elegant-scale"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute -top-1 left-6 w-2 h-2 bg-background/80 border-l border-t border-border/50 rotate-45"></div>
          <Link 
            to="/about" 
            onClick={() => window.scrollTo(0, 0)}
            className="block px-6 py-4 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-subtitle relative group"
          >
            <span className="relative">
              About Owl
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full opacity-80"></span>
            </span>
          </Link>
          <Link 
            to="/careers" 
            onClick={() => window.scrollTo(0, 0)}
            className="block px-6 py-4 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-subtitle relative group"
          >
            <span className="relative">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full opacity-80"></span>
            </span>
          </Link>
          <Link 
            to="/news" 
            onClick={() => window.scrollTo(0, 0)}
            className="block px-6 py-4 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-subtitle relative group"
          >
            <span className="relative">
              Hot News
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full opacity-80"></span>
            </span>
          </Link>
          <Link 
            to="/impact" 
            onClick={() => window.scrollTo(0, 0)}
            className="block px-6 py-4 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-subtitle relative group"
          >
            <span className="relative">
              Impact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full opacity-80"></span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CompanyDropdown;
