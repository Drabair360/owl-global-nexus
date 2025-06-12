
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Brain, Zap, Target, ArrowRight, Sparkles, Globe, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import GeometricPattern from '@/components/GeometricPattern';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.1),transparent_50%)]" />
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white mb-6 leading-tight">
              Next-Generation
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
              Revolutionary AI-powered platforms and industrial solutions that transform businesses, 
              communities, and entire industries across Africa and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-body font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105" asChild>
                <Link to="/portfolio">
                  Explore Our Solutions <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AKOULA Platform Section */}
      <section className="py-20 bg-background relative">
        <GeometricPattern variant="subtle" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              AKOULA: AI-Powered Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Our flagship AI platform revolutionizing requirement-offer matching across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Brain className="w-12 h-12 text-blue-600 mb-4" />
                  <Sparkles className="w-6 h-6 text-amber-500" />
                </div>
                <CardTitle className="text-2xl font-heading font-semibold">Industrial Intelligence</CardTitle>
                <CardDescription className="text-lg font-body">
                  AI-driven agro-industrial solutions for quote building and equipment matching
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-body">
                  Revolutionary automated quote builder that matches industrial requirements with optimal equipment solutions, 
                  transforming how agro-industrial projects are conceived and executed across Africa.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-body">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span>Automated industrial quote generation</span>
                  </div>
                  <div className="flex items-center text-sm font-body">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span>Equipment marketplace & matching</span>
                  </div>
                  <div className="flex items-center text-sm font-body">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span>Training platform integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Target className="w-12 h-12 text-purple-600 mb-4" />
                  <Zap className="w-6 h-6 text-amber-500" />
                </div>
                <CardTitle className="text-2xl font-heading font-semibold">Talent Discovery</CardTitle>
                <CardDescription className="text-lg font-body">
                  KIDZ LAB - AI-powered entertainment and talent booking platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-body">
                  Cutting-edge AI technology that discovers, nurtures, and connects talent with opportunities, 
                  revolutionizing the entertainment industry across Africa and beyond.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-body">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span>AI-powered talent discovery</span>
                  </div>
                  <div className="flex items-center text-sm font-body">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span>Automated booking platform</span>
                  </div>
                  <div className="flex items-center text-sm font-body">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span>Global opportunity matching</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 font-body" asChild>
                  <a href="https://www.kidzlabmodels.com/premium" target="_blank" rel="noopener noreferrer">
                    Explore KIDZ LAB <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <Cpu className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground font-body">Advanced algorithms that learn and adapt to optimize matching accuracy</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Global Network</h3>
              <p className="text-muted-foreground font-body">Connecting opportunities and talent across continents seamlessly</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-border hover:shadow-lg transition-all duration-300">
              <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Enterprise Ready</h3>
              <p className="text-muted-foreground font-body">Scalable solutions designed for enterprise-level implementations</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
