
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/about/HeroSection';
import VisionSection from '@/components/about/VisionSection';
import OurStorySection from '@/components/about/OurStorySection';
import CEOSection from '@/components/about/CEOSection';

const About = () => {
  return (
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
  );
};

export default About;
