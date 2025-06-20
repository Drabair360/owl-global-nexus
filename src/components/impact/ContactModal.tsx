
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
      color: 'from-blue-500 to-blue-700',
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
      color: 'from-green-500 to-green-700',
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
      color: 'from-purple-500 to-purple-700',
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
            <input required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
            <input type="email" required className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
            <input className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
            <input className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {contactType.fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-slate-700 mb-1">{field.label}</label>
            {field.type === 'select' ? (
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select an option</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea 
                rows={3} 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Tell us about your ${field.label.toLowerCase()}...`}
              />
            ) : (
              <input 
                type={field.type} 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Additional Message</label>
          <textarea 
            rows={4} 
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your ideas, vision, or questions about contributing to our sustainable ecosystem..."
          />
        </div>

        <Button type="submit" className={`w-full bg-gradient-to-r ${contactType.color} hover:opacity-90 text-white`}>
          <Send className="w-4 h-4 mr-2" />
          Send Message to Owl International
        </Button>
      </form>
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {contactTypes.map((contactType) => {
        const Icon = contactType.icon;
        return (
          <Dialog key={contactType.id} open={activeForm === contactType.id} onOpenChange={(open) => setActiveForm(open ? contactType.id : null)}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                {contactType.title}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-xl">
                  <div className={`w-10 h-10 bg-gradient-to-br ${contactType.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {contactType.title}
                </DialogTitle>
                <p className="text-slate-600">{contactType.description}</p>
              </DialogHeader>
              {renderForm(contactType)}
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};

export default ContactModal;
