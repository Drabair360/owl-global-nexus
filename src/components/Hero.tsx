
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
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

      {/* Strategic Investments Portfolio Section - Direct Integration */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {/* Digital Innovation */}
            <div className="bg-gradient-to-br from-sky-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <TrendingUp className="w-8 h-8 text-slate-800 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-['Montserrat'] font-bold text-slate-800 mb-3">Digital Innovation</h3>
              <p className="text-slate-700 text-sm font-body">AI-powered platforms transforming industries</p>
            </div>

            {/* Agro-industrial Technology */}
            <div className="bg-gradient-to-br from-sky-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <Globe className="w-8 h-8 text-slate-800 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-['Montserrat'] font-bold text-slate-800 mb-3">Agro-industrial Technology</h3>
              <p className="text-slate-700 text-sm font-body">Smart agricultural solutions for sustainable farming</p>
            </div>

            {/* Industrial Solutions */}
            <div className="bg-gradient-to-br from-sky-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <Users className="w-8 h-8 text-slate-800 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-['Montserrat'] font-bold text-slate-800 mb-3">Industrial Solutions</h3>
              <p className="text-slate-700 text-sm font-body">Advanced automation and manufacturing technologies</p>
            </div>

            {/* Energy Solutions */}
            <div className="bg-gradient-to-br from-sky-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <TrendingUp className="w-8 h-8 text-slate-800 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-['Montserrat'] font-bold text-slate-800 mb-3">Energy Solutions</h3>
              <p className="text-slate-700 text-sm font-body">Renewable energy and sustainable power systems</p>
            </div>

            {/* Financial Technology */}
            <div className="bg-gradient-to-br from-sky-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <Globe className="w-8 h-8 text-slate-800 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-['Montserrat'] font-bold text-slate-800 mb-3">Financial Technology</h3>
              <p className="text-slate-700 text-sm font-body">Innovative fintech solutions for emerging markets</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-['Montserrat'] font-bold text-white mb-6">Flagship Ventures</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
