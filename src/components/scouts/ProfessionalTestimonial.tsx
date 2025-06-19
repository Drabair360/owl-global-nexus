
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  testimonial: string;
  name: string;
  title: string;
  delay?: number;
}

const ProfessionalTestimonial = ({ testimonial, name, title, delay = 0 }: TestimonialProps) => {
  return (
    <div 
      className="group bg-white rounded-xl p-8 border border-slate-200 shadow-elegant hover:shadow-sophisticated transition-all duration-300 transform hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Stars Rating */}
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map(i => (
          <Star 
            key={i} 
            className="w-5 h-5 text-amber-400 fill-current" 
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-slate-600 font-body italic mb-6 leading-relaxed">
        "{testimonial}"
      </p>

      {/* Author Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center mr-4">
          <span className="text-slate-700 font-bold text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <span className="font-semibold text-slate-900 block font-heading">
            {name}
          </span>
          <span className="text-sm text-slate-500 font-body">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTestimonial;
