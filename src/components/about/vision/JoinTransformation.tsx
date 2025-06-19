
import React from 'react';

const JoinTransformation = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">
        Join Africa's Transformation
      </h3>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed font-body">
        Whether you're an entrepreneur ready to scale across Africa, an investor seeking 
        exponential returns, or a partner committed to continental transformation, 
        this is your moment to be part of history.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
          Partner With Us
        </button>
        <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
          Explore Opportunities
        </button>
      </div>
    </div>
  );
};

export default JoinTransformation;
