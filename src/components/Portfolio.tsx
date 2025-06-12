
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Factory, Cpu, Sparkles, MapPin, Building2 } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const Portfolio = () => {
  return (
    <section className="py-20 bg-background relative">
      <GeometricPattern variant="background" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
            Our Investment Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Strategic investments across industries, continents, and technologies that drive meaningful change
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {/* CAOAGRO Division */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Factory className="w-12 h-12 text-green-600 mb-4" />
                <MapPin className="w-6 h-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl font-heading font-semibold">CAOAGRO.COM</CardTitle>
              <CardDescription className="text-lg font-body">
                Industrial Turkey Project Management - West, East & North Africa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-body">
                Specialized turnkey project design office focusing on cocoa bean transformation, 
                featuring cutting-edge German process equipment and Chinese industrial infrastructure.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  <span>Metallic structures & industrial buildings</span>
                </div>
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  <span>Storage tanks, silos & handling equipment</span>
                </div>
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  <span>Cocoa processing to mass, powder & liquor</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 font-body" asChild>
                <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer">
                  Visit CAOAGRO.COM <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* AKOULA Division */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <CardTitle className="text-2xl font-heading font-semibold">AKOULA Platform</CardTitle>
              <CardDescription className="text-lg font-body">
                AI-Powered Requirement-Offer Matching Ecosystems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-body">
                Revolutionary automated matching platforms transforming agro-industry operations 
                and talent discovery through cutting-edge AI technology.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                  <h4 className="font-heading font-semibold text-sm">Agro-Industry Suite</h4>
                  <p className="text-xs text-muted-foreground font-body">Industrial Quote Builder, Equipment Marketplace, Training Platform</p>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                  <h4 className="font-heading font-semibold text-sm">KIDZ LAB Entertainment</h4>
                  <p className="text-xs text-muted-foreground font-body">AI-powered talent discovery and booking platform</p>
                </div>
              </div>
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 font-body" asChild>
                <a href="https://www.kidzlabmodels.com/premium" target="_blank" rel="noopener noreferrer">
                  Explore KIDZ LAB <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Real Estate Division */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 lg:col-span-2 xl:col-span-1">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Building2 className="w-12 h-12 text-amber-600 mb-4" />
                <MapPin className="w-6 h-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl font-heading font-semibold">Real Estate Portfolio</CardTitle>
              <CardDescription className="text-lg font-body">
                Strategic Property Investments - France, Côte d'Ivoire & South Africa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-body">
                Premium real estate developments combining corporate headquarters, 
                residential communities, and exclusive commercial spaces across three strategic markets.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span>Paris corporate headquarters & offices</span>
                </div>
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span>Abidjan mixed-use developments</span>
                </div>
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span>Cape Town luxury residential projects</span>
                </div>
                <div className="flex items-center text-sm font-body">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                  <span>Exclusive commercial developments</span>
                </div>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg">
                <h4 className="font-heading font-semibold text-sm text-amber-700 dark:text-amber-300">Coming Soon</h4>
                <p className="text-xs text-muted-foreground font-body">Exclusive investment opportunities in emerging markets</p>
              </div>
              <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 font-body" disabled>
                <span>Portfolio Launching Q2 2025</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6 font-body">
            Headquartered in Paris, driving innovation across continents
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full">
            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
            <span className="text-sm font-medium font-body">47 Boulevard de Courcelles, 75008 Paris, France</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
