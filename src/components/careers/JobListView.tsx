
import React from 'react';
import { MapPin, Clock, Briefcase, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface JobListViewProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const JobListView: React.FC<JobListViewProps> = ({ jobs, onJobSelect }) => {
  const getDepartmentColor = (department: string) => {
    const colors = {
      Engineering: 'from-blue-500 to-cyan-500',
      Strategy: 'from-purple-500 to-pink-500',
      Operations: 'from-green-500 to-emerald-500',
      Finance: 'from-yellow-500 to-orange-500',
      Marketing: 'from-pink-500 to-rose-500',
      'Data Science': 'from-indigo-500 to-blue-500'
    };
    return colors[department as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 cursor-pointer group hover:-translate-y-1"
          style={{
            borderImage: `linear-gradient(135deg, ${getDepartmentColor(job.department).replace('from-', '').replace(' to-', ', ')}) 1`
          }}
          onClick={() => onJobSelect(job)}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-subtitle group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getDepartmentColor(job.department)} text-white`}>
                      {job.department}
                    </span>
                    {job.remote && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Remote
                      </span>
                    )}
                    <span className="text-lg font-semibold text-gray-900 font-subtitle">
                      {job.salary}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed font-body line-clamp-2">
                {job.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center font-body">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center font-body">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {job.experience} • {job.type}
                  </div>
                  <div className="flex items-center font-body">
                    <Clock className="w-4 h-4 mr-2" />
                    Posted {job.posted}
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className={`bg-gradient-to-r ${getDepartmentColor(job.department)} hover:opacity-90 text-white font-subtitle group-hover:scale-105 transition-transform`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onJobSelect(job);
                  }}
                >
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobListView;
