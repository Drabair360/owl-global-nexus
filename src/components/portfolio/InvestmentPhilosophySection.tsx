
import React from 'react';
import { Target, TrendingUp, Users } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const InvestmentPhilosophySection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 overflow-hidden">
      <GeometricPattern variant="background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
            Investment
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Philosophy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Our approach to investment is guided by three core principles that ensure sustainable growth and meaningful impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-8 relative transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-600/10 to-blue-500/5 rounded-2xl backdrop-blur-sm border border-blue-200/50 group-hover:border-blue-300/70 transition-all duration-500" />
            <div className="relative">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Strategic Vision</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                We invest in companies that align with Africa's long-term development goals, focusing on sectors 
                that can create transformational change across the continent.
              </p>
            </div>
          </div>

          <div className="group text-center p-8 relative transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-emerald-600/10 to-emerald-500/5 rounded-2xl backdrop-blur-sm border border-emerald-200/50 group-hover:border-emerald-300/70 transition-all duration-500" />
            <div className="relative">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Sustainable Growth</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Every investment decision is evaluated through the lens of environmental sustainability, 
                social impact, and governance excellence.
              </p>
            </div>
          </div>

          <div className="group text-center p-8 relative transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-600/10 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-200/50 group-hover:border-purple-300/70 transition-all duration-500" />
            <div className="relative">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                We prioritize investments that create meaningful employment opportunities and contribute 
                to the prosperity of local communities across Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophySection;
