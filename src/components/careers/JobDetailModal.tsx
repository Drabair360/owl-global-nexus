
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, DollarSign, Users, Heart, X, Zap } from 'lucide-react';
import { Job } from './types';
import ApplicationForm from './ApplicationForm';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  const [showApplication, setShowApplication] = useState(false);
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

  const getRoleInspirationImage = (department: string) => {
    const images = {
      Engineering: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute opacity-5">
          <path d="M100 150 L150 100 L200 150 L250 100 L300 150" stroke="#64748b" strokeWidth="3" fill="none"/>
          <circle cx="150" cy="100" r="20" stroke="#64748b" strokeWidth="2" fill="none"/>
          <circle cx="250" cy="100" r="20" stroke="#64748b" strokeWidth="2" fill="none"/>
          <rect x="180" y="130" width="40" height="40" stroke="#64748b" strokeWidth="2" fill="none"/>
        </svg>
      ),
      Operations: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute opacity-5">
          <circle cx="200" cy="150" r="60" stroke="#64748b" strokeWidth="3" fill="none"/>
          <circle cx="200" cy="150" r="30" stroke="#64748b" strokeWidth="2" fill="none"/>
          <path d="M140 150 L120 130 M140 150 L120 170 M260 150 L280 130 M260 150 L280 170" stroke="#64748b" strokeWidth="2"/>
        </svg>
      ),
      Strategy: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute opacity-5">
          <path d="M80 250 L150 180 L220 200 L300 120" stroke="#64748b" strokeWidth="3" fill="none"/>
          <circle cx="150" cy="180" r="5" fill="#64748b"/>
          <circle cx="220" cy="200" r="5" fill="#64748b"/>
          <circle cx="300" cy="120" r="5" fill="#64748b"/>
        </svg>
      ),
      Marketing: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute opacity-5">
          <circle cx="200" cy="150" r="40" stroke="#64748b" strokeWidth="2" fill="none"/>
          <path d="M240 150 L300 120 L320 140 L300 180 L280 160" stroke="#64748b" strokeWidth="2" fill="none"/>
        </svg>
      ),
      Finance: (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute opacity-5">
          <rect x="120" y="180" width="20" height="60" stroke="#64748b" strokeWidth="2" fill="none"/>
          <rect x="160" y="160" width="20" height="80" stroke="#64748b" strokeWidth="2" fill="none"/>
          <rect x="200" y="140" width="20" height="100" stroke="#64748b" strokeWidth="2" fill="none"/>
          <rect x="240" y="120" width="20" height="120" stroke="#64748b" strokeWidth="2" fill="none"/>
        </svg>
      ),
      'Data Science': (
        <svg viewBox="0 0 400 300" className="w-full h-full absolute opacity-5">
          <circle cx="120" cy="150" r="8" stroke="#64748b" strokeWidth="2" fill="none"/>
          <circle cx="200" cy="120" r="8" stroke="#64748b" strokeWidth="2" fill="none"/>
          <circle cx="200" cy="180" r="8" stroke="#64748b" strokeWidth="2" fill="none"/>
          <circle cx="280" cy="150" r="8" stroke="#64748b" strokeWidth="2" fill="none"/>
          <path d="M128 150 L192 120 M128 150 L192 180 M208 120 L272 150 M208 180 L272 150" stroke="#64748b" strokeWidth="1"/>
        </svg>
      )
    };
    return images[department as keyof typeof images] || images.Operations;
  };

  const getEnhancedDescription = (job: Job) => {
    const enhancedDescriptions = {
      '1': 'Step into a transformative leadership role where you\'ll orchestrate operations across one of Africa\'s most dynamic regions. As Regional Operations Director, you\'ll be the strategic architect behind sustainable growth initiatives that directly impact millions of lives. Lead cross-functional teams in building resilient supply chains, optimize resource allocation across multiple countries, and pioneer innovative solutions that set new industry standards. This isn\'t just operations management—it\'s about creating lasting prosperity while building the infrastructure that powers Africa\'s economic future.',
      
      '2': 'Join the revolutionary CAOAGRO initiative and lead the construction of cutting-edge agricultural processing facilities that will transform food security across West Africa. As Senior Project Manager, you\'ll oversee multi-million euro turnkey projects from conceptualization to commissioning, working with international engineering teams and local communities. Manage complex timelines, coordinate with government stakeholders, and ensure seamless integration of advanced technology with traditional agricultural practices. Your projects will directly feed communities and create sustainable employment for thousands.',
      
      '3': 'Unleash your creativity in designing the factories of the future for Africa\'s agricultural revolution. As CAD Mechanical Engineer, you\'ll create unprecedented 3D renderings and technical blueprints for revolutionary processing facilities that have never been built before. Transform conceptual visions into detailed engineering masterpieces using the latest design software. Your designs will become the backbone of sustainable food processing across the continent, combining innovative technology with practical African solutions.',
      
      '4': 'Drive strategic investment decisions that shape Africa\'s economic landscape from our sophisticated European headquarters. As Senior Investment Analyst, you\'ll identify and analyze high-potential ventures across emerging African markets, conducting deep due diligence on transformative opportunities. Work with top-tier institutions, build relationships with visionary entrepreneurs, and structure deals that create sustainable value. Your analysis will directly influence where millions of euros flow to build Africa\'s future.',
      
      '5': 'Pioneer the next generation of artificial intelligence solutions designed specifically for Africa\'s unique challenges. As AI Research Engineer, you\'ll develop groundbreaking algorithms that power agricultural intelligence, optimize resource allocation, and democratize access to technology across the continent. Collaborate with international research teams, publish in top-tier conferences, and see your innovations deployed at scale. Your work will directly impact how AI transforms industries across Africa.',
      
      '6': 'Shape OWL International\'s global narrative and build our brand presence across multiple continents from anywhere in the world. As Global Marketing Director, you\'ll craft compelling stories about African innovation, manage multi-million dollar marketing budgets, and create campaigns that resonate across diverse cultures. Lead digital transformation initiatives, build strategic partnerships with global media, and position OWL as the premier catalyst for African economic development.',
      
      '7': 'Lead data science initiatives that unlock insights from Africa\'s vast untapped data landscape. As Data Science Manager, you\'ll build predictive models that guide strategic decisions across our portfolio companies, develop analytics solutions that optimize agricultural yields, and create data-driven frameworks for sustainable development. Manage a team of world-class data scientists while working with cutting-edge technologies to solve real-world problems.',
      
      '8': 'Drive product strategy for AKOULA, our flagship platform that\'s revolutionizing how technology serves African markets. As Product Manager, you\'ll work with engineering teams across multiple time zones, conduct user research in emerging markets, and develop features that scale to millions of users. Your product decisions will directly impact how communities access financial services, agricultural resources, and digital tools.',
      
      '9': 'Protect the digital infrastructure that powers Africa\'s economic transformation. As Cybersecurity Specialist, you\'ll design and implement security frameworks that protect sensitive financial data, agricultural intelligence, and strategic business information across multiple countries. Work with cutting-edge security technologies, respond to global threats, and ensure our systems meet international security standards.',
      
      '10': 'Identify and cultivate strategic partnerships that accelerate African innovation from the Americas. As Business Development Manager, you\'ll build relationships with Fortune 500 companies, negotiate complex international agreements, and structure partnerships that bridge continents. Your network will directly enable African entrepreneurs to access global markets and resources.',
      
      '11': 'Build and maintain the cloud infrastructure that powers operations across Africa and beyond. As DevOps Engineer, you\'ll architect scalable systems that handle millions of transactions, ensure 99.9% uptime for critical services, and implement automation that streamlines operations across multiple countries. Your infrastructure will be the invisible foundation enabling African innovation.',
      
      '12': 'Navigate the complex legal landscape of African business while supporting strategic initiatives across multiple jurisdictions. As Legal Counsel, you\'ll structure international transactions, ensure regulatory compliance across diverse legal systems, and provide strategic legal guidance for high-stakes business decisions. Your expertise will enable seamless cross-border operations and protect our investments.'
    };
    
    return enhancedDescriptions[job.id as keyof typeof enhancedDescriptions] || job.description;
  };

  console.log('JobDetailModal: Rendering modal with isOpen:', isOpen, 'job:', job.title);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-white">
        <div className="absolute inset-0 overflow-hidden">
          {getRoleInspirationImage(job.department)}
        </div>

        <div className="relative z-10 border-b border-slate-200 pb-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-heading flex items-center gap-3">
              {job.title}
              <span className="text-xs font-mono opacity-60">#{job.id}</span>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Job details for {job.title} position at {job.department} department
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="relative z-10 space-y-6">
          {/* System Status Panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-lg bg-slate-100/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-xs text-slate-500 font-mono">LOCATION</p>
                <p className="font-medium font-body">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-xs text-slate-500 font-mono">EXPERIENCE</p>
                <p className="font-medium font-body">{job.experience}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-slate-500 font-mono">TYPE</p>
                <p className="font-medium font-body">{job.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-xs text-slate-500 font-mono">SALARY</p>
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
            <p className="text-gray-700 leading-relaxed font-body">{getEnhancedDescription(job)}</p>
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

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold font-subtitle">Why OWL International?</h3>
            </div>
            <p className="text-gray-700 font-body">
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
