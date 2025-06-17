
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-800 via-blue-800 via-indigo-700 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-sophisticated-fade">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
            About
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent block mt-2">
              OWL International
            </span>
          </h1>
          
          <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
            Pioneering transformative investments across Africa through strategic vision, 
            innovative technology, and sustainable development initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
