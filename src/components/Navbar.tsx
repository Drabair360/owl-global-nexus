import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CompanyDropdown from './navbar/CompanyDropdown';
import InvestorsDropdown from './navbar/InvestorsDropdown';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border/50 shadow-[0_1px_0_0_transparent,0_4px_12px_-2px_rgba(245,158,11,0.4),0_8px_24px_-4px_rgba(217,119,6,0.3),0_12px_32px_-6px_rgba(251,191,36,0.2)] md:shadow-[0_1px_0_0_transparent,0_4px_12px_-2px_rgba(245,158,11,0.4),0_8px_24px_-4px_rgba(217,119,6,0.3),0_12px_32px_-6px_rgba(251,191,36,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" 
              alt="OWL International Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <span className="text-lg sm:text-xl font-brand text-foreground tracking-wide">
                OWL INTERNATIONAL
              </span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/solutions" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-subtitle text-sm font-medium relative group py-2"
              >
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
              </Link>
              
              <CompanyDropdown />

              <Link 
                to="/portfolio" 
                onClick={() => window.scrollTo(0, 0)}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-subtitle text-sm font-medium relative group py-2"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-full"></span>
              </Link>

              <InvestorsDropdown />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="group overflow-hidden relative border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover-institutional font-subtitle" asChild>
              <Link to="/investors" onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Investor Portal</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left md:opacity-100 opacity-60"></span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
