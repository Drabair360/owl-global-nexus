
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Globe, Heart } from 'lucide-react';
import JobPortal from '@/components/careers/JobPortal';
import SEOHead from '@/components/seo/SEOHead';
import { breadcrumbSchema, faqSchema } from '@/components/seo/StructuredData';

const Careers = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' }
  ];

  const careerFAQs = [
    {
      question: "What career opportunities are available at OWL International?",
      answer: "We offer positions in AI development, industrial solutions, investment analysis, business development, and technical leadership across our African and European operations."
    },
    {
      question: "Do you offer remote work opportunities?",
      answer: "Yes, we offer hybrid and remote positions for qualified candidates, especially for roles in our AI-powered platforms and investment analysis divisions."
    },
    {
      question: "What makes OWL International a unique place to work?",
      answer: "You'll work on cutting-edge AI industrial solutions that transform entire sectors across Africa, while being part of a purpose-driven culture focused on sustainable prosperity and innovation."
    }
  ];

  const structuredData = [
    breadcrumbSchema(breadcrumbs),
    faqSchema(careerFAQs)
  ];

  return (
    <>
      <SEOHead
        title="Careers at OWL International - Join Africa's Leading Tech Innovation Team"
        description="Build your future with OWL International. Join our team transforming Africa through AI-powered industrial solutions, AKOULA platform, and strategic investments. Apply for positions opening S2 2025 & 2026."
        keywords="OWL International careers, African tech jobs, AI industrial solutions careers, AKOULA platform jobs, African investment firm careers, tech innovation jobs Africa"
        url="/careers"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-100">
        <Navbar />
        
        {/* Hero Section with gradient to white */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-rose-800 via-pink-700 via-orange-600 to-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.10),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
            <div className="animate-sophisticated-fade">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
                Build Your
                <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-orange-600 bg-clip-text text-transparent block mt-2">
                  Future
                </span>
                <span className="block mt-2">With Us</span>
              </h1>
              
              <p className="text-body-large text-pink-100 mb-8 max-w-3xl mx-auto font-body">
                Join OWL International and be part of a team that's transforming Africa through innovation, 
                technology, and strategic investments. Shape the future while building your career.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                Why Choose 
                <span className="bg-gradient-to-r from-rose-500 via-pink-600 to-orange-500 bg-clip-text text-transparent"> OWL International</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
                We're not just building companies—we're crafting the future of Africa through visionary investments, 
                cutting-edge technology, and sustainable prosperity that creates lasting impact for communities worldwide.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Innovation at Scale</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  Work on cutting-edge projects that transform entire industries across Africa and beyond.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Global Impact</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  Your work creates lasting prosperity for communities while building sustainable business solutions.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Purpose-Driven Culture</h3>
                <p className="text-gray-600 leading-relaxed font-body">
                  Be part of a team that values cultural understanding, visionary thinking, and authentic impact.
                </p>
              </div>
            </div>

            {/* Job Portal */}
            <JobPortal />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Careers;
