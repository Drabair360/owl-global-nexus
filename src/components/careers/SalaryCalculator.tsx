
import React, { useState } from 'react';
import { X, Calculator, MapPin, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Job } from './types';

interface SalaryCalculatorProps {
  jobs: Job[];
  onClose: () => void;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({ jobs, onClose }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [results, setResults] = useState<any>(null);

  const calculateSalary = () => {
    // Mock salary calculation based on selections
    const baseRanges = {
      'Engineering': { min: 45000, max: 85000 },
      'Strategy': { min: 50000, max: 95000 },
      'Operations': { min: 40000, max: 75000 },
      'Finance': { min: 48000, max: 90000 },
      'Marketing': { min: 42000, max: 70000 },
      'Data Science': { min: 55000, max: 100000 }
    };

    const locationMultipliers = {
      'Abuja': 0.85,
      'Abidjan': 0.75,
      'Aix-en-Provence': 1.2,
      'Remote': 0.95
    };

    const experienceMultipliers = {
      'Entry': 0.8,
      'Mid': 1.0,
      'Senior': 1.4,
      'Executive': 2.0
    };

    const baseRange = baseRanges[selectedRole as keyof typeof baseRanges] || { min: 40000, max: 80000 };
    const locationMult = locationMultipliers[selectedLocation as keyof typeof locationMultipliers] || 1.0;
    const expMult = experienceMultipliers[experienceLevel as keyof typeof experienceMultipliers] || 1.0;

    const calculatedMin = Math.round(baseRange.min * locationMult * expMult);
    const calculatedMax = Math.round(baseRange.max * locationMult * expMult);

    setResults({
      range: `€${calculatedMin.toLocaleString()} - €${calculatedMax.toLocaleString()}`,
      median: `€${Math.round((calculatedMin + calculatedMax) / 2).toLocaleString()}`,
      location: selectedLocation,
      role: selectedRole,
      experience: experienceLevel
    });
  };

  const resetCalculator = () => {
    setSelectedRole('');
    setSelectedLocation('');
    setExperienceLevel('');
    setResults(null);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="w-6 h-6 text-green-500" />
            Salary Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 p-6">
          <div className="text-center mb-6">
            <TrendingUp className="w-16 h-16 mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calculate Your Potential Salary</h3>
            <p className="text-gray-600">Get insights into compensation based on role, location, and experience</p>
          </div>

          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Role/Department</label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Strategy">Strategy</SelectItem>
                  <SelectItem value="Operations">Operations</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Abuja">Abuja, Nigeria</SelectItem>
                  <SelectItem value="Abidjan">Abidjan, Côte d'Ivoire</SelectItem>
                  <SelectItem value="Aix-en-Provence">Aix-en-Provence, France</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Experience Level</label>
              <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Entry">Entry Level (0-2 years)</SelectItem>
                  <SelectItem value="Mid">Mid Level (3-5 years)</SelectItem>
                  <SelectItem value="Senior">Senior Level (5+ years)</SelectItem>
                  <SelectItem value="Executive">Executive Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {!results ? (
            <Button 
              onClick={calculateSalary} 
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:opacity-90"
              disabled={!selectedRole || !selectedLocation || !experienceLevel}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate Salary
            </Button>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Salary Estimate
              </h4>
              
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Salary Range:</span>
                  <span className="font-semibold text-lg">{results.range}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Median Salary:</span>
                  <span className="font-semibold text-green-600">{results.median}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location:
                  </span>
                  <span>{results.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    Experience:
                  </span>
                  <span>{results.experience} Level</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  💡 <strong>Note:</strong> These are estimated ranges based on market data and company standards. 
                  Actual offers may vary based on specific skills, qualifications, and negotiation.
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={resetCalculator} className="flex-1">
                  Calculate Again
                </Button>
                <Button onClick={onClose} className="flex-1 bg-green-600 hover:bg-green-700">
                  View Open Positions
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SalaryCalculator;
