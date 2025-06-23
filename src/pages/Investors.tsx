
import React from 'react';
import Navbar from '@/components/Navbar';
import InvestorLogin from '@/components/InvestorLogin';
import Footer from '@/components/Footer';
import SEOHead from '@/components/seo/SEOHead';
import { investmentFirmSchema, breadcrumbSchema } from '@/components/seo/StructuredData';

const InvestorsPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Investors', url: '/investors' }
  ];

  const structuredData = [
    investmentFirmSchema,
    breadcrumbSchema(breadcrumbs)
  ];

  return (
    <>
      <SEOHead
        title="Investor Portal - OWL International Investment Opportunities"
        description="Access exclusive investment opportunities in African AI-powered industrial solutions. Join strategic investors in AKOULA platform and transformative tech ventures across Africa and Europe."
        keywords="African investment opportunities, AI industrial investment, AKOULA investment platform, African tech investor portal, strategic investment Africa, industrial intelligence investment"
        url="/investors"
        structuredData={structuredData}
      />
      <div className="min-h-screen">
        <Navbar />
        <InvestorLogin />
        <Footer />
      </div>
    </>
  );
};

export default InvestorsPage;
