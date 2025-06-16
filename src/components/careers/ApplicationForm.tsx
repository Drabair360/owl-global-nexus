import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Upload, Link, Send, CheckCircle, Sparkles, Zap } from 'lucide-react';
import { Job, ApplicationData } from './types';

interface ApplicationFormProps {
  job: Job;
  onClose: () => void;
  onBack: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ job, onClose, onBack }) => {
  const [formData, setFormData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    customAnswers: {}
  });
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file: File) => {
    setFormData(prev => ({ ...prev, resumeFile: file }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay with progress
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Application submitted for job:', job.id, formData);
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  if (submitted) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-md text-center">
          <div className="py-8">
            <div className="relative mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-scale-in" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-heading animate-fade-in">
              Application Submitted!
            </h2>
            <p className="text-gray-600 font-body animate-fade-in">
              Thank you for your interest in the {job.title} position. 
              We'll review your application and get back to you soon.
            </p>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Processing complete...</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="rounded-full h-8 w-8 p-0 hover:scale-110 transition-transform"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-xl font-bold text-gray-900 font-heading">
              Apply for {job.title}
            </DialogTitle>
            <div className="flex items-center gap-1 ml-auto">
              <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
              <span className="text-xs text-gray-500">Quick Apply</span>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information with Focus Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Label htmlFor="firstName" className="font-body">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className={`mt-1 transition-all duration-300 ${
                  focusedField === 'firstName' ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              />
              {focusedField === 'firstName' && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
            <div className="relative">
              <Label htmlFor="lastName" className="font-body">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className={`mt-1 transition-all duration-300 ${
                  focusedField === 'lastName' ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              />
              {focusedField === 'lastName' && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="font-body">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`mt-1 transition-all duration-300 ${
                  focusedField === 'email' ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              />
              {focusedField === 'email' && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="font-body">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={`mt-1 transition-all duration-300 ${
                  focusedField === 'phone' ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              />
              {focusedField === 'phone' && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Resume Upload with Progress */}
          <div>
            <Label className="font-body">Resume/CV *</Label>
            <div 
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                dragActive ? 'border-blue-500 bg-blue-50 scale-105 shadow-lg' : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="relative">
                <Upload className={`w-8 h-8 text-gray-400 mx-auto mb-2 transition-transform ${dragActive ? 'scale-110 text-blue-500' : ''}`} />
                {formData.resumeFile && (
                  <CheckCircle className="w-4 h-4 text-green-500 absolute -top-1 -right-1 animate-scale-in" />
                )}
              </div>
              <p className="text-gray-600 font-body">
                {formData.resumeFile ? (
                  <span className="text-green-600 font-semibold">
                    ✓ {formData.resumeFile.name}
                  </span>
                ) : (
                  'Drag and drop your resume here, or click to browse'
                )}
              </p>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                className="hidden"
                id="resume-upload"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 font-body hover:scale-105 transition-transform"
                onClick={() => document.getElementById('resume-upload')?.click()}
              >
                Choose File
              </Button>
            </div>
          </div>

          {/* Resume URL Alternative */}
          <div>
            <Label htmlFor="resumeUrl" className="font-body">Or paste a link to your resume/portfolio</Label>
            <div className="flex items-center gap-2 mt-1">
              <Link className="w-4 h-4 text-gray-400" />
              <Input
                id="resumeUrl"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile or https://yourportfolio.com"
                value={formData.resumeUrl || ''}
                onChange={(e) => handleInputChange('resumeUrl', e.target.value)}
              />
            </div>
          </div>

          {/* LinkedIn and Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedinUrl" className="font-body">LinkedIn Profile</Label>
              <Input
                id="linkedinUrl"
                type="url"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedinUrl || ''}
                onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="portfolioUrl" className="font-body">Portfolio/Website</Label>
              <Input
                id="portfolioUrl"
                type="url"
                placeholder="https://yourportfolio.com"
                value={formData.portfolioUrl || ''}
                onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Cover Letter */}
          <div>
            <Label htmlFor="coverLetter" className="font-body">Cover Letter *</Label>
            <Textarea
              id="coverLetter"
              required
              rows={6}
              placeholder="Tell us why you're interested in this role and what makes you a great fit for OWL International..."
              value={formData.coverLetter}
              onChange={(e) => handleInputChange('coverLetter', e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Custom Questions */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 font-subtitle">Additional Questions</h3>
            <div className="space-y-4">
              <div>
                <Label className="font-body">What excites you most about OWL International's mission in Africa?</Label>
                <Textarea
                  rows={3}
                  className="mt-1"
                  value={formData.customAnswers['mission'] || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    customAnswers: { ...prev.customAnswers, mission: e.target.value }
                  }))}
                />
              </div>
              <div>
                <Label className="font-body">How do you see yourself contributing to our goal of transforming Africa through innovation?</Label>
                <Textarea
                  rows={3}
                  className="mt-1"
                  value={formData.customAnswers['contribution'] || ''}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    customAnswers: { ...prev.customAnswers, contribution: e.target.value }
                  }))}
                />
              </div>
            </div>
          </div>

          {/* Enhanced Submit Button with Loading Animation */}
          <div className="flex gap-4 pt-4 border-t">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-subtitle relative overflow-hidden"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </>
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack} 
              className="font-subtitle hover:scale-105 transition-transform"
              disabled={isSubmitting}
            >
              Back to Job Details
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
