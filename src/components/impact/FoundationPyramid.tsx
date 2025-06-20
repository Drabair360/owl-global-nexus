
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
      bgGradient: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
      textGradient: 'from-cyan-100 to-blue-50',
      borderColor: 'border-cyan-200/30'
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
      bgGradient: 'bg-gradient-to-br from-emerald-400 via-green-500 to-forest-green-600',
      textGradient: 'from-emerald-100 to-green-50',
      borderColor: 'border-emerald-200/30'
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
      bgGradient: 'bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-600',
      textGradient: 'from-violet-100 to-purple-50',
      borderColor: 'border-violet-200/30'
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
      bgGradient: 'bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-600',
      textGradient: 'from-orange-100 to-amber-50',
      borderColor: 'border-orange-200/30'
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

      {/* Enhanced Grid Layout with Beautiful Gradients */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className={`${pillar.bgGradient} rounded-3xl p-8 border ${pillar.borderColor} hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden backdrop-blur-sm`}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
              }}
            >
              {/* Sophisticated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/20">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white/80 mb-1">{pillar.name}</div>
                    <h4 className="text-xl font-semibold text-white font-body mb-2">{pillar.title}</h4>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-white/90 mb-1">Industry Focus</div>
                    <p className="text-sm text-white/80">{pillar.industry}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-white/90 mb-1">Impact</div>
                    <p className="text-sm text-white/80">{pillar.impact}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-white/90 mb-1">Key Milestones</div>
                    <p className="text-sm text-white/80">{pillar.milestone}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integrated Impact Philosophy */}
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
