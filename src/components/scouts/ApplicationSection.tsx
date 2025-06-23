
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Upload, LinkedinIcon } from 'lucide-react';

const ApplicationSection = () => {
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-section text-slate-800 mb-6 font-brand">READY TO JOIN OWL'S BUSINESS SCOUTS?</h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body mb-8">
            Only 50 business scouts will be selected globally. Applications close when positions are filled. 
            Don't miss your opportunity to join Africa's most prestigious business intelligence network.
          </p>
          <div className="bg-amber-50/60 md:bg-amber-50/40 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
            <p className="text-amber-800 font-semibold">⚡ Limited Time: First 25 approved scouts receive signing welcome package</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-xl font-subtitle font-semibold text-foreground mb-4">Quick Application Options</h3>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-subtitle font-bold py-4 rounded-xl transition-all duration-300 md:transform md:hover:scale-105 transform hover:scale-102" onClick={() => window.open('mailto:scouts@owlinternational.com?subject=Business Scout Application - Executive Track&body=Dear Owl International Team,%0D%0A%0D%0AI am interested in joining your elite business scout network. Please find my preliminary information below:%0D%0A%0D%0AName: %0D%0AExperience: %0D%0ARegional Expertise: %0D%0ANotable Deals: %0D%0ALinkedIn: %0D%0A%0D%0AI look forward to discussing this prestigious opportunity.%0D%0A%0D%0ABest regards')}>
                <Mail className="w-5 h-5 mr-2" />
                Send Direct Email
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
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="mt-1 bg-white border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@company.com" required className="mt-1 bg-white border-gray-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" className="mt-1 bg-white border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="experience" className="text-sm font-medium">Years of Experience *</Label>
                    <Input id="experience" name="experience" value={formData.experience} onChange={handleInputChange} placeholder="15+ years" required className="mt-1 bg-white border-gray-300" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="expertise" className="text-sm font-medium">Industry Expertise *</Label>
                  <Input id="expertise" name="expertise" value={formData.expertise} onChange={handleInputChange} placeholder="Fintech, Agritech, Real Estate, Creative Industries" required className="mt-1 bg-white border-gray-300" />
                </div>

                <div>
                  <Label htmlFor="linkedinUrl" className="text-sm font-medium">LinkedIn Profile URL</Label>
                  <div className="relative mt-1">
                    <LinkedinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input id="linkedinUrl" name="linkedinUrl" value={formData.linkedinUrl} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" className="pl-10 bg-white border-gray-300" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Notable Deals & Achievements *</Label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Brief description of your most significant deals, their value, and impact..." required rows={4} className="mt-1 flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-subtitle font-bold py-4 rounded-xl transition-all duration-500 md:transform md:hover:scale-105 transform hover:scale-102 group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                  <span className="relative z-10">Submit Elite Application</span>
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
  );
};

export default ApplicationSection;
