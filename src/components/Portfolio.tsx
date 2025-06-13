
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-to-tl from-white via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Sophisticated Light Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flagship Ventures Title */}
        <div className="text-center mb-16 animate-sophisticated-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-slate-800">
            Flagship
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent block mt-2">
              Ventures
            </span>
          </h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
            Our portfolio of innovative companies driving transformation across Africa through technology, 
            sustainable development, and strategic investments.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* AKOULA */}
          <div className="group bg-white/90 backdrop-blur-xl rounded-3xl border border-emerald-200 hover:border-emerald-400 transition-all duration-500 overflow-hidden relative hover:shadow-[0_20px_60px_rgba(34,197,94,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-emerald-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-emerald-300 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-[600] text-slate-800 mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>AKOULA</h3>
                  <p className="text-emerald-600 font-body text-sm font-medium">AI-Powered Industrial Intelligence Platform</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 font-body leading-relaxed text-sm">
                Akoula brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, 
                the speed of a shark, and the boundless creativity of tomorrow's makers.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Industrial Quote Builder SaaS for Agro-Industry</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Africa-Ready Equipment Marketplace (Niche B2B Amazon)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Micro-Course Platform: "Train Your Factory Staff"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Technical Spec Sheet Generator (AI-Assisted)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Factory Cost Estimator (CapEx + OpEx Calculator)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Local Tech Consultant Finder (Matching Marketplace)</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg" asChild>
                <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer">
                  Explore Platform <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* CAOAGRO.COM */}
          <div className="group bg-white/90 backdrop-blur-xl rounded-3xl border border-blue-200 hover:border-blue-400 transition-all duration-500 overflow-hidden relative hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-blue-300 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-[600] text-slate-800 mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>CAOAGRO.COM</h3>
                  <p className="text-blue-600 font-body text-sm font-medium">Smart Agro-Industrial Solutions</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 font-body leading-relaxed text-sm">
                Cutting-edge agro-industrial technology combining IoT sensors, analytics, and sustainable 
                industrial practices to revolutionize African agriculture.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">IoT-enabled precision farming solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Sustainable industrial processing equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Data analytics for crop optimization</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg" asChild>
                <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* OWLOMA */}
          <div className="group bg-white/90 backdrop-blur-xl rounded-3xl border border-amber-200 hover:border-amber-400 transition-all duration-500 overflow-hidden relative hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-transparent to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-amber-300 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-[600] text-slate-800 mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>OWLOMA</h3>
                  <p className="text-amber-600 font-body text-sm font-medium">Strategic Real Estate Portfolio</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 font-body leading-relaxed text-sm">
                OwLoma is the real estate investment portfolio of Owl International — built on the belief that home 
                is both a place and a purpose. With one eye on Africa, the other on Europe, we craft value through 
                visionary, long-term property investments rooted in cultural understanding, architectural beauty, and resilient returns.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Urban developments in European capitals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Emerging cities across Africa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Cultural heritage preservation projects</p>
                </div>
              </div>

              <div className="bg-amber-100 border border-amber-200 rounded-xl p-3 mb-6 backdrop-blur-sm">
                <p className="text-xs text-amber-700 font-medium font-body">Launching in 2026</p>
              </div>

              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg" asChild>
                <a href="https://www.owloma.com/" target="_blank" rel="noopener noreferrer">
                  Discover More <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* KIDZ LAB */}
          <div className="group bg-white/90 backdrop-blur-xl rounded-3xl border border-rose-200 hover:border-rose-400 transition-all duration-500 overflow-hidden relative hover:shadow-[0_20px_60px_rgba(244,63,94,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-transparent to-rose-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-rose-300 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-7 h-7 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-[600] text-slate-800 mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>KIDZ LAB</h3>
                  <p className="text-rose-600 font-body text-sm font-medium">AI-Powered Future of Talent Discovery</p>
                </div>
              </div>
              
              <p className="text-slate-600 mb-6 font-body leading-relaxed text-sm">
                Our AI-powered platform has transformed how agencies discover, match, and book talent. 
                Revolutionizing the creative industry through intelligent talent discovery and seamless booking solutions.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">AI-powered talent matching algorithms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Seamless booking and management platform</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-slate-500 font-body">Creative industry transformation tools</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg" asChild>
                <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer">
                  Visit Platform <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Synergy Section */}
        <div className="mt-20 bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-emerald-50/20 to-amber-50/30" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-heading text-slate-800">Portfolio Synergy</h2>
              <p className="text-slate-600 font-body max-w-3xl mx-auto">
                Our integrated ecosystem creates powerful synergies across industries, connecting technology, 
                agriculture, real estate, and talent to drive sustainable growth across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-emerald-300 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle text-emerald-700">Technology Integration</h3>
                <p className="text-slate-500 text-sm font-body">
                  AKOULA's AI intelligence powers decision-making across our agro-industrial and real estate portfolios.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-blue-300 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle text-blue-700">Sustainable Development</h3>
                <p className="text-slate-500 text-sm font-body">
                  CAOAGRO's sustainable practices inform our approach to eco-friendly real estate development.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-rose-300 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle text-rose-700">Talent Ecosystem</h3>
                <p className="text-slate-500 text-sm font-body">
                  KIDZ LAB's talent discovery fuels creative campaigns for all our portfolio companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 hover:from-blue-700 hover:via-emerald-700 hover:to-amber-700 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg" asChild>
            <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              Explore Full Portfolio <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
