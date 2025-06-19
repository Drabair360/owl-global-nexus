
import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const VisionStatement = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
      <div>
        <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Our Vision Statement</h3>
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed font-body">
            We're not just building companies—we're architecting Africa's digital infrastructure for the next century. 
            With AKOULA's AI achieving <span className="font-semibold text-blue-600">99.8% accuracy rates</span> and 
            our platforms already reaching <span className="font-semibold text-emerald-600">54 African countries</span>, 
            we're positioned to exceed every projection.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-body">
            By 2027, we'll hit our <span className="font-semibold text-amber-600">€1B portfolio milestone</span>. 
            By 2030, we'll surpass <span className="font-semibold text-blue-600">€5B in total portfolio value</span>, 
            having created over <span className="font-semibold text-emerald-600">500,000 direct jobs</span> and 
            transformed how a billion people work, trade, and thrive across Africa.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border-l-4 border-blue-500">
            <p className="text-slate-700 italic font-body text-lg">
              "We're not predicting Africa's future—we're building it. Every platform, every algorithm, 
              every partnership is designed to create unstoppable momentum toward continental prosperity."
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Our Partnership Philosophy</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-semibold text-slate-800 mb-2 font-body text-lg">Strategic Intelligence</h4>
              <p className="text-slate-600 font-body">
                We provide AI-powered market intelligence, strategic guidance, and operational excellence 
                that goes far beyond traditional capital investment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-semibold text-slate-800 mb-2 font-body text-lg">Local Leadership Excellence</h4>
              <p className="text-slate-600 font-body">
                We empower African talent and build solutions that understand local contexts while 
                creating global impact and sustainable competitive advantages.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="group-hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-semibold text-slate-800 mb-2 font-body text-lg">Exponential Impact</h4>
              <p className="text-slate-600 font-body">
                Every investment multiplies through our integrated ecosystem, creating cascading value 
                that transforms entire communities and industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionStatement;
