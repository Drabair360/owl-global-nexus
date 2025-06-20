
import React from 'react';
import { Cpu, Tractor, Users, Building, ArrowRight, Zap } from 'lucide-react';

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
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'caoagro',
      name: 'CAOAGRO.COM',
      title: 'Industrial & Agricultural Backbone',
      industry: 'Turnkey industrial projects, agro-processing',
      impact: 'Food security, rural industrialization',
      milestone: 'Strategic partnerships with cooperative networks, processing facility expansion',
      icon: Tractor,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'kidzlab',
      name: 'KIDZ LAB',
      title: 'Human Capital & Creative Economy',
      industry: 'Talent matching, creative industries, entertainment',
      impact: 'Youth empowerment, skills development',
      milestone: 'Regional talent hubs, creative industry partnerships',
      icon: Users,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'owloma',
      name: 'OWLOMA',
      title: 'Urban Development & Infrastructure',
      industry: 'Real estate tech, smart cities',
      impact: 'Sustainable urbanization, housing accessibility',
      milestone: 'Smart housing pilot projects, urban development consulting',
      icon: Building,
      color: 'from-amber-500 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <div className="relative">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-body">The Four Pillars of Sustainable Development</h3>
        <p className="text-slate-600 font-body max-w-3xl mx-auto">
          Our bottom-up approach builds sustainability into each foundational element, 
          ensuring long-term success through interconnected, purpose-driven growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={pillar.id}
              className={`${pillar.bgColor} rounded-2xl p-8 border-2 ${pillar.borderColor} hover:shadow-xl transition-all duration-300 group hover:-translate-y-2`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-500 mb-1">{pillar.name}</div>
                  <h4 className="text-xl font-semibold text-slate-800 font-body">{pillar.title}</h4>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-slate-600 mb-1">Industry Focus</div>
                  <p className="text-slate-700 font-body text-sm">{pillar.industry}</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-600 mb-1">Current Impact</div>
                  <p className="text-slate-700 font-body text-sm">{pillar.impact}</p>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-600 mb-1">Key Milestones</div>
                  <p className="font-semibold text-slate-800 font-body text-sm">{pillar.milestone}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Interactive Connection Visualization */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Interconnected Impact Multiplier</h4>
          <p className="text-slate-600 font-body">
            Each pillar strengthens the others, creating exponential value across our ecosystem
          </p>
        </div>
        
        <div className="flex justify-center items-center mb-8">
          <div className="relative w-96 h-96">
            {/* Central Hub with enhanced styling */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-slate-700 via-blue-700 to-slate-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-white font-bold text-lg">OWL</span>
            </div>
            
            {/* Pillar Nodes with enhanced interactivity */}
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const angle = (index * 90) - 45;
              const radius = 140;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={pillar.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-125 transition-all duration-300 animate-pulse`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Enhanced Connection Lines with gradients */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-t from-blue-400 via-purple-300 to-transparent origin-bottom opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                  
                  {/* Hover effect tooltip */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-lg shadow-lg p-3 min-w-max z-10">
                    <p className="text-sm font-semibold text-slate-800">{pillar.name}</p>
                    <p className="text-xs text-slate-600">{pillar.impact}</p>
                  </div>
                </div>
              );
            })}
            
            {/* Animated data flow indicators */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-blue-300 rounded-full animate-spin opacity-20" style={{ animationDuration: '20s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-dashed border-purple-300 rounded-full animate-spin opacity-30" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          </div>
        </div>
        
        {/* Multiplier Effect Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-600" />
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <Tractor className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-sm text-slate-600">1 talent trained → 5 farms supported → 20 families fed</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <Building className="w-5 h-5 text-amber-600" />
            </div>
            <p className="text-sm text-slate-600">1 AI solution → 10 smart buildings → 100 residents empowered</p>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Building className="w-5 h-5 text-amber-600" />
              <ArrowRight className="w-4 h-4 text-slate-400" />
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm text-slate-600">1 housing project → 50 jobs created → 200 lives improved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationPyramid;
