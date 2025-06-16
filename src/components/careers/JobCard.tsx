
import React from 'react';
import { MapPin, Clock, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const handleCardClick = () => {
    console.log('JobCard: Card clicked for job:', job.title, job.id);
    onClick();
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('JobCard: Button clicked for job:', job.title, job.id);
    onClick();
  };

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

  const getDepartmentBadgeGradient = (department: string) => {
    const gradients = {
      Engineering: 'from-blue-100 to-cyan-100 text-blue-800',
      Strategy: 'from-purple-100 to-pink-100 text-purple-800',
      Operations: 'from-green-100 to-emerald-100 text-green-800',
      Finance: 'from-yellow-100 to-orange-100 text-yellow-800',
      Marketing: 'from-pink-100 to-rose-100 text-pink-800',
      'Data Science': 'from-indigo-100 to-blue-100 text-indigo-800'
    };
    return gradients[department as keyof typeof gradients] || 'from-gray-100 to-slate-100 text-gray-800';
  };

  return (
    <div className="relative group">
      {/* Simple static border - no animation */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${getDepartmentGradient(job.department)} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
      
      <div 
        className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
        onClick={handleCardClick}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-subtitle group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getDepartmentBadgeGradient(job.department)} border border-white shadow-sm`}>
                {job.department}
              </span>
              {job.remote && (
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-xs font-medium border border-white shadow-sm">
                  Remote
                </span>
              )}
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed font-body line-clamp-3">
          {job.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 font-body">
            <MapPin className="w-4 h-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-gray-600 font-body">
            <Briefcase className="w-4 h-4 mr-2" />
            {job.experience} • {job.type}
          </div>
          <div className="flex items-center text-sm text-gray-600 font-body">
            <Clock className="w-4 h-4 mr-2" />
            Posted {job.posted}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900 font-subtitle">
            {job.salary}
          </span>
          <Button 
            size="sm" 
            className={`bg-gradient-to-r ${getDepartmentGradient(job.department)} hover:opacity-90 text-white font-subtitle group-hover:scale-105 transition-transform shadow-lg`}
            onClick={handleButtonClick}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
