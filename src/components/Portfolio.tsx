
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Settings, Building, Users, Globe, Cpu, Factory, MapPin, Network } from 'lucide-react';
import SVGGradients from './portfolio/SVGGradients';
import FlagshipHeader from './portfolio/FlagshipHeader';
import PortfolioCarousel from './portfolio/PortfolioCarousel';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "AKOULA",
      subtitle: "AI Industrial Intelligence Platform - The Core Engine",
      description: "The central AI brain powering our entire ecosystem. AKOULA delivers revolutionary industrial intelligence through integrated platforms, from agro-industrial automation to talent discovery. Our advanced machine learning algorithms process over 10,000 industrial parameters daily, enabling predictive analytics and intelligent automation across Africa's industrial transformation.",
      icon: Brain,
      features: [
        "Industrial Quote Builder SaaS with 95% accuracy prediction",
        "Africa-Ready Equipment Marketplace (B2B Amazon for Industry)",
        "Micro-Course Platform: Train Your Factory Staff",
        "AI-Assisted Technical Spec Sheet Generator",
        "CapEx + OpEx Factory Cost Estimator",
        "Local Tech Consultant Matching Marketplace"
      ],
      primaryColor: "blue",
      website: "https://www.akoulaa.com/",
      isCore: true
    },
    {
      title: "CAOAGRO.COM",
      subtitle: "Pan-African Industrial Project Management Excellence",
      description: "Pan-African entity specializing in industrial project management for large building projects, with emphasis on process engineering. Leveraging AKOULA's AI applications to enhance our comprehensive project delivery capabilities across design, equipment supply, logistics, assembly, installation, and commissioning for industrial projects throughout Africa.",
      icon: Settings,
      features: [
        "Turnkey Industrial Project Solutions",
        "Advanced Process Engineering & Design",
        "Pan-African Supply Chain Management",
        "AKOULA-Powered Project Intelligence",
        "Equipment Installation & Commissioning",
        "Multi-Country Project Coordination"
      ],
      primaryColor: "emerald",
      website: "https://www.caoagro.com/",
      poweredBy: "AKOULA"
    },
    {
      title: "OWLOMA",
      subtitle: "Strategic Real Estate for Growing African Businesses",
      description: "Strategic real estate entity focused on answering the immediate requirements of promising, fast-growing businesses throughout Africa. We develop real estate technology solutions centered around supporting rapid business expansion, providing location intelligence, flexible workspace solutions, and strategic property positioning for emerging African enterprises.",
      icon: Building,
      features: [
        "Rapid Business Expansion Support",
        "Strategic Location Intelligence",
        "Flexible Workspace Solutions",
        "Property Tech for Business Growth",
        "Pan-African Market Entry Facilitation",
        "Smart City Infrastructure Development"
      ],
      primaryColor: "amber",
      website: "https://www.owloma.com/",
      launchDate: "Q1 2026"
    },
    {
      title: "KIDZ LAB",
      subtitle: "AI-Powered Talent Discovery Revolution",
      description: "AKOULA's advanced AI algorithms have completely transformed talent discovery and matching. Our platform revolutionizes how agencies discover, match, and book talent through intelligent automation, predictive success modeling, and global network analytics. With 98% placement success rate and 50% faster booking times.",
      icon: Users,
      features: [
        "AI Talent Matching with 98% Success Rate",
        "Predictive Career Success Modeling",
        "Automated Booking & Portfolio Management",
        "Global Network Analytics & Insights",
        "Agency Efficiency Optimization",
        "Real-time Market Demand Analysis"
      ],
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
