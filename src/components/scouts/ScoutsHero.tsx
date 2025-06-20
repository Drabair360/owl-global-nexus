
import React from 'react';

const ScoutsHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-violet-800 via-purple-700 via-indigo-600 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,69,219,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(99,102,241,0.05),transparent_50%,rgba(168,85,247,0.05))]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-sophisticated-fade">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
            Business
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-amber-500 bg-clip-text text-transparent block mt-2">
              Scouts
            </span>
          </h1>
          
          <p className="text-body-large text-purple-100 mb-8 max-w-3xl mx-auto font-body">Join Africa's most exclusive network of business intelligence professionals. Scout transformative opportunities across our portfolio ecosystem and shape the future of continental commerce.</p>
        </div>
      </div>
    </section>
  );
};

export default ScoutsHero;
