
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-gray-100">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105" asChild>
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
