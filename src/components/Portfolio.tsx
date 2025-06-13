
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Leaf, Building, Users, ExternalLink, Globe } from 'lucide-react';
import SVGGradients from './portfolio/SVGGradients';
import FlagshipHeader from './portfolio/FlagshipHeader';
import PortfolioCarousel from './portfolio/PortfolioCarousel';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "AKOULA",
      subtitle: "AI Industrial Intelligence",
      description: "Revolutionary AI-powered industrial platform connecting African manufacturers with global markets through intelligent automation and predictive analytics.",
      icon: Brain,
      features: ["AI Analytics", "IoT Integration", "Smart Manufacturing"],
      primaryColor: "blue",
      website: "https://www.akoulaa.com/"
    },
    {
      title: "CAOAGRO.COM",
      subtitle: "Smart Agriculture Tech",
      description: "Next-generation agro-industrial marketplace leveraging precision farming, supply chain optimization, and sustainable agricultural practices.",
      icon: Leaf,
      features: ["Smart Farming", "Supply Chain", "Sustainability"],
      primaryColor: "emerald",
      website: "https://www.caoagro.com/"
    },
    {
      title: "OWLOMA",
      subtitle: "Strategic Real Estate",
      description: "Cutting-edge real estate technology platform revolutionizing property development, investment analytics, and smart city infrastructure across Africa.",
      icon: Building,
      features: ["PropTech", "Smart Cities", "Investment Analytics"],
      primaryColor: "amber",
      website: "https://www.owloma.com/"
    },
    {
      title: "KIDZ LAB",
      subtitle: "AI-Powered Talent Discovery",
      description: "Innovative talent discovery and development platform using AI-powered matching algorithms to connect emerging talent with global opportunities.",
      icon: Users,
      features: ["AI Matching", "Talent Development", "Global Network"],
      primaryColor: "purple",
      website: "https://www.kidzlabmodels.com/"
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
            className="bg-slate-700 hover:bg-slate-600 text-white font-subtitle px-8 py-3 rounded-lg transition-all duration-300" 
            asChild
          >
            <a href="/portfolio" onClick={() => window.scrollTo(0, 0)}>
              Explore Full Portfolio <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
