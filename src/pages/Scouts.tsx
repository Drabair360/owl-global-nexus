
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Target, Users, Award } from 'lucide-react';

const Scouts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-violet-900 via-purple-900 via-indigo-900 to-white overflow-hidden"
        style={{
          background: `linear-gradient(180deg, 
            rgba(76, 29, 149, 1) 0%, 
            rgba(139, 69, 219, 0.98) 15%, 
            rgba(168, 85, 247, 0.95) 30%, 
            rgba(99, 102, 241, 0.85) 50%, 
            rgba(139, 69, 219, 0.65) 70%, 
            rgba(76, 29, 149, 0.35) 85%, 
            rgba(255, 255, 255, 1) 100%)`
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,69,219,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(99,102,241,0.05),transparent_50%,rgba(168,85,247,0.05))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Talent
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-amber-500 bg-clip-text text-transparent block mt-2">
                Scouts
              </span>
            </h1>
            
            <p className="text-body-large text-purple-100 mb-8 max-w-3xl mx-auto font-body">
              Discover exceptional talent and innovative opportunities across Africa. 
              Join our network of scouts shaping the future of business and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">BECOME A SCOUT</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Join our network of talent scouts and help us discover the next generation of innovators, entrepreneurs, and leaders across Africa.
            </p>
          </div>

          {/* Scout Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Access to Opportunities */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Exclusive Access</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Gain access to a curated list of innovative projects, startups, and investment opportunities across Africa.
              </p>
            </div>

            {/* Networking */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Targeted Opportunities</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Connect with founders, investors, and industry leaders to build valuable relationships and expand your network.
              </p>
            </div>

            {/* Recognition */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Community Impact</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Help shape the future of African innovation by identifying and supporting high-potential ventures.
              </p>
            </div>
          </div>

          {/* How to Become a Scout */}
          <div className="mb-16">
            <h2 className="text-section text-slate-800 mb-6 text-center">HOW TO JOIN</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Application Process */}
              <div>
                <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Application Process</h3>
                <ul className="list-disc pl-5 text-muted-foreground font-body">
                  <li>Submit your application form with your background and experience.</li>
                  <li>Our team will review your application and conduct an interview.</li>
                  <li>Successful candidates will be onboarded into our scout network.</li>
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Requirements</h3>
                <ul className="list-disc pl-5 text-muted-foreground font-body">
                  <li>Proven experience in identifying and evaluating talent or investment opportunities.</li>
                  <li>Strong network and connections within the African business ecosystem.</li>
                  <li>Passion for innovation, technology, and sustainable development.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-section text-slate-800 mb-6 text-center">TESTIMONIALS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <p className="text-muted-foreground font-body italic mb-4">
                  "Being a scout has allowed me to connect with incredible founders and contribute to the growth of Africa's innovation ecosystem."
                </p>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-amber-500" />
                  <span className="font-subtitle font-semibold text-foreground">Aisha Diallo</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <p className="text-muted-foreground font-body italic mb-4">
                  "The scout network provides invaluable resources and support, enabling me to identify and support high-potential ventures."
                </p>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-amber-500" />
                  <span className="font-subtitle font-semibold text-foreground">Kwame Nkrumah</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-section text-slate-800 mb-6">READY TO JOIN?</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body mb-8">
              Take the first step towards becoming a talent scout and help us shape the future of African innovation.
            </p>
            {/*<Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sophisticated">
              Apply Now
            </Button>*/}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scouts;
