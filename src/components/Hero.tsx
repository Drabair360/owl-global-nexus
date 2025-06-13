import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users, Cpu, Factory, Zap, Target, Wrench, Network, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* SVG Gradient Definitions */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="25%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="75%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#facc15" />
            </linearGradient>
          </defs>
        </svg>

        {/* Sophisticated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="animate-sophisticated-fade">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-12 leading-tight font-heading">
              Transforming
              <span className="block mt-4">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="25%" stopColor="#f97316" />
                      <stop offset="50%" stopColor="#fbbf24" />
                      <stop offset="75%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#facc15" />
                    </linearGradient>
                  </defs>
                </svg>
                <span style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(45deg, #d97706, #f97316, #fbbf24, #eab308, #facc15)', WebkitBackgroundClip: 'text' }} className="font-bold drop-shadow-2xl">
                  Africa
                </span>
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
                <div className="w-12 h-12 mx-auto mb-6 relative">
                  <Globe className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" stroke="url(#iconGradient)" strokeWidth="2" />
                </div>
                <h3 className="text-xl font-brand font-semibold text-white mb-4 tracking-wide">GLOBAL REACH</h3>
                <p className="text-blue-100 font-body">Operating across Africa and Europe with strategic partnerships worldwide</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <div className="w-12 h-12 mx-auto mb-6 relative">
                  <TrendingUp className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" stroke="url(#iconGradient)" strokeWidth="2" />
                </div>
                <h3 className="text-xl font-brand font-semibold text-white mb-4 tracking-wide">INNOVATION-DRIVEN</h3>
                <p className="text-blue-100 font-body">Pioneering AI-powered platforms and industrial solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover-institutional hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)]">
                <div className="w-12 h-12 mx-auto mb-6 relative">
                  <Users className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" stroke="url(#iconGradient)" strokeWidth="2" />
                </div>
                <h3 className="text-xl font-brand font-semibold text-white mb-4 tracking-wide">COMMUNITY IMPACT</h3>
                <p className="text-blue-100 font-body">Creating sustainable opportunities and transforming lives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Investment Portfolio Section - Futuristic Financial Institution Design */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(34,197,94,0.05),transparent,rgba(147,51,234,0.05),transparent)]" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" />
        </div>

        {/* Enhanced SVG Gradients for Financial Look */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="financialGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="financialGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="financialGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="financialGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="financialGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            
            {/* Agro-Industrial Solutions - Enhanced Financial Design */}
            <div className="relative group transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/30 shadow-[0_8px_32px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)] transition-all duration-700 overflow-hidden">
                
                {/* Futuristic Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/10 via-cyan-400/5 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-300/8 to-transparent rounded-tr-3xl" />
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Enhanced Icon with Glow */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg animate-pulse" />
                  <Factory className="relative w-16 h-16 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12" 
                         stroke="url(#financialGradient1)" strokeWidth="1.5" filter="url(#glow)" />
                </div>
                
                <h3 className="text-xl font-semibold mb-6 leading-tight bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent" style={{
                fontFamily: 'Avenir Next, sans-serif'
              }}>
                  Agro-Industrial Solutions
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  Complete agro-industrial transformation from farm to market, integrating smart technology with traditional farming wisdom for sustainable food security across Africa.
                </p>
                
                <div className="flex items-center text-xs font-medium">
                  <div className="flex items-center text-emerald-300 bg-emerald-400/10 px-3 py-2 rounded-full border border-emerald-400/20">
                    <Zap className="w-4 h-4 mr-2" stroke="url(#financialGradient1)" />
                    Smart farming ecosystems
                  </div>
                </div>
                
                {/* Data Visualization Elements */}
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="flex space-x-1">
                    <div className="w-1 h-8 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0s'}} />
                    <div className="w-1 h-6 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.2s'}} />
                    <div className="w-1 h-10 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.4s'}} />
                    <div className="w-1 h-4 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.6s'}} />
                  </div>
                </div>
              </div>
            </div>

            {/* Turnkey Projects - Enhanced Financial Design */}
            <div className="relative group transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/30 shadow-[0_8px_32px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-700 overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/10 via-indigo-400/5 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/8 to-transparent rounded-tr-3xl" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-pulse" />
                  <Building2 className="relative w-16 h-16 transition-all duration-700 group-hover:scale-125 group-hover:-rotate-12" 
                           stroke="url(#financialGradient2)" strokeWidth="1.5" filter="url(#glow)" />
                </div>
                
                <h3 className="text-xl font-semibold mb-6 leading-tight bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent" style={{
                fontFamily: 'Avenir Next, sans-serif'
              }}>
                  Turnkey Projects
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  End-to-end project delivery combining agro-tech innovations, AI integration, and industrial automation for maximum efficiency, cost optimization, and transformative impact.
                </p>
                
                <div className="flex items-center text-xs font-medium">
                  <div className="flex items-center text-blue-300 bg-blue-400/10 px-3 py-2 rounded-full border border-blue-400/20">
                    <Wrench className="w-4 h-4 mr-2" stroke="url(#financialGradient2)" />
                    Complete project lifecycle
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="w-8 h-8 border-2 border-blue-400 rounded-full animate-spin" style={{borderTopColor: 'transparent'}} />
                </div>
              </div>
            </div>

            {/* Digital Innovation - Enhanced Financial Design */}
            <div className="relative group transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border border-amber-400/30 shadow-[0_8px_32px_rgba(245,158,11,0.15)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.25)] transition-all duration-700 overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 via-orange-400/5 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/8 to-transparent rounded-tr-3xl" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-lg animate-pulse" />
                  <Cpu className="relative w-16 h-16 transition-all duration-700 group-hover:scale-125 group-hover:rotate-180" 
                        stroke="url(#financialGradient3)" strokeWidth="1.5" filter="url(#glow)" />
                </div>
                
                <h3 className="text-xl font-semibold mb-6 leading-tight bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent" style={{
                fontFamily: 'Avenir Next, sans-serif'
              }}>
                  Digital Innovation & Integration
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  Cutting-edge AI-powered platforms and digital solutions that revolutionize how African & European businesses connect, operate, and scale in the global marketplace.
                </p>
                
                <div className="flex items-center text-xs font-medium">
                  <div className="flex items-center text-amber-300 bg-amber-400/10 px-3 py-2 rounded-full border border-amber-400/20">
                    <Target className="w-4 h-4 mr-2" stroke="url(#financialGradient3)" />
                    AI-powered transformation
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-2 h-2 bg-amber-400 rounded animate-ping" style={{animationDelay: '0s'}} />
                    <div className="w-2 h-2 bg-amber-400 rounded animate-ping" style={{animationDelay: '0.3s'}} />
                    <div className="w-2 h-2 bg-amber-400 rounded animate-ping" style={{animationDelay: '0.6s'}} />
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Industrial Marketplace - Enhanced Financial Design */}
            <div className="relative group transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-500/15 to-fuchsia-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/30 shadow-[0_8px_32px_rgba(147,51,234,0.15)] hover:shadow-[0_20px_60px_rgba(147,51,234,0.25)] transition-all duration-700 overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/10 via-violet-400/5 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-300/8 to-transparent rounded-tr-3xl" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-lg animate-pulse" />
                  <Network className="relative w-16 h-16 transition-all duration-700 group-hover:scale-125 group-hover:rotate-45" 
                          stroke="url(#financialGradient4)" strokeWidth="1.5" filter="url(#glow)" />
                </div>
                
                <h3 className="text-xl font-semibold mb-6 leading-tight bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent" style={{
                fontFamily: 'Avenir Next, sans-serif'
              }}>
                  Integrated Industrial Marketplace
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  Comprehensive B2B platform connecting manufacturers, suppliers, and service providers across Africa's industrial value chain with global opportunities.
                </p>
                
                <div className="flex items-center text-xs font-medium">
                  <div className="flex items-center text-purple-300 bg-purple-400/10 px-3 py-2 rounded-full border border-purple-400/20">
                    <Globe className="w-4 h-4 mr-2" stroke="url(#financialGradient4)" />
                    Pan-African network
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="relative">
                    <div className="w-8 h-8 border border-purple-400 rounded-full animate-ping" />
                    <div className="absolute inset-2 bg-purple-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Future of Talent Discovery - Enhanced Financial Design */}
            <div className="relative group transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-pink-500/15 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 border border-rose-400/30 shadow-[0_8px_32px_rgba(244,63,94,0.15)] hover:shadow-[0_20px_60px_rgba(244,63,94,0.25)] transition-all duration-700 overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-400/10 via-pink-400/5 to-transparent rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-300/8 to-transparent rounded-tr-3xl" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-400/0 via-rose-400/20 to-rose-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-lg animate-pulse" />
                  <Users className="relative w-16 h-16 transition-all duration-700 group-hover:scale-125 group-hover:-rotate-45" 
                         stroke="url(#financialGradient5)" strokeWidth="1.5" filter="url(#glow)" />
                </div>
                
                <h3 className="text-xl font-semibold mb-6 leading-tight bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent" style={{
                fontFamily: 'Avenir Next, sans-serif'
              }}>
                  Future of Talent Discovery
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500">
                  AI-driven talent platforms connecting the world's creative and technical professionals with global opportunities for skills matching and development.
                </p>
                
                <div className="flex items-center text-xs font-medium">
                  <div className="flex items-center text-rose-300 bg-rose-400/10 px-3 py-2 rounded-full border border-rose-400/20">
                    <TrendingUp className="w-4 h-4 mr-2" stroke="url(#financialGradient5)" />
                    Global talent pipeline
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>;
};

export default Hero;
