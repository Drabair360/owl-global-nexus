import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Globe, Leaf, TrendingUp } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Our
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent block mt-2">
                Impact
              </span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
              Measuring success through sustainable development, community empowerment, 
              and transformative change across African economies.
            </p>
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="relative h-32 bg-gradient-to-b from-slate-900 to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">SUSTAINABLE DEVELOPMENT</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Our commitment to sustainable development is at the core of everything we do. We strive to create
              lasting positive change in the communities we serve.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Job Creation */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Job Creation</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Creating sustainable employment opportunities for local communities.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-700">5,000+</span>
                <span className="text-sm text-blue-600 font-subtitle">Jobs Created</span>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(34,197,94,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Environmental Impact</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Reducing our carbon footprint and promoting eco-friendly practices.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-700">30%</span>
                <span className="text-sm text-green-600 font-subtitle">Reduced Emissions</span>
              </div>
            </div>

            {/* Community Empowerment */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Community Empowerment</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Empowering local communities through education, training, and resources.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-700">10,000+</span>
                <span className="text-sm text-amber-600 font-subtitle">Lives Impacted</span>
              </div>
            </div>

            {/* Economic Growth */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(147,51,234,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Economic Growth</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Driving economic growth and prosperity through strategic investments.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-700">15%</span>
                <span className="text-sm text-purple-600 font-subtitle">GDP Contribution</span>
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="mt-16">
            <h2 className="text-section text-slate-800 mb-6 text-center font-brand">IMPACT STORIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Story 1 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Empowering Women in Agriculture</h3>
                <p className="text-muted-foreground mb-4 font-body">
                  Through our CAOAGRO initiative, we've provided training and resources to over 500 women farmers,
                  increasing their yields and improving their livelihoods.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-subtitle font-semibold">Read More</a>
              </div>

              {/* Story 2 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(34,197,94,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Digital Literacy for All</h3>
                <p className="text-muted-foreground mb-4 font-body">
                  Our AKOULA platform has enabled digital literacy programs in underserved communities, providing
                  access to education and technology for thousands of individuals.
                </p>
                <a href="#" className="text-green-600 hover:text-green-700 font-subtitle font-semibold">Read More</a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-body-large text-slate-600 mb-8 font-body">
              Join us in our mission to create a better future for Africa.
            </p>
            {/*<Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sophisticated">
              Get Involved
            </Button>*/}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
