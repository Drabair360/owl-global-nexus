import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, Clock, Filter, X, Grid3X3, List, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobCard from './JobCard';
import JobDetailModal from './JobDetailModal';
import RealWorldMap from './RealWorldMap';
import JobListView from './JobListView';
import SmartJobMatcher from './SmartJobMatcher';
import SalaryCalculator from './SalaryCalculator';
import { jobData } from './jobData';
import { Job, JobFilters } from './types';

const JobPortal = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMatcher, setShowMatcher] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    department: '',
    experience: '',
    type: ''
  });

  const filteredJobs = useMemo(() => {
    return jobData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           job.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           job.requirements.some(req => req.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesLocation = !filters.location || filters.location === 'all' || 
                             job.location.includes(filters.location) || 
                             (filters.location === 'Remote' && job.remote);
      
      const matchesDepartment = !filters.department || filters.department === 'all' || job.department === filters.department;
      const matchesExperience = !filters.experience || filters.experience === 'all' || job.experience === filters.experience;
      const matchesType = !filters.type || filters.type === 'all' || job.type === filters.type;

      return matchesSearch && matchesLocation && matchesDepartment && matchesExperience && matchesType;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      search: '',
      location: '',
      department: '',
      experience: '',
      type: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '' && value !== 'all');

  const handleJobSelect = (job: Job) => {
    console.log('JobPortal: Setting selected job:', job.title, job.id);
    setSelectedJob(job);
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-section text-slate-800 mb-4 font-brand">OPEN POSITIONS</h2>
        <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
          Discover exciting opportunities to join our mission of transforming Africa through strategic investments and innovative technology.
        </p>
      </div>

      {/* Enhanced Filter Section with Beautiful Gradient Shadow */}
      <div 
        className="relative bg-white rounded-2xl p-6 border"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #fdf2f8 25%, #fef3e2 50%, #ffffff 100%)',
          boxShadow: `
            0 0 0 1px rgba(236, 72, 153, 0.15),
            0 4px 8px -2px rgba(251, 146, 60, 0.2),
            0 8px 16px -4px rgba(236, 72, 153, 0.3),
            0 16px 32px -8px rgba(251, 146, 60, 0.25),
            0 32px 64px -16px rgba(236, 72, 153, 0.2),
            -4px -4px 16px rgba(251, 146, 60, 0.15),
            4px 4px 16px rgba(236, 72, 153, 0.15),
            -8px 8px 24px rgba(251, 146, 60, 0.12),
            8px -8px 24px rgba(236, 72, 153, 0.12),
            0 0 40px rgba(251, 146, 60, 0.1),
            0 0 80px rgba(236, 72, 153, 0.08)
          `
        }}
      >
        {/* Enhanced inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/8 via-transparent to-orange-500/8 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search jobs, skills, keywords..."
                  className="pl-10 border-2 focus:border-gradient-to-r focus:from-blue-500 focus:to-purple-500 bg-white/80 backdrop-blur-sm"
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                />
              </div>
            </div>
            
            <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
              <SelectTrigger className="w-full lg:w-48 bg-white/80 backdrop-blur-sm">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Abuja">Abuja, Nigeria</SelectItem>
                <SelectItem value="Abidjan">Abidjan, Côte d'Ivoire</SelectItem>
                <SelectItem value="Aix-en-Provence">Aix-en-Provence, France</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.department} onValueChange={(value) => setFilters(prev => ({ ...prev, department: value }))}>
              <SelectTrigger className="w-full lg:w-48 bg-white/80 backdrop-blur-sm">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Strategy">Strategy</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.experience} onValueChange={(value) => setFilters(prev => ({ ...prev, experience: value }))}>
              <SelectTrigger className="w-full lg:w-48 bg-white/80 backdrop-blur-sm">
                <SelectValue placeholder="Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Entry">Entry Level</SelectItem>
                <SelectItem value="Mid">Mid Level</SelectItem>
                <SelectItem value="Senior">Senior Level</SelectItem>
                <SelectItem value="Executive">Executive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 font-body">
                {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
              </span>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="flex items-center gap-2 font-subtitle bg-white/60 backdrop-blur-sm"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100/80 backdrop-blur-sm rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-md"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-md"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              <Button
                variant="outline"
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-2 font-subtitle bg-white/60 backdrop-blur-sm"
              >
                <MapPin className="w-4 h-4" />
                {showMap ? 'Hide Map' : 'Show Map'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-6 h-6" />
            <h3 className="text-lg font-semibold font-subtitle">Smart Job Matching</h3>
          </div>
          <p className="text-blue-100 mb-4 font-body">Get AI-powered job recommendations based on your interests and skills.</p>
          <Button 
            variant="secondary" 
            onClick={() => setShowMatcher(true)}
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Find My Perfect Role
          </Button>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-6 h-6" />
            <h3 className="text-lg font-semibold font-subtitle">Salary Calculator</h3>
          </div>
          <p className="text-green-100 mb-4 font-body">Compare salaries across different locations and experience levels.</p>
          <Button 
            variant="secondary" 
            onClick={() => setShowCalculator(true)}
            className="bg-white text-green-600 hover:bg-green-50"
          >
            Calculate Compensation
          </Button>
        </div>
      </div>

      {showMap && (
        <RealWorldMap jobs={filteredJobs} onJobSelect={handleJobSelect} />
      )}

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onClick={() => handleJobSelect(job)}
            />
          ))}
        </div>
      ) : (
        <JobListView jobs={filteredJobs} onJobSelect={handleJobSelect} />
      )}

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Briefcase className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2 font-subtitle">No positions found</h3>
          <p className="text-gray-500 font-body">Try adjusting your filters to see more opportunities.</p>
        </div>
      )}

      {/* Modals */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => {
            console.log('Closing modal');
            setSelectedJob(null);
          }}
        />
      )}

      {showMatcher && (
        <SmartJobMatcher 
          jobs={jobData}
          onClose={() => setShowMatcher(false)}
          onJobSelect={handleJobSelect}
        />
      )}

      {showCalculator && (
        <SalaryCalculator 
          jobs={jobData}
          onClose={() => setShowCalculator(false)}
        />
      )}
    </div>
  );
};

export default JobPortal;
