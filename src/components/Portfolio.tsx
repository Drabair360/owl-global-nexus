
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Innovative Electric Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(34,197,94,0.02)_25%,transparent_25%,transparent_75%,rgba(59,130,246,0.02)_75%)] bg-[length:60px_60px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* AKOULA */}
          <div className="group bg-gradient-to-br from-slate-900/90 via-zinc-900/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-emerald-500/30">
                  <Brain className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-[500] text-white mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>AKOULA</h3>
                  <p className="text-emerald-300/80 font-body text-sm">AI-Powered Industrial Intelligence Platform</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 font-body leading-relaxed text-sm">
                Akoula brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, 
                the speed of a shark, and the boundless creativity of tomorrow's makers.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Industrial Quote Builder SaaS for Agro-Industry</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Africa-Ready Equipment Marketplace (Niche B2B Amazon)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Micro-Course Platform: "Train Your Factory Staff"</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Technical Spec Sheet Generator (AI-Assisted)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Factory Cost Estimator (CapEx + OpEx Calculator)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Local Tech Consultant Finder (Matching Marketplace)</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105" asChild>
                <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer">
                  Explore Platform <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* CAOAGRO.COM */}
          <div className="group bg-gradient-to-br from-slate-900/90 via-zinc-900/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-cyan-500/30">
                  <Leaf className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-[500] text-white mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>CAOAGRO.COM</h3>
                  <p className="text-cyan-300/80 font-body text-sm">Smart Agro-Industrial Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 font-body leading-relaxed text-sm">
                Cutting-edge agro-industrial technology combining IoT sensors, analytics, and sustainable 
                industrial practices to revolutionize African agriculture.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">IoT-enabled precision farming solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Sustainable industrial processing equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Data analytics for crop optimization</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105" asChild>
                <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* OWLOMA */}
          <div className="group bg-gradient-to-br from-slate-900/90 via-zinc-900/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-violet-500/20 hover:border-violet-400/40 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-violet-500/30">
                  <Building className="w-7 h-7 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-[500] text-white mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>OWLOMA</h3>
                  <p className="text-violet-300/80 font-body text-sm">Strategic Real Estate Portfolio</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 font-body leading-relaxed text-sm">
                OwLoma is the real estate investment portfolio of Owl International — built on the belief that home 
                is both a place and a purpose. With one eye on Africa, the other on Europe, we craft value through 
                visionary, long-term property investments rooted in cultural understanding, architectural beauty, and resilient returns.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Urban developments in European capitals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Emerging cities across Africa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Cultural heritage preservation projects</p>
                </div>
              </div>

              <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-3 mb-6 backdrop-blur-sm">
                <p className="text-xs text-violet-300 font-medium font-body">Launching in 2026</p>
              </div>

              <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105" asChild>
                <a href="https://www.owloma.com/" target="_blank" rel="noopener noreferrer">
                  Discover More <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>

          {/* KIDZ LAB */}
          <div className="group bg-gradient-to-br from-slate-900/90 via-zinc-900/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-pink-500/30">
                  <Palette className="w-7 h-7 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-[500] text-white mb-1" style={{ fontFamily: 'Avenir Next, sans-serif' }}>KIDZ LAB</h3>
                  <p className="text-pink-300/80 font-body text-sm">AI-Powered Future of Talent Discovery</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 font-body leading-relaxed text-sm">
                Our AI-powered platform has transformed how agencies discover, match, and book talent. 
                Revolutionizing the creative industry through intelligent talent discovery and seamless booking solutions.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">AI-powered talent matching algorithms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Seamless booking and management platform</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs text-gray-400 font-body">Creative industry transformation tools</p>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white font-subtitle border-0 rounded-xl transition-all duration-300 group-hover:scale-105" asChild>
                <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer">
                  Visit Platform <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Synergy Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900/90 via-slate-900/90 to-zinc-900/90 backdrop-blur-xl rounded-3xl p-12 text-white border border-gray-700/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-400/10" />
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-heading bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Portfolio Synergy</h2>
              <p className="text-gray-300 font-body max-w-3xl mx-auto">
                Our integrated ecosystem creates powerful synergies across industries, connecting technology, 
                agriculture, real estate, and talent to drive sustainable growth across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle text-emerald-300">Technology Integration</h3>
                <p className="text-gray-400 text-sm font-body">
                  AKOULA's AI intelligence powers decision-making across our agro-industrial and real estate portfolios.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle text-cyan-300">Sustainable Development</h3>
                <p className="text-gray-400 text-sm font-body">
                  CAOAGRO's sustainable practices inform our approach to eco-friendly real estate development.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-pink-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle text-pink-300">Talent Ecosystem</h3>
                <p className="text-gray-400 text-sm font-body">
                  KIDZ LAB's talent discovery fuels creative campaigns for all our portfolio companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 border-0" asChild>
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
