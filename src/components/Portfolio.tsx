
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Globe, Zap, Leaf, Building, Users, Cpu, Network, Target, TrendingUp, Brain, BarChart3, Activity, Sparkles, Layers, Database, Shield } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Seamless Gradient Transition Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 via-slate-800/90 via-slate-700/85 via-slate-600/80 to-slate-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-indigo-900/20 via-purple-900/15 via-amber-900/10 to-transparent" />
      
      {/* Enhanced Atmospheric Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.10),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.08),transparent_50%)]" />
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" style={{animationDuration: '8s'}} />
      </div>
      
      {/* Premium SVG Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="premiumBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="30%" stopColor="#1d4ed8" />
            <stop offset="70%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
          <linearGradient id="premiumGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="30%" stopColor="#059669" />
            <stop offset="70%" stopColor="#047857" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
          <linearGradient id="premiumAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="30%" stopColor="#d97706" />
            <stop offset="70%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="premiumPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="30%" stopColor="#7c3aed" />
            <stop offset="70%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#5b21b6" />
          </linearGradient>
          <filter id="premiumGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="hologram" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="softGlow"/>
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="rgba(59,130,246,0.3)"/>
          </filter>
        </defs>
      </svg>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-600/20 rounded-2xl blur-2xl animate-pulse" />
            <h2 className="relative text-5xl md:text-6xl font-heading bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent mb-8 px-8 py-4">
              Flagship Ventures
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto font-body leading-relaxed">
            Our portfolio companies are pioneering the future of technology, agriculture, real estate, and talent development across Africa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* AKOULA - Premium AI Tech Product */}
          <div className="group relative transform transition-all duration-1000 hover:-translate-y-6 hover:scale-105">
            {/* Premium Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-indigo-400/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-1000 animate-pulse" style={{animationDuration: '4s'}} />
            
            {/* Main Product Card */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-indigo-950/95 backdrop-blur-2xl rounded-3xl p-10 border border-blue-400/30 shadow-[0_20px_80px_rgba(59,130,246,0.25)] hover:shadow-[0_30px_120px_rgba(59,130,246,0.4)] transition-all duration-1000 overflow-hidden">
              
              {/* Holographic Grid Background */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse" />
              </div>
              
              {/* Data Flow Visualization */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg width="256" height="256" viewBox="0 0 256 256" className="animate-pulse" style={{animationDuration: '6s'}}>
                  <path d="M20,100 Q80,60 140,80 Q200,40 240,70" stroke="url(#premiumBlue)" strokeWidth="3" fill="none" opacity="0.8" className="animate-pulse"/>
                  <path d="M20,120 Q80,80 140,100 Q200,60 240,90" stroke="url(#premiumBlue)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  <path d="M20,140 Q80,100 140,120 Q200,80 240,110" stroke="url(#premiumBlue)" strokeWidth="2" fill="none" opacity="0.4" className="animate-pulse" style={{animationDelay: '2s'}}/>
                  <circle cx="240" cy="70" r="4" fill="url(#premiumBlue)" className="animate-ping" />
                  <circle cx="140" cy="80" r="3" fill="url(#premiumBlue)" className="animate-ping" style={{animationDelay: '0.5s'}} />
                </svg>
              </div>
              
              {/* Premium Header */}
              <div className="flex items-center mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-blue-400/30 rounded-2xl blur-xl animate-pulse" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Cpu className="w-8 h-8 text-white filter drop-shadow-lg" filter="url(#premiumGlow)" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Avenir Next, sans-serif'}}>AKOULA</h3>
                  <div className="flex items-center text-blue-300">
                    <Brain className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">AI Industrial Intelligence</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-200 mb-8 font-body leading-relaxed text-lg">
                Revolutionary AI-powered industrial platform connecting African manufacturers with global markets through intelligent automation and predictive analytics.
              </p>
              
              {/* Premium Feature Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  AI Analytics
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-200 rounded-full text-sm font-medium border border-cyan-400/30 backdrop-blur-sm">
                  <Layers className="w-4 h-4 inline mr-2" />
                  IoT Integration
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-200 rounded-full text-sm font-medium border border-indigo-400/30 backdrop-blur-sm">
                  <Database className="w-4 h-4 inline mr-2" />
                  Smart Manufacturing
                </span>
              </div>
              
              {/* Real-time Activity Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-200 font-medium">
                  <Target className="w-5 h-5 mr-3" stroke="url(#premiumBlue)" />
                  <span>Industrial Intelligence Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-8 bg-blue-400 rounded animate-pulse" />
                  <div className="w-2 h-12 bg-cyan-400 rounded animate-pulse" style={{animationDelay: '0.2s'}} />
                  <div className="w-2 h-6 bg-indigo-400 rounded animate-pulse" style={{animationDelay: '0.4s'}} />
                  <div className="w-2 h-10 bg-blue-300 rounded animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* CAOAGRO.COM - Premium AgTech Product */}
          <div className="group relative transform transition-all duration-1000 hover:-translate-y-6 hover:scale-105">
            {/* Premium Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-emerald-400/20 via-green-400/15 to-teal-400/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-1000 animate-pulse" style={{animationDuration: '5s'}} />
            
            {/* Main Product Card */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-emerald-950/90 to-green-950/95 backdrop-blur-2xl rounded-3xl p-10 border border-emerald-400/30 shadow-[0_20px_80px_rgba(16,185,129,0.25)] hover:shadow-[0_30px_120px_rgba(16,185,129,0.4)] transition-all duration-1000 overflow-hidden">
              
              {/* Organic Growth Pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute top-8 left-12 w-8 h-8 bg-emerald-400 rounded-full animate-ping" style={{animationDuration: '4s'}} />
                <div className="absolute top-20 right-16 w-6 h-6 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}} />
                <div className="absolute bottom-16 left-20 w-10 h-10 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}} />
                <div className="absolute top-32 left-32 w-1 h-16 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
              </div>
              
              {/* Growth Analytics Visualization */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg width="256" height="256" viewBox="0 0 256 256" className="animate-pulse" style={{animationDuration: '7s'}}>
                  <path d="M40,200 Q80,160 120,170 Q160,140 200,150 Q220,130 240,140" stroke="url(#premiumGreen)" strokeWidth="4" fill="none" opacity="0.8"/>
                  <path d="M40,180 Q80,140 120,150 Q160,120 200,130 Q220,110 240,120" stroke="url(#premiumGreen)" strokeWidth="3" fill="none" opacity="0.6" style={{animationDelay: '1s'}}/>
                  <circle cx="120" cy="170" r="5" fill="url(#premiumGreen)" className="animate-ping" />
                  <circle cx="200" cy="150" r="4" fill="url(#premiumGreen)" className="animate-ping" style={{animationDelay: '0.7s'}} />
                </svg>
              </div>
              
              {/* Premium Header */}
              <div className="flex items-center mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-xl animate-pulse" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Leaf className="w-8 h-8 text-white filter drop-shadow-lg" filter="url(#premiumGlow)" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Avenir Next, sans-serif'}}>CAOAGRO.COM</h3>
                  <div className="flex items-center text-emerald-300">
                    <Zap className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Smart Agriculture Tech</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-200 mb-8 font-body leading-relaxed text-lg">
                Next-generation agro-industrial marketplace leveraging precision farming, supply chain optimization, and sustainable agricultural practices.
              </p>
              
              {/* Premium Feature Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-200 rounded-full text-sm font-medium border border-emerald-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Smart Farming
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-200 rounded-full text-sm font-medium border border-green-400/30 backdrop-blur-sm">
                  <Network className="w-4 h-4 inline mr-2" />
                  Supply Chain
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-teal-200 rounded-full text-sm font-medium border border-teal-400/30 backdrop-blur-sm">
                  <Shield className="w-4 h-4 inline mr-2" />
                  Sustainability
                </span>
              </div>
              
              {/* Growth Metrics Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-emerald-200 font-medium">
                  <TrendingUp className="w-5 h-5 mr-3" stroke="url(#premiumGreen)" />
                  <span>Precision Agriculture Platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-4 bg-emerald-400 rounded animate-pulse" />
                  <div className="w-3 h-8 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.3s'}} />
                  <div className="w-3 h-6 bg-teal-400 rounded animate-pulse" style={{animationDelay: '0.6s'}} />
                  <div className="w-3 h-10 bg-emerald-300 rounded animate-pulse" style={{animationDelay: '0.9s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* OWLOMA - Premium PropTech Product */}
          <div className="group relative transform transition-all duration-1000 hover:-translate-y-6 hover:scale-105">
            {/* Premium Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-amber-400/20 via-orange-400/15 to-red-400/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-1000 animate-pulse" style={{animationDuration: '6s'}} />
            
            {/* Main Product Card */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-amber-950/90 to-orange-950/95 backdrop-blur-2xl rounded-3xl p-10 border border-amber-400/30 shadow-[0_20px_80px_rgba(245,158,11,0.25)] hover:shadow-[0_30px_120px_rgba(245,158,11,0.4)] transition-all duration-1000 overflow-hidden">
              
              {/* Architectural Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute top-8 left-16 w-12 h-20 border-l-3 border-t-3 border-amber-400"></div>
                <div className="absolute top-16 right-12 w-16 h-12 border-2 border-orange-400 transform rotate-12"></div>
                <div className="absolute bottom-12 left-12 w-14 h-14 border-2 border-red-400 transform rotate-45"></div>
                <div className="absolute top-24 right-24 w-8 h-8 bg-amber-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              </div>
              
              {/* Market Analytics Visualization */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg width="256" height="256" viewBox="0 0 256 256">
                  <rect x="180" y="30" width="24" height="50" fill="url(#premiumAmber)" opacity="0.8" className="animate-pulse"/>
                  <rect x="160" y="50" width="18" height="70" fill="url(#premiumAmber)" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <rect x="200" y="40" width="20" height="60" fill="url(#premiumAmber)" opacity="0.7" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  <rect x="220" y="20" width="16" height="80" fill="url(#premiumAmber)" opacity="0.9" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                </svg>
              </div>
              
              {/* Premium Header */}
              <div className="flex items-center mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-amber-400/30 rounded-2xl blur-xl animate-pulse" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Building className="w-8 h-8 text-white filter drop-shadow-lg" filter="url(#premiumGlow)" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Avenir Next, sans-serif'}}>OWLOMA</h3>
                  <div className="flex items-center text-amber-300">
                    <Globe className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Strategic Real Estate</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-200 mb-8 font-body leading-relaxed text-lg">
                Cutting-edge real estate technology platform revolutionizing property development, investment analytics, and smart city infrastructure across Africa.
              </p>
              
              {/* Premium Feature Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-200 rounded-full text-sm font-medium border border-amber-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  PropTech
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 rounded-full text-sm font-medium border border-orange-400/30 backdrop-blur-sm">
                  <Building className="w-4 h-4 inline mr-2" />
                  Smart Cities
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-amber-500/20 text-red-200 rounded-full text-sm font-medium border border-red-400/30 backdrop-blur-sm">
                  <BarChart3 className="w-4 h-4 inline mr-2" />
                  Investment Analytics
                </span>
              </div>
              
              {/* Market Performance Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-amber-200 font-medium">
                  <Target className="w-5 h-5 mr-3" stroke="url(#premiumAmber)" />
                  <span>Smart Real Estate Ecosystem</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-amber-400 rounded-sm animate-pulse" />
                  <div className="w-4 h-6 bg-orange-400 rounded-sm animate-pulse" style={{animationDelay: '0.4s'}} />
                  <div className="w-4 h-3 bg-red-400 rounded-sm animate-pulse" style={{animationDelay: '0.8s'}} />
                  <div className="w-4 h-8 bg-amber-300 rounded-sm animate-pulse" style={{animationDelay: '1.2s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* KIDZ LAB - Premium Talent Tech Product */}
          <div className="group relative transform transition-all duration-1000 hover:-translate-y-6 hover:scale-105">
            {/* Premium Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-violet-400/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-1000 animate-pulse" style={{animationDuration: '7s'}} />
            
            {/* Main Product Card */}
            <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-950/90 to-pink-950/95 backdrop-blur-2xl rounded-3xl p-10 border border-purple-400/30 shadow-[0_20px_80px_rgba(147,51,234,0.25)] hover:shadow-[0_30px_120px_rgba(147,51,234,0.4)] transition-all duration-1000 overflow-hidden">
              
              {/* Neural Network Pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute top-12 left-16 w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="absolute top-20 right-20 w-6 h-6 bg-pink-400 rounded-full"></div>
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-violet-400 rounded-full"></div>
                <div className="absolute top-16 left-20 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-pink-400"></div>
                <div className="absolute top-20 left-24 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400"></div>
                <div className="absolute top-24 right-16 w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400"></div>
              </div>
              
              {/* Talent Network Visualization */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg width="256" height="256" viewBox="0 0 256 256">
                  <circle cx="200" cy="50" r="12" fill="url(#premiumPurple)" opacity="0.8" className="animate-pulse"/>
                  <circle cx="170" cy="80" r="10" fill="url(#premiumPurple)" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  <circle cx="210" cy="90" r="8" fill="url(#premiumPurple)" opacity="0.7" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  <circle cx="180" cy="120" r="6" fill="url(#premiumPurple)" opacity="0.5" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                  <path d="M200,50 Q185,65 170,80" stroke="url(#premiumPurple)" strokeWidth="2" fill="none" opacity="0.4"/>
                  <path d="M170,80 Q190,85 210,90" stroke="url(#premiumPurple)" strokeWidth="2" fill="none" opacity="0.4"/>
                  <path d="M210,90 Q195,105 180,120" stroke="url(#premiumPurple)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Premium Header */}
              <div className="flex items-center mb-8">
                <div className="relative mr-6">
                  <div className="absolute inset-0 bg-purple-400/30 rounded-2xl blur-xl animate-pulse" />
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Users className="w-8 h-8 text-white filter drop-shadow-lg" filter="url(#premiumGlow)" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 via-pink-200 to-violet-200 bg-clip-text text-transparent mb-2" style={{fontFamily: 'Avenir Next, sans-serif'}}>KIDZ LAB</h3>
                  <div className="flex items-center text-purple-300">
                    <Brain className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">AI-Powered Talent Discovery</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-200 mb-8 font-body leading-relaxed text-lg">
                Innovative talent discovery and development platform using AI-powered matching algorithms to connect emerging talent with global opportunities.
              </p>
              
              {/* Premium Feature Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-400/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  AI Matching
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-200 rounded-full text-sm font-medium border border-pink-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Talent Development
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200 rounded-full text-sm font-medium border border-violet-400/30 backdrop-blur-sm">
                  <Globe className="w-4 h-4 inline mr-2" />
                  Global Network
                </span>
              </div>
              
              {/* Network Activity Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-purple-200 font-medium">
                  <Network className="w-5 h-5 mr-3" stroke="url(#premiumPurple)" />
                  <span>Next-Gen Talent Platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                  <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
                  <div className="w-3 h-3 bg-purple-300 rounded-full animate-bounce" style={{animationDelay: '0.6s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl animate-pulse" />
            <Button size="lg" className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 hover:from-slate-700 hover:via-slate-600 hover:to-slate-800 text-white font-subtitle font-bold px-12 py-6 rounded-2xl transition-all duration-500 transform hover:scale-110 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] border border-slate-600/30" asChild>
              <a href="/portfolio" onClick={() => window.scrollTo(0, 0)}>
                Explore Full Portfolio <ArrowRight className="ml-3" size={24} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
