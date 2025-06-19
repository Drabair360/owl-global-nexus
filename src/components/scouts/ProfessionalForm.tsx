
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Mail, Phone, LinkedinIcon } from 'lucide-react';

interface ProfessionalFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ProfessionalForm = ({ formData, handleInputChange, handleSubmit }: ProfessionalFormProps) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-elegant p-8">
      <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6">
        Business Scout Application
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-slate-700">
              Full Name *
            </Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Your full name" 
              required 
              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email Address *
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="your.email@company.com" 
              required 
              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
              Phone Number
            </Label>
            <Input 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              placeholder="+1 (555) 123-4567" 
              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>

          {/* Experience Field */}
          <div className="space-y-2">
            <Label htmlFor="experience" className="text-sm font-medium text-slate-700">
              Years of Experience *
            </Label>
            <Input 
              id="experience" 
              name="experience" 
              value={formData.experience} 
              onChange={handleInputChange}
              onFocus={() => setFocusedField('experience')}
              onBlur={() => setFocusedField(null)}
              placeholder="15+ years" 
              required 
              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Expertise Field */}
        <div className="space-y-2">
          <Label htmlFor="expertise" className="text-sm font-medium text-slate-700">
            Area of Expertise *
          </Label>
          <Input 
            id="expertise" 
            name="expertise" 
            value={formData.expertise} 
            onChange={handleInputChange}
            onFocus={() => setFocusedField('expertise')}
            onBlur={() => setFocusedField(null)}
            placeholder="Fintech, Agritech, Real Estate, Creative Industries" 
            required 
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
          />
        </div>

        {/* LinkedIn Field */}
        <div className="space-y-2">
          <Label htmlFor="linkedinUrl" className="text-sm font-medium text-slate-700">
            LinkedIn Profile
          </Label>
          <div className="relative">
            <LinkedinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              id="linkedinUrl" 
              name="linkedinUrl" 
              value={formData.linkedinUrl} 
              onChange={handleInputChange}
              onFocus={() => setFocusedField('linkedin')}
              onBlur={() => setFocusedField(null)}
              placeholder="https://linkedin.com/in/your-profile" 
              className="pl-10 border-slate-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium text-slate-700">
            Cover Letter *
          </Label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleInputChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            placeholder="Tell us about your most significant deals, achievements, and why you're interested in joining our scout network..." 
            required 
            rows={4} 
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          Submit Application
        </Button>
      </form>

      {/* Privacy Notice */}
      <p className="text-xs text-slate-500 text-center mt-4">
        Your information is secure and will only be used for application review purposes.
      </p>
    </div>
  );
};

export default ProfessionalForm;
