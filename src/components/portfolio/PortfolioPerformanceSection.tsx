
import React from 'react';
import GeometricPattern from '@/components/GeometricPattern';

const PortfolioPerformanceSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.10),transparent_60%)]" />
      <GeometricPattern variant="prominent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Portfolio</span>
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Performance</span>
          </h2>
          <p className="text-slate-300 font-body max-w-3xl mx-auto text-lg">
            Our commitment to excellence is reflected in the measurable impact our investments create.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="group text-center transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-gradient-to-br from-blue-900/50 via-blue-800/30 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">€5M+</div>
                <p className="text-slate-300 font-body text-sm">Total Assets Under Management</p>
              </div>
            </div>
          </div>
          
          <div className="group text-center transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-gradient-to-br from-emerald-900/50 via-emerald-800/30 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">4+</div>
                <p className="text-slate-300 font-body text-sm">Active Portfolio Companies</p>
              </div>
            </div>
          </div>
          
          <div className="group text-center transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-purple-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">25+</div>
                <p className="text-slate-300 font-body text-sm">African & European Countries</p>
              </div>
            </div>
          </div>
          
          <div className="group text-center transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-gradient-to-br from-amber-900/50 via-orange-800/30 to-amber-900/50 backdrop-blur-xl rounded-2xl p-6 border border-amber-400/30 hover:border-amber-300/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-amber-400 to-orange-200 bg-clip-text text-transparent">10+</div>
                <p className="text-slate-300 font-body text-sm">Jobs under Creation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPerformanceSection;
