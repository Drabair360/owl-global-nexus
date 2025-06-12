import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Users, TrendingUp, Heart, Globe, Lightbulb, MapPin, Clock } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Build Your
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-600 bg-clip-text text-transparent block mt-2">
                Future
              </span>
              <span className="block mt-2">With Us</span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
              Join OWL International and be part of a team that's transforming Africa through innovation, 
              technology, and strategic investments. Shape the future while building your career.
            </p>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="relative h-32 bg-gradient-to-b from-slate-900 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">CAREER OPPORTUNITIES</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Explore our open positions and find out how you can contribute to our vision of transforming Africa through innovation and technology.
            </p>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job 1 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-subtitle font-semibold text-foreground">AI Engineer</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-body">
                Develop and implement AI solutions for our AKOULA platform.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <MapPin className="w-4 h-4 mr-2" />
                Paris, France
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 mr-2" />
                Full-time
              </div>
              {/*<Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-subtitle font-medium mt-4">
                Apply Now
              </Button>*/}
            </div>

            {/* Job 2 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-subtitle font-semibold text-foreground">Agronomist</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-body">
                Drive sustainable farming practices with CAOAGRO in Africa.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <MapPin className="w-4 h-4 mr-2" />
                Nairobi, Kenya
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 mr-2" />
                Full-time
              </div>
              {/*<Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-subtitle font-medium mt-4">
                Apply Now
              </Button>*/}
            </div>

            {/* Job 3 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-amber-500 mr-3" />
                <h3 className="text-xl font-subtitle font-semibold text-foreground">Automation Specialist</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-body">
                Implement advanced automation solutions with OWLOMA.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <MapPin className="w-4 h-4 mr-2" />
                Lagos, Nigeria
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 mr-2" />
                Full-time
              </div>
              {/*<Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-medium mt-4">
                Apply Now
              </Button>*/}
            </div>

            {/* Job 4 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-subtitle font-semibold text-foreground">Content Creator</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-body">
                Develop engaging content for KIDZ LAB's media platforms.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <MapPin className="w-4 h-4 mr-2" />
                Dakar, Senegal
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 mr-2" />
                Full-time
              </div>
              {/*<Button size="sm" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-subtitle font-medium mt-4">
                Apply Now
              </Button>*/}
            </div>

            {/* Job 5 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-subtitle font-semibold text-foreground">Data Scientist</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-body">
                Analyze data to drive strategic decisions across our portfolio.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <MapPin className="w-4 h-4 mr-2" />
                Johannesburg, South Africa
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 mr-2" />
                Full-time
              </div>
              {/*<Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-subtitle font-medium mt-4">
                Apply Now
              </Button>*/}
            </div>

            {/* Job 6 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-xl font-subtitle font-semibold text-foreground">Sustainability Manager</h3>
              </div>
              <p className="text-muted-foreground mb-4 font-body">
                Lead sustainability initiatives across our investments.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <MapPin className="w-4 h-4 mr-2" />
                Accra, Ghana
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-2 font-body">
                <Clock className="w-4 h-4 mr-2" />
                Full-time
              </div>
              {/*<Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-subtitle font-medium mt-4">
                Apply Now
              </Button>*/}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-body-large text-slate-600 mb-8 font-body">
              Don't see a position that fits your skills? Send us your resume and tell us how you can contribute to our mission.
            </p>
            {/*<Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sophisticated">
              Contact Us
            </Button>*/}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
