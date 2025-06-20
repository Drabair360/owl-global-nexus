
import React from 'react';
import { TrendingUp, Users, Building, Zap } from 'lucide-react';

const GlobalContext = () => {
  const contextData = [
    {
      icon: Users,
      title: "Africa's Population Growth",
      value: "2.5B by 2050",
      description: "Creating unprecedented opportunities and challenges",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: TrendingUp,
      title: "Youth Demographics", 
      value: "60% under 25",
      description: "The largest young population globally needs empowerment",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Building,
      title: "Urbanization Rate",
      value: "4.5% annually",
      description: "Rapid urban growth demands smart infrastructure solutions",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      value: "300M+ unconnected",
      description: "Massive digital divide presents our greatest opportunity",
      color: "from-amber-500 to-amber-700"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4 font-body">African Context & Opportunity Scale</h3>
        <p className="text-blue-100 font-body max-w-3xl mx-auto">
          Understanding the continental landscape drives our bottom-up sustainability approach
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contextData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {item.value}
              </div>
              <h4 className="text-lg font-semibold mb-3 font-body">{item.title}</h4>
              <p className="text-blue-100 text-sm font-body leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalContext;
