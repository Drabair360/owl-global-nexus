
import React from 'react';

interface RoleSketchProps {
  role: string;
  className?: string;
}

export const RoleSketch: React.FC<RoleSketchProps> = ({ role, className = "" }) => {
  const getSketche = (role: string) => {
    switch (role.toLowerCase()) {
      case 'operations':
      case 'regional operations director':
      case 'senior project manager':
        return (
          <svg viewBox="0 0 400 300" className={`${className} opacity-10`}>
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#64748b" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#grid)"/>
            {/* Factory building sketch */}
            <rect x="50" y="150" width="120" height="80" fill="none" stroke="#64748b" strokeWidth="2"/>
            <rect x="80" y="120" width="60" height="30" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="110" cy="135" r="5" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Connecting lines */}
            <path d="M170 190 Q250 150 320 180" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="320" cy="180" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Gear elements */}
            <circle cx="300" cy="100" r="25" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="300" cy="100" r="15" fill="none" stroke="#64748b" strokeWidth="1"/>
          </svg>
        );
      
      case 'engineering':
      case 'cad mechanical engineer':
      case 'ai research engineer':
        return (
          <svg viewBox="0 0 400 300" className={`${className} opacity-10`}>
            <defs>
              <pattern id="techGrid" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="1" fill="#64748b" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#techGrid)"/>
            {/* Technical drawing elements */}
            <rect x="50" y="50" width="100" height="60" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="100" cy="80" r="20" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Dimension lines */}
            <path d="M50 130 L150 130" stroke="#64748b" strokeWidth="1"/>
            <path d="M50 125 L50 135" stroke="#64748b" strokeWidth="1"/>
            <path d="M150 125 L150 135" stroke="#64748b" strokeWidth="1"/>
            {/* 3D projection lines */}
            <path d="M150 50 L200 30 L200 90 L150 110" fill="none" stroke="#64748b" strokeWidth="2"/>
            <path d="M200 30 L250 50 L250 110 L200 90" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Circuit elements */}
            <circle cx="300" cy="200" r="15" fill="none" stroke="#64748b" strokeWidth="2"/>
            <rect x="270" y="220" width="60" height="20" fill="none" stroke="#64748b" strokeWidth="2"/>
          </svg>
        );
      
      case 'strategy':
      case 'finance':
      case 'investment':
        return (
          <svg viewBox="0 0 400 300" className={`${className} opacity-10`}>
            {/* Chart and graph elements */}
            <path d="M50 250 L100 200 L150 220 L200 150 L250 170 L300 100" 
                  fill="none" stroke="#64748b" strokeWidth="3"/>
            {/* Bar chart */}
            <rect x="60" y="200" width="15" height="50" fill="none" stroke="#64748b" strokeWidth="2"/>
            <rect x="80" y="180" width="15" height="70" fill="none" stroke="#64748b" strokeWidth="2"/>
            <rect x="100" y="160" width="15" height="90" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Pie chart */}
            <circle cx="320" cy="80" r="30" fill="none" stroke="#64748b" strokeWidth="2"/>
            <path d="M320 50 A30 30 0 0 1 340 95" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Data points */}
            <circle cx="100" cy="200" r="3" fill="#64748b"/>
            <circle cx="150" cy="220" r="3" fill="#64748b"/>
            <circle cx="200" cy="150" r="3" fill="#64748b"/>
          </svg>
        );
      
      case 'marketing':
        return (
          <svg viewBox="0 0 400 300" className={`${className} opacity-10`}>
            {/* Marketing funnel */}
            <path d="M100 50 L300 50 L250 150 L150 150 Z" fill="none" stroke="#64748b" strokeWidth="2"/>
            <path d="M150 150 L250 150 L220 200 L180 200 Z" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Megaphone */}
            <circle cx="80" cy="200" r="15" fill="none" stroke="#64748b" strokeWidth="2"/>
            <path d="M95 200 L150 180 L150 220 Z" fill="none" stroke="#64748b" strokeWidth="2"/>
            {/* Social media icons */}
            <circle cx="320" cy="100" r="12" fill="none" stroke="#64748b" strokeWidth="2"/>
            <rect x="310" y="130" width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2"/>
          </svg>
        );
      
      case 'data science':
        return (
          <svg viewBox="0 0 400 300" className={`${className} opacity-10`}>
            {/* Neural network */}
            <circle cx="80" cy="100" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="80" cy="150" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="80" cy="200" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            
            <circle cx="200" cy="75" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="200" cy="125" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="200" cy="175" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="200" cy="225" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            
            <circle cx="320" cy="125" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="320" cy="175" r="8" fill="none" stroke="#64748b" strokeWidth="2"/>
            
            {/* Connections */}
            <path d="M88 100 L192 75" stroke="#64748b" strokeWidth="1"/>
            <path d="M88 100 L192 125" stroke="#64748b" strokeWidth="1"/>
            <path d="M88 150 L192 125" stroke="#64748b" strokeWidth="1"/>
            <path d="M88 150 L192 175" stroke="#64748b" strokeWidth="1"/>
            <path d="M208 125 L312 125" stroke="#64748b" strokeWidth="1"/>
            <path d="M208 175 L312 175" stroke="#64748b" strokeWidth="1"/>
          </svg>
        );
      
      default:
        return (
          <svg viewBox="0 0 400 300" className={`${className} opacity-10`}>
            {/* Generic professional sketch */}
            <rect x="100" y="100" width="200" height="120" fill="none" stroke="#64748b" strokeWidth="2"/>
            <circle cx="200" cy="160" r="30" fill="none" stroke="#64748b" strokeWidth="2"/>
            <path d="M150 250 Q200 220 250 250" fill="none" stroke="#64748b" strokeWidth="2"/>
          </svg>
        );
    }
  };

  return getSketche(role);
};
