
import React from 'react';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioPage;
