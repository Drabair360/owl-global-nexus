
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroFeatureCard from './HeroFeatureCard';

const HeroHeader = () => {
  return (
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
            <HeroFeatureCard
              icon={Globe}
              title="GLOBAL REACH"
              description="Operating across Africa and Europe with strategic partnerships worldwide"
            />
            <HeroFeatureCard
              icon={TrendingUp}
              title="INNOVATION-DRIVEN"
              description="Pioneering AI-powered platforms and industrial solutions"
            />
            <HeroFeatureCard
              icon={Users}
              title="COMMUNITY IMPACT"
              description="Creating sustainable opportunities and transforming lives"
            />
          </div>
        </div>
      </div>

      {/* Enhanced smooth transition element to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none"></div>
    </section>
  );
};

export default HeroHeader;
