import React, { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, Briefcase, Clock, Filter, X, Grid3X3, List, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
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
  const [showMap, setShowMap] = useState(true); // Default to visible
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showMatcher, setShowMatcher] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);
  const [scrollY, setScrollY] = useState(0);
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    location: '',
    department: '',
    experience: '',
    type: ''
  });

  // Handle scroll for animated shadow
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const filteredJobs = useMemo(() => {
    return jobData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) || job.description.toLowerCase().includes(filters.search.toLowerCase()) || job.requirements.some(req => req.toLowerCase().includes(filters.search.toLowerCase()));
      const matchesLocation = !filters.location || filters.location === 'all' || job.location.includes(filters.location) || filters.location === 'Remote' && job.remote;
      const matchesDepartment = !filters.department || filters.department === 'all' || job.department === filters.department;
      const matchesExperience = !filters.experience || filters.experience === 'all' || job.experience === filters.experience;
      const matchesType = !filters.type || filters.type === 'all' || job.type === filters.type;
      return matchesSearch && matchesLocation && matchesDepartment && matchesExperience && matchesType;
    });
  }, [filters]);

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, jobsPerPage]);
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

  // Calculate shadow animation based on scroll
  const shadowIntensity = Math.min(scrollY / 500, 1);
  const shadowOffset = Math.sin(scrollY / 200) * 4;
  return <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-section text-slate-800 mb-4 font-brand">POSITIONS OPENING S2 2025 & 2026</h2>
        <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
          Discover exciting opportunities to join our mission of transforming Africa through strategic investments and innovative technology.
        </p>
      </div>

      {/* Enhanced Filter Section with Animated Shadow */}
      <div className="relative bg-white rounded-2xl p-6 border transition-all duration-300" style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #fdf2f8 25%, #fef3e2 50%, #ffffff 100%)',
      boxShadow: `
            0 0 0 1px rgba(236, 72, 153, 0.15),
            ${shadowOffset}px 4px ${8 + shadowIntensity * 8}px -2px rgba(251, 146, 60, ${0.2 + shadowIntensity * 0.1}),
            ${shadowOffset * 2}px 8px ${16 + shadowIntensity * 16}px -4px rgba(236, 72, 153, ${0.3 + shadowIntensity * 0.2}),
            ${shadowOffset * 4}px 16px ${32 + shadowIntensity * 32}px -8px rgba(251, 146, 60, ${0.25 + shadowIntensity * 0.15}),
            ${shadowOffset * 8}px 32px ${64 + shadowIntensity * 64}px -16px rgba(236, 72, 153, ${0.2 + shadowIntensity * 0.1}),
            ${-shadowOffset}px -4px 16px rgba(251, 146, 60, ${0.15 + shadowIntensity * 0.05}),
            ${shadowOffset}px 4px 16px rgba(236, 72, 153, ${0.15 + shadowIntensity * 0.05})
          `,
      transform: `translateY(${shadowIntensity * 2}px)`
    }}>
        {/* Enhanced inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/8 via-transparent to-orange-500/8 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search jobs, skills, keywords..." className="pl-10 border-2 focus:border-gradient-to-r focus:from-blue-500 focus:to-purple-500 bg-white/80 backdrop-blur-sm" value={filters.search} onChange={e => setFilters(prev => ({
                ...prev,
                search: e.target.value
              }))} />
              </div>
            </div>
            
            <Select value={filters.location} onValueChange={value => setFilters(prev => ({
            ...prev,
            location: value
          }))}>
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

            <Select value={filters.department} onValueChange={value => setFilters(prev => ({
            ...prev,
            department: value
          }))}>
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

            <Select value={filters.experience} onValueChange={value => setFilters(prev => ({
            ...prev,
            experience: value
          }))}>
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
              {hasActiveFilters && <Button variant="outline" size="sm" onClick={clearFilters} className="flex items-center gap-2 font-subtitle bg-white/60 backdrop-blur-sm">
                  <X className="w-4 h-4" />
                  Clear Filters
                </Button>}
            </div>
            
            <div className="flex items-center gap-2">
              {/* Results per page selector */}
              <Select value={jobsPerPage.toString()} onValueChange={value => setJobsPerPage(Number(value))}>
                <SelectTrigger className="w-20 bg-white/80 backdrop-blur-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100/80 backdrop-blur-sm rounded-lg p-1">
                <Button variant={viewMode === 'grid' ? 'default' : 'ghost'} size="sm" onClick={() => setViewMode('grid')} className="rounded-md">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant={viewMode === 'list' ? 'default' : 'ghost'} size="sm" onClick={() => setViewMode('list')} className="rounded-md">
                  <List className="w-4 h-4" />
                </Button>
              </div>

              <Button variant="outline" onClick={() => setShowMap(!showMap)} className="flex items-center gap-2 font-subtitle bg-white/60 backdrop-blur-sm">
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
          <Button variant="secondary" onClick={() => setShowMatcher(true)} className="bg-white text-blue-600 hover:bg-blue-50">
            Find My Perfect Role
          </Button>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-6 h-6" />
            <h3 className="text-lg font-semibold font-subtitle">Salary Calculator</h3>
          </div>
          <p className="text-green-100 mb-4 font-body">Compare salaries across different locations and experience levels.</p>
          <Button variant="secondary" onClick={() => setShowCalculator(true)} className="bg-white text-green-600 hover:bg-green-50">
            Calculate Compensation
          </Button>
        </div>
      </div>

      {showMap && <RealWorldMap jobs={filteredJobs} onJobSelect={handleJobSelect} />}

      {/* Jobs Display */}
      {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map(job => <JobCard key={job.id} job={job} onClick={() => handleJobSelect(job)} />)}
        </div> : <JobListView jobs={currentJobs} onJobSelect={handleJobSelect} />}

      {/* Pagination */}
      {totalPages > 1 && <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <div className="text-sm text-gray-600 font-body">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} positions
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={e => {
              e.preventDefault();
              if (currentPage > 1) setCurrentPage(currentPage - 1);
            }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
              
              {Array.from({
            length: totalPages
          }, (_, i) => i + 1).map(page => <PaginationItem key={page}>
                  <PaginationLink href="#" onClick={e => {
              e.preventDefault();
              setCurrentPage(page);
            }} isActive={currentPage === page}>
                    {page}
                  </PaginationLink>
                </PaginationItem>)}
              
              <PaginationItem>
                <PaginationNext href="#" onClick={e => {
              e.preventDefault();
              if (currentPage < totalPages) setCurrentPage(currentPage + 1);
            }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>}

      {filteredJobs.length === 0 && <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Briefcase className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2 font-subtitle">No positions found</h3>
          <p className="text-gray-500 font-body">Try adjusting your filters to see more opportunities.</p>
        </div>}

      {/* Modals */}
      {selectedJob && <JobDetailModal job={selectedJob} onClose={() => {
      console.log('Closing modal');
      setSelectedJob(null);
    }} />}

      {showMatcher && <SmartJobMatcher jobs={jobData} onClose={() => setShowMatcher(false)} onJobSelect={handleJobSelect} />}

      {showCalculator && <SalaryCalculator jobs={jobData} onClose={() => setShowCalculator(false)} />}
    </div>;
};
export default JobPortal;