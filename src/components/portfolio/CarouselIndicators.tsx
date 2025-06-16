
import React from 'react';
import { PortfolioItem } from './types';

interface CarouselIndicatorsProps {
  items: PortfolioItem[];
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
}

const CarouselIndicators = ({ items, currentIndex, onIndicatorClick }: CarouselIndicatorsProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            h-2 rounded-full transition-all duration-300 cursor-pointer
            ${index === currentIndex ? 'bg-white w-8 scale-125' : 'bg-white/40 hover:bg-white/70 w-2'}
          `}
          onClick={() => onIndicatorClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
