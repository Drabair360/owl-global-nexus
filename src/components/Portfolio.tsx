
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Settings, Building, Users, ExternalLink, Globe } from 'lucide-react';
import SVGGradients from './portfolio/SVGGradients';
import FlagshipHeader from './portfolio/FlagshipHeader';
import PortfolioCarousel from './portfolio/PortfolioCarousel';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "AKOULA",
      subtitle: "AI Industrial Intelligence Platform - Powering the Future",
      description: "The central AI brain powering our entire ecosystem. AKOULA delivers revolutionary industrial intelligence through integrated platforms, from agro-industrial automation to talent discovery, creating the foundation for Africa's digital transformation.",
      icon: Brain,
      features: ["Industrial Quote Builder SaaS", "B2B Equipment Marketplace", "AI-Powered Analytics"],
      primaryColor: "blue",
      website: "https://www.akoulaa.com/",
      isCore: true
    },
    {
      title: "CAOAGRO.COM",
      subtitle: "AKOULA-Powered Agro-Industrial Solutions",
      description: "Turnkey agro-industrial project management platform powered by AKOULA's AI intelligence. Comprehensive solutions covering design, equipment supply, logistics, assembly, installation, and commissioning for industrial projects across Africa.",
      icon: Settings,
      features: ["Turnkey Solutions", "Supply Chain Management", "AI-Powered Project Intelligence"],
      primaryColor: "emerald",
      website: "https://www.caoagro.com/",
      poweredBy: "AKOULA"
    },
    {
      title: "OWLOMA",
      subtitle: "Strategic Real Estate - Future AKOULA Integration",
      description: "Next-generation real estate technology platform with planned AKOULA AI integration for Q1 2026. Revolutionary property development, investment analytics, and smart city infrastructure across Africa and Europe.",
      icon: Building,
      features: ["PropTech Innovation", "Smart Cities", "Future AI Integration"],
      primaryColor: "amber",
      website: "https://www.owloma.com/",
      launchDate: "Q1 2026"
    },
    {
      title: "KIDZ LAB",
      subtitle: "AKOULA-Enhanced Talent Discovery Platform",
      description: "Revolutionary talent discovery platform powered by AKOULA's advanced AI algorithms. Transforming how agencies discover, match, and book talent through intelligent automation and predictive matching technology.",
      icon: Users,
      features: ["AI Talent Matching", "Automated Booking", "Global Network Analytics"],
      primaryColor: "purple",
      website: "https://www.kidzlabmodels.com/",
      poweredBy: "AKOULA"
    }
  ];

  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <SVGGradients />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FlagshipHeader />

        <PortfolioCarousel items={portfolioItems} />

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-white hover:bg-white text-blue-600 font-subtitle px-8 py-3 rounded-lg transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-xl" 
            asChild
          >
            <a href="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white flex items-center">
                Explore Full Portfolio <ArrowRight className="ml-2" size={20} />
              </span>
              <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
