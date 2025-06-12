
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white relative">
                <div className="absolute inset-1 rounded-full border border-white opacity-60" />
                <div className="absolute inset-2 rounded-full border border-white opacity-30" />
              </div>
            </div>
            <div>
              <span className="text-xl font-heading font-semibold text-foreground">OWL INTERNATIONAL</span>
              <div className="text-xs text-muted-foreground font-body">SAS</div>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-colors font-body">
                  Company
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {isCompanyDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-2 z-50">
                    <Link 
                      to="/about" 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-body"
                    >
                      About Owl
                    </Link>
                    <Link 
                      to="/careers" 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-body"
                    >
                      Careers
                    </Link>
                    <Link 
                      to="/news" 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-body"
                    >
                      Hot News
                    </Link>
                    <Link 
                      to="/impact" 
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-body"
                    >
                      Impact
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Portfolio
              </Link>
              <Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Investors
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/investors" className="font-body">Investor Portal</Link>
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
            <Link to="/investors" className="block px-3 py-2 text-muted-foreground hover:text-primary font-body">
              Investors
            </Link>
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
