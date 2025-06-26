
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScoutsHero from '@/components/scouts/ScoutsHero';
import EliteIntroduction from '@/components/scouts/EliteIntroduction';
import ExclusiveAdvantages from '@/components/scouts/ExclusiveAdvantages';
import QualificationProcess from '@/components/scouts/QualificationProcess';
import SuccessStories from '@/components/scouts/SuccessStories';
import ApplicationSection from '@/components/scouts/ApplicationSection';

const Scouts = () => {
  return (
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
  );
};

export default Scouts;
