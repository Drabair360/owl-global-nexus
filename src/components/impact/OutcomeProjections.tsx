
import React from 'react';
import { Target, Users, DollarSign, BookOpen, Heart, Globe } from 'lucide-react';

const OutcomeProjections = () => {
  const outcomes = [
    {
      icon: Users,
      title: "Lives Positively Impacted",
      value: "2M+",
      description: "People across Africa benefiting from our integrated platforms",
      color: "from-blue-500 to-blue-700",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3),0_0_60px_rgba(59,130,246,0.1)]",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.4),0_0_80px_rgba(59,130,246,0.2)]",
      progress: 1
    },
    {
      icon: DollarSign,
      title: "Economic Value Facilitated",
      value: "€200M+",
      description: "Total economic impact across all sectors and regions",
      color: "from-green-500 to-green-700",
      glowColor: "shadow-[0_0_30px_rgba(34,197,94,0.3),0_0_60px_rgba(34,197,94,0.1)]",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.4),0_0_80px_rgba(34,197,94,0.2)]",
      progress: 15
    },
    {
      icon: BookOpen,
      title: "Skills Development Programs",
      value: "25K+",
      description: "Training initiatives and capacity building programs delivered",
      color: "from-purple-500 to-purple-700",
      glowColor: "shadow-[0_0_30px_rgba(147,51,234,0.3),0_0_60px_rgba(147,51,234,0.1)]",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(147,51,234,0.4),0_0_80px_rgba(147,51,234,0.2)]",
      progress: 22
    },
    {
      icon: Target,
      title: "Digital Inclusion Events",
      value: "10M+",
      description: "Digital transactions and literacy programs facilitated",
      color: "from-amber-500 to-amber-700",
      glowColor: "shadow-[0_0_30px_rgba(245,158,11,0.3),0_0_60px_rgba(245,158,11,0.1)]",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.4),0_0_80px_rgba(245,158,11,0.2)]",
      progress: 0
    },
    {
      icon: Heart,
      title: "Community Partnerships",
      value: "20+",
      description: "Local organizations and communities actively collaborating",
      color: "from-emerald-500 to-emerald-700",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3),0_0_60px_rgba(16,185,129,0.1)]",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.4),0_0_80px_rgba(16,185,129,0.2)]",
      progress: 10
    },
    {
      icon: Globe,
      title: "Market Presence",
      value: "15+",
      description: "African countries with active operations and partnerships",
      color: "from-cyan-500 to-cyan-700",
      glowColor: "shadow-[0_0_30px_rgba(6,182,212,0.3),0_0_60px_rgba(6,182,212,0.1)]",
      hoverGlow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.4),0_0_80px_rgba(6,182,212,0.2)]",
      progress: 67
    }
  ];

  return (
    <div className="mb-0">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-body hover:text-shadow-sm transition-all duration-300">Concrete Outcomes by 2030</h3>
        <p className="text-slate-600 font-body max-w-3xl mx-auto">
          Realistic impact projections based on current growth trajectories and sustainable development targets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          return (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 border border-slate-100 transition-all duration-500 group hover:-translate-y-3 ${outcome.glowColor} ${outcome.hoverGlow} animate-pulse-glow`}
              style={{
                animation: `pulse-glow-${index} 3s ease-in-out infinite`
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${outcome.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-slate-800 mb-1">{outcome.value}</div>
                  <h4 className="text-lg font-semibold text-slate-700 font-body">{outcome.title}</h4>
                </div>
              </div>
              
              <p className="text-slate-600 font-body text-sm mb-4 leading-relaxed">{outcome.description}</p>
              
              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Progress to 2030</span>
                  <span>{outcome.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${outcome.color} h-2 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${outcome.progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutcomeProjections;
