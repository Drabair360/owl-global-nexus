
import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const CoreValuesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {/* Global Vision */}
      <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Global Vision</h3>
        <p className="text-muted-foreground mb-4 font-body">
          We envision a world where Africa is at the forefront of innovation and technology.
        </p>
      </div>

      {/* Excellence */}
      <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Award className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Excellence</h3>
        <p className="text-muted-foreground mb-4 font-body">
          We strive for excellence in all our endeavors, setting the highest standards for ourselves and our partners.
        </p>
      </div>

      {/* Community Impact */}
      <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Community Impact</h3>
        <p className="text-muted-foreground mb-4 font-body">
          We are committed to creating sustainable opportunities and transforming lives in the communities we serve.
        </p>
      </div>

      {/* Sustainable Growth */}
      <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Sustainable Growth</h3>
        <p className="text-muted-foreground mb-4 font-body">
          We believe in responsible and sustainable growth that benefits both our stakeholders and the environment.
        </p>
      </div>
    </div>
  );
};

export default CoreValuesSection;
