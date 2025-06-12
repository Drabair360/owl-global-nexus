
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Factory, Cpu, Sparkles, MapPin, Building2, Eye, Target, Zap } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const Portfolio = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <GeometricPattern variant="background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.03),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-semibold text-slate-800 mb-8 tracking-tight">
            Investment Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-body leading-relaxed">
            Strategic investments across industries, continents, and technologies that drive meaningful change and create lasting prosperity for communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {/* CAOAGRO Division */}
          <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white backdrop-blur-sm hover:transform hover:scale-[1.02]">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <Factory className="w-14 h-14 text-slate-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-green-600" />
                <MapPin className="w-6 h-6 text-slate-400" />
              </div>
              <CardTitle className="text-2xl font-heading font-semibold tracking-tight text-slate-800">CAOAGRO.COM</CardTitle>
              <CardDescription className="text-lg font-subtitle text-slate-600 font-semibold tracking-wide">
                INDUSTRIAL TURKEY PROJECT MANAGEMENT
              </CardDescription>
              <p className="text-sm text-slate-500 font-body">West, East & North Africa</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600 font-body leading-relaxed">
                Specialized turnkey project design office focusing on cocoa bean transformation, 
                featuring cutting-edge German process equipment and Chinese industrial infrastructure.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span>Metallic structures & industrial buildings</span>
                </div>
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span>Storage tanks, silos & handling equipment</span>
                </div>
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <span>Cocoa processing to mass, powder & liquor</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-slate-700 hover:bg-slate-800 text-white font-subtitle font-semibold transition-all duration-300 hover:scale-105" asChild>
                <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer">
                  Explore CAOAGRO.COM <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* AKOULA Division */}
          <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white backdrop-blur-sm hover:transform hover:scale-[1.02]">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div className="relative">
                  <Cpu className="w-14 h-14 text-slate-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-600" />
                  <Eye className="w-6 h-6 text-amber-500 absolute -top-1 -right-1" />
                </div>
                <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-heading font-semibold tracking-tight text-slate-800">AKOULA</CardTitle>
              <CardDescription className="text-lg font-subtitle text-slate-600 font-semibold tracking-wide">
                AI-POWERED INDUSTRIAL INTELLIGENCE
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-body font-medium italic text-sm leading-relaxed">
                  "AKOULA brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, the speed of a shark, and the boundless creativity of tomorrow's makers."
                </p>
              </div>
              <p className="text-slate-600 font-body leading-relaxed">
                Revolutionary automated matching platforms transforming agro-industry operations 
                and talent discovery through cutting-edge AI technology.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <Target className="w-4 h-4 text-blue-600 mr-2" />
                    <h4 className="font-heading font-semibold text-sm text-slate-800">Industrial Quote Builder</h4>
                  </div>
                  <p className="text-xs text-slate-600 font-body">Equipment Marketplace & Training Platform</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-amber-600 mr-2" />
                    <h4 className="font-heading font-semibold text-sm text-slate-800">KIDZ LAB Entertainment</h4>
                  </div>
                  <p className="text-xs text-slate-600 font-body">AI-powered talent discovery and booking platform</p>
                </div>
              </div>
              <Button className="w-full mt-6 bg-slate-700 hover:bg-slate-800 text-white font-subtitle font-semibold transition-all duration-300 hover:scale-105" asChild>
                <a href="https://www.kidzlabmodels.com/premium" target="_blank" rel="noopener noreferrer">
                  Explore KIDZ LAB <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* OWLOMA Division */}
          <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 lg:col-span-2 xl:col-span-1 bg-white backdrop-blur-sm hover:transform hover:scale-[1.02]">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <Building2 className="w-14 h-14 text-slate-600 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-600" />
                <MapPin className="w-6 h-6 text-slate-400" />
              </div>
              <CardTitle className="text-2xl font-heading font-semibold tracking-tight text-slate-800">OWLOMA</CardTitle>
              <CardDescription className="text-lg font-subtitle text-slate-600 font-semibold tracking-wide">
                REAL ESTATE INVESTMENT PORTFOLIO
              </CardDescription>
              <p className="text-sm text-slate-500 font-body">France, Côte d'Ivoire & South Africa</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-slate-700 font-body font-medium italic text-sm leading-relaxed">
                  "OwLoma is the real estate investment portfolio of Owl International — built on the belief that home is both a place and a purpose. With one eye on Africa, the other on Europe, we craft value through visionary, long-term property investments rooted in cultural understanding, architectural beauty, and resilient returns."
                </p>
              </div>
              <p className="text-slate-600 font-body leading-relaxed">
                Premium real estate developments combining corporate headquarters, 
                residential communities, and exclusive commercial spaces across three strategic markets.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
                  <span>Paris corporate headquarters & offices</span>
                </div>
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
                  <span>Abidjan mixed-use developments</span>
                </div>
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
                  <span>Cape Town luxury residential projects</span>
                </div>
                <div className="flex items-center text-sm font-body text-slate-600">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
                  <span>Exclusive commercial developments</span>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-heading font-semibold text-sm text-slate-700 mb-1">Coming Soon</h4>
                <p className="text-xs text-slate-600 font-body">Exclusive investment opportunities in emerging markets</p>
              </div>
              <Button className="w-full mt-6 bg-slate-400 text-slate-700 font-subtitle font-semibold cursor-not-allowed" disabled>
                <span>Portfolio Launching Q2 2025</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-slate-600 mb-8 font-body leading-relaxed">
            Headquartered in Paris, driving innovation across continents with human-centered values
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="text-sm font-heading font-medium text-slate-700 tracking-wide">Headquartered in Paris, driving innovation across continents with human-centered values</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
