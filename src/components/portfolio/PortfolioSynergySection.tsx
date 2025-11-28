
import React from 'react';
import { Brain, Leaf } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const PortfolioSynergySection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.10),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.08),transparent_50%)]" />
      <GeometricPattern variant="subtle" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Portfolio</span>
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Synergy</span>
          </h2>
          <p className="text-slate-300 font-body max-w-3xl mx-auto text-lg">
            Our integrated ecosystem creates powerful synergies across industries, connecting technology, 
            agriculture, real estate, and talent to drive sustainable growth across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group text-center transform transition-all duration-500 hover:scale-105">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-pulse" />
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-blue-700/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-blue-400/30">
                <Brain className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 font-subtitle bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Technology Integration</h3>
            <p className="text-slate-300 text-sm font-body leading-relaxed">
              AKOULA's AI intelligence powers decision-making across our agro-industrial and real estate portfolios.
            </p>
          </div>

          <div className="group text-center transform transition-all duration-500 hover:scale-105">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500/20 via-emerald-600/30 to-emerald-700/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-emerald-400/30">
                <Leaf className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 font-subtitle bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">Sustainable Development</h3>
            <p className="text-slate-300 text-sm font-body leading-relaxed">
              CAOAGRO's sustainable practices inform our approach to eco-friendly real estate development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSynergySection;
