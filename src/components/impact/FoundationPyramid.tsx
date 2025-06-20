
import React from 'react';
import { Cpu, Tractor, Users, Building } from 'lucide-react';

const FoundationPyramid = () => {
  const pillars = [
    {
      id: 'akoula',
      name: 'AKOULA',
      title: 'AI & Digital Infrastructure Foundation',
      industry: 'AI platform development, digital transformation',
      impact: 'Democratizing technology access across Africa',
      milestone: 'Platform integration across West Africa, AI literacy programs',
      icon: Cpu,
      color: 'from-cyan-400 via-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-100',
      borderColor: 'border-cyan-300'
    },
    {
      id: 'caoagro',
      name: 'CAOAGRO.COM',
      title: 'Industrial & Agricultural Backbone',
      industry: 'Turnkey industrial projects, agro-processing',
      impact: 'Food security, rural industrialization',
      milestone: 'Strategic partnerships with cooperative networks, processing facility expansion',
      icon: Tractor,
      color: 'from-emerald-400 via-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-100',
      borderColor: 'border-emerald-300'
    },
    {
      id: 'kidzlab',
      name: 'KIDZ LAB',
      title: 'Human Capital & Creative Economy',
      industry: 'Talent matching, creative industries, entertainment',
      impact: 'Youth empowerment, skills development',
      milestone: 'Regional talent hubs, creative industry partnerships',
      icon: Users,
      color: 'from-violet-400 via-purple-500 to-fuchsia-600',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-100',
      borderColor: 'border-violet-300'
    },
    {
      id: 'owloma',
      name: 'OWLOMA',
      title: 'Urban Development & Infrastructure',
      industry: 'Real estate tech, smart cities',
      impact: 'Sustainable urbanization, housing accessibility',
      milestone: 'Smart housing pilot projects, urban development consulting',
      icon: Building,
      color: 'from-orange-400 via-amber-500 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-amber-100',
      borderColor: 'border-orange-300'
    }
  ];

  return (
    <div className="relative">
      <div className="text-center mb-16">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-body">Foundation Ecosystem Web</h3>
        <p className="text-slate-600 font-body max-w-3xl mx-auto">
          Our bottom-up approach weaves sustainability into each foundational element, 
          creating an interconnected web of purpose-driven growth and lasting impact.
        </p>
      </div>

      {/* Simplified Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className={`${pillar.bgColor} rounded-3xl p-8 border ${pillar.borderColor} hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden`}
            >
              {/* Subtle animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-500 mb-1">{pillar.name}</div>
                    <h4 className="text-xl font-semibold text-slate-800 font-body mb-2">{pillar.title}</h4>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Industry Focus</div>
                    <p className="text-sm text-slate-600">{pillar.industry}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Impact</div>
                    <p className="text-sm text-slate-600">{pillar.impact}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Key Milestones</div>
                    <p className="text-sm text-slate-600">{pillar.milestone}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Philosophy Statement */}
      <div className="text-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
        <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Integrated Impact Philosophy</h4>
        <p className="text-lg text-slate-600 font-body max-w-3xl mx-auto mb-8">
          Each pillar strengthens the others, creating exponential value across our ecosystem
        </p>
        
        {/* Factual Impact Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-sm font-semibold text-slate-700 mb-2">Cross-Platform Synergy</div>
            <p className="text-xs text-slate-600">Our platforms share resources and amplify each other's impact</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3.2x</div>
            <div className="text-sm font-semibold text-slate-700 mb-2">Value Multiplication</div>
            <p className="text-xs text-slate-600">Integrated approach delivers more value than individual platforms</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
            <div className="text-sm font-semibold text-slate-700 mb-2">Cost Efficiency</div>
            <p className="text-xs text-slate-600">Shared infrastructure reduces operational costs significantly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationPyramid;
