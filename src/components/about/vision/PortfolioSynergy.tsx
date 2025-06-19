
import React from 'react';
import { Cpu, Network } from 'lucide-react';

const PortfolioSynergy = () => {
  return (
    <div className="mb-20">
      <h3 className="text-2xl font-semibold text-slate-800 text-center mb-12 font-body">Portfolio Synergy Impact</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="group">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">AI-Powered Ecosystem</h4>
            <p className="text-slate-600 leading-relaxed font-body">
              AKOULA's AI backbone processes <span className="font-semibold text-blue-600">100K+ daily API calls</span>, 
              powering intelligent automation across all portfolio companies and driving unprecedented efficiency gains.
            </p>
          </div>
        </div>

        <div className="group">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Network className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Integrated Value Chain</h4>
            <p className="text-slate-600 leading-relaxed font-body">
              From CAOAGRO's <span className="font-semibold text-emerald-600">€10M+ industrial projects</span> to KIDZ LAB's 
              <span className="font-semibold text-emerald-600"> 95% talent matching</span>, our platforms create multiplying value across industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSynergy;
