
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Factory, Users, Zap, Target, Eye, ExternalLink, Building2, Globe } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-institutional-soft overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="animate-sophisticated-fade">
            <h1 className="text-display text-white mb-8 leading-tight font-heading">
              Innovative
              <span className="gradient-text-institutional block mt-2">
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
      <section className="py-32 bg-background relative">
        <GeometricPattern variant="background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.05),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-8 tracking-tight">
              AKOULA: AI-Powered Ecosystem
            </h2>
            <div className="bg-blue-100/50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200/50 max-w-4xl mx-auto mb-12">
              <p className="text-blue-800 dark:text-blue-200 font-body font-medium italic text-lg leading-relaxed">
                "AKOULA brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, the speed of a shark, and the boundless creativity of tomorrow's makers."
              </p>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Revolutionary automated matching platforms transforming industries through cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/20 dark:to-indigo-950/20 backdrop-blur-sm hover-glow">
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
                  <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg border border-blue-200/30 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Zap className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">AI Quote Builder</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Intelligent cost estimation and project planning</p>
                  </div>
                  <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg border border-blue-200/30 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Globe className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Equipment Marketplace</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Global sourcing with local expertise</p>
                  </div>
                  <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg border border-blue-200/30 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-blue-600 mr-3" />
                      <h4 className="font-heading font-semibold">Training Platform</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Skills development and certification programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/20 dark:to-orange-950/20 backdrop-blur-sm hover-glow">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between">
                  <Users className="w-14 h-14 text-amber-600 transition-transform duration-300 group-hover:scale-110" />
                  <Eye className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-3xl font-heading font-semibold tracking-tight">Talent Discovery</CardTitle>
                <CardDescription className="text-lg font-subtitle text-amber-700 dark:text-amber-300 font-semibold tracking-wide">
                  KIDZ LAB ENTERTAINMENT
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  AI-powered talent discovery and booking platform connecting emerging artists 
                  with global opportunities in entertainment and media.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg border border-amber-200/30 hover:border-amber-400/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Cpu className="w-5 h-5 text-amber-600 mr-3" />
                      <h4 className="font-heading font-semibold">AI Talent Matching</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Smart pairing of talent with opportunities</p>
                  </div>
                  <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg border border-amber-200/30 hover:border-amber-400/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-amber-600 mr-3" />
                      <h4 className="font-heading font-semibold">Booking Platform</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Streamlined booking and management system</p>
                  </div>
                  <div className="bg-white/70 dark:bg-slate-800/50 p-4 rounded-lg border border-amber-200/30 hover:border-amber-400/50 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Globe className="w-5 h-5 text-amber-600 mr-3" />
                      <h4 className="font-heading font-semibold">Global Network</h4>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">Connecting Africa to worldwide entertainment markets</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 font-subtitle font-semibold transition-all duration-300 hover:scale-105" asChild>
                  <a href="https://www.kidzlabmodels.com/premium" target="_blank" rel="noopener noreferrer">
                    Explore KIDZ LAB <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
              Transforming Africa's industrial landscape through intelligent automation and human-centered design
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              Learn More About AKOULA
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
