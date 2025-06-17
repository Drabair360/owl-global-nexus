
import React from 'react';
import { Target, TrendingUp, Users, Globe, Lightbulb, Shield } from 'lucide-react';

const VisionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23334155' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Vision Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-slate-800 mb-8 font-brand">OUR VISION</h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-8 font-body">
              To position Africa as the global leader in innovative solutions by 2030, 
              <span className="block mt-2 font-semibold text-slate-800">
                creating sustainable prosperity across the continent.
              </span>
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-12 font-body">Our Strategic Focus Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Financial Technology</h4>
                <p className="text-slate-600 leading-relaxed font-body">
                  Democratizing financial services across Africa through digital banking, 
                  mobile payments, and blockchain solutions that serve the unbanked.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Agricultural Innovation</h4>
                <p className="text-slate-600 leading-relaxed font-body">
                  Transforming agriculture through precision farming, IoT sensors, 
                  and supply chain optimization to feed Africa's growing population.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Renewable Energy</h4>
                <p className="text-slate-600 leading-relaxed font-body">
                  Accelerating Africa's energy transition with solar, wind, and storage 
                  solutions that power sustainable economic growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Our Vision Statement</h3>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-body">
                We envision an Africa where innovation drives prosperity, where technology 
                bridges opportunity gaps, and where sustainable solutions emerge from 
                local challenges to serve global markets.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-body">
                By 2030, we aim to have catalyzed the creation of 500,000 direct jobs 
                and impacted 50 million lives across the continent through our portfolio 
                companies and strategic partnerships.
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-amber-500">
                <p className="text-slate-700 italic font-body">
                  "Africa's time is now. We're not just building companies; 
                  we're architecting the infrastructure for the continent's next century of growth."
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Our Partnership Philosophy</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 font-body">Strategic Support</h4>
                  <p className="text-slate-600 font-body">
                    We provide more than capital – we offer strategic guidance, 
                    market access, and operational expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 font-body">Local Leadership</h4>
                  <p className="text-slate-600 font-body">
                    We believe in empowering local talent and building solutions 
                    that understand African contexts and challenges.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 font-body">Sustainable Impact</h4>
                  <p className="text-slate-600 font-body">
                    Every investment is evaluated for its potential to create 
                    lasting positive change in communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Targets */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-12 font-body">
            Our 2030 Impact Targets
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                $5B+
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Portfolio Value</div>
              <div className="text-slate-600 font-body">Aggregate value of our portfolio companies</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                500K+
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Jobs Created</div>
              <div className="text-slate-600 font-body">Direct employment opportunities across Africa</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                50M+
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Lives Impacted</div>
              <div className="text-slate-600 font-body">People positively affected by our solutions</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">
            Join Us in Shaping Africa's Future
          </h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-body">
            Whether you're an entrepreneur with a revolutionary idea, an investor seeking 
            meaningful returns, or a partner committed to sustainable development, 
            we invite you to be part of this transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
