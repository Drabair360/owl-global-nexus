
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Factory, Users, Calculator, Target, Eye, ExternalLink, Building2, Globe, ShoppingCart, GraduationCap, FileCode, DollarSign, Search, TrendingUp, Network } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.12),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="animate-sophisticated-fade">
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight font-heading">
              Innovative
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 via-amber-400 via-yellow-500 via-orange-400 via-amber-500 to-yellow-400 bg-clip-text text-transparent font-bold drop-shadow-2xl block mt-2">
                Solutions
              </span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-12 max-w-4xl mx-auto font-body leading-relaxed">
              Cutting-edge AI-powered platforms and industrial solutions that transform 
              how Africa connects with global markets and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* AKOULA Section */}
      <section className="py-32 bg-gradient-to-br from-amber-50/80 via-orange-50/80 to-rose-50/80 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-rose-950/30 relative">
        <GeometricPattern variant="background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-semibold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">AKOULA: a cross-integrated Ecosystem</span>
            </h2>
            <div className="bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-amber-100/80 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-amber-900/30 p-8 rounded-2xl border border-amber-200/50 max-w-4xl mx-auto mb-12 shadow-glow-amber">
              <p className="text-blue-800 dark:text-blue-200 font-body font-medium italic text-lg leading-relaxed">
                "AKOULA brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, the speed of a shark, and the boundless creativity of tomorrow's makers."
              </p>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Revolutionary automated matching platforms transforming industries through cutting-edge AI technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <Card className="group hover:shadow-glow-amber transition-all duration-500 border-2 hover:border-amber-300/50 bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 backdrop-blur-sm hover-institutional">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <Factory className="w-14 h-14 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                  <Target className="w-8 h-8 text-amber-500" />
                </div>
                <CardTitle className="text-3xl font-heading font-semibold tracking-tight">Industrial Intelligence</CardTitle>
                <CardDescription className="text-lg font-subtitle text-blue-700 dark:text-blue-300 font-semibold tracking-wide">
                  SMART AGRO-INDUSTRY PLATFORM
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  Automated quote generation, equipment marketplace, and comprehensive training platform 
                  designed specifically for Africa's agro-industrial transformation.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-glow-blue">
                    <div className="flex items-center mb-2">
                      <Calculator className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Industrial Quote Builder SaaS for Agro-Industry</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Automated quotation system for agricultural equipment and services</p>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-glow-blue">
                    <div className="flex items-center mb-2">
                      <ShoppingCart className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Africa-Ready Equipment Marketplace (Niche B2B Amazon)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Specialized B2B platform for African agricultural equipment sourcing</p>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-glow-blue">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Micro-Course Platform: "Train Your Factory Staff"</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Bite-sized training modules for industrial workforce development</p>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-glow-blue">
                    <div className="flex items-center mb-2">
                      <FileCode className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Technical Spec Sheet Generator (AI-Assisted)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">AI-powered technical documentation and specification creation</p>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-glow-blue">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Factory Cost Estimator (CapEx + OpEx Calculator)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Comprehensive cost analysis for capital and operational expenses</p>
                  </div>
                  <div className="bg-white/80 dark:bg-slate-800/60 p-4 rounded-lg border border-blue-200/40 hover:border-blue-400/60 transition-all duration-300 hover:shadow-glow-blue">
                    <div className="flex items-center mb-2">
                      <Search className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Local Tech Consultant Finder (Matching Marketplace)</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Connect with local technical experts and consultants</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Transforming Africa's industrial landscape through intelligent automation and human-centered design
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 hover:from-blue-700 hover:via-purple-700 hover:to-amber-700 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow-amber" asChild>
              <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer">
                Learn More About AKOULA
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
