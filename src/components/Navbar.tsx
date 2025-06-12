
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">OWL</span>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">OWL INTERNATIONAL</span>
              <div className="text-xs text-muted-foreground">SAS</div>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/investors" className="text-muted-foreground hover:text-primary transition-colors">
                Investors
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/investors">Investor Portal</Link>
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
            <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary">
              Home
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Portfolio
            </Link>
            <Link to="/about" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link to="/investors" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Investors
            </Link>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full" asChild>
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
