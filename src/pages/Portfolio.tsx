
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Palette, Target, Users, TrendingUp, Globe, ExternalLink, Cpu, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GeometricPattern from '@/components/GeometricPattern';

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "AKOULA",
      subtitle: "AI-Powered Industrial Intelligence Platform",
      description: "Akoula brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, the speed of a shark, and the boundless creativity of tomorrow's makers.",
      icon: Brain,
      features: [
        "Industrial Quote Builder SaaS for Agro-Industry",
        "Africa-Ready Equipment Marketplace (Niche B2B Amazon)",
        "Micro-Course Platform: \"Train Your Factory Staff\"",
        "Technical Spec Sheet Generator (AI-Assisted)",
        "Factory Cost Estimator (CapEx + OpEx Calculator)",
        "Local Tech Consultant Finder (Matching Marketplace)"
      ],
      website: "https://www.akoulala.com",
      gradient: "from-slate-900/90 via-blue-900/80 to-slate-800/90",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-[0_8px_32px_rgba(59,130,246,0.15)]",
      iconBg: "bg-slate-700",
      buttonColor: "bg-slate-700 hover:bg-slate-800"
    },
    {
      title: "CAOAGRO.COM",
      subtitle: "Smart Agro-Industrial Solutions",
      description: "Cutting-edge agro-industrial technology combining IoT sensors, analytics, and sustainable industrial practices to revolutionize African agriculture.",
      icon: Leaf,
      features: [
        "IoT-enabled precision farming solutions",
        "Sustainable industrial processing equipment",
        "Data analytics for crop optimization"
      ],
      website: "https://www.caoagro.com",
      gradient: "from-emerald-900/90 via-green-900/80 to-emerald-800/90",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-[0_8px_32px_rgba(16,185,129,0.15)]",
      iconBg: "bg-green-700",
      buttonColor: "bg-green-700 hover:bg-green-800"
    },
    {
      title: "OWLOMA",
      subtitle: "Strategic Real Estate Portfolio",
      description: "OwLoma is the real estate investment portfolio of Owl International — built on the belief that home is both a place and a purpose. With one eye on Africa, the other on Europe, we craft value through visionary, long-term property investments rooted in cultural understanding, architectural beauty, and resilient returns.",
      icon: Building,
      features: [
        "Urban developments in European capitals",
        "Emerging cities across Africa",
        "Cultural heritage preservation projects"
      ],
      website: "https://www.owloma.com/",
      launchDate: "Launching in 2026",
      gradient: "from-blue-900/90 via-indigo-900/80 to-blue-800/90",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-[0_8px_32px_rgba(59,130,246,0.15)]",
      iconBg: "bg-blue-700",
      buttonColor: "bg-blue-700 hover:bg-blue-800"
    },
    {
      title: "KIDZ LAB",
      subtitle: "AI-Powered Future of Talent Discovery",
      description: "Our AI-powered platform has transformed how agencies discover, match, and book talent. Revolutionizing the creative industry through intelligent talent discovery and seamless booking solutions.",
      icon: Palette,
      features: [
        "AI-powered talent matching algorithms",
        "Seamless booking and management platform",
        "Creative industry transformation tools"
      ],
      website: "https://www.kidzlabmodels.com/",
      gradient: "from-purple-900/90 via-violet-900/80 to-purple-800/90",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-[0_8px_32px_rgba(147,51,234,0.15)]",
      iconBg: "bg-purple-700",
      buttonColor: "bg-purple-700 hover:bg-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-800 via-blue-700 via-indigo-600 to-white overflow-hidden">
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

      {/* Flagship Ventures Section - REDESIGNED */}
      <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Flagship
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Ventures</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-body">
              Our portfolio companies are transforming industries across Africa through innovative technology and strategic vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative transform transition-all duration-700 hover:-translate-y-4 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700`} />
                <div className={`relative bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95 backdrop-blur-xl rounded-2xl p-8 border ${item.borderColor} ${item.glowColor} hover:shadow-xl transition-all duration-700 overflow-hidden`}>
                  
                  {item.launchDate && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        <Zap className="w-3 h-3 mr-1" />
                        {item.launchDate}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 font-heading">{item.title}</h3>
                      <p className="text-slate-600 font-body">{item.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-6 font-body leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-slate-600 font-body">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button className={`${item.buttonColor} text-white font-subtitle group/btn relative overflow-hidden`} asChild>
                    <a href={item.website} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center">
                        {item.title === "OWLOMA" ? "Discover More" : item.title === "AKOULA" ? "Explore Platform" : item.title === "KIDZ LAB" ? "Visit Platform" : "Learn More"}
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Synergy - ENHANCED */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.08),transparent_50%)]" />
        <GeometricPattern variant="subtle" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Portfolio</span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Synergy</span>
            </h2>
            <p className="text-slate-300 font-body max-w-3xl mx-auto text-lg">
              Our integrated ecosystem creates powerful synergies across industries, connecting technology, 
              agriculture, real estate, and talent to drive sustainable growth across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg animate-pulse" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-blue-700/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-blue-400/30">
                  <Brain className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-subtitle bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Technology Integration</h3>
              <p className="text-slate-300 text-sm font-body leading-relaxed">
                AKOULA's AI intelligence powers decision-making across our agro-industrial and real estate portfolios.
              </p>
            </div>

            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500/20 via-emerald-600/30 to-emerald-700/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-emerald-400/30">
                  <Leaf className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-subtitle bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">Sustainable Development</h3>
              <p className="text-slate-300 text-sm font-body leading-relaxed">
                CAOAGRO's sustainable practices inform our approach to eco-friendly real estate development.
              </p>
            </div>

            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500/20 via-purple-600/30 to-purple-700/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto border border-purple-400/30">
                  <Palette className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-subtitle bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">Talent Ecosystem</h3>
              <p className="text-slate-300 text-sm font-body leading-relaxed">
                KIDZ LAB's talent discovery fuels creative campaigns for all our portfolio companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy - MODERNIZED */}
      <section className="relative py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 overflow-hidden">
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="group text-center p-8 relative transform transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-600/10 to-blue-500/5 rounded-2xl backdrop-blur-sm border border-blue-200/50 group-hover:border-blue-300/70 transition-all duration-500" />
              <div className="relative">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Strategic Vision</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  We invest in companies that align with Africa's long-term development goals, focusing on sectors 
                  that can create transformational change across the continent.
                </p>
              </div>
            </div>

            <div className="group text-center p-8 relative transform transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-emerald-600/10 to-emerald-500/5 rounded-2xl backdrop-blur-sm border border-emerald-200/50 group-hover:border-emerald-300/70 transition-all duration-500" />
              <div className="relative">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Sustainable Growth</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  Every investment decision is evaluated through the lens of environmental sustainability, 
                  social impact, and governance excellence.
                </p>
              </div>
            </div>

            <div className="group text-center p-8 relative transform transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-600/10 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-200/50 group-hover:border-purple-300/70 transition-all duration-500" />
              <div className="relative">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Community Impact</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  We prioritize investments that create meaningful employment opportunities and contribute 
                  to the prosperity of local communities across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Performance - COMPLETELY OVERHAULED */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.10),transparent_60%)]" />
        <GeometricPattern variant="prominent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Portfolio</span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"> Performance</span>
            </h2>
            <p className="text-slate-300 font-body max-w-3xl mx-auto text-lg">
              Our commitment to excellence is reflected in the measurable impact our investments create.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative bg-gradient-to-br from-blue-900/50 via-blue-800/30 to-blue-900/50 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">€5M+</div>
                  <p className="text-slate-300 font-body text-sm">Total Assets Under Management</p>
                </div>
              </div>
            </div>
            
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative bg-gradient-to-br from-emerald-900/50 via-emerald-800/30 to-emerald-900/50 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/30 hover:border-emerald-300/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">4+</div>
                  <p className="text-slate-300 font-body text-sm">Active Portfolio Companies</p>
                </div>
              </div>
            </div>
            
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative bg-gradient-to-br from-purple-900/50 via-purple-800/30 to-purple-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 hover:border-purple-300/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">25+</div>
                  <p className="text-slate-300 font-body text-sm">African & European Countries</p>
                </div>
              </div>
            </div>
            
            <div className="group text-center transform transition-all duration-500 hover:scale-105">
              <div className="relative bg-gradient-to-br from-amber-900/50 via-orange-800/30 to-amber-900/50 backdrop-blur-xl rounded-2xl p-6 border border-amber-400/30 hover:border-amber-300/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl font-bold mb-2 font-heading bg-gradient-to-r from-amber-400 to-orange-200 bg-clip-text text-transparent">10+</div>
                  <p className="text-slate-300 font-body text-sm">Jobs under Creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
