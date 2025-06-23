
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/about/HeroSection';
import VisionSection from '@/components/about/VisionSection';
import OurStorySection from '@/components/about/OurStorySection';
import CEOSection from '@/components/about/CEOSection';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, breadcrumbSchema } from '@/components/seo/StructuredData';

const About = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ];

  const structuredData = [
    organizationSchema,
    breadcrumbSchema(breadcrumbs)
  ];

  return (
    <>
      <SEOHead
        title="About OWL International - Leading African Innovation & Investment Firm"
        description="Learn about OWL International's mission to transform Africa through strategic investments in AI-powered industrial solutions. Discover our vision, leadership, and commitment to sustainable prosperity across continents."
        keywords="OWL International company, African investment firm, AI industrial solutions company, AKOULA platform, African tech innovation leadership, sustainable prosperity Africa"
        url="/about"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <HeroSection />
        <VisionSection />

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <OurStorySection />
            <CEOSection />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
