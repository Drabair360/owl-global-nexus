import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users, Cpu, Factory, Zap, Target, Wrench, Network, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="animate-sophisticated-fade">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-12 leading-tight font-heading">
              Transforming
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 via-amber-400 via-yellow-500 via-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent font-bold drop-shadow-2xl block mt-4">
                Africa
              </span>
              <span className="block mt-4">Through Innovation</span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-16 max-w-4xl mx-auto font-body">
              OWL International bridges continents through strategic investments, cutting-edge technology, 
              and transformative industrial solutions that create lasting prosperity for communities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sophisticated hover-institutional" asChild>
                <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
                  Explore Our Portfolio <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/80 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl transition-all duration-500 font-subtitle font-bold group relative overflow-hidden backdrop-blur-sm" asChild>
                <Link to="/investors" onClick={() => window.scrollTo(0, 0)}>
                  <span className="relative z-10 transition-all duration-500 text-black group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent">Investor Portal</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <Globe className="w-12 h-12 text-amber-400 mb-6 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-brand font-semibold text-white mb-4 tracking-wide">GLOBAL REACH</h3>
                <p className="text-blue-100 font-body">Operating across Africa and Europe with strategic partnerships worldwide</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <TrendingUp className="w-12 h-12 text-amber-400 mb-6 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-brand font-semibold text-white mb-4 tracking-wide">INNOVATION-DRIVEN</h3>
                <p className="text-blue-100 font-body">Pioneering AI-powered platforms and industrial solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <Users className="w-12 h-12 text-amber-400 mb-6 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-brand font-semibold text-white mb-4 tracking-wide">COMMUNITY IMPACT</h3>
                <p className="text-blue-100 font-body">Creating sustainable opportunities and transforming lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Investment Portfolio Section - Plain Background */}
      <section className="relative py-20 bg-[#f7f5f3]">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            {/* Agro-Industrial Solutions */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-emerald-100/60 shadow-[0_8px_32px_rgba(34,197,94,0.08)] hover:shadow-[0_20px_60px_rgba(34,197,94,0.15)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/10 to-emerald-500/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-emerald-300/10 to-emerald-400/15 rounded-tr-3xl"></div>
              <Factory className="w-14 h-14 text-emerald-500 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-600" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-4 leading-tight" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>Agro-Industrial Solutions</h3>
              <p className="text-slate-600 text-sm font-body leading-relaxed mb-4">Complete agro-industrial transformation from farm to market, integrating smart technology with traditional farming wisdom for sustainable food security across Africa.</p>
              <div className="flex items-center text-xs text-emerald-600 font-medium">
                <Zap className="w-4 h-4 mr-2 text-emerald-500" />
                Smart farming ecosystems
              </div>
            </div>

            {/* Turnkey Projects */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-blue-100/60 shadow-[0_8px_32px_rgba(59,130,246,0.08)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-blue-500/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-300/10 to-blue-400/15 rounded-tr-3xl"></div>
              <Building2 className="w-14 h-14 text-blue-500 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800 mb-4 leading-tight" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>Turnkey Projects</h3>
              <p className="text-slate-600 text-sm font-body leading-relaxed mb-4">End-to-end project delivery combining agro-tech innovations, AI integration, and industrial automation for maximum efficiency, cost optimization, and transformative impact.</p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <Wrench className="w-4 h-4 mr-2 text-blue-500" />
                Complete project lifecycle
              </div>
            </div>

            {/* Digital Innovation */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-amber-100/60 shadow-[0_8px_32px_rgba(251,191,36,0.08)] hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-amber-500/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-amber-300/10 to-amber-400/15 rounded-tr-3xl"></div>
              <Cpu className="w-14 h-14 text-amber-500 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-amber-600" />
              <h3 className="text-xl font-semibold text-amber-800 mb-4 leading-tight" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>Digital Innovation & Integration</h3>
              <p className="text-slate-600 text-sm font-body leading-relaxed mb-4">Cutting-edge AI-powered platforms and digital solutions that revolutionize how African & European businesses connect, operate, and scale in the global marketplace.</p>
              <div className="flex items-center text-xs text-amber-600 font-medium">
                <Target className="w-4 h-4 mr-2 text-amber-500" />
                AI-powered transformation
              </div>
            </div>

            {/* Integrated Industrial Marketplace */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-purple-100/60 shadow-[0_8px_32px_rgba(147,51,234,0.08)] hover:shadow-[0_20px_60px_rgba(147,51,234,0.15)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-purple-500/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-300/10 to-purple-400/15 rounded-tr-3xl"></div>
              <Network className="w-14 h-14 text-purple-500 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-800 mb-4 leading-tight" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>Integrated Industrial Marketplace</h3>
              <p className="text-slate-600 text-sm font-body leading-relaxed mb-4">Comprehensive B2B platform connecting manufacturers, suppliers, and service providers across Africa's industrial value chain with global opportunities.</p>
              <div className="flex items-center text-xs text-purple-600 font-medium">
                <Globe className="w-4 h-4 mr-2 text-purple-500" />
                Pan-African network
              </div>
            </div>

            {/* Future of Talent Discovery */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-rose-100/60 shadow-[0_8px_32px_rgba(244,63,94,0.08)] hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)] transition-all duration-500 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-rose-400/10 to-rose-500/20 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-rose-300/10 to-rose-400/15 rounded-tr-3xl"></div>
              <Users className="w-14 h-14 text-rose-500 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:text-rose-600" />
              <h3 className="text-xl font-semibold text-rose-800 mb-4 leading-tight" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>Future of Talent Discovery</h3>
              <p className="text-slate-600 text-sm font-body leading-relaxed mb-4">AI-driven talent platforms connecting the world's creative and technical professionals with global opportunities for skills matching and development.</p>
              <div className="flex items-center text-xs text-rose-600 font-medium">
                <TrendingUp className="w-4 h-4 mr-2 text-rose-500" />
                Global talent pipeline
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};

export default Hero;
