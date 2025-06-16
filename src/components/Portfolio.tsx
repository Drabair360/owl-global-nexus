
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
      subtitle: "AI Industrial Intelligence Platform - Powering Africa's Digital Transformation",
      description: "The central back-end AI brain powering a chunk of our ecosystem. AKOULA develops revolutionary industrial intelligence through integrated platforms, from agro-industrial automation to talent discovery, creating a foundation for Africa's digital transformation with advanced machine learning algorithms processing hundreds of thousands of data points daily.",
      icon: Brain,
      features: ["Industrial Quote Builder SaaS", "B2B Equipment Marketplace", "AI-Powered Analytics", "Process Optimization"],
      primaryColor: "blue",
      website: "https://www.akoulaa.com/",
      isCore: true,
      statistics: [
        { value: "100K+", label: "API Calls Daily" },
        { value: "99.8%", label: "AI Accuracy Rate" },
        { value: "54", label: "African Countries" },
        { value: "1B+", label: "People Reached" }
      ],
      synergies: [
        "Powers CAOAGRO's industrial project intelligence and optimization",
        "Enhances KIDZ LAB's talent matching algorithms and booking automation",
        "Provides OWLOMA with smart property analytics and market intelligence",
        "Creates unified data ecosystem across all portfolio platforms"
      ]
    },
    {
      title: "CAOAGRO.COM",
      subtitle: "Pan-African Industrial Project Management - AKOULA-Enhanced Solutions",
      description: "Pan-African champion in turnkey agro-industrial project management, targetting all 54 African countries. Marketplace powered by AKOULA's AI developments, we deliver comprehensive solutions from design to commissioning, scaling to serve 1+ billion end-customers through advanced process engineering and industrial automation.",
      icon: Settings,
      features: ["Pan-African Coverage", "Turnkey Project Delivery", "Process Engineering", "AI-Powered Optimization"],
      primaryColor: "emerald",
      website: "https://www.caoagro.com/",
      poweredBy: "AKOULA",
      statistics: [
        { value: "€10M+", label: "Projects Delivered and in the Happening" },
        { value: "12 to 19 Months", label: "Avg. Completion" },
        { value: "95%", label: "On-Time Delivery" },
        { value: "9", label: "Industrial Sectors" }
      ],
      synergies: [
        "Leverages AKOULA's AI for project cost optimization and timeline prediction",
        "Benefits from KIDZ LAB's talent network for specialized technical roles",
        "Collaborates with OWLOMA for industrial real estate development",
        "Shares market intelligence across the African industrial ecosystem"
      ]
    },
    {
      title: "OWLOMA",
      subtitle: "Strategic Real Estate - Supporting Africa's Business Growth",
      description: "Next-generation real estate technology platform designed to support fast-growing African businesses. With planned AKOULA AI integration for Q1 2026, we're revolutionizing property development, investment analytics, and smart city infrastructure across Africa and Europe to accelerate business expansion.",
      icon: Building,
      features: ["Business-Focused Properties", "Smart City Development", "Cross-Continental Portfolio", "Growth-Oriented Solutions"],
      primaryColor: "amber",
      website: "https://www.owloma.com/",
      launchDate: "Q1 2026",
      statistics: [
        { value: "€25M", label: "Portfolio Value" },
        { value: "8", label: "Target Markets" },
        { value: "500+", label: "Businesses Supported" },
        { value: "85%", label: "Expansion Success Rate" }
      ],
      synergies: [
        "Future AKOULA integration for predictive property analytics and market intelligence",
        "Partners with CAOAGRO for industrial facility development and expansion",
        "Utilizes KIDZ LAB talent for property marketing and creative campaigns",
        "Creates comprehensive business growth ecosystem across real estate and industry"
      ]
    },
    {
      title: "KIDZ LAB",
      subtitle: "Global Talent Discovery - AKOULA-Powered Creative Intelligence",
      description: "Revolutionary talent discovery platform powered by AKOULA's advanced AI algorithms. Transforming the global creative industry through intelligent talent matching, automated booking systems, and predictive career development tools, connecting agencies worldwide with exceptional talent.",
      icon: Users,
      features: ["AI Talent Matching", "Global Network", "Automated Booking", "Career Development"],
      primaryColor: "purple",
      website: "https://www.kidzlabmodels.com/",
      poweredBy: "AKOULA",
      statistics: [
        { value: "95%", label: "Match Success Rate" },
        { value: "48 Hours", label: "Avg. Booking Time" },
        { value: "10,000+", label: "Global Talent Pool" },
        { value: "500+", label: "Partner Agencies" }
      ],
      synergies: [
        "Uses AKOULA's AI for advanced talent-opportunity matching and performance prediction",
        "Provides creative talent for CAOAGRO's marketing and brand development",
        "Supports OWLOMA's property marketing with professional talent and campaigns",
        "Creates talent pipeline for all portfolio companies' creative and technical needs"
      ]
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
