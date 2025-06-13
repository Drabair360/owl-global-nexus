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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-heading">
              Transforming
              <span className="gradient-text-institutional block mt-2">
                Africa
              </span>
              <span className="block mt-2">Through Innovation</span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-4xl mx-auto font-body">
              OWL International bridges continents through strategic investments, cutting-edge technology, 
              and transformative industrial solutions that create lasting prosperity for communities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <Globe className="w-12 h-12 text-amber-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-brand font-semibold text-white mb-2 tracking-wide">GLOBAL REACH</h3>
                <p className="text-blue-100 font-body">Operating across Africa and Europe with strategic partnerships worldwide</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <TrendingUp className="w-12 h-12 text-amber-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-brand font-semibold text-white mb-2 tracking-wide">INNOVATION-DRIVEN</h3>
                <p className="text-blue-100 font-body">Pioneering AI-powered platforms and industrial solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <Users className="w-12 h-12 text-amber-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-brand font-semibold text-white mb-2 tracking-wide">COMMUNITY IMPACT</h3>
                <p className="text-blue-100 font-body">Creating sustainable opportunities and transforming lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Investment Portfolio Section - Redesigned */}
      <section className="relative py-32 bg-gradient-to-br from-slate-200 via-zinc-300 to-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),rgba(148,163,184,0.3)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(203,213,225,0.1)_25%,transparent_25%,transparent_75%,rgba(203,213,225,0.1)_75%)] bg-[length:20px_20px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            {/* Agro-Industrial Solutions */}
            <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200/40 shadow-lg hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)] transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200 to-green-300 rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-teal-200 to-emerald-300 rounded-tr-3xl opacity-15"></div>
              <Factory className="w-12 h-12 text-emerald-700 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="text-xl font-['Montserrat'] font-bold text-emerald-800 mb-4 leading-tight">Agro-Industrial Solutions</h3>
              <p className="text-emerald-700 text-sm font-body leading-relaxed mb-4">Complete agro-industrial transformation from farm to market, integrating smart technology with traditional farming wisdom for sustainable food security.</p>
              <div className="flex items-center text-xs text-emerald-600 font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Smart farming ecosystems
              </div>
            </div>

            {/* Turnkey Projects */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200/40 shadow-lg hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-200 to-blue-300 rounded-tr-3xl opacity-15"></div>
              <Building2 className="w-12 h-12 text-blue-700 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="text-xl font-['Montserrat'] font-bold text-blue-800 mb-4 leading-tight">Turnkey Projects</h3>
              <p className="text-blue-700 text-sm font-body leading-relaxed mb-4">End-to-end project delivery combining indus-tech innovations, BIM integration, and industrial automation for maximum cost optimization, efficiency and impact.</p>
              <div className="flex items-center text-xs text-blue-600 font-medium">
                <Wrench className="w-4 h-4 mr-2" />
                Complete project lifecycle
              </div>
            </div>

            {/* Digital Innovation */}
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200/40 shadow-lg hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)] transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-300 rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-200 to-amber-300 rounded-tr-3xl opacity-15"></div>
              <Cpu className="w-12 h-12 text-amber-700 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="text-xl font-['Montserrat'] font-bold text-amber-800 mb-4 leading-tight">Digital Innovation</h3>
              <p className="text-amber-700 text-sm font-body leading-relaxed mb-4">Cutting-edge AI trained platforms and digital solutions that revolutionize how African & European businesses connect, operate, and scale globally.</p>
              <div className="flex items-center text-xs text-amber-600 font-medium">
                <Target className="w-4 h-4 mr-2" />
                AI-powered transformation
              </div>
            </div>

            {/* Integrated Industrial Marketplace */}
            <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 rounded-2xl p-8 border-2 border-purple-200/40 shadow-lg hover:shadow-[0_20px_60px_rgba(147,51,234,0.25)] transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200 to-violet-300 rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-fuchsia-200 to-purple-300 rounded-tr-3xl opacity-15"></div>
              <Network className="w-12 h-12 text-purple-700 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="text-xl font-['Montserrat'] font-bold text-purple-800 mb-4 leading-tight">Integrated Industrial Marketplace</h3>
              <p className="text-purple-700 text-sm font-body leading-relaxed mb-4">Comprehensive B2B platform connecting manufacturers, suppliers, and service providers across Africa's industrial value chain.</p>
              <div className="flex items-center text-xs text-purple-600 font-medium">
                <Globe className="w-4 h-4 mr-2" />
                Pan-African network
              </div>
            </div>

            {/* Future of Talent Discovery */}
            <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-2xl p-8 border-2 border-rose-200/40 shadow-lg hover:shadow-[0_20px_60px_rgba(244,63,94,0.25)] transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-200 to-pink-300 rounded-bl-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-red-200 to-rose-300 rounded-tr-3xl opacity-15"></div>
              <Users className="w-12 h-12 text-rose-700 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="text-xl font-['Montserrat'] font-bold text-rose-800 mb-4 leading-tight">Future of Talent Discovery</h3>
              <p className="text-rose-700 text-sm font-body leading-relaxed mb-4">AI-driven talent platforms connecting the world's creative and technical professionals with global skills and talents matching opportunities and advancement.</p>
              <div className="flex items-center text-xs text-rose-600 font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Global talent pipeline
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-['Montserrat'] font-bold bg-gradient-to-r from-slate-700 via-zinc-600 to-stone-700 bg-clip-text text-transparent mb-6">Flagship Ventures</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-body leading-relaxed">Discover our portfolio of innovative companies transforming the industrial landscape through technology, investment, and strategic partnerships.</p>
          </div>
        </div>
      </section>
    </>;
};
export default Hero;