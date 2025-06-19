import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Target, Users, Award, Globe, TrendingUp, Mail, Upload, LinkedinIcon, Phone, DollarSign, Shield, Star } from 'lucide-react';
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
    console.log('Form submitted:', formData);
    // Handle form submission
  };
  return <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section text-slate-800 mb-6 font-brand">ELITE BUSINESS INTELLIGENCE NETWORK</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 mb-6 font-body leading-relaxed">
                Owl International seeks seasoned business development professionals with 10+ years of international experience 
                to join our exclusive scout network. You'll identify and evaluate high-impact opportunities across fintech, 
                agritech, real estate, and creative industries throughout Africa.
              </p>
              <p className="text-lg text-slate-600 font-body">This is not just consulting—it's strategic partnership with Africa's most ambitious investment platform, connecting 1+ billion people through transformative business solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scout Advantages */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">EXCLUSIVE ADVANTAGES</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">Join a fascinating business intelligence network in Africa with unparalleled access and rewards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Elite Network Access */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Elite Network Access</h3>
              <p className="text-muted-foreground mb-4 font-body">Direct access to our portfolio ecosystem, C-suite executives, sovereign wealth funds, and institutional investors across Africa and Europe.</p>
            </div>

            {/* Lucrative Compensation */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Lucrative Compensation</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Attractive finder's fees (2-5% of deal value), equity participation in successful ventures, performance bonuses, and annual recognition awards.
              </p>
            </div>

            {/* Strategic Impact */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Strategic Impact</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Shape Africa's business landscape, drive continental transformation, and build your legacy as an architect of the continent's economic future.
              </p>
            </div>

            {/* Professional Recognition */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Professional Recognition</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Association with Africa's premier investment firm, thought leadership opportunities, speaking engagements, and recognition in international business circles.
              </p>
            </div>

            {/* Intelligence Resources */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Strategic Resources</h3>
              <p className="text-muted-foreground mb-4 font-body">
                Proprietary market intelligence, AI-powered due diligence tools, investment frameworks, and comprehensive research support for deal evaluation.
              </p>
            </div>

            {/* Exclusive Access */}
            <div className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-4 text-foreground">Exclusive Opportunities</h3>
              <p className="text-muted-foreground mb-4 font-body">
                First access to pre-IPO opportunities, private equity deals, infrastructure projects, and sovereign investment initiatives across 54 African nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join - Detailed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">QUALIFICATION & APPLICATION PROCESS</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Our rigorous selection process ensures we partner only with the most accomplished business development professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Qualification Criteria */}
            <div>
              <h3 className="text-2xl font-subtitle font-semibold mb-6 text-foreground">Qualification Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body">10+ years of international business development experience with demonstrable track record</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body">Proven success in identifying and closing deals worth $10M+ in emerging markets</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body">Extensive network across fintech, agritech, real estate, or creative industries</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body">Regional expertise in African markets or strong emerging market experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground font-body">Fluency in English and preferably French, Arabic, or Portuguese</p>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div>
              <h3 className="text-2xl font-subtitle font-semibold mb-6 text-foreground">Selection Process</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Initial Application Review</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive evaluation of portfolio, experience, and strategic vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Strategic Assessment</h4>
                    <p className="text-sm text-muted-foreground">Market knowledge evaluation and deal sourcing capability analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Executive Interviews</h4>
                    <p className="text-sm text-muted-foreground">Multi-stage interviews with our investment committee and senior partners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Onboarding Program</h4>
                    <p className="text-sm text-muted-foreground">Comprehensive orientation on investment thesis, market strategies, and success metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">SUCCESS STORIES</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Hear from our elite business scouts who are shaping Africa's investment landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
              </div>
              <p className="text-muted-foreground font-body italic mb-6 leading-relaxed">
                "In 18 months, I've sourced 3 deals worth €47M for Owl's portfolio. The finder's fees alone exceeded my previous annual income, 
                and the network access has transformed my career trajectory completely."
              </p>
              <div className="flex items-center">
                <div>
                  <span className="font-subtitle font-semibold text-foreground block">Dr. Amara Okonkwo</span>
                  <span className="text-sm text-muted-foreground">Former Goldman Sachs VP, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
              </div>
              <p className="text-muted-foreground font-body italic mb-6 leading-relaxed">
                "Owl's intelligence resources are unmatched. Their AI-powered due diligence tools helped me identify a fintech gem in Kenya 
                that's now valued at $200M. The strategic impact is beyond financial—it's transformational."
              </p>
              <div className="flex items-center">
                <div>
                  <span className="font-subtitle font-semibold text-foreground block">Jean-Baptiste Kouassi</span>
                  <span className="text-sm text-muted-foreground">Ex-BCG Partner, Côte d'Ivoire</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 border shadow-sm">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />)}
              </div>
              <p className="text-muted-foreground font-body italic mb-6 leading-relaxed">
                "The professional recognition alone is worth joining. I now speak at Davos, advise African governments, 
                and my LinkedIn shows 'Owl International Business Scout'—doors open that were previously impossible."
              </p>
              <div className="flex items-center">
                <div>
                  <span className="font-subtitle font-semibold text-foreground block">Sarah Al-Rashid</span>
                  <span className="text-sm text-muted-foreground">Former McKinsey Director, Morocco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join - Interactive Application */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-6 font-brand">READY TO JOIN THE ELITE?</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body mb-8">
              Only 50 business scouts will be selected globally. Applications close when positions are filled. 
              Don't miss your opportunity to join Africa's most prestigious business intelligence network.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <p className="text-amber-800 font-semibold">⚡ Limited Time: First 25 approved scouts receive €10,000 signing bonus</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Quick Actions */}
              <div className="space-y-6">
                <h3 className="text-xl font-subtitle font-semibold text-foreground mb-4">Quick Application Options</h3>
                
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-subtitle font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105" onClick={() => window.open('mailto:scouts@owlinternational.com?subject=Business Scout Application - Executive Track&body=Dear Owl International Team,%0D%0A%0D%0AI am interested in joining your elite business scout network. Please find my preliminary information below:%0D%0A%0D%0AName: %0D%0AExperience: %0D%0ARegional Expertise: %0D%0ANotable Deals: %0D%0ALinkedIn: %0D%0A%0D%0AI look forward to discussing this prestigious opportunity.%0D%0A%0D%0ABest regards')}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send Direct Email
                </Button>

                <Button size="lg" variant="outline" className="w-full border-2 border-slate-300 text-slate-700 font-subtitle font-bold py-4 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300" onClick={() => window.open('https://calendly.com/owlinternational/business-scout-screening', '_blank')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Screening Call
                </Button>

                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                  <p className="text-sm text-slate-600 mb-2">Upload Your Executive CV</p>
                  <p className="text-xs text-slate-500">PDF format, max 5MB</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>

              {/* Application Form */}
              <div>
                <h3 className="text-xl font-subtitle font-semibold text-foreground mb-4">Detailed Application Form</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@company.com" required className="mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="experience" className="text-sm font-medium">Years of Experience *</Label>
                      <Input id="experience" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="15+ years" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expertise" className="text-sm font-medium">Industry Expertise *</Label>
                    <Input id="expertise" name="expertise" value={formData.expertise} onChange={handleInputChange} placeholder="Fintech, Agritech, Real Estate, Creative Industries" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="linkedinUrl" className="text-sm font-medium">LinkedIn Profile URL</Label>
                    <div className="relative mt-1">
                      <LinkedinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input id="linkedinUrl" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" className="pl-10" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Notable Deals & Achievements *</Label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Brief description of your most significant deals, their value, and impact..." required rows={4} className="mt-1 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Submit Elite Application
                  </Button>
                </form>

                <p className="text-xs text-slate-500 mt-4 text-center">
                  By applying, you agree to our confidentiality terms and understand that only qualified candidates will be contacted within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Scouts;