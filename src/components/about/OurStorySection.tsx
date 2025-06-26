
import React from 'react';

const OurStorySection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-section text-slate-800 mb-6 text-center font-brand">OUR STORY</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-body-large text-slate-600 mb-6 font-body leading-relaxed">
            Founded in 2023, OWL International emerged from a vision to bridge continents through strategic investments and innovative solutions.
            Our journey began with a focus on identifying and nurturing high-potential ventures across Africa, leveraging technology and sustainable practices to drive growth.
          </p>
          <p className="text-body-large text-slate-600 mb-6 font-body leading-relaxed">
            Today, we operate across multiple sectors, from digital innovation and agricultural technology to industrial solutions and creative media.
            Our portfolio companies are interconnected, creating powerful synergies that amplify their impact and contribute to a more prosperous and sustainable future for Africa.
          </p>
        </div>
        <div>
          <img
            src="/placeholder-image.jpg"
            alt="OWL International Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
