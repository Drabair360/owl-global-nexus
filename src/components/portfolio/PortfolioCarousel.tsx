
import React, { useState, useEffect } from 'react';
import { PortfolioItem } from './types';
import PortfolioCard from './PortfolioCard';
import CarouselNavigation from './CarouselNavigation';
import CarouselIndicators from './CarouselIndicators';

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

const PortfolioCarousel = ({ items }: PortfolioCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-[635px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredCard(null);
      }}
    >
      <CarouselNavigation onPrevious={prevSlide} onNext={nextSlide} />

      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <PortfolioCard
            key={index}
            item={item}
            index={index}
            isHovered={hoveredCard === index}
            onMouseEnter={() => setHoveredCard(index)}
          />
        ))}
      </div>
      
      <CarouselIndicators 
        items={items} 
        currentIndex={currentIndex} 
        onIndicatorClick={handleIndicatorClick} 
      />
    </div>
  );
};

export default PortfolioCarousel;
