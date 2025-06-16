
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Upload, Link, Send, CheckCircle } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted for job:', job.id, formData);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (submitted) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-md text-center">
          <div className="py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-heading">Application Submitted!</h2>
            <p className="text-gray-600 font-body">
              Thank you for your interest in the {job.title} position. 
              We'll review your application and get back to you soon.
            </p>
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
              className="rounded-full h-8 w-8 p-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <DialogTitle className="text-xl font-bold text-gray-900 font-heading">
              Apply for {job.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="font-body">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="font-body">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="mt-1"
              />
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
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="font-body">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div>
            <Label className="font-body">Resume/CV *</Label>
            <div 
              className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 font-body">
                {formData.resumeFile ? formData.resumeFile.name : 'Drag and drop your resume here, or click to browse'}
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
                className="mt-2 font-body"
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

          {/* Submit Button */}
          <div className="flex gap-4 pt-4 border-t">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-subtitle">
              <Send className="w-4 h-4 mr-2" />
              Submit Application
            </Button>
            <Button type="button" variant="outline" onClick={onBack} className="font-subtitle">
              Back to Job Details
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationForm;
