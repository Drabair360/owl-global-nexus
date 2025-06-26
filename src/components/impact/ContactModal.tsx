
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
      color: '#334155',
      bgGradient: 'linear-gradient(135deg, #334155 0%, #475569 25%, #64748b 50%, #d97706 75%, #ea580c 100%)',
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
      color: '#059669',
      bgGradient: 'linear-gradient(135deg, #059669 0%, #10b981 25%, #14b8a6 50%, #0d9488 75%, #047857 100%)',
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
      color: '#7c3aed',
      bgGradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 25%, #a855f7 50%, #9333ea 75%, #7c2d12 100%)',
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

    const formStyle = {
      background: contactType.bgGradient,
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    };

    const inputStyle = {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '0.75rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      fontSize: '0.875rem',
      transition: 'all 0.2s ease',
      outline: 'none'
    };

    const labelStyle = {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '0.5rem'
    };

    return (
      <div style={formStyle}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Full Name *</label>
              <input 
                required 
                style={inputStyle}
                placeholder="Enter your full name"
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input 
                type="email" 
                required 
                style={inputStyle}
                placeholder="Enter your email"
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label style={labelStyle}>Organization</label>
              <input 
                style={inputStyle}
                placeholder="Enter your organization"
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              />
            </div>
            <div>
              <label style={labelStyle}>Country</label>
              <input 
                style={inputStyle}
                placeholder="Enter your country"
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
              />
            </div>
          </div>

          {contactType.fields.map((field) => (
            <div key={field.name}>
              <label style={labelStyle}>{field.label}</label>
              {field.type === 'select' ? (
                <select 
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <option value="" style={{ color: '#1e293b', backgroundColor: '#ffffff' }}>Select an option</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option} style={{ color: '#1e293b', backgroundColor: '#ffffff' }}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea 
                  rows={3} 
                  style={{
                    ...inputStyle,
                    resize: 'none'
                  }}
                  placeholder={`Tell us about your ${field.label.toLowerCase()}...`}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              ) : (
                <input 
                  type={field.type} 
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              )}
            </div>
          ))}

          <div>
            <label style={labelStyle}>Additional Message</label>
            <textarea 
              rows={4} 
              style={{
                ...inputStyle,
                resize: 'none'
              }}
              placeholder="Share your ideas, vision, or questions about contributing to our sustainable ecosystem..."
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
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
          <button 
            className="font-semibold text-lg underline decoration-2 underline-offset-4 transition-all duration-300 px-6 py-3 rounded-xl"
            style={{
              color: '#374151',
              textDecorationColor: contactType.color,
              background: 'linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1), rgba(6, 182, 212, 0.1))'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1f2937';
              e.currentTarget.style.textDecorationColor = '#475569';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#374151';
              e.currentTarget.style.textDecorationColor = contactType.color;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
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
