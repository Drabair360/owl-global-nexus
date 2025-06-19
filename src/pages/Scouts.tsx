import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Target, Users, Award, Globe, TrendingUp, Mail, Upload, LinkedinIcon, Phone, DollarSign, Shield, Star } from 'lucide-react';
import ProfessionalCard from '@/components/scouts/ProfessionalCard';
import ProfessionalForm from '@/components/scouts/ProfessionalForm';
import ProfessionalTestimonial from '@/components/scouts/ProfessionalTestimonial';

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
    console.log('Application submitted:', formData);
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
    <div className="min-h-screen bg-white">
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

      {/* Elite Introduction */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section text-slate-900 mb-6 font-heading animate-institutional-rise">ELITE BUSINESS INTELLIGENCE NETWORK</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-elegant border border-slate-200">
              <p className="text-xl text-slate-700 mb-6 font-body leading-relaxed">
                Owl International seeks seasoned business development professionals with 10+ years of international experience 
                to join our exclusive scout network. You'll identify and evaluate high-impact opportunities across fintech, 
                agritech, real estate, and creative industries throughout Africa.
              </p>
              <p className="text-lg text-blue-600 font-body">This is not just consulting—it's strategic partnership with Africa's most ambitious investment platform, connecting 1+ billion people through transformative business solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scout Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-900 mb-4 font-heading">EXCLUSIVE ADVANTAGES</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">Join the most sophisticated business intelligence network in Africa with unparalleled access and rewards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantagesData.map((advantage, index) => (
              <ProfessionalCard
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

      {/* How to Join */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-900 mb-4 font-heading">SELECTION PROCESS</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Our rigorous assessment process ensures we partner only with the most accomplished business architects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Qualification Criteria */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-slate-200">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-slate-900">Qualification Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 font-body group-hover:text-slate-900 transition-colors duration-300">10+ years of international business development experience with demonstrable track record</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 font-body group-hover:text-slate-900 transition-colors duration-300">Proven success in identifying and closing deals worth EUR 5M+ in emerging markets</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 font-body group-hover:text-slate-900 transition-colors duration-300">Extensive network across fintech, agritech, real estate, or creative industries</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 font-body group-hover:text-slate-900 transition-colors duration-300">Regional expertise in American, European, African markets or strong emerging market experience</p>
                </div>
                <div className="flex items-start space-x-3 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 font-body group-hover:text-slate-900 transition-colors duration-300">Fluency in English and preferably French, Arabic, or Portuguese</p>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="bg-white rounded-2xl p-8 shadow-elegant border border-slate-200">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-slate-900">Application Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Application Review</h4>
                    <p className="text-sm text-slate-600">Comprehensive evaluation of portfolio, experience, and strategic vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Market Assessment</h4>
                    <p className="text-sm text-slate-600">Market knowledge evaluation and deal sourcing capability analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Executive Interview</h4>
                    <p className="text-sm text-slate-600">Multi-stage interviews with our investment committee and senior partners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Onboarding</h4>
                    <p className="text-sm text-slate-600">Comprehensive orientation on investment thesis, market strategies, and success metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-900 mb-4 font-heading">SUCCESS STORIES</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Hear from our elite business architects about their transformative experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <ProfessionalTestimonial
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

      {/* Application Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-900 mb-6 font-heading">JOIN OUR NETWORK</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body mb-8">
              Only 50 professionals will be selected across all regions. Applications are reviewed on a rolling basis. 
              Don't miss your opportunity to join Africa's most prestigious business intelligence network.
            </p>
            <div className="bg-amber-50 border border-amber-200 max-w-2xl mx-auto mb-8 p-4 rounded-lg">
              <p className="text-amber-700 font-semibold">⚡ Early Bird Bonus: First 25 approved scouts receive additional onboarding benefits</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quick Actions */}
              <div className="space-y-6">
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-4">Quick Contact Options</h3>
                
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105" onClick={() => window.open('mailto:scouts@owlinternational.com?subject=Business Scout Application - Executive Track&body=Dear Owl International Team,%0D%0A%0D%0AI am interested in joining your elite business scout network. Please find my preliminary information below:%0D%0A%0D%0AName: %0D%0AExperience: %0D%0ARegional Expertise: %0D%0ANotable Deals: %0D%0ALinkedIn: %0D%0A%0D%0AI look forward to discussing this prestigious opportunity.%0D%0A%0D%0ABest regards')}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Application
                </Button>

                <Button size="lg" variant="outline" className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold py-4 rounded-xl transition-all duration-300" onClick={() => window.open('https://calendly.com/owlinternational/business-scout-screening', '_blank')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Interview
                </Button>

                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm text-slate-600 mb-2">Upload Resume</p>
                  <p className="text-xs text-slate-500">PDF format, max 5MB</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              {/* Application Form */}
              <ProfessionalForm 
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
