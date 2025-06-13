
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Users, Cpu, Target, Globe } from 'lucide-react';
import BackgroundEffects from './portfolio/BackgroundEffects';
import SVGGradients from './portfolio/SVGGradients';
import FlagshipHeader from './portfolio/FlagshipHeader';
import FlagshipVentureCard from './portfolio/FlagshipVentureCard';

const Portfolio = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundEffects />
      <SVGGradients />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FlagshipHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          <FlagshipVentureCard
            title="AKOULA"
            subtitle="AI Industrial Intelligence"
            description="Revolutionary AI-powered industrial platform connecting African manufacturers with global markets through intelligent automation and predictive analytics."
            icon={Cpu}
            iconBg="bg-blue-400/30"
            gradientFrom="from-slate-900/95"
            gradientTo="to-indigo-950/95"
            glowColor="from-blue-400/20 via-cyan-400/15 to-indigo-400/20"
            features={["AI Analytics", "IoT Integration", "Smart Manufacturing"]}
            primaryColor="blue"
            secondaryColor="cyan"
            tertiaryColor="indigo"
            borderColor="border-blue-400/30"
            shadowColor="shadow-[0_20px_80px_rgba(59,130,246,0.25)]"
            animationComponent={
              <svg width="256" height="256" viewBox="0 0 256 256" className="animate-pulse" style={{animationDuration: '6s'}}>
                <path d="M20,100 Q80,60 140,80 Q200,40 240,70" stroke="url(#premiumBlue)" strokeWidth="3" fill="none" opacity="0.8" className="animate-pulse"/>
                <path d="M20,120 Q80,80 140,100 Q200,60 240,90" stroke="url(#premiumBlue)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <path d="M20,140 Q80,100 140,120 Q200,80 240,110" stroke="url(#premiumBlue)" strokeWidth="2" fill="none" opacity="0.4" className="animate-pulse" style={{animationDelay: '2s'}}/>
                <circle cx="240" cy="70" r="4" fill="url(#premiumBlue)" className="animate-ping" />
                <circle cx="140" cy="80" r="3" fill="url(#premiumBlue)" className="animate-ping" style={{animationDelay: '0.5s'}} />
              </svg>
            }
          />

          <FlagshipVentureCard
            title="CAOAGRO.COM"
            subtitle="Smart Agriculture Tech"
            description="Next-generation agro-industrial marketplace leveraging precision farming, supply chain optimization, and sustainable agricultural practices."
            icon={Leaf}
            iconBg="bg-emerald-400/30"
            gradientFrom="from-slate-900/95"
            gradientTo="to-green-950/95"
            glowColor="from-emerald-400/20 via-green-400/15 to-teal-400/20"
            features={["Smart Farming", "Supply Chain", "Sustainability"]}
            primaryColor="emerald"
            secondaryColor="green"
            tertiaryColor="teal"
            borderColor="border-emerald-400/30"
            shadowColor="shadow-[0_20px_80px_rgba(16,185,129,0.25)]"
            animationComponent={
              <svg width="256" height="256" viewBox="0 0 256 256" className="animate-pulse" style={{animationDuration: '7s'}}>
                <path d="M40,200 Q80,160 120,170 Q160,140 200,150 Q220,130 240,140" stroke="url(#premiumGreen)" strokeWidth="4" fill="none" opacity="0.8"/>
                <path d="M40,180 Q80,140 120,150 Q160,120 200,130 Q220,110 240,120" stroke="url(#premiumGreen)" strokeWidth="3" fill="none" opacity="0.6" style={{animationDelay: '1s'}}/>
                <circle cx="120" cy="170" r="5" fill="url(#premiumGreen)" className="animate-ping" />
                <circle cx="200" cy="150" r="4" fill="url(#premiumGreen)" className="animate-ping" style={{animationDelay: '0.7s'}} />
              </svg>
            }
          />

          <FlagshipVentureCard
            title="OWLOMA"
            subtitle="Strategic Real Estate"
            description="Cutting-edge real estate technology platform revolutionizing property development, investment analytics, and smart city infrastructure across Africa."
            icon={Building}
            iconBg="bg-amber-400/30"
            gradientFrom="from-slate-900/95"
            gradientTo="to-orange-950/95"
            glowColor="from-amber-400/20 via-orange-400/15 to-red-400/20"
            features={["PropTech", "Smart Cities", "Investment Analytics"]}
            primaryColor="amber"
            secondaryColor="orange"
            tertiaryColor="red"
            borderColor="border-amber-400/30"
            shadowColor="shadow-[0_20px_80px_rgba(245,158,11,0.25)]"
            animationComponent={
              <svg width="256" height="256" viewBox="0 0 256 256">
                <rect x="180" y="30" width="24" height="50" fill="url(#premiumAmber)" opacity="0.8" className="animate-pulse"/>
                <rect x="160" y="50" width="18" height="70" fill="url(#premiumAmber)" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <rect x="200" y="40" width="20" height="60" fill="url(#premiumAmber)" opacity="0.7" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <rect x="220" y="20" width="16" height="80" fill="url(#premiumAmber)" opacity="0.9" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
              </svg>
            }
          />

          <FlagshipVentureCard
            title="KIDZ LAB"
            subtitle="AI-Powered Talent Discovery"
            description="Innovative talent discovery and development platform using AI-powered matching algorithms to connect emerging talent with global opportunities."
            icon={Users}
            iconBg="bg-purple-400/30"
            gradientFrom="from-slate-900/95"
            gradientTo="to-pink-950/95"
            glowColor="from-purple-400/20 via-pink-400/15 to-violet-400/20"
            features={["AI Matching", "Talent Development", "Global Network"]}
            primaryColor="purple"
            secondaryColor="pink"
            tertiaryColor="violet"
            borderColor="border-purple-400/30"
            shadowColor="shadow-[0_20px_80px_rgba(147,51,234,0.25)]"
            animationComponent={
              <svg width="256" height="256" viewBox="0 0 256 256">
                <circle cx="200" cy="50" r="12" fill="url(#premiumPurple)" opacity="0.8" className="animate-pulse"/>
                <circle cx="170" cy="80" r="10" fill="url(#premiumPurple)" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                <circle cx="210" cy="90" r="8" fill="url(#premiumPurple)" opacity="0.7" className="animate-pulse" style={{animationDelay: '1s'}}/>
                <circle cx="180" cy="120" r="6" fill="url(#premiumPurple)" opacity="0.5" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                <path d="M200,50 Q185,65 170,80" stroke="url(#premiumPurple)" strokeWidth="2" fill="none" opacity="0.4"/>
                <path d="M170,80 Q190,85 210,90" stroke="url(#premiumPurple)" strokeWidth="2" fill="none" opacity="0.4"/>
                <path d="M210,90 Q195,105 180,120" stroke="url(#premiumPurple)" strokeWidth="2" fill="none" opacity="0.4"/>
              </svg>
            }
          />

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
