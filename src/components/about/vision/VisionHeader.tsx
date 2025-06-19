
import React from 'react';
import AnimatedText from './AnimatedText';

const VisionHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-section text-slate-800 mb-8 font-brand">OUR VISION</h2>
      
      <div className="max-w-5xl mx-auto">
        <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-8 font-body">
          Building a{' '}
          <AnimatedText text="€5B+ portfolio ecosystem by 2030" />, 
          <span className="block mt-2">
            connecting{' '}
            <AnimatedText text="1 billion Africans" />{' '}
            through our integrated AI-powered platforms
          </span>
          <span className="block mt-2 text-xl text-slate-600">
            across fintech, agritech, real estate, and creative industries.
          </span>
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default VisionHeader;
