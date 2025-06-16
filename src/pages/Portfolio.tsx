import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Palette, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Investment
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent block mt-2">
                Portfolio
              </span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
              Transforming Africa through strategic investments in technology, agriculture, real estate, 
              and creative industries that create lasting prosperity for communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Seamless Transition */}
      <div className="relative h-48 -mt-24 bg-gradient-to-b from-indigo-900/20 via-indigo-600/40 via-indigo-300/60 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
      </div>

      {/* Flagship Ventures Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* AKOULA */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                    <Brain className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 font-heading">AKOULA</h3>
                    <p className="text-slate-600 font-body">AI-Powered Industrial Intelligence Platform</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 font-body leading-relaxed">
                  Akoula brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, 
                  the speed of a shark, and the boundless creativity of tomorrow's makers.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Industrial Quote Builder SaaS for Agro-Industry</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Africa-Ready Equipment Marketplace (Niche B2B Amazon)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Micro-Course Platform: "Train Your Factory Staff"</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Technical Spec Sheet Generator (AI-Assisted)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Factory Cost Estimator (CapEx + OpEx Calculator)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Local Tech Consultant Finder (Matching Marketplace)</p>
                  </div>
                </div>

                <Button className="bg-slate-700 hover:bg-slate-800 text-white font-subtitle" asChild>
                  <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer">
                    Explore Platform <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* CAOAGRO.COM */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Leaf className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 font-heading">CAOAGRO.COM</h3>
                    <p className="text-slate-600 font-body">Smart Agro-Industrial Solutions</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 font-body leading-relaxed">
                  Cutting-edge agro-industrial technology combining IoT sensors, analytics, and sustainable 
                  industrial practices to revolutionize African agriculture.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">IoT-enabled precision farming solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Sustainable industrial processing equipment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Data analytics for crop optimization</p>
                  </div>
                </div>

                <Button className="bg-green-700 hover:bg-green-800 text-white font-subtitle" asChild>
                  <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* OWLOMA */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 font-heading">OWLOMA</h3>
                    <p className="text-slate-600 font-body">Strategic Real Estate Portfolio</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 font-body leading-relaxed">
                  OwLoma is the real estate investment portfolio of Owl International — built on the belief that home 
                  is both a place and a purpose. With one eye on Africa, the other on Europe, we craft value through 
                  visionary, long-term property investments rooted in cultural understanding, architectural beauty, and resilient returns.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Urban developments in European capitals</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Emerging cities across Africa</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Cultural heritage preservation projects</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800 font-medium font-body">Launching in 2026</p>
                </div>

                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-subtitle" asChild>
                  <a href="https://www.owloma.com/" target="_blank" rel="noopener noreferrer">
                    Discover More <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>

            {/* KIDZ LAB */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 font-heading">KIDZ LAB</h3>
                    <p className="text-slate-600 font-body">AI-Powered Future of Talent Discovery</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 font-body leading-relaxed">
                  Our AI-powered platform has transformed how agencies discover, match, and book talent. 
                  Revolutionizing the creative industry through intelligent talent discovery and seamless booking solutions.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">AI-powered talent matching algorithms</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Seamless booking and management platform</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-slate-600 font-body">Creative industry transformation tools</p>
                  </div>
                </div>

                <Button className="bg-purple-700 hover:bg-purple-800 text-white font-subtitle" asChild>
                  <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer">
                    Visit Platform <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Synergy Section */}
          <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-heading">Portfolio Synergy</h2>
              <p className="text-slate-300 font-body max-w-3xl mx-auto">
                Our integrated ecosystem creates powerful synergies across industries, connecting technology, 
                agriculture, real estate, and talent to drive sustainable growth across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle">Technology Integration</h3>
                <p className="text-slate-300 text-sm font-body">
                  AKOULA's AI intelligence powers decision-making across our agro-industrial and real estate portfolios.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle">Sustainable Development</h3>
                <p className="text-slate-300 text-sm font-body">
                  CAOAGRO's sustainable practices inform our approach to eco-friendly real estate development.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-subtitle">Talent Ecosystem</h3>
                <p className="text-slate-300 text-sm font-body">
                  KIDZ LAB's talent discovery fuels creative campaigns for all our portfolio companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Investment
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Philosophy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Our approach to investment is guided by three core principles that ensure sustainable growth and meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Strategic Vision</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                We invest in companies that align with Africa's long-term development goals, focusing on sectors 
                that can create transformational change across the continent.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Sustainable Growth</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Every investment decision is evaluated through the lens of environmental sustainability, 
                social impact, and governance excellence.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                We prioritize investments that create meaningful employment opportunities and contribute 
                to the prosperity of local communities across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Portfolio
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Performance</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
              Our commitment to excellence is reflected in the measurable impact our investments create.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 font-heading">€50M+</div>
              <p className="text-gray-600 font-body">Total Assets Under Management</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2 font-heading">15+</div>
              <p className="text-gray-600 font-body">Active Portfolio Companies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2 font-heading">8</div>
              <p className="text-gray-600 font-body">African Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2 font-heading">500+</div>
              <p className="text-gray-600 font-body">Jobs Created</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
