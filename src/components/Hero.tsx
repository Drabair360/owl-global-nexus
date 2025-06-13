
import React from 'react';
import HeroHeader from './hero/HeroHeader';
import UnifiedPortfolioWrapper from './hero/UnifiedPortfolioWrapper';
import PortfolioSection from './hero/PortfolioSection';
import Portfolio from './Portfolio';

const Hero = () => {
  return (
    <>
      <HeroHeader />
      <UnifiedPortfolioWrapper>
        <PortfolioSection />
        <Portfolio />
      </UnifiedPortfolioWrapper>
    </>
  );
};

export default Hero;
