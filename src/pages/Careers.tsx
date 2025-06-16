import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Users, TrendingUp, Heart, Globe, Lightbulb, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-100">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-rose-900 via-pink-900 via-orange-900 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Build Your
              <span className="bg-gradient-to-r from-rose-400 via-pink-500 to-orange-600 bg-clip-text text-transparent block mt-2">
                Future
              </span>
              <span className="block mt-2">With Us</span>
            </h1>
            
            <p className="text-body-large text-pink-100 mb-8 max-w-3xl mx-auto font-body">
              Join OWL International and be part of a team that's transforming Africa through innovation, 
              technology, and strategic investments. Shape the future while building your career.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        {/* Section Header */}
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Why Choose 
              <span className="bg-gradient-to-r from-rose-500 via-pink-600 to-orange-500 bg-clip-text text-transparent"> OWL International</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
              We're not just building companies—we're crafting the future of Africa through visionary investments, 
              cutting-edge technology, and sustainable prosperity that creates lasting impact for communities worldwide.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Innovation at Scale</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Work on cutting-edge projects that transform entire industries across Africa and beyond.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Global Impact</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Your work creates lasting prosperity for communities while building sustainable business solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-subtitle">Purpose-Driven Culture</h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Be part of a team that values cultural understanding, visionary thinking, and authentic impact.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">OPEN POSITIONS</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              We're always looking for exceptional talent to join our mission of transforming Africa through strategic investments and innovative technology.
            </p>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Senior Investment Analyst */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 font-subtitle">Senior Investment Analyst</h3>
                  <p className="text-gray-600 font-body">Strategic Investments</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-body">
                Lead investment analysis and due diligence for high-impact ventures across Africa's emerging markets, 
                identifying opportunities that create sustainable value and community prosperity.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 font-body">
                  <MapPin className="w-4 h-4 mr-2" />
                  Paris, France / Remote
                </div>
                <div className="flex items-center text-sm text-gray-600 font-body">
                  <Clock className="w-4 h-4 mr-2" />
                  Full-time
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Strategy</span>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white font-subtitle">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* AI Research Engineer */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 font-subtitle">AI Research Engineer</h3>
                  <p className="text-gray-600 font-body">AKOULA Platform</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-body">
                Pioneer next-generation AI solutions for industrial intelligence, developing algorithms that empower 
                Africa's agro-industrial transformation with eagle-like vision and shark-like speed.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 font-body">
                  <MapPin className="w-4 h-4 mr-2" />
                  Nairobi, Kenya
                </div>
                <div className="flex items-center text-sm text-gray-600 font-body">
                  <Clock className="w-4 h-4 mr-2" />
                  Full-time
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">AI/ML</span>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white font-subtitle">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Sustainable Agriculture Lead */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-green-500 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 font-subtitle">Sustainable Agriculture Lead</h3>
                  <p className="text-gray-600 font-body">CAOAGRO Initiative</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed font-body">
                Drive revolutionary sustainable farming practices combining IoT technology, data analytics, 
                and traditional wisdom to optimize African agricultural systems for future generations.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 font-body">
                  <MapPin className="w-4 h-4 mr-2" />
                  Accra, Ghana
                </div>
                <div className="flex items-center text-sm text-gray-600 font-body">
                  <Clock className="w-4 h-4 mr-2" />
                  Full-time
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">AgTech</span>
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-subtitle">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-rose-500 via-pink-600 to-orange-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 font-heading">Ready to Transform Africa?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto font-body">
              Don't see the perfect role? We're always looking for exceptional talent who share our vision 
              of creating sustainable prosperity through strategic investments and innovative technology.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 font-subtitle"
            >
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
