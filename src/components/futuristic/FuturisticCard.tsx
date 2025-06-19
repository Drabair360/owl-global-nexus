
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FuturisticCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FuturisticCard = ({ icon: Icon, title, description, delay = 0 }: FuturisticCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Holographic Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse group-hover:animate-none" />
      
      {/* Main Card */}
      <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50 shadow-2xl overflow-hidden transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:rotate-1">
        
        {/* Scan Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                top: `${i * 5}%`,
                animation: `scanLine 3s linear infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Icon Container with Plasma Effect */}
        <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg opacity-80 group-hover:animate-pulse" />
          <div className="relative w-full h-full bg-slate-800 rounded-lg flex items-center justify-center">
            <Icon className="w-8 h-8 text-white group-hover:text-cyan-300 transition-colors duration-300" />
          </div>
          
          {/* Energy Discharge Effect */}
          {isHovered && (
            <div className="absolute inset-0 animate-ping">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-lg" />
            </div>
          )}
        </div>

        {/* Glitch Text Effect */}
        <h3 className="text-xl font-semibold mb-4 text-white relative">
          <span className="relative z-10">{title}</span>
          {isHovered && (
            <>
              <span className="absolute inset-0 text-cyan-400 animate-pulse" style={{ transform: 'translate(1px, 0)' }}>
                {title}
              </span>
              <span className="absolute inset-0 text-pink-400 animate-pulse" style={{ transform: 'translate(-1px, 0)' }}>
                {title}
              </span>
            </>
          )}
        </h3>

        <p className="text-slate-300 leading-relaxed font-body group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        {/* Digital Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: 'noise 0.2s infinite'
          }}
        />
      </div>
    </div>
  );
};

export default FuturisticCard;
