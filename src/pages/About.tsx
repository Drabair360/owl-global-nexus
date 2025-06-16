import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-800 via-blue-800 via-indigo-700 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              About
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent block mt-2">
                OWL International
              </span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
              Pioneering transformative investments across Africa through strategic vision, 
              innovative technology, and sustainable development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">OUR VISION</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              To lead Africa's transformation through strategic investments, innovative technology, and sustainable development initiatives.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Innovation */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Global Vision</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We envision a world where Africa is at the forefront of innovation and technology.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We strive for excellence in all our endeavors, setting the highest standards for ourselves and our partners.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Community Impact</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We are committed to creating sustainable opportunities and transforming lives in the communities we serve.
              </p>
            </div>

            {/* Sustainability */}
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

          {/* Our Story */}
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

          {/* Our Team */}
          <div>
            <h2 className="text-section text-slate-800 mb-6 text-center font-brand">OUR TEAM</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto text-center mb-12 font-body">
              Meet the dedicated individuals driving OWL International's mission, bringing diverse expertise and a shared passion for transformative change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">John Doe</h3>
                <p className="text-muted-foreground mb-4 font-body text-center">CEO</p>
                <p className="text-muted-foreground font-body text-center">
                  Visionary leader with a passion for innovation and sustainable development.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">Jane Smith</h3>
                <p className="text-muted-foreground mb-4 font-body text-center">CTO</p>
                <p className="text-muted-foreground font-body text-center">
                  Technology expert driving our digital transformation initiatives.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">David Lee</h3>
                <p className="text-muted-foreground mb-4 font-body text-center">COO</p>
                <p className="text-muted-foreground font-body text-center">
                  Operations guru ensuring seamless execution and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
