import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Target, Users, Award, Globe, TrendingUp, Mail, Upload, LinkedinIcon, Phone, DollarSign, Shield, Star } from 'lucide-react';
import QuantumBackground from '@/components/futuristic/QuantumBackground';
import FuturisticCard from '@/components/futuristic/FuturisticCard';
import HolographicForm from '@/components/futuristic/HolographicForm';
import HolographicTestimonial from '@/components/futuristic/HolographicTestimonial';

const Scouts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    expertise: '',
    linkedinUrl: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Neural handshake initiated:', formData);
    // Handle form submission
  };

  const advantagesData = [
    {
      icon: Globe,
      title: "Elite Network Access",
      description: "Direct access to our portfolio ecosystem, C-suite executives, sovereign wealth funds, and institutional investors across Africa and Europe."
    },
    {
      icon: DollarSign,
      title: "Lucrative Compensation",
      description: "Attractive finder's fees (2-5% of deal value), equity participation in successful ventures, performance bonuses, and annual recognition awards."
    },
    {
      icon: TrendingUp,
      title: "Strategic Impact",
      description: "Shape Africa's business landscape, drive continental transformation, and build your legacy as an architect of the continent's economic future."
    },
    {
      icon: Award,
      title: "Professional Recognition",
      description: "Association with Africa's premier investment firm, thought leadership opportunities, speaking engagements, and recognition in international business circles."
    },
    {
      icon: Shield,
      title: "Strategic Resources",
      description: "Proprietary market intelligence, AI-powered due diligence tools, investment frameworks, and comprehensive research support for deal evaluation."
    },
    {
      icon: Star,
      title: "Exclusive Opportunities",
      description: "First access to pre-IPO opportunities, private equity deals, infrastructure projects, and sovereign investment initiatives across 54 African nations."
    }
  ];

  const testimonialsData = [
    {
      testimonial: "In 18 months, I've sourced 3 deals worth €47M for Owl's portfolio. The finder's fees alone exceeded my previous annual income, and the network access has transformed my career trajectory completely.",
      name: "Dr. Amara Okonkwo",
      title: "Former Goldman Sachs VP, Nigeria"
    },
    {
      testimonial: "Owl's intelligence resources are unmatched. Their AI-powered due diligence tools helped me identify a fintech gem in Kenya that's now valued at $200M. The strategic impact is beyond financial—it's transformational.",
      name: "Jean-Baptiste Kouassi",
      title: "Ex-BCG Partner, Côte d'Ivoire"
    },
    {
      testimonial: "The professional recognition alone is worth joining. I now speak at Davos, advise African governments, and my LinkedIn shows 'Owl International Business Scout'—doors open that were previously impossible.",
      name: "Sarah Al-Rashid",
      title: "Former McKinsey Director, Morocco"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <QuantumBackground />
      <Navbar />
      
      {/* Hero Section - Keep exactly as requested */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-violet-800 via-purple-700 via-indigo-600 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,69,219,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(99,102,241,0.05),transparent_50%,rgba(168,85,247,0.05))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Business
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-amber-500 bg-clip-text text-transparent block mt-2">
                Scouts
              </span>
            </h1>
            
            <p className="text-body-large text-purple-100 mb-8 max-w-3xl mx-auto font-body">Join Africa's most exclusive network of business intelligence professionals. Scout transformative opportunities across our portfolio ecosystem and shape the future of continental commerce.</p>
          </div>
        </div>
      </section>

      {/* Elite Introduction - Futuristic Transform */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-section text-holographic mb-6 font-brand animate-institutional-rise">ELITE BUSINESS INTELLIGENCE NETWORK</h2>
            <div className="max-w-4xl mx-auto plasma-border p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl">
              <p className="text-xl text-slate-300 mb-6 font-body leading-relaxed">
                Owl International seeks seasoned business development professionals with 10+ years of international experience 
                to join our exclusive scout network. You'll identify and evaluate high-impact opportunities across fintech, 
                agritech, real estate, and creative industries throughout Africa.
              </p>
              <p className="text-lg text-cyan-300 font-body">This is not just consulting—it's strategic partnership with Africa's most ambitious investment platform, connecting 1+ billion people through transformative business solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scout Advantages - Futuristic Transform */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-section text-holographic mb-4 font-brand">EXCLUSIVE ADVANTAGES</h2>
            <p className="text-body-large text-slate-300 max-w-3xl mx-auto font-body">Join a fascinating business intelligence network in Africa with unparalleled access and rewards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantagesData.map((advantage, index) => (
              <FuturisticCard
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Join - Futuristic Transform */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-section text-holographic mb-4 font-brand">QUANTUM SELECTION PROTOCOL</h2>
            <p className="text-body-large text-slate-300 max-w-3xl mx-auto font-body">
              Our neural assessment matrix ensures we partner only with the most accomplished business architects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Qualification Criteria */}
            <div className="plasma-border p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl">
              <h3 className="text-2xl font-subtitle font-semibold mb-6 text-holographic">Neural Compatibility Matrix</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group hover-morph">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 quantum-trail"></div>
                  <p className="text-slate-300 font-body group-hover:text-white transition-colors duration-300">10+ years of international business development experience with demonstrable track record</p>
                </div>
                <div className="flex items-start space-x-3 group hover-morph">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 quantum-trail"></div>
                  <p className="text-slate-300 font-body group-hover:text-white transition-colors duration-300">Proven success in identifying and closing deals worth EUR 5M+ in emerging markets</p>
                </div>
                <div className="flex items-start space-x-3 group hover-morph">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0 quantum-trail"></div>
                  <p className="text-slate-300 font-body group-hover:text-white transition-colors duration-300">Extensive network across fintech, agritech, real estate, or creative industries</p>
                </div>
                <div className="flex items-start space-x-3 group hover-morph">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0 quantum-trail"></div>
                  <p className="text-slate-300 font-body group-hover:text-white transition-colors duration-300">Regional expertise in American, European, African markets or strong emerging market experience</p>
                </div>
                <div className="flex items-start space-x-3 group hover-morph">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 quantum-trail"></div>
                  <p className="text-slate-300 font-body group-hover:text-white transition-colors duration-300">Fluency in English and preferably French, Arabic, or Portuguese</p>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="plasma-border p-8 rounded-2xl bg-slate-900/50 backdrop-blur-xl">
              <h3 className="text-2xl font-subtitle font-semibold mb-6 text-holographic">Dimensional Assessment Sequence</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover-morph">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:animate-pulse">1</div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-1">Neural Pattern Analysis</h4>
                    <p className="text-sm text-slate-400">Comprehensive evaluation of portfolio, experience, and strategic vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover-morph">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:animate-pulse">2</div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">Quantum Market Resonance</h4>
                    <p className="text-sm text-slate-400">Market knowledge evaluation and deal sourcing capability analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover-morph">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:animate-pulse">3</div>
                  <div>
                    <h4 className="font-semibold text-pink-300 mb-1">Executive Neural Link</h4>
                    <p className="text-sm text-slate-400">Multi-stage interviews with our investment committee and senior partners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover-morph">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:animate-pulse">4</div>
                  <div>
                    <h4 className="font-semibold text-amber-300 mb-1">Consciousness Upload Protocol</h4>
                    <p className="text-sm text-slate-400">Comprehensive orientation on investment thesis, market strategies, and success metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Futuristic Transform */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-section text-holographic mb-4 font-brand">NEURAL TESTIMONIAL MATRIX</h2>
            <p className="text-body-large text-slate-300 max-w-3xl mx-auto font-body">
              Transmitted experiences from our elite quantum business architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <HolographicTestimonial
                key={index}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                title={testimonial.title}
                delay={index * 0.3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Join - Futuristic Transform */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-section text-holographic mb-6 font-brand">INITIATE QUANTUM CONNECTION</h2>
            <p className="text-body-large text-slate-300 max-w-3xl mx-auto font-body mb-8">
              Only 50 neural architects will be selected across dimensional boundaries. Quantum portals close when consciousness reaches capacity. 
              Don't miss your opportunity to transcend into Africa's most prestigious business intelligence network.
            </p>
            <div className="plasma-border max-w-2xl mx-auto mb-8 p-4 rounded-lg bg-amber-900/20 backdrop-blur-sm">
              <p className="text-amber-300 font-semibold">⚡ Quantum Enhancement: First 25 approved architects receive neural amplification bonus</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quick Actions - Futuristic Transform */}
              <div className="space-y-6">
                <h3 className="text-xl font-subtitle font-semibold text-holographic mb-4">Rapid Neural Interface Options</h3>
                
                <Button size="lg" className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 plasma-border scan-lines" onClick={() => window.open('mailto:scouts@owlinternational.com?subject=Business Scout Application - Executive Track&body=Dear Owl International Team,%0D%0A%0D%0AI am interested in joining your elite business scout network. Please find my preliminary information below:%0D%0A%0D%0AName: %0D%0AExperience: %0D%0ARegional Expertise: %0D%0ANotable Deals: %0D%0ALinkedIn: %0D%0A%0D%0AI look forward to discussing this prestigious opportunity.%0D%0A%0D%0ABest regards')}>
                  <Mail className="w-5 h-5 mr-2" />
                  Quantum Communication Link
                </Button>

                <Button size="lg" variant="outline" className="w-full border-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 font-bold py-4 rounded-xl transition-all duration-300 plasma-border magnetic-field" onClick={() => window.open('https://calendly.com/owlinternational/business-scout-screening', '_blank')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Neural Frequency Alignment
                </Button>

                <div className="border-2 border-dashed border-cyan-500 rounded-xl p-6 text-center hover:border-purple-400 transition-colors cursor-pointer plasma-border volumetric-light">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <p className="text-sm text-cyan-300 mb-2">Upload Neural Blueprint</p>
                  <p className="text-xs text-slate-500">Quantum PDF format, max 5MB</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              {/* Application Form - Futuristic Transform */}
              <HolographicForm 
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Scouts;
