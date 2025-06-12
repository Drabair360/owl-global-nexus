
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isInvestorsDropdownOpen, setIsInvestorsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" 
              alt="OWL International Logo" 
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <span className="text-xl font-condensed font-semibold text-foreground tracking-wide">
                OWL INTERNATIONAL
              </span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-all duration-300 font-body text-sm font-medium relative group">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500 group-hover:w-full"></span>
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-all duration-300 font-body text-sm font-medium relative group">
                  Company
                  <ChevronDown className="ml-1 w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-amber-500" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500 group-hover:w-full"></span>
                </button>
                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-sophisticated py-3 z-50 animate-elegant-scale">
                    <div className="absolute -top-1 left-6 w-2 h-2 bg-background border-l border-t border-border/50 rotate-45"></div>
                    <Link 
                      to="/about" 
                      className="block px-6 py-3 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-body relative group"
                    >
                      <span className="relative">
                        About Owl
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/careers" 
                      className="block px-6 py-3 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-body relative group"
                    >
                      <span className="relative">
                        Careers
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/news" 
                      className="block px-6 py-3 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-body relative group"
                    >
                      <span className="relative">
                        Hot News
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/impact" 
                      className="block px-6 py-3 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-body relative group"
                    >
                      <span className="relative">
                        Impact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-all duration-300 font-body text-sm font-medium relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500 group-hover:w-full"></span>
              </Link>

              <div 
                className="relative group"
                onMouseEnter={() => setIsInvestorsDropdownOpen(true)}
                onMouseLeave={() => setIsInvestorsDropdownOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-all duration-300 font-body text-sm font-medium relative group">
                  Investors
                  <ChevronDown className="ml-1 w-4 h-4 transition-all duration-300 group-hover:rotate-180 group-hover:text-amber-500" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500 group-hover:w-full"></span>
                </button>
                {isInvestorsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-sophisticated py-3 z-50 animate-elegant-scale">
                    <div className="absolute -top-1 left-6 w-2 h-2 bg-background border-l border-t border-border/50 rotate-45"></div>
                    <Link 
                      to="/investors" 
                      className="block px-6 py-3 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-body relative group"
                    >
                      <span className="relative">
                        Investor Portal
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                    <Link 
                      to="/scouts" 
                      className="block px-6 py-3 text-sm text-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 font-body relative group"
                    >
                      <span className="relative">
                        Scouts
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="group overflow-hidden relative border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 hover-institutional" asChild>
              <Link to="/investors" className="font-body text-sm font-medium">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Investor Portal</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 animate-sophisticated-fade">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/solutions" className="block px-3 py-2 text-foreground hover:text-primary font-body text-sm transition-colors duration-300">
              Solutions
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-muted-foreground font-condensed">Company</div>
              <Link to="/about" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body transition-colors duration-300">
                About Owl
              </Link>
              <Link to="/careers" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body transition-colors duration-300">
                Careers
              </Link>
              <Link to="/news" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body transition-colors duration-300">
                Hot News
              </Link>
              <Link to="/impact" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body transition-colors duration-300">
                Impact
              </Link>
            </div>
            <Link to="/portfolio" className="block px-3 py-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors duration-300">
              Portfolio
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-muted-foreground font-condensed">Investors</div>
              <Link to="/investors" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body transition-colors duration-300">
                Investor Portal
              </Link>
              <Link to="/scouts" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body transition-colors duration-300">
                Scouts
              </Link>
            </div>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full font-body text-sm" asChild>
                <Link to="/investors">Investor Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
