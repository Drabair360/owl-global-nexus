
import React from 'react';

const FlagshipHeader = () => {
  return (
    <div className="text-center mb-20">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-600/20 rounded-2xl blur-2xl animate-pulse" />
        <h2 className="relative text-5xl md:text-6xl font-heading bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent mb-8 px-8 py-4">
          Flagship Ventures
        </h2>
      </div>
      <p className="text-xl text-slate-300 max-w-4xl mx-auto font-body leading-relaxed">
        Our portfolio companies are pioneering the future of technology, agriculture, real estate, and talent development across Africa and beyond.
      </p>
    </div>
  );
};

export default FlagshipHeader;
