
import React from 'react';
import { Cpu, Tractor, Users, Building, Zap, ArrowRight } from 'lucide-react';

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
      borderColor: 'border-cyan-300',
      position: 'top-0 left-1/2 transform -translate-x-1/2'
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
      borderColor: 'border-emerald-300',
      position: 'top-1/2 right-0 transform translate-x-4 -translate-y-1/2'
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
      borderColor: 'border-violet-300',
      position: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4'
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
      borderColor: 'border-orange-300',
      position: 'top-1/2 left-0 transform -translate-x-4 -translate-y-1/2'
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

      {/* Dynamic Ecosystem Web Visualization */}
      <div className="relative min-h-[600px] mb-16">
        {/* Central Energy Core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-32 h-32 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-pulse">
            <div className="text-center">
              <Zap className="w-12 h-12 text-lime-400 mx-auto mb-2" />
              <span className="text-white font-bold text-lg">OWL</span>
            </div>
          </div>
          
          {/* Energy Rings */}
          <div className="absolute inset-0 w-48 h-48 border-2 border-dashed border-lime-300 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-0 w-64 h-64 border-2 border-dashed border-cyan-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
        </div>

        {/* Pillar Nodes with Dynamic Positioning */}
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          const angle = (index * 90);
          const radius = 200;
          const x = Math.cos(angle * Math.PI / 180) * radius;
          const y = Math.sin(angle * Math.PI / 180) * radius;
          
          return (
            <div
              key={pillar.id}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
              style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
            >
              {/* Connection Line to Center */}
              <div 
                className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"
                style={{ 
                  height: `${radius}px`,
                  transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                  transformOrigin: 'bottom center'
                }}
              />
              
              {/* Pillar Node */}
              <div className={`w-24 h-24 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-125 transition-all duration-300 relative overflow-hidden`}>
                <Icon className="w-10 h-10 text-white relative z-10" />
                
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Interactive Info Panel */}
              <div className="absolute top-28 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-xl shadow-xl p-4 min-w-64 z-30 border border-slate-200">
                <div className="text-sm font-semibold text-slate-500 mb-1">{pillar.name}</div>
                <h4 className="text-lg font-semibold text-slate-800 font-body mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-600 mb-2">{pillar.impact}</p>
                <div className="text-xs font-medium text-slate-700 bg-slate-50 rounded-lg p-2">
                  <strong>Key Milestones:</strong> {pillar.milestone}
                </div>
              </div>
            </div>
          );
        })}

        {/* Floating Data Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full opacity-60 animate-bounce"
            style={{
              top: `${20 + (i * 7)}%`,
              left: `${15 + (i * 6)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Living Ecosystem Visualization */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-semibold text-white mb-6 font-body">Living Ecosystem Impact</h4>
            <p className="text-blue-100 font-body text-lg max-w-3xl mx-auto">
              Each pillar strengthens the others, creating exponential value across our ecosystem
            </p>
          </div>
          
          {/* Dynamic Impact Flow Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-lime-400 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-600 rounded-xl flex items-center justify-center">
                  <Tractor className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-lime-400 mb-2">1 → 20 → 100</div>
                <p className="text-sm text-blue-100">Talent trained → Farms supported → Families empowered</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-lime-400 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-600 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-lime-400 mb-2">1 → 50 → 500</div>
                <p className="text-sm text-blue-100">AI solution → Smart buildings → Lives enhanced</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-600 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-6 h-6 text-lime-400 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold text-lime-400 mb-2">1 → 100 → 1K</div>
                <p className="text-sm text-blue-100">Housing project → Jobs created → Dreams realized</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationPyramid;
