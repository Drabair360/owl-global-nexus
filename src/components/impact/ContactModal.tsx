
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, Heart, Send, CheckCircle } from 'lucide-react';

const ContactModal = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = [
    {
      id: 'investors',
      title: 'For Investors',
      icon: Briefcase,
      description: 'Explore investment opportunities in sustainable African development',
      color: 'from-blue-400 via-cyan-500 to-teal-600',
      hoverColor: 'hover:from-blue-500 hover:via-cyan-600 hover:to-teal-700',
      shadowColor: 'hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)]',
      fields: [
        { name: 'investmentRange', label: 'Investment Range', type: 'select', options: ['€100K - €500K', '€500K - €2M', '€2M - €10M', '€10M+'] },
        { name: 'sectorInterest', label: 'Sector Interest', type: 'select', options: ['AI & Technology', 'Agriculture & Food', 'Creative Industries', 'Real Estate & Urban Development', 'All Sectors'] },
        { name: 'timeline', label: 'Investment Timeline', type: 'select', options: ['Immediate (0-6 months)', 'Short-term (6-18 months)', 'Long-term (18+ months)', 'Flexible'] },
        { name: 'sustainabilityPriorities', label: 'Sustainability Priorities', type: 'textarea' }
      ]
    },
    {
      id: 'partners',
      title: 'For Partners',
      icon: Users,
      description: 'Build strategic partnerships for mutual growth and impact',
      color: 'from-emerald-400 via-green-500 to-lime-600',
      hoverColor: 'hover:from-emerald-500 hover:via-green-600 hover:to-lime-700',
      shadowColor: 'hover:shadow-[0_20px_60px_rgba(34,197,94,0.4)]',
      fields: [
        { name: 'organizationType', label: 'Organization Type', type: 'select', options: ['Corporation', 'NGO/Non-profit', 'Government Agency', 'Academic Institution', 'Startup/SME'] },
        { name: 'collaborationAreas', label: 'Collaboration Areas', type: 'select', options: ['Technology Transfer', 'Market Access', 'Funding & Investment', 'Research & Development', 'Training & Capacity Building'] },
        { name: 'resourcesAvailable', label: 'Resources Available', type: 'textarea' },
        { name: 'impactGoals', label: 'Impact Goals', type: 'textarea' }
      ]
    },
    {
      id: 'communities',
      title: 'For Communities',
      icon: Heart,
      description: 'Join our mission to create sustainable community development',
      color: 'from-violet-400 via-purple-500 to-fuchsia-600',
      hoverColor: 'hover:from-violet-500 hover:via-purple-600 hover:to-fuchsia-700',
      shadowColor: 'hover:shadow-[0_20px_60px_rgba(147,51,234,0.4)]',
      fields: [
        { name: 'communitySize', label: 'Community Size', type: 'select', options: ['Small (< 1,000)', 'Medium (1,000 - 10,000)', 'Large (10,000 - 100,000)', 'Very Large (100,000+)'] },
        { name: 'developmentNeeds', label: 'Development Needs', type: 'select', options: ['Digital Literacy', 'Economic Opportunities', 'Infrastructure', 'Education & Training', 'Healthcare Access'] },
        { name: 'availableSkills', label: 'Available Skills & Resources', type: 'textarea' },
        { name: 'sustainabilityInterests', label: 'Sustainability Interests', type: 'textarea' }
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setActiveForm(null);
    }, 3000);
  };

  const renderForm = (contactType: typeof contactTypes[0]) => {
    if (isSubmitted) {
      return (
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Thank You!</h3>
          <p className="text-slate-600">Your message has been sent to Owl International. We'll get back to you soon!</p>
        </div>
      );
    }

    return (
      <div className={`bg-gradient-to-br ${contactType.color} rounded-2xl p-8 backdrop-blur-sm`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Full Name *</label>
              <input 
                required 
                className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15" 
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Email *</label>
              <input 
                type="email" 
                required 
                className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15" 
                placeholder="Enter your email"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Organization</label>
              <input 
                className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15" 
                placeholder="Enter your organization"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Country</label>
              <input 
                className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15" 
                placeholder="Enter your country"
              />
            </div>
          </div>

          {contactType.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-white/90 mb-2">{field.label}</label>
              {field.type === 'select' ? (
                <select className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white hover:bg-white/15">
                  <option value="" className="text-slate-800">Select an option</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option} className="text-slate-800">{option}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea 
                  rows={3} 
                  className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15 resize-none"
                  placeholder={`Tell us about your ${field.label.toLowerCase()}...`}
                />
              ) : (
                <input 
                  type={field.type} 
                  className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15" 
                />
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Additional Message</label>
            <textarea 
              rows={4} 
              className="w-full px-4 py-3 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 hover:bg-white/15 resize-none"
              placeholder="Share your ideas, vision, or questions about contributing to our sustainable ecosystem..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-white/20"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message to Owl International
          </Button>
        </form>
      </div>
    );
  };

  return {
    contactTypes,
    renderContactLink: (contactType: typeof contactTypes[0]) => (
      <Dialog key={contactType.id} open={activeForm === contactType.id} onOpenChange={(open) => setActiveForm(open ? contactType.id : null)}>
        <DialogTrigger asChild>
          <button className="text-white/90 hover:text-white font-semibold underline decoration-2 underline-offset-4 hover:decoration-white/60 transition-all duration-300">
            {contactType.title}
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto border-0 bg-transparent p-0 shadow-none">
          <div className="relative">
            {renderForm(contactType)}
          </div>
        </DialogContent>
      </Dialog>
    )
  };
};

export default ContactModal;
