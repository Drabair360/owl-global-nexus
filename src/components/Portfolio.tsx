
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Globe, Zap, Leaf, Building, Users, Cpu, Network, Target, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-slate-900 mb-6">
            Flagship Ventures
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
            Our portfolio companies are pioneering the future of technology, agriculture, real estate, and talent development across Africa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* AKOULA - Electric Blue High Tech */}
          <div className="group bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-indigo-600/10 backdrop-blur-xl rounded-3xl p-8 border border-cyan-300/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)] hover:shadow-[0_20px_60px_rgba(6,182,212,0.25)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Animated circuit pattern background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border border-cyan-400 rounded-lg animate-pulse"></div>
              <div className="absolute top-8 right-8 w-8 h-8 border border-blue-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-12 w-12 h-12 border border-indigo-500 rounded-lg animate-pulse delay-300"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-indigo-500/25 rounded-tr-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Cpu className="w-12 h-12 text-cyan-500 mr-4 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-cyan-800" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>AKOULA</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Revolutionary AI-powered industrial platform connecting African manufacturers with global markets through intelligent automation and predictive analytics.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">AI Analytics</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">IoT Integration</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Smart Manufacturing</span>
              </div>
              
              <div className="flex items-center text-cyan-600 font-medium group-hover:text-cyan-500 transition-colors">
                <Network className="w-5 h-5 mr-2" />
                <span>Industrial Intelligence Platform</span>
              </div>
            </div>
          </div>

          {/* CAOAGRO.COM - Electric Green Agro Industrial */}
          <div className="group bg-gradient-to-br from-lime-400/10 via-green-500/10 to-emerald-600/10 backdrop-blur-xl rounded-3xl p-8 border border-lime-300/30 shadow-[0_8px_32px_rgba(34,197,94,0.15)] hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Animated plant growth pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 left-6 w-12 h-12 border-2 border-lime-400 rounded-full animate-ping"></div>
              <div className="absolute top-12 right-10 w-6 h-6 bg-green-400 rounded-full animate-bounce delay-150"></div>
              <div className="absolute bottom-8 left-16 w-8 h-8 border border-emerald-500 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lime-400/20 to-green-500/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/20 to-emerald-500/25 rounded-tr-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Leaf className="w-12 h-12 text-lime-500 mr-4 transition-all duration-500 group-hover:scale-110 group-hover:text-lime-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-green-800" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>CAOAGRO.COM</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Next-generation agro-industrial marketplace leveraging precision farming, supply chain optimization, and sustainable agricultural practices.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-medium">Smart Farming</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Supply Chain</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Sustainability</span>
              </div>
              
              <div className="flex items-center text-green-600 font-medium group-hover:text-green-500 transition-colors">
                <Target className="w-5 h-5 mr-2" />
                <span>Precision Agriculture Platform</span>
              </div>
            </div>
          </div>

          {/* OWLOMA - Electric Yellow Real Estate Tech */}
          <div className="group bg-gradient-to-br from-yellow-400/10 via-amber-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-8 border border-yellow-300/30 shadow-[0_8px_32px_rgba(251,191,36,0.15)] hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Animated building/construction pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 w-8 h-16 border-l-2 border-t-2 border-yellow-400 animate-pulse"></div>
              <div className="absolute top-8 right-6 w-12 h-8 border-2 border-amber-500 animate-pulse delay-200"></div>
              <div className="absolute bottom-6 left-6 w-10 h-10 border border-orange-500 transform rotate-45 animate-spin" style={{animationDuration: '12s'}}></div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-500/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-400/20 to-orange-500/25 rounded-tr-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Building className="w-12 h-12 text-yellow-500 mr-4 transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-400 animate-pulse" />
                <h3 className="text-2xl font-bold text-amber-800" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>OWLOMA</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Cutting-edge real estate technology platform revolutionizing property development, investment analytics, and smart city infrastructure across Africa.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">PropTech</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Smart Cities</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Investment Analytics</span>
              </div>
              
              <div className="flex items-center text-amber-600 font-medium group-hover:text-amber-500 transition-colors">
                <Globe className="w-5 h-5 mr-2" />
                <span>Smart Real Estate Ecosystem</span>
              </div>
            </div>
          </div>

          {/* KIDZ LAB - Electric Light Blue & Pink Talent Tech */}
          <div className="group bg-gradient-to-br from-sky-300/10 via-pink-300/10 to-purple-400/10 backdrop-blur-xl rounded-3xl p-8 border border-sky-200/40 shadow-[0_8px_32px_rgba(14,165,233,0.15)] hover:shadow-[0_20px_60px_rgba(236,72,153,0.25)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
            {/* Animated connection/network pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 left-10 w-4 h-4 bg-sky-400 rounded-full animate-ping"></div>
              <div className="absolute top-12 right-12 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute bottom-10 left-8 w-5 h-5 bg-purple-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-16 left-20 w-0.5 h-8 bg-gradient-to-b from-sky-400 to-pink-400 animate-pulse"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-300/20 to-pink-400/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-300/20 to-purple-400/25 rounded-tr-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Users className="w-12 h-12 text-sky-500 mr-4 transition-all duration-500 group-hover:scale-110 group-hover:text-pink-500 animate-pulse" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>KIDZ LAB</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Innovative talent discovery and development platform using AI-powered matching algorithms to connect emerging talent with global opportunities.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">AI Matching</span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Talent Development</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Global Network</span>
              </div>
              
              <div className="flex items-center text-sky-600 font-medium group-hover:text-pink-600 transition-colors">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Next-Gen Talent Platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sophisticated hover-institutional" asChild>
            <a href="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              Explore Full Portfolio <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
