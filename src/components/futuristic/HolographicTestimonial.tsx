
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: string;
  name: string;
  title: string;
  delay?: number;
}

const HolographicTestimonial = ({ testimonial, name, title, delay = 0 }: TestimonialProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Holographic Pod Container */}
      <div className="relative transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-5">
        
        {/* Outer Holographic Ring */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 animate-spin-slow opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main Pod */}
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/30 shadow-2xl overflow-hidden">
          
          {/* Scan Lines Effect */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${i * 10}%`,
                  animation: `hologramScan 2s linear infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>

          {/* Stars Rating with Holographic Effect */}
          <div className="flex items-center mb-4 relative z-10">
            {[1, 2, 3, 4, 5].map(i => (
              <Star 
                key={i} 
                className="w-5 h-5 text-amber-400 fill-current group-hover:text-cyan-400 transition-colors duration-300" 
                style={{
                  filter: isActive ? 'drop-shadow(0 0 6px #06b6d4)' : 'none',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          {/* Voice Wave Visualization */}
          {isActive && (
            <div className="absolute top-4 right-4 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-cyan-400 rounded-full animate-bounce"
                  style={{
                    height: `${Math.random() * 20 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.6s'
                  }}
                />
              ))}
            </div>
          )}

          {/* Testimonial Text with Typewriter Effect */}
          <p className="text-slate-300 font-body italic mb-6 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-500">
            {testimonial}
          </p>

          {/* Author Info with Digital Signature */}
          <div className="flex items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mr-4 group-hover:animate-pulse">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-sm">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-white block group-hover:text-cyan-300 transition-colors duration-300">
                {name}
              </span>
              <span className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                {title}
              </span>
            </div>
          </div>

          {/* Holographic Validation Badge */}
          <div className="absolute bottom-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Digital Interference Pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none mix-blend-screen"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='interference'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23interference)'/%3E%3C/svg%3E")`,
              animation: 'interference 0.3s infinite alternate'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HolographicTestimonial;
