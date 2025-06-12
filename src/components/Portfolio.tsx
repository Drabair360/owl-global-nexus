
import React from 'react';
import { Zap, Leaf, Cog, Camera, TrendingUp, Users, Globe, ArrowRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Strategic
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent block mt-2">
                Investments
              </span>
              <span className="block mt-2">Portfolio</span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
              Discover our carefully curated portfolio of transformative ventures across Africa and beyond, 
              each designed to create lasting impact and sustainable prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="relative h-32 bg-gradient-to-b from-indigo-900 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
      </div>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">OUR INVESTMENTS</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Explore our diverse portfolio of innovative ventures, driving sustainable growth and creating lasting impact across various sectors in Africa and beyond.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Innovation */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Digital Innovation</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Leading the digital transformation with cutting-edge AI platforms and innovative solutions
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AKOULA Platform</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI Solutions</span>
              </div>
            </div>

            {/* Agricultural Technology */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Agricultural Technology</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Revolutionizing African agriculture through technology and sustainable farming practices
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">CAOAGRO</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Smart Farming</span>
              </div>
            </div>

            {/* Industrial Solutions */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Industrial Solutions</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Advanced manufacturing and industrial automation for sustainable development
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">OWLOMA</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Automation</span>
              </div>
            </div>

            {/* Creative & Media */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Creative & Media</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Innovative media production and creative content solutions across Africa
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">KIDZ LAB</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Content Creation</span>
              </div>
            </div>

            {/* Energy Solutions */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Energy Solutions</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Sustainable energy projects powering Africa's future development
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Renewable Energy</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Grid Solutions</span>
              </div>
            </div>

            {/* Financial Technology */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Financial Technology</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Innovative fintech solutions enabling financial inclusion across Africa
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Payment Systems</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Portfolio Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section text-slate-800 mb-6 font-brand">FLAGSHIP VENTURES</h2>
            <p className="text-body-large text-slate-600 max-w-4xl mx-auto font-body leading-relaxed">
              Our portfolio companies are strategically interconnected, creating powerful synergies across the value chain. 
              From AI-driven platforms to agricultural innovation, industrial automation, and creative media, 
              each venture amplifies the impact of others in a transformative ecosystem.
            </p>
          </div>

          {/* AKOULA */}
          <div className="mb-20 bg-white rounded-2xl shadow-sophisticated overflow-hidden hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">AKOULA</h3>
                    <p className="text-blue-600 font-subtitle font-semibold">AI-Powered Digital Platform</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Revolutionary AI platform transforming how businesses operate across Africa. AKOULA integrates 
                  machine learning, automation, and data analytics to optimize operations for our portfolio companies 
                  and external clients.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">15,000+</div>
                    <div className="text-sm text-blue-600 font-subtitle">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">85%</div>
                    <div className="text-sm text-blue-600 font-subtitle">Efficiency Gain</div>
                  </div>
                </div>
                <a 
                  href="https://www.akoulala.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-subtitle font-semibold"
                >
                  Explore Platform <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="p-10 lg:p-12 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Powering digital transformation across our entire ecosystem"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CAOAGRO */}
          <div className="mb-20 bg-white rounded-2xl shadow-sophisticated overflow-hidden hover:shadow-[0_20px_60px_rgba(34,197,94,0.3)] transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <Leaf className="w-24 h-24 text-green-500 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Feeding Africa through intelligent agriculture"
                  </p>
                </div>
              </div>
              <div className="p-10 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">CAOAGRO</h3>
                    <p className="text-green-600 font-subtitle font-semibold">Smart Agriculture Solutions</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Cutting-edge agricultural technology combining IoT sensors, AI analytics, and sustainable farming 
                  practices. CAOAGRO provides raw materials to OWLOMA while using AKOULA's AI for crop optimization.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">2,500+</div>
                    <div className="text-sm text-green-600 font-subtitle">Farms Connected</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">40%</div>
                    <div className="text-sm text-green-600 font-subtitle">Yield Increase</div>
                  </div>
                </div>
                <a 
                  href="https://www.caoagro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-subtitle font-semibold"
                >
                  Visit Platform <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* OWLOMA */}
          <div className="mb-20 bg-white rounded-2xl shadow-sophisticated overflow-hidden hover:shadow-[0_20px_60px_rgba(251,146,60,0.3)] transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Cog className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">OWLOMA</h3>
                    <p className="text-amber-600 font-subtitle font-semibold">Industrial Automation</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Advanced manufacturing and automation solutions processing CAOAGRO's agricultural output into 
                  high-value products. Uses AKOULA's AI for production optimization and supplies materials for 
                  KIDZ LAB's creative projects.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-700">12</div>
                    <div className="text-sm text-amber-600 font-subtitle">Production Lines</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-700">300%</div>
                    <div className="text-sm text-amber-600 font-subtitle">Output Growth</div>
                  </div>
                </div>
                <a 
                  href="https://www.owloma.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-subtitle font-semibold"
                >
                  Explore Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="p-10 lg:p-12 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <Cog className="w-24 h-24 text-amber-500 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Manufacturing excellence through smart automation"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KIDZ LAB */}
          <div className="mb-12 bg-white rounded-2xl shadow-sophisticated overflow-hidden hover:shadow-[0_20px_60px_rgba(147,51,234,0.3)] transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12 bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-purple-500 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Creating Africa's creative renaissance"
                  </p>
                </div>
              </div>
              <div className="p-10 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">KIDZ LAB</h3>
                    <p className="text-purple-600 font-subtitle font-semibold">Creative Media Studio</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Innovative media production and talent development platform. KIDZ LAB creates compelling content 
                  showcasing OWLOMA's products, CAOAGRO's innovations, and uses AKOULA's AI for content optimization 
                  and audience targeting.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">500+</div>
                    <div className="text-sm text-purple-600 font-subtitle">Content Pieces</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">50M+</div>
                    <div className="text-sm text-purple-600 font-subtitle">Total Reach</div>
                  </div>
                </div>
                <a 
                  href="https://www.kidzlabmodels.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-subtitle font-semibold"
                >
                  View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Synergy Section */}
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-brand font-bold mb-6">The Power of Synergy</h3>
            <p className="text-xl font-body mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our ventures form an integrated ecosystem where each company strengthens the others. AKOULA's AI powers 
              optimization across all platforms, CAOAGRO provides sustainable raw materials to OWLOMA, which manufactures 
              components for all ventures, while KIDZ LAB amplifies their stories across Africa and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-subtitle font-semibold mb-2">Cross-Platform Value</h4>
                <p className="text-blue-200 font-body">Shared resources and capabilities multiply impact exponentially</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-subtitle font-semibold mb-2">Talent Circulation</h4>
                <p className="text-blue-200 font-body">Expertise flows between ventures, accelerating innovation</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-subtitle font-semibold mb-2">Market Amplification</h4>
                <p className="text-blue-200 font-body">Combined reach creates unprecedented market opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
