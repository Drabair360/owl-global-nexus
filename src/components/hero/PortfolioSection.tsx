
import React from 'react';
import { Factory, Building2, Cpu, Network, Users, Zap, Wrench, Target, Globe, TrendingUp } from 'lucide-react';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = () => {
  return (
    <section className="relative py-32 pb-16 overflow-hidden">
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
        {/* Strategic Investment Sectors Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
            Strategic
            <span className="block mt-4">
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id="sectorsTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97706" />
                    <stop offset="25%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#fbbf24" />
                    <stop offset="75%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#facc15" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(45deg, #d97706, #f97316, #fbbf24, #eab308, #facc15)', WebkitBackgroundClip: 'text' }} className="font-bold drop-shadow-2xl">
                Investment
              </span>
            </span>
            <span className="block mt-4">Sectors</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
          
          <PortfolioCard
            icon={Factory}
            title="Agro-Industrial Solutions"
            description="Complete agro-industrial transformation from farm to market, integrating smart technology with traditional farming wisdom for sustainable food security across Africa."
            gradientId="financialGradient1"
            colorScheme="emerald"
            tagIcon={Zap}
            tagText="Smart farming ecosystems"
            animationComponent={
              <div className="flex space-x-1">
                <div className="w-1 h-8 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0s'}} />
                <div className="w-1 h-6 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.2s'}} />
                <div className="w-1 h-10 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.4s'}} />
                <div className="w-1 h-4 bg-emerald-400 rounded animate-pulse" style={{animationDelay: '0.6s'}} />
              </div>
            }
          />

          <PortfolioCard
            icon={Building2}
            title="Turnkey Projects"
            description="End-to-end project delivery combining agro-tech innovations, AI integration, and industrial automation for maximum efficiency, cost optimization, and transformative impact."
            gradientId="financialGradient2"
            colorScheme="blue"
            tagIcon={Wrench}
            tagText="Complete project lifecycle"
            animationComponent={
              <div className="w-8 h-8 border-2 border-blue-400 rounded-full animate-spin" style={{borderTopColor: 'transparent'}} />
            }
          />

          <PortfolioCard
            icon={Cpu}
            title="Digital Innovation & Integration"
            description="Cutting-edge AI-powered platforms and digital solutions that revolutionize how African & European businesses connect, operate, and scale in the global marketplace."
            gradientId="financialGradient3"
            colorScheme="amber"
            tagIcon={Target}
            tagText="AI-powered transformation"
            animationComponent={
              <div className="grid grid-cols-3 gap-1">
                <div className="w-2 h-2 bg-amber-400 rounded animate-ping" style={{animationDelay: '0s'}} />
                <div className="w-2 h-2 bg-amber-400 rounded animate-ping" style={{animationDelay: '0.3s'}} />
                <div className="w-2 h-2 bg-amber-400 rounded animate-ping" style={{animationDelay: '0.6s'}} />
              </div>
            }
          />

          <PortfolioCard
            icon={Network}
            title="Integrated Industrial Marketplace"
            description="Comprehensive B2B platform connecting manufacturers, suppliers, and service providers across Africa's industrial value chain with global opportunities."
            gradientId="financialGradient4"
            colorScheme="purple"
            tagIcon={Globe}
            tagText="Pan-African network"
            animationComponent={
              <div className="relative">
                <div className="w-8 h-8 border border-purple-400 rounded-full animate-ping" />
                <div className="absolute inset-2 bg-purple-400 rounded-full animate-pulse" />
              </div>
            }
          />

          <PortfolioCard
            icon={Users}
            title="Future of Talent Discovery"
            description="AI-driven talent platforms connecting the world's creative and technical professionals with global opportunities for skills matching and development."
            gradientId="financialGradient5"
            colorScheme="rose"
            tagIcon={TrendingUp}
            tagText="Global talent pipeline"
            animationComponent={
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
