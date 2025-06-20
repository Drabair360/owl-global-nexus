
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FoundationPyramid from '@/components/impact/FoundationPyramid';
import GlobalContext from '@/components/impact/GlobalContext';
import OutcomeProjections from '@/components/impact/OutcomeProjections';
import SuccessMultiplier from '@/components/impact/SuccessMultiplier';
import ContactModal from '@/components/impact/ContactModal';

const Impact = () => {
  const contactModal = ContactModal();

  // Scroll trigger functionality
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    // Observe all scroll-trigger elements
    const scrollElements = document.querySelectorAll('.scroll-trigger');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-100">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-lime-800 via-green-700 via-emerald-600 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(132,204,22,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Sustainable
              <span className="bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 bg-clip-text text-transparent block mt-2">
                Impact
              </span>
            </h1>
            
            <p className="text-body-large text-green-100 mb-8 max-w-3xl mx-auto font-body">
              Driving positive change across Africa through sustainable investments, innovative solutions, 
              and community-focused initiatives that create lasting prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Redesigned Content with Bottom-Up Sustainability Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Core Philosophy Introduction */}
          <div className="text-center mb-16 animate-institutional-rise scroll-trigger opacity-0 translate-y-8">
            <h2 className="text-section text-slate-800 mb-6 font-brand hover:text-shadow-md transition-all duration-300">BOTTOM-UP SUSTAINABILITY</h2>
            <p className="text-body-large text-slate-600 max-w-4xl mx-auto font-body leading-relaxed">
              We don't build sustainability as an afterthought. Every platform, every algorithm, every partnership 
              is designed from the ground up to create lasting positive impact. Our success is fundamentally 
              tied to the success of the millions of individuals we serve directly or through our customers, across Africa.
            </p>
          </div>

          {/* Enhanced Foundation Ecosystem */}
          <div className="animate-elegant-scale scroll-trigger opacity-0 translate-y-8">
            <FoundationPyramid />
          </div>

          {/* Success Multiplier Philosophy - Enhanced Background */}
          <div className="my-20 animate-institutional-rise scroll-trigger opacity-0 translate-y-8">
            <SuccessMultiplier />
          </div>

          {/* Global Context */}
          <div className="my-20 animate-elegant-scale scroll-trigger opacity-0 translate-y-8">
            <GlobalContext />
          </div>

          {/* Concrete Outcomes by 2030 - Enhanced with Vibrant Glows */}
          <div className="animate-sophisticated-fade scroll-trigger opacity-0 translate-y-8">
            <OutcomeProjections />
          </div>

          {/* Industry Deep Dive - Enhanced Background */}
          <div className="mt-20 bg-gradient-to-br from-slate-200 via-blue-200 to-indigo-200 rounded-3xl p-12 animate-elegant-scale backdrop-blur-sm scroll-trigger opacity-0 translate-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 font-body hover:text-shadow-sm transition-all duration-300">Industry Transformation Impact</h3>
              <p className="text-slate-600 font-body max-w-3xl mx-auto">
                Our integrated approach addresses multiple UN Sustainable Development Goals simultaneously
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">SDG 1, 8, 10</div>
                <div className="text-sm font-semibold text-slate-700 mb-2">Economic Empowerment</div>
                <p className="text-xs text-slate-600">Poverty reduction, decent work, reduced inequalities</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">SDG 2, 12, 15</div>
                <div className="text-sm font-semibold text-slate-700 mb-2">Sustainable Agriculture</div>
                <p className="text-xs text-slate-600">Zero hunger, responsible consumption, life on land</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">SDG 4, 5, 9</div>
                <div className="text-sm font-semibold text-slate-700 mb-2">Digital Inclusion</div>
                <p className="text-xs text-slate-600">Quality education, gender equality, innovation</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">SDG 11, 13, 17</div>
                <div className="text-sm font-semibold text-slate-700 mb-2">Smart Cities</div>
                <p className="text-xs text-slate-600">Sustainable cities, climate action, partnerships</p>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action - Dynamic Green Chameleon Text */}
          <div className="mt-20 text-center py-16 animate-sophisticated-fade scroll-trigger opacity-0 translate-y-8">
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 font-body chameleon-green-text hover:scale-105 transition-all duration-500">
                Join OWL's Sustainable Endeavors
              </h3>
              <p className="text-xl text-slate-700 mb-12 max-w-4xl mx-auto font-body leading-relaxed hover:text-slate-900 transition-colors duration-300">
                Partner with us to build Africa's most sustainable and inclusive economic ecosystem. 
                Together, we're not just creating value—we're transforming lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                <div className="flex flex-wrap gap-12 justify-center">
                  {contactModal.contactTypes.map((contactType) => (
                    <div key={contactType.id} className="flex flex-col items-center group">
                      <div className="mb-4 text-emerald-600 group-hover:text-teal-600 transition-colors duration-300">
                        {React.createElement(contactType.icon, {
                          className: "w-8 h-8 animate-geometric-pulse group-hover:scale-110 transition-transform duration-300"
                        })}
                      </div>
                      {contactModal.renderContactLink(contactType)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
