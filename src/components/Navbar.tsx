
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isInvestorsDropdownOpen, setIsInvestorsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0bc8bb59-2aa6-47c6-88b6-20e99c5dc068.png" 
              alt="OWL International Logo" 
              className="w-10 h-10"
            />
            <div>
              <span className="text-xl font-heading font-semibold text-foreground">OWL INTERNATIONAL</span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body relative group">
                Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-body relative group">
                  Company
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-xl py-2 z-50 backdrop-blur-md">
                    <Link 
                      to="/about" 
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-body relative group"
                    >
                      About Owl
                      <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
                    </Link>
                    <Link 
                      to="/careers" 
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-body relative group"
                    >
                      Careers
                      <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
                    </Link>
                    <Link 
                      to="/news" 
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-body relative group"
                    >
                      Hot News
                      <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
                    </Link>
                    <Link 
                      to="/impact" 
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-body relative group"
                    >
                      Impact
                      <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body relative group">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <div 
                className="relative group"
                onMouseEnter={() => setIsInvestorsDropdownOpen(true)}
                onMouseLeave={() => setIsInvestorsDropdownOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-body relative group">
                  Investors
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {isInvestorsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-xl py-2 z-50 backdrop-blur-md">
                    <Link 
                      to="/investors" 
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-body relative group"
                    >
                      Investor Portal
                      <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
                    </Link>
                    <Link 
                      to="/scouts" 
                      className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-body relative group"
                    >
                      Scouts
                      <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-8"></span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="group overflow-hidden relative" asChild>
              <Link to="/investors" className="font-body">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Investor Portal</span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link to="/solutions" className="block px-3 py-2 text-foreground hover:text-primary font-body">
              Solutions
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-muted-foreground font-body">Company</div>
              <Link to="/about" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body">
                About Owl
              </Link>
              <Link to="/careers" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body">
                Careers
              </Link>
              <Link to="/news" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body">
                Hot News
              </Link>
              <Link to="/impact" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body">
                Impact
              </Link>
            </div>
            <Link to="/portfolio" className="block px-3 py-2 text-muted-foreground hover:text-primary font-body">
              Portfolio
            </Link>
            <div className="space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-muted-foreground font-body">Investors</div>
              <Link to="/investors" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body">
                Investor Portal
              </Link>
              <Link to="/scouts" className="block px-6 py-2 text-sm text-foreground hover:text-primary font-body">
                Scouts
              </Link>
            </div>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full font-body" asChild>
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
