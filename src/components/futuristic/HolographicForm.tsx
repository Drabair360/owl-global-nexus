
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Mail, Phone, LinkedinIcon } from 'lucide-react';

interface HolographicFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const HolographicForm = ({ formData, handleInputChange, handleSubmit }: HolographicFormProps) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Holographic Panel Background */}
      <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-cyan-500/20" />
      
      <div className="relative space-y-6 p-6">
        <h3 className="text-xl font-subtitle font-semibold text-white mb-4 relative">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Neural Interface Application
          </span>
          <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent animate-pulse" />
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div className="relative group">
              <Label htmlFor="name" className="text-sm font-medium text-cyan-300 mb-1 block">
                Identity Matrix *
              </Label>
              <div className="relative">
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Neural signature identification" 
                  required 
                  className="bg-slate-900/50 border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm"
                />
                {focusedField === 'name' && (
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
                )}
                {/* Scanning Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <Label htmlFor="email" className="text-sm font-medium text-cyan-300 mb-1 block">
                Quantum Communication Link *
              </Label>
              <div className="relative">
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="quantum.channel@nexus.net" 
                  required 
                  className="bg-slate-900/50 border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm"
                />
                {focusedField === 'email' && (
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone Field */}
            <div className="relative group">
              <Label htmlFor="phone" className="text-sm font-medium text-cyan-300 mb-1 block">
                Neural Link Frequency
              </Label>
              <div className="relative">
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+1 (555) QUANTUM" 
                  className="bg-slate-900/50 border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm"
                />
                {focusedField === 'phone' && (
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Experience Field */}
            <div className="relative group">
              <Label htmlFor="experience" className="text-sm font-medium text-cyan-300 mb-1 block">
                Temporal Experience Index *
              </Label>
              <div className="relative">
                <Input 
                  id="experience" 
                  name="experience" 
                  value={formData.experience} 
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('experience')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="15+ temporal cycles" 
                  required 
                  className="bg-slate-900/50 border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm"
                />
                {focusedField === 'experience' && (
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Expertise Field */}
          <div className="relative group">
            <Label htmlFor="expertise" className="text-sm font-medium text-cyan-300 mb-1 block">
              Specialized Intelligence Domains *
            </Label>
            <div className="relative">
              <Input 
                id="expertise" 
                name="expertise" 
                value={formData.expertise} 
                onChange={handleInputChange}
                onFocus={() => setFocusedField('expertise')}
                onBlur={() => setFocusedField(null)}
                placeholder="Quantum Fintech, Bio-Agritech, Meta Real Estate, Creative Synthesis" 
                required 
                className="bg-slate-900/50 border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm"
              />
              {focusedField === 'expertise' && (
                <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* LinkedIn Field */}
          <div className="relative group">
            <Label htmlFor="linkedinUrl" className="text-sm font-medium text-cyan-300 mb-1 block">
              Professional Network Portal
            </Label>
            <div className="relative">
              <LinkedinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <Input 
                id="linkedinUrl" 
                name="linkedinUrl" 
                value={formData.linkedinUrl} 
                onChange={handleInputChange}
                onFocus={() => setFocusedField('linkedin')}
                onBlur={() => setFocusedField(null)}
                placeholder="https://linkedin.com/in/quantum-executive" 
                className="pl-10 bg-slate-900/50 border-cyan-500/30 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm"
              />
              {focusedField === 'linkedin' && (
                <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <Label htmlFor="message" className="text-sm font-medium text-cyan-300 mb-1 block">
              Strategic Intelligence Brief *
            </Label>
            <div className="relative">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Transmit your most significant deal architectures, quantum value created, and dimensional impact achieved..." 
                required 
                rows={4} 
                className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-md px-3 py-2 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm resize-none"
              />
              {focusedField === 'message' && (
                <div className="absolute inset-0 bg-cyan-400/10 rounded-md animate-pulse pointer-events-none" />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Neural Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center">
              Initiate Neural Handshake
            </span>
            {/* Plasma Energy Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Button>
        </form>

        {/* Quantum Encryption Notice */}
        <p className="text-xs text-cyan-400 text-center mt-4 opacity-80">
          <span className="animate-pulse">●</span> Data encrypted with quantum protocols • Neural pathways secured • Multidimensional verification active
        </p>
      </div>
    </div>
  );
};

export default HolographicForm;
