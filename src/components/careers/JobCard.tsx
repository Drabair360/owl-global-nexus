
import React from 'react';
import { MapPin, Clock, Briefcase, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const getDepartmentColor = (department: string) => {
    const colors = {
      Engineering: 'border-l-blue-500 bg-blue-50',
      Strategy: 'border-l-purple-500 bg-purple-50',
      Operations: 'border-l-green-500 bg-green-50',
      Finance: 'border-l-yellow-500 bg-yellow-50',
      Marketing: 'border-l-pink-500 bg-pink-50',
      'Data Science': 'border-l-indigo-500 bg-indigo-50'
    };
    return colors[department as keyof typeof colors] || 'border-l-gray-500 bg-gray-50';
  };

  const getDepartmentBadgeColor = (department: string) => {
    const colors = {
      Engineering: 'bg-blue-100 text-blue-800',
      Strategy: 'bg-purple-100 text-purple-800',
      Operations: 'bg-green-100 text-green-800',
      Finance: 'bg-yellow-100 text-yellow-800',
      Marketing: 'bg-pink-100 text-pink-800',
      'Data Science': 'bg-indigo-100 text-indigo-800'
    };
    return colors[department as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 cursor-pointer group hover:-translate-y-1 ${getDepartmentColor(job.department)}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 font-subtitle group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDepartmentBadgeColor(job.department)}`}>
              {job.department}
            </span>
            {job.remote && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
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
          className="bg-blue-500 hover:bg-blue-600 text-white font-subtitle group-hover:scale-105 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
