
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';
import { organizationSchema, investmentFirmSchema } from '@/components/seo/StructuredData';

const Index = () => {
  const structuredData = [organizationSchema, investmentFirmSchema];

  return (
    <>
      <SEOHead
        title="OWL International - AI-Powered Investment & Industrial Solutions in Africa"
        description="Transforming Africa through strategic investments in AI-powered industrial solutions. AKOULA platform revolutionizes agro-industry while KIDZ LAB connects African talent globally. Leading investment firm bridging continents."
        keywords="African industrial solutions, AI investment platform, AKOULA industrial intelligence, African agro-industry technology, talent discovery Africa, African startup investment opportunities, industrial intelligence platform, African tech innovation"
        url="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Index;
