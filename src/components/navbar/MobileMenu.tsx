
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-background border-b border-border animate-sophisticated-fade">
      <div className="px-4 pt-2 pb-3 space-y-1">
        <Link 
          to="/solutions" 
          onClick={handleLinkClick}
          className="block px-3 py-2 text-foreground hover:text-primary font-subtitle text-sm transition-colors duration-300"
        >
          Solutions
        </Link>
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm font-medium text-muted-foreground font-brand">Company</div>
          <Link 
            to="/about" 
            onClick={handleLinkClick}
            className="block px-6 py-2 text-sm text-foreground hover:text-primary font-subtitle transition-colors duration-300"
          >
            About Owl
          </Link>
          <Link 
            to="/careers" 
            onClick={handleLinkClick}
            className="block px-6 py-2 text-sm text-foreground hover:text-primary font-subtitle transition-colors duration-300"
          >
            Careers
          </Link>
          <Link 
            to="/news" 
            onClick={handleLinkClick}
            className="block px-6 py-2 text-sm text-foreground hover:text-primary font-subtitle transition-colors duration-300"
          >
            Hot News
          </Link>
          <Link 
            to="/impact" 
            onClick={handleLinkClick}
            className="block px-6 py-2 text-sm text-foreground hover:text-primary font-subtitle transition-colors duration-300"
          >
            Impact
          </Link>
        </div>
        <Link 
          to="/portfolio" 
          onClick={handleLinkClick}
          className="block px-3 py-2 text-muted-foreground hover:text-primary font-subtitle text-sm transition-colors duration-300"
        >
          Portfolio
        </Link>
        <div className="space-y-1">
          <div className="px-3 py-2 text-sm font-medium text-muted-foreground font-brand">Investors</div>
          <Link 
            to="/investors" 
            onClick={handleLinkClick}
            className="block px-6 py-2 text-sm text-foreground hover:text-primary font-subtitle transition-colors duration-300"
          >
            Investor Portal
          </Link>
          <Link 
            to="/scouts" 
            onClick={handleLinkClick}
            className="block px-6 py-2 text-sm text-foreground hover:text-primary font-subtitle transition-colors duration-300"
          >
            Scouts
          </Link>
        </div>
        <div className="px-3 py-2">
          <Button variant="outline" className="w-full font-subtitle text-sm" asChild>
            <Link to="/investors" onClick={handleLinkClick}>Investor Portal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
