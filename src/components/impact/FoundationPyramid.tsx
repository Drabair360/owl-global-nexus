
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
      target: '100M+ digital literacy beneficiaries',
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
      target: '50M+ farmers empowered, 500+ industrial projects',
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
      target: '10M+ young professionals placed, 1M+ creators supported',
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
      target: '5M+ housing units facilitated, 100+ smart city projects',
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
                  <div className="text-sm font-medium text-slate-600 mb-1">2030 Target</div>
                  <p className="font-semibold text-slate-800 font-body text-sm">{pillar.target}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Connection Visualization */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12">
        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Interconnected Impact Multiplier</h4>
          <p className="text-slate-600 font-body">
            Each pillar strengthens the others, creating exponential value across our ecosystem
          </p>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="relative w-80 h-80">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">OWL</span>
            </div>
            
            {/* Pillar Nodes */}
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const angle = (index * 90) - 45; // Position at 45, 135, 225, 315 degrees
              const radius = 120;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={pillar.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Connection Lines */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-t from-slate-300 to-transparent origin-bottom"
                    style={{ 
                      transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                      transformOrigin: 'bottom center'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationPyramid;
