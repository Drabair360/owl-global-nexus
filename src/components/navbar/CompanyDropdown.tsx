
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

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    color: '#475569',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-subtitle)',
    fontSize: '0.875rem',
    fontWeight: '500',
    position: 'relative' as const,
    padding: '0.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  };

  const dropdownStyle = {
    position: 'absolute' as const,
    top: '100%',
    left: 0,
    marginTop: '0.5rem',
    width: '14rem',
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    zIndex: 50,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    WebkitBoxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    MozBoxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)'
  };

  const linkStyle = {
    display: 'block',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '0.875rem',
    color: '#1e293b',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-subtitle)',
    textDecoration: 'none',
    backgroundColor: 'transparent'
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.color = '#1e293b'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
      >
        Company
        <ChevronDown className="ml-1 w-4 h-4 transition-all duration-300 group-hover:rotate-180" style={{ color: 'inherit' }} />
        <span 
          className="absolute bottom-0 h-0.5 transition-all duration-500 group-hover:w-[calc(100%-1rem)]"
          style={{
            left: '0.5rem',
            width: '0',
            background: 'linear-gradient(to right, #f59e0b, #ea580c)'
          }}
        ></span>
      </button>
      {isOpen && (
        <div 
          style={dropdownStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="absolute -top-1 left-6 w-2 h-2 rotate-45"
            style={{ 
              backgroundColor: '#ffffff',
              borderLeft: '1px solid #e5e7eb',
              borderTop: '1px solid #e5e7eb'
            }}
          ></div>
          <Link 
            to="/about" 
            onClick={() => window.scrollTo(0, 0)}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.color = '#1e293b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1e293b';
            }}
          >
            <span className="relative">
              About Owl
              <span 
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover/item:w-full"
                style={{
                  width: '0',
                  background: 'linear-gradient(to right, #f59e0b, #ea580c)'
                }}
              ></span>
            </span>
          </Link>
          <Link 
            to="/careers" 
            onClick={() => window.scrollTo(0, 0)}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.color = '#1e293b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1e293b';
            }}
          >
            <span className="relative">
              Careers
              <span 
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover/item:w-full"
                style={{
                  width: '0',
                  background: 'linear-gradient(to right, #f59e0b, #ea580c)'
                }}
              ></span>
            </span>
          </Link>
          <Link 
            to="/news" 
            onClick={() => window.scrollTo(0, 0)}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.color = '#1e293b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1e293b';
            }}
          >
            <span className="relative">
              Hot News
              <span 
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover/item:w-full"
                style={{
                  width: '0',
                  background: 'linear-gradient(to right, #f59e0b, #ea580c)'
                }}
              ></span>
            </span>
          </Link>
          <Link 
            to="/impact" 
            onClick={() => window.scrollTo(0, 0)}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f9fafb';
              e.currentTarget.style.color = '#1e293b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1e293b';
            }}
          >
            <span className="relative">
              Impact
              <span 
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover/item:w-full"
                style={{
                  width: '0',
                  background: 'linear-gradient(to right, #f59e0b, #ea580c)'
                }}
              ></span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CompanyDropdown;
