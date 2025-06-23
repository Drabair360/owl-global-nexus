
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Leaf, Building, Palette } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';
import PortfolioItemCard from '@/components/portfolio/PortfolioItemCard';
import PortfolioSynergySection from '@/components/portfolio/PortfolioSynergySection';
import InvestmentPhilosophySection from '@/components/portfolio/InvestmentPhilosophySection';
import PortfolioPerformanceSection from '@/components/portfolio/PortfolioPerformanceSection';

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

      {/* Flagship Ventures Section */}
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
              <PortfolioItemCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Synergy Section */}
      <PortfolioSynergySection />

      {/* Investment Philosophy Section */}
      <InvestmentPhilosophySection />

      {/* Portfolio Performance Section */}
      <PortfolioPerformanceSection />

      <Footer />
    </div>
  );
};

export default PortfolioPage;
