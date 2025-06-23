
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScoutsHero from '@/components/scouts/ScoutsHero';
import EliteIntroduction from '@/components/scouts/EliteIntroduction';
import ExclusiveAdvantages from '@/components/scouts/ExclusiveAdvantages';
import QualificationProcess from '@/components/scouts/QualificationProcess';
import SuccessStories from '@/components/scouts/SuccessStories';
import ApplicationSection from '@/components/scouts/ApplicationSection';
import SEOHead from '@/components/seo/SEOHead';
import { breadcrumbSchema } from '@/components/seo/StructuredData';

const Scouts = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Scouts', url: '/scouts' }
  ];

  const structuredData = [breadcrumbSchema(breadcrumbs)];

  return (
    <>
      <SEOHead
        title="OWL Scouts - Elite Investment Scout Program for African Innovation"
        description="Join OWL International's exclusive scout network. Identify and connect exceptional African tech talent and innovation opportunities. Elite program with exclusive benefits and global impact."
        keywords="OWL scouts program, African tech talent scout, innovation scout network, African startup scout, tech talent discovery program, elite scout network Africa"
        url="/scouts"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100">
        <Navbar />
        <ScoutsHero />
        <EliteIntroduction />
        <ExclusiveAdvantages />
        <QualificationProcess />
        <SuccessStories />
        <ApplicationSection />
        <Footer />
      </div>
    </>
  );
};

export default Scouts;
