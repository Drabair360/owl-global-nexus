
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, Clock, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobCard from './JobCard';
import JobDetailModal from './JobDetailModal';
import JobMap from './JobMap';
import { jobData } from './jobData';
import { Job, JobFilters } from './types';

const JobPortal = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showMap, setShowMap] = useState(false);
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

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-section text-slate-800 mb-4 font-brand">OPEN POSITIONS</h2>
        <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
          Discover exciting opportunities to join our mission of transforming Africa through strategic investments and innovative technology.
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search jobs, skills, keywords..."
                className="pl-10"
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              />
            </div>
          </div>
          
          <Select value={filters.location} onValueChange={(value) => setFilters(prev => ({ ...prev, location: value }))}>
            <SelectTrigger className="w-full lg:w-48">
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
            <SelectTrigger className="w-full lg:w-48">
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
            <SelectTrigger className="w-full lg:w-48">
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
                className="flex items-center gap-2 font-subtitle"
              >
                <X className="w-4 h-4" />
                Clear Filters
              </Button>
            )}
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowMap(!showMap)}
            className="flex items-center gap-2 font-subtitle"
          >
            <MapPin className="w-4 h-4" />
            {showMap ? 'Hide Map' : 'Show Map'}
          </Button>
        </div>
      </div>

      {/* Map Section */}
      {showMap && (
        <div className="bg-white rounded-2xl p-6 shadow-lg border">
          <h3 className="text-xl font-semibold mb-4 font-subtitle">Global Opportunities</h3>
          <JobMap jobs={filteredJobs} onJobSelect={setSelectedJob} />
        </div>
      )}

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onClick={() => setSelectedJob(job)}
          />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Briefcase className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2 font-subtitle">No positions found</h3>
          <p className="text-gray-500 font-body">Try adjusting your filters to see more opportunities.</p>
        </div>
      )}

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default JobPortal;
