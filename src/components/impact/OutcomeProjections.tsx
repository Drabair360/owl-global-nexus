
import React from 'react';
import { Target, Users, DollarSign, Zap, Leaf, Globe } from 'lucide-react';

const OutcomeProjections = () => {
  const outcomes = [
    {
      icon: Users,
      title: "Lives Directly Impacted",
      value: "500M+",
      description: "People across Africa benefiting from our integrated platforms",
      color: "from-blue-500 to-blue-700",
      progress: 85
    },
    {
      icon: DollarSign,
      title: "Economic Value Generated",
      value: "€50B+",
      description: "Total economic impact across all sectors and regions",
      color: "from-green-500 to-green-700",
      progress: 78
    },
    {
      icon: Target,
      title: "Direct Jobs Created",
      value: "10M+",
      description: "Employment opportunities across our ecosystem",
      color: "from-purple-500 to-purple-700",
      progress: 92
    },
    {
      icon: Zap,
      title: "Digital Transactions",
      value: "1B+",
      description: "Financial inclusion through our platforms",
      color: "from-amber-500 to-amber-700",
      progress: 88
    },
    {
      icon: Leaf,
      title: "CO₂ Emissions Reduced",
      value: "100M+ tons",
      description: "Environmental impact through sustainable practices",
      color: "from-emerald-500 to-emerald-700",
      progress: 76
    },
    {
      icon: Globe,
      title: "Countries Covered",
      value: "54/54",
      description: "Complete African market presence by 2030",
      color: "from-cyan-500 to-cyan-700",
      progress: 94
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-body">Concrete Outcomes by 2030</h3>
        <p className="text-slate-600 font-body max-w-3xl mx-auto">
          Measurable impact projections based on current growth trajectories and sustainable development targets
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {outcomes.map((outcome, index) => {
          const Icon = outcome.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${outcome.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
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
                    className={`bg-gradient-to-r ${outcome.color} h-2 rounded-full transition-all duration-1000 ease-out`}
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
