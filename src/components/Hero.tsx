
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import GeometricPattern from '@/components/GeometricPattern';

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.1),transparent_50%)]" />
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white mb-6 leading-tight">
              Transforming
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {" "}Africa
              </span>
              <br />
              Through Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
              OWL International bridges continents through strategic investments, cutting-edge technology, 
              and transformative industrial solutions that create lasting prosperity for communities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-body font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/portfolio">
                  Explore Our Portfolio <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-500 font-body font-bold group relative overflow-hidden" asChild>
                <Link to="/investors">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-slate-900">Investor Access</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <Globe className="w-12 h-12 text-amber-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-heading font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-blue-100 font-body">Operating across Africa and Europe with strategic partnerships worldwide</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <TrendingUp className="w-12 h-12 text-amber-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-heading font-semibold text-white mb-2">Innovation-Driven</h3>
                <p className="text-blue-100 font-body">Pioneering AI-powered platforms and industrial solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <Users className="w-12 h-12 text-amber-400 mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-heading font-semibold text-white mb-2">Community Impact</h3>
                <p className="text-blue-100 font-body">Creating sustainable opportunities and transforming lives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full animate-geometric-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-geometric-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-orange-400/20 rounded-full animate-geometric-pulse" style={{ animationDelay: '2s' }} />
      </section>

      {/* Stylish Transition Section */}
      <div className="relative h-32 bg-gradient-to-b from-slate-800 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </>
  );
};

export default Hero;
