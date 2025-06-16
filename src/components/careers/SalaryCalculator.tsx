
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calculator, TrendingUp, MapPin, X, Euro, BarChart3 } from 'lucide-react';
import { Job } from './types';

interface SalaryCalculatorProps {
  jobs: Job[];
  onClose: () => void;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({ jobs, onClose }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [results, setResults] = useState<any>(null);

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location.split(',')[0]))];
  const experienceLevels = [...new Set(jobs.map(job => job.experience))];

  const calculateSalary = () => {
    const filteredJobs = jobs.filter(job => {
      return (!selectedDepartment || job.department === selectedDepartment) &&
             (!selectedLocation || job.location.includes(selectedLocation)) &&
             (!selectedExperience || job.experience === selectedExperience);
    });

    if (filteredJobs.length === 0) {
      setResults({ error: 'No matching positions found' });
      return;
    }

    // Extract salary ranges and calculate averages
    const salaryRanges = filteredJobs.map(job => {
      const salaryStr = job.salary.replace(/[€,]/g, '');
      const [min, max] = salaryStr.split(' - ').map(s => parseInt(s));
      return { min, max, avg: (min + max) / 2 };
    });

    const avgMin = Math.round(salaryRanges.reduce((sum, s) => sum + s.min, 0) / salaryRanges.length);
    const avgMax = Math.round(salaryRanges.reduce((sum, s) => sum + s.max, 0) / salaryRanges.length);
    const avgSalary = Math.round(salaryRanges.reduce((sum, s) => sum + s.avg, 0) / salaryRanges.length);

    setResults({
      avgSalary,
      range: `€${avgMin.toLocaleString()} - €${avgMax.toLocaleString()}`,
      jobCount: filteredJobs.length,
      breakdown: filteredJobs.map(job => ({
        title: job.title,
        salary: job.salary,
        location: job.location
      }))
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 font-heading flex items-center gap-3">
              <Calculator className="w-6 h-6 text-green-500" />
              Salary Calculator
              <Euro className="w-5 h-5 text-yellow-500" />
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center mb-6">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Discover Your Market Value</h3>
            <p className="text-gray-600">Compare salaries across different roles, locations, and experience levels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Department</Label>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Departments</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">Location</Label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">Experience Level</Label>
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Levels</SelectItem>
                  {experienceLevels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            onClick={calculateSalary} 
            className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white hover:opacity-90"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Calculate Salary Range
          </Button>

          {results && (
            <div className="mt-6">
              {results.error ? (
                <div className="text-center py-8 bg-red-50 rounded-lg">
                  <p className="text-red-600">{results.error}</p>
                  <p className="text-sm text-red-500 mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      €{results.avgSalary.toLocaleString()}
                    </h4>
                    <p className="text-gray-600">Average Annual Salary</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Range: {results.range} • Based on {results.jobCount} position{results.jobCount !== 1 ? 's' : ''}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-900 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Position Breakdown
                    </h5>
                    {results.breakdown.map((job: any, index: number) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 bg-white rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{job.title}</p>
                          <p className="text-sm text-gray-600">{job.location}</p>
                        </div>
                        <p className="font-semibold text-green-600">{job.salary}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Tip:</strong> Salaries may vary based on specific skills, company size, and benefits package. 
                      These figures represent base salary ranges in our current openings.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SalaryCalculator;
