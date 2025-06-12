import React from 'react';
import { Zap, Leaf, Cog, Camera, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-section text-slate-800 mb-4">OUR INVESTMENTS</h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
            Explore our diverse portfolio of innovative ventures, driving sustainable growth and creating lasting impact across various sectors in Africa and beyond.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Digital Innovation */}
          <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Digital Innovation</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Leading the digital transformation with cutting-edge AI platforms and innovative solutions
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AKOULA Platform</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI Solutions</span>
            </div>
          </div>

          {/* Agricultural Technology */}
          <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Agricultural Technology</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Revolutionizing African agriculture through technology and sustainable farming practices
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">CAOAGRO</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Smart Farming</span>
            </div>
          </div>

          {/* Industrial Solutions */}
          <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Cog className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Industrial Solutions</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Advanced manufacturing and industrial automation for sustainable development
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">OWLOMA</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Automation</span>
            </div>
          </div>

          {/* Creative & Media */}
          <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Creative & Media</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Innovative media production and creative content solutions across Africa
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">KIDZ LAB</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Content Creation</span>
            </div>
          </div>

          {/* Energy Solutions */}
          <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Energy Solutions</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Sustainable energy projects powering Africa's future development
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Renewable Energy</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Grid Solutions</span>
            </div>
          </div>

          {/* Financial Technology */}
          <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Financial Technology</h3>
            <p className="text-muted-foreground mb-4 font-body">
              Innovative fintech solutions enabling financial inclusion across Africa
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Payment Systems</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Blockchain</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-body-large text-slate-600 mb-8 font-body">
            Ready to explore partnership opportunities or learn more about our investment strategy?
          </p>
          {/*<Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sophisticated">
            Contact Us
          </Button>*/}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
