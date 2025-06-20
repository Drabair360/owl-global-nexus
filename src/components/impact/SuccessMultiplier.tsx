import React from 'react';
import { ArrowRight, Target, Users, Zap } from 'lucide-react';

const SuccessMultiplier = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-12 backdrop-blur-sm shadow-lg">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-body hover:text-shadow-sm transition-all duration-300">Success Multiplier Philosophy</h3>
        <p className="text-slate-600 font-body max-w-3xl mx-auto text-lg">
          Individual customer success equals company success. Our bottom-up approach ensures 
          that every individual we serve becomes a multiplier of prosperity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="text-center group">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Individual Empowerment</h4>
          <p className="text-slate-600 font-body leading-relaxed">
            Every farmer, entrepreneur, creative, and urban dweller we serve becomes 
            economically empowered and digitally literate.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className="w-8 h-8 text-slate-400 transform rotate-90 lg:rotate-0" />
        </div>

        <div className="text-center group">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Ecosystem Growth</h4>
          <p className="text-slate-600 font-body leading-relaxed">
            Empowered individuals create thriving communities, driving sustainable 
            economic growth and innovation across the continent.
          </p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 shadow-sm">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-purple-600" />
            <span className="font-semibold text-purple-800">360° Sustainability Approach</span>
          </div>
          <p className="text-lg text-slate-700 font-body leading-relaxed max-w-4xl mx-auto">
            We measure success across <span className="font-semibold text-purple-600">social impact</span>, 
            <span className="font-semibold text-blue-600"> economic empowerment</span>, and 
            <span className="font-semibold text-green-600"> environmental stewardship</span>. 
            This holistic approach ensures that our growth is not just profitable, but genuinely transformative 
            for the hundreds of millions of people we serve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMultiplier;
