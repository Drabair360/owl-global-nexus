
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CompanyDropdown from './navbar/CompanyDropdown';
import InvestorsDropdown from './navbar/InvestorsDropdown';
import MobileMenu from './navbar/MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Safari-compatible navbar styles with hardcoded values
  const navbarStyle = {
    position: 'fixed' as const,
    top: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    zIndex: 50,
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 4px 20px rgba(251, 146, 60, 0.15), 0 2px 8px rgba(249, 115, 22, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
    WebkitBoxShadow: '0 4px 20px rgba(251, 146, 60, 0.15), 0 2px 8px rgba(249, 115, 22, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
    MozBoxShadow: '0 4px 20px rgba(251, 146, 60, 0.15), 0 2px 8px rgba(249, 115, 22, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    backgroundColor: '#ffffff',
    borderColor: '#cbd5e1',
    borderWidth: '2px',
    borderStyle: 'solid',
    color: '#1e293b',
    overflow: 'hidden',
    position: 'relative' as const,
    transition: 'all 0.5s ease',
    fontFamily: 'var(--font-subtitle)',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const buttonSpanStyle = {
    position: 'relative' as const,
    zIndex: 10,
    transition: 'color 0.5s ease'
  };

  const buttonOverlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, #f59e0b, #ea580c)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s ease'
  };

  return (
    <nav style={navbarStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" 
              alt="OWL International Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <span 
                className="text-lg sm:text-xl tracking-wide"
                style={{ 
                  fontFamily: 'var(--font-brand)', 
                  color: '#1e293b',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                OWL INTERNATIONAL
              </span>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/solutions" 
                onClick={() => window.scrollTo(0, 0)}
                className="transition-all duration-300 relative group py-2"
                style={{ 
                  color: '#475569',
                  fontFamily: 'var(--font-subtitle)',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1e293b'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                Solutions
                <span 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 group-hover:w-full"
                  style={{
                    width: '0',
                    background: 'linear-gradient(to right, #f59e0b, #ea580c)'
                  }}
                ></span>
              </Link>
              
              <CompanyDropdown />

              <Link 
                to="/portfolio" 
                onClick={() => window.scrollTo(0, 0)}
                className="transition-all duration-300 relative group py-2"
                style={{ 
                  color: '#475569',
                  fontFamily: 'var(--font-subtitle)',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#1e293b'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
              >
                Portfolio
                <span 
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 group-hover:w-full"
                  style={{
                    width: '0',
                    background: 'linear-gradient(to right, #f59e0b, #ea580c)'
                  }}
                ></span>
              </Link>

              <InvestorsDropdown />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div 
              className="group"
              style={buttonStyle}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector('.button-overlay') as HTMLElement;
                const span = e.currentTarget.querySelector('.button-span') as HTMLElement;
                if (overlay) overlay.style.transform = 'scaleX(1)';
                if (span) span.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector('.button-overlay') as HTMLElement;
                const span = e.currentTarget.querySelector('.button-span') as HTMLElement;
                if (overlay) overlay.style.transform = 'scaleX(0)';
                if (span) span.style.color = '#1e293b';
              }}
            >
              <Link 
                to="/investors" 
                onClick={() => window.scrollTo(0, 0)} 
                className="block px-4 py-2 relative"
                style={{ textDecoration: 'none' }}
              >
                <span className="button-span" style={buttonSpanStyle}>Investor Portal</span>
                <span className="button-overlay" style={buttonOverlayStyle}></span>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 transition-colors duration-300"
              style={{ color: '#1e293b' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#475569'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
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
