
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Globe, Zap, Leaf, Building, Users, Cpu, Network, Target, TrendingUp, Brain, BarChart3, Activity } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-100 to-white">
      {/* Enhanced gradient overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-50/60 to-white/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,146,60,0.06),transparent_60%)]" />
      
      {/* SVG Gradients for Financial Look */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="financialBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <linearGradient id="financialGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="financialAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="financialPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <filter id="institutionalGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading bg-gradient-to-r from-slate-800 via-blue-700 to-slate-900 bg-clip-text text-transparent mb-6">
            Flagship Ventures
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto font-body">
            Our portfolio companies are pioneering the future of technology, agriculture, real estate, and talent development across Africa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* AKOULA - Advanced Financial Tech Design */}
          <div className="group relative bg-gradient-to-br from-white via-blue-50/80 to-cyan-50/60 backdrop-blur-xl rounded-3xl border border-blue-200/40 shadow-[0_8px_32px_rgba(59,130,246,0.12)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.20)] transition-all duration-700 hover:-translate-y-3 overflow-hidden">
            {/* Futuristic Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>
            
            {/* Flowing Lines - Data Visualization */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg width="192" height="192" viewBox="0 0 192 192" className="animate-pulse">
                <path d="M20,100 Q60,60 100,80 T180,70" stroke="url(#financialBlue)" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M20,120 Q60,80 100,100 T180,90" stroke="url(#financialBlue)" strokeWidth="2" fill="none" opacity="0.4"/>
                <path d="M20,140 Q60,100 100,120 T180,110" stroke="url(#financialBlue)" strokeWidth="2" fill="none" opacity="0.2"/>
              </svg>
            </div>
            
            {/* Institutional Corner Element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 via-cyan-400/15 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-300/15 via-cyan-300/10 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-lg animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Cpu className="w-7 h-7 text-white filter drop-shadow-sm" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-cyan-700 bg-clip-text text-transparent" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>AKOULA</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Revolutionary AI-powered industrial platform connecting African manufacturers with global markets through intelligent automation and predictive analytics.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200/50">AI Analytics</span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full text-sm font-medium border border-cyan-200/50">IoT Integration</span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 rounded-full text-sm font-medium border border-blue-200/50">Smart Manufacturing</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-blue-700 font-medium group-hover:text-blue-600 transition-colors">
                  <Brain className="w-5 h-5 mr-2" stroke="url(#financialBlue)" />
                  <span>Industrial Intelligence Platform</span>
                </div>
                <div className="flex items-center space-x-2 opacity-40 group-hover:opacity-70 transition-opacity">
                  <BarChart3 className="w-4 h-4 text-blue-500 animate-pulse" />
                  <Activity className="w-4 h-4 text-cyan-500 animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>
          </div>

          {/* CAOAGRO.COM - Enhanced Green Agro Design */}
          <div className="group relative bg-gradient-to-br from-white via-emerald-50/80 to-green-50/60 backdrop-blur-xl rounded-3xl border border-emerald-200/40 shadow-[0_8px_32px_rgba(16,185,129,0.12)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.20)] transition-all duration-700 hover:-translate-y-3 overflow-hidden">
            {/* Growth Pattern Background */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute top-8 left-8 w-6 h-6 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="absolute top-16 right-12 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-150"></div>
              <div className="absolute bottom-12 left-16 w-5 h-5 bg-lime-400 rounded-full animate-pulse delay-300"></div>
            </div>
            
            {/* Organic Flow Lines */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg width="192" height="192" viewBox="0 0 192 192" className="animate-pulse" style={{animationDuration: '4s'}}>
                <path d="M40,160 Q80,120 120,140 Q160,100 180,120" stroke="url(#financialGreen)" strokeWidth="3" fill="none" opacity="0.6"/>
                <path d="M20,140 Q60,100 100,120 Q140,80 160,100" stroke="url(#financialGreen)" strokeWidth="2" fill="none" opacity="0.4"/>
              </svg>
            </div>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 via-green-400/15 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-green-300/15 via-emerald-300/10 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-xl blur-lg animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Leaf className="w-7 h-7 text-white filter drop-shadow-sm" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>CAOAGRO.COM</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Next-generation agro-industrial marketplace leveraging precision farming, supply chain optimization, and sustainable agricultural practices.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200/50">Smart Farming</span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-lime-100 text-green-800 rounded-full text-sm font-medium border border-green-200/50">Supply Chain</span>
                <span className="px-4 py-2 bg-gradient-to-r from-lime-100 to-emerald-100 text-lime-800 rounded-full text-sm font-medium border border-emerald-200/50">Sustainability</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-emerald-700 font-medium group-hover:text-emerald-600 transition-colors">
                  <Target className="w-5 h-5 mr-2" stroke="url(#financialGreen)" />
                  <span>Precision Agriculture Platform</span>
                </div>
                <div className="flex items-center space-x-2 opacity-40 group-hover:opacity-70 transition-opacity">
                  <div className="w-2 h-6 bg-emerald-400 rounded animate-pulse"></div>
                  <div className="w-2 h-8 bg-green-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-4 bg-lime-400 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* OWLOMA - Sophisticated Real Estate Design */}
          <div className="group relative bg-gradient-to-br from-white via-amber-50/80 to-orange-50/60 backdrop-blur-xl rounded-3xl border border-amber-200/40 shadow-[0_8px_32px_rgba(245,158,11,0.12)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.20)] transition-all duration-700 hover:-translate-y-3 overflow-hidden">
            {/* Architectural Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-6 left-10 w-8 h-16 border-l-2 border-t-2 border-amber-400"></div>
              <div className="absolute top-12 right-8 w-12 h-8 border-2 border-orange-400"></div>
              <div className="absolute bottom-8 left-8 w-10 h-10 border border-yellow-500 transform rotate-45"></div>
            </div>
            
            {/* Geometric Flow */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg width="192" height="192" viewBox="0 0 192 192">
                <rect x="140" y="20" width="20" height="40" fill="url(#financialAmber)" opacity="0.3" className="animate-pulse"/>
                <rect x="120" y="40" width="15" height="60" fill="url(#financialAmber)" opacity="0.2" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <rect x="160" y="30" width="12" height="50" fill="url(#financialAmber)" opacity="0.4" className="animate-pulse" style={{animationDelay: '1s'}}/>
              </svg>
            </div>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/20 via-orange-400/15 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-300/15 via-amber-300/10 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-xl blur-lg animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Building className="w-7 h-7 text-white filter drop-shadow-sm" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>OWLOMA</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Cutting-edge real estate technology platform revolutionizing property development, investment analytics, and smart city infrastructure across Africa.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200/50">PropTech</span>
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-sm font-medium border border-yellow-200/50">Smart Cities</span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-red-800 rounded-full text-sm font-medium border border-orange-200/50">Investment Analytics</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-amber-700 font-medium group-hover:text-amber-600 transition-colors">
                  <Globe className="w-5 h-5 mr-2" stroke="url(#financialAmber)" />
                  <span>Smart Real Estate Ecosystem</span>
                </div>
                <div className="flex items-center space-x-1 opacity-40 group-hover:opacity-70 transition-opacity">
                  <div className="w-3 h-3 bg-amber-400 rounded-sm animate-pulse"></div>
                  <div className="w-3 h-4 bg-orange-400 rounded-sm animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-3 h-2 bg-yellow-400 rounded-sm animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* KIDZ LAB - Human-Centered Creative Design */}
          <div className="group relative bg-gradient-to-br from-white via-purple-50/80 to-pink-50/60 backdrop-blur-xl rounded-3xl border border-purple-200/40 shadow-[0_8px_32px_rgba(147,51,234,0.12)] hover:shadow-[0_20px_60px_rgba(147,51,234,0.20)] transition-all duration-700 hover:-translate-y-3 overflow-hidden">
            {/* Connection Network Pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="absolute top-8 left-12 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="absolute top-14 right-16 w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="absolute bottom-12 left-10 w-2 h-2 bg-violet-400 rounded-full"></div>
              <div className="absolute top-12 left-16 w-0.5 h-8 bg-gradient-to-b from-purple-400 to-pink-400"></div>
              <div className="absolute top-16 left-20 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"></div>
            </div>
            
            {/* Creative Flow Visualization */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
              <svg width="192" height="192" viewBox="0 0 192 192">
                <circle cx="160" cy="40" r="8" fill="url(#financialPurple)" opacity="0.6" className="animate-pulse"/>
                <circle cx="140" cy="60" r="6" fill="url(#financialPurple)" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <circle cx="170" cy="70" r="4" fill="url(#financialPurple)" opacity="0.3" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <path d="M160,40 Q150,50 140,60" stroke="url(#financialPurple)" strokeWidth="1" fill="none" opacity="0.2"/>
                <path d="M140,60 Q155,65 170,70" stroke="url(#financialPurple)" strokeWidth="1" fill="none" opacity="0.2"/>
              </svg>
            </div>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-300/15 via-purple-300/10 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative z-10 p-8">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400/20 rounded-xl blur-lg animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <Users className="w-7 h-7 text-white filter drop-shadow-sm" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-transparent" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>KIDZ LAB</h3>
              </div>
              
              <p className="text-slate-700 mb-6 font-body leading-relaxed">
                Innovative talent discovery and development platform using AI-powered matching algorithms to connect emerging talent with global opportunities.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200/50">AI Matching</span>
                <span className="px-4 py-2 bg-gradient-to-r from-violet-100 to-pink-100 text-violet-800 rounded-full text-sm font-medium border border-violet-200/50">Talent Development</span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 rounded-full text-sm font-medium border border-pink-200/50">Global Network</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-purple-700 font-medium group-hover:text-purple-600 transition-colors">
                  <TrendingUp className="w-5 h-5 mr-2" stroke="url(#financialPurple)" />
                  <span>Next-Gen Talent Platform</span>
                </div>
                <div className="flex items-center space-x-2 opacity-40 group-hover:opacity-70 transition-opacity">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
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
