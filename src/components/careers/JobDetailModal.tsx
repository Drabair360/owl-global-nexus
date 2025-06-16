import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, DollarSign, Users, Heart, X, Monitor, Cpu, Zap } from 'lucide-react';
import { Job } from './types';
import { RoleSketch } from './RoleSketches';
import ApplicationForm from './ApplicationForm';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  const [showApplication, setShowApplication] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('JobDetailModal: job prop changed:', job?.title, job?.id);
    if (job) {
      setIsOpen(true);
      console.log('JobDetailModal: Setting modal open to true');
    } else {
      setIsOpen(false);
      console.log('JobDetailModal: Setting modal open to false');
    }
  }, [job]);

  const handleClose = () => {
    console.log('JobDetailModal: handleClose called');
    setIsOpen(false);
    setShowApplication(false);
    onClose();
  };

  const handleOpenChange = (open: boolean) => {
    console.log('JobDetailModal: handleOpenChange called with:', open);
    if (!open) {
      handleClose();
    }
  };

  if (!job) {
    console.log('JobDetailModal: No job provided, returning null');
    return null;
  }

  if (showApplication) {
    return (
      <ApplicationForm 
        job={job} 
        onClose={handleClose}
        onBack={() => setShowApplication(false)}
      />
    );
  }

  const themeClasses = isDarkMode 
    ? 'bg-slate-900 text-slate-100' 
    : 'bg-white text-slate-900';

  const getDepartmentGradient = (department: string) => {
    const gradients = {
      Engineering: 'from-blue-500 via-cyan-500 to-blue-600',
      Strategy: 'from-purple-500 via-pink-500 to-purple-600',
      Operations: 'from-green-500 via-emerald-500 to-green-600',
      Finance: 'from-yellow-500 via-orange-500 to-yellow-600',
      Marketing: 'from-pink-500 via-rose-500 to-pink-600',
      'Data Science': 'from-indigo-500 via-blue-500 to-indigo-600'
    };
    return gradients[department as keyof typeof gradients] || 'from-gray-500 via-slate-500 to-gray-600';
  };

  console.log('JobDetailModal: Rendering modal with isOpen:', isOpen, 'job:', job.title);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className={`max-w-5xl max-h-[90vh] overflow-y-auto ${themeClasses} relative`}
        style={{ 
          zIndex: 99999,
          backgroundColor: isDarkMode ? '#0f172a' : '#ffffff'
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <RoleSketch role={job.department} className="w-full h-full absolute" />
        </div>

        <div className={`relative z-10 border-b ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} pb-4`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getDepartmentGradient(job.department)}`} />
              <span className={`text-xs font-mono ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                OWL_CAREERS_SYSTEM_v2.1.0
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-xs font-mono"
              >
                <Monitor className="w-4 h-4 mr-1" />
                {isDarkMode ? 'LIGHT' : 'DARK'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="rounded-full h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <DialogTitle className={`text-2xl font-bold font-heading flex items-center gap-3`}>
            <Cpu className="w-6 h-6" />
            {job.title}
            <span className="text-xs font-mono opacity-60">#{job.id}</span>
          </DialogTitle>
        </div>

        <div className="relative z-10 space-y-6">
          {/* System Status Panel */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100/50'} backdrop-blur-sm`}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-mono`}>LOCATION</p>
                <p className="font-medium font-body">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-mono`}>EXPERIENCE</p>
                <p className="font-medium font-body">{job.experience}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-mono`}>TYPE</p>
                <p className="font-medium font-body">{job.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              <div>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} font-mono`}>SALARY</p>
                <p className="font-medium font-body">{job.salary}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Badge className={`bg-gradient-to-r ${getDepartmentGradient(job.department)} text-white font-body border-0`}>
              {job.department}
            </Badge>
            {job.remote && (
              <Badge className="bg-blue-500 text-white font-body">
                <Zap className="w-3 h-3 mr-1" />
                Remote Ready
              </Badge>
            )}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 font-subtitle">About This Role</h3>
            <p className="text-gray-700 leading-relaxed font-body">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 font-subtitle">What We're Looking For</h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 font-body">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 font-subtitle">What We Offer</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`bg-gradient-to-r ${isDarkMode ? 'from-slate-800/50 to-slate-700/50' : 'from-blue-50 to-purple-50'} p-6 rounded-xl backdrop-blur-sm`}>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold font-subtitle">Why OWL International?</h3>
            </div>
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} font-body`}>
              Join a team that's transforming Africa through strategic investments and innovative technology. 
              We value cultural understanding, visionary thinking, and authentic impact. Your work will create 
              lasting prosperity for communities while building sustainable business solutions.
            </p>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <Button 
              onClick={() => setShowApplication(true)}
              className={`flex-1 bg-gradient-to-r ${getDepartmentGradient(job.department)} hover:opacity-90 text-white font-subtitle shadow-lg transform hover:scale-105 transition-all duration-200`}
            >
              <Zap className="w-4 h-4 mr-2" />
              Apply for This Position
            </Button>
            <Button variant="outline" className="font-subtitle hover:scale-105 transition-transform">
              Save Job
            </Button>
            <Button variant="outline" className="font-subtitle hover:scale-105 transition-transform">
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailModal;
