
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

  const menuStyle = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb'
  };

  const linkStyle = {
    display: 'block',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    color: '#1e293b',
    fontFamily: 'var(--font-subtitle)',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    borderBottom: '1px solid #e5e7eb',
    textDecoration: 'none'
  };

  const subLinkStyle = {
    display: 'block',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    fontSize: '1rem',
    color: '#1e293b',
    fontFamily: 'var(--font-subtitle)',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    textDecoration: 'none'
  };

  const sectionHeaderStyle = {
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#475569',
    fontFamily: 'var(--font-brand)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em'
  };

  const buttonContainerStyle = {
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  };

  return (
    <div 
      className="md:hidden animate-sophisticated-fade" 
      style={menuStyle}
    >
      <div className="px-4 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <Link 
          to="/solutions" 
          onClick={handleLinkClick}
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
        >
          Solutions
        </Link>
        <div className="space-y-1">
          <div style={sectionHeaderStyle}>Company</div>
          <Link 
            to="/about" 
            onClick={handleLinkClick}
            style={subLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            About Owl
          </Link>
          <Link 
            to="/careers" 
            onClick={handleLinkClick}
            style={subLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            Careers
          </Link>
          <Link 
            to="/news" 
            onClick={handleLinkClick}
            style={subLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            Hot News
          </Link>
          <Link 
            to="/impact" 
            onClick={handleLinkClick}
            style={subLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            Impact
          </Link>
        </div>
        <Link 
          to="/portfolio" 
          onClick={handleLinkClick}
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
        >
          Portfolio
        </Link>
        <div className="space-y-1">
          <div style={sectionHeaderStyle}>Investors</div>
          <Link 
            to="/investors" 
            onClick={handleLinkClick}
            style={subLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            Investor Portal
          </Link>
          <Link 
            to="/scouts" 
            onClick={handleLinkClick}
            style={subLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            Scouts
          </Link>
        </div>
        <div style={buttonContainerStyle}>
          <Button 
            variant="outline" 
            className="w-full py-3" 
            style={{ 
              backgroundColor: '#ffffff',
              borderColor: '#cbd5e1',
              borderWidth: '1px',
              borderStyle: 'solid',
              color: '#1e293b',
              fontFamily: 'var(--font-subtitle)',
              fontSize: '1rem',
              fontWeight: '500'
            }} 
            asChild
          >
            <Link to="/investors" onClick={handleLinkClick}>Investor Portal</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
