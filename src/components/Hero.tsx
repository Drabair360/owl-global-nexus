
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {" "}Africa
            </span>
            <br />
            Through Innovation
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            OWL International bridges continents through strategic investments, cutting-edge technology, 
            and transformative industrial solutions that create lasting prosperity for communities worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105" asChild>
              <Link to="/portfolio">
                Explore Our Portfolio <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300" asChild>
              <Link to="/investors">Investor Access</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Globe className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-blue-100">Operating across Africa and Europe with strategic partnerships worldwide</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation-Driven</h3>
              <p className="text-blue-100">Pioneering AI-powered platforms and industrial solutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">Community Impact</h3>
              <p className="text-blue-100">Creating sustainable opportunities and transforming lives</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-orange-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
