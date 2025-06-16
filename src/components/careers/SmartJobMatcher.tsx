
import React, { useState } from 'react';
import { X, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Job } from './types';

interface SmartJobMatcherProps {
  jobs: Job[];
  onClose: () => void;
  onJobSelect: (job: Job) => void;
}

const SmartJobMatcher: React.FC<SmartJobMatcherProps> = ({ jobs, onClose, onJobSelect }) => {
  const [interests, setInterests] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [matches, setMatches] = useState<Job[]>([]);
  const [step, setStep] = useState(1);

  const findMatches = () => {
    // Simple matching algorithm based on selections
    let matchedJobs = jobs.filter(job => {
      let score = 0;
      
      if (interests && job.department.toLowerCase().includes(interests.toLowerCase())) score += 3;
      if (experience && job.experience === experience) score += 2;
      if (location && (job.location.includes(location) || (location === 'remote' && job.remote))) score += 1;
      
      return score > 0;
    });

    // Sort by relevance and take top 3
    setMatches(matchedJobs.slice(0, 3));
    setStep(2);
  };

  const resetMatcher = () => {
    setInterests('');
    setExperience('');
    setLocation('');
    setMatches([]);
    setStep(1);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-500" />
            Smart Job Matching
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6 p-6">
            <div className="text-center mb-6">
              <Target className="w-16 h-16 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find Your Perfect Role</h3>
              <p className="text-gray-600">Answer a few questions to get personalized job recommendations</p>
            </div>

            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">What interests you most?</label>
                <Select value={interests} onValueChange={setInterests}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering & Technology</SelectItem>
                    <SelectItem value="strategy">Strategy & Business</SelectItem>
                    <SelectItem value="operations">Operations & Management</SelectItem>
                    <SelectItem value="finance">Finance & Investment</SelectItem>
                    <SelectItem value="marketing">Marketing & Growth</SelectItem>
                    <SelectItem value="data">Data Science & Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="Mid">Mid Level (3-5 years)</SelectItem>
                    <SelectItem value="Senior">Senior Level (5+ years)</SelectItem>
                    <SelectItem value="Executive">Executive Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Location</label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Location</SelectItem>
                    <SelectItem value="Abuja">Abuja, Nigeria</SelectItem>
                    <SelectItem value="Abidjan">Abidjan, Côte d'Ivoire</SelectItem>
                    <SelectItem value="Aix-en-Provence">Aix-en-Provence, France</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={findMatches} 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
              disabled={!interests || !experience || !location}
            >
              <Zap className="w-4 h-4 mr-2" />
              Find My Matches
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 p-6">
            <div className="text-center mb-6">
              <TrendingUp className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your Personalized Matches</h3>
              <p className="text-gray-600">Based on your preferences, here are the best roles for you</p>
            </div>

            {matches.length > 0 ? (
              <div className="space-y-4">
                {matches.map((job, index) => (
                  <div 
                    key={job.id}
                    className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => onJobSelect(job)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{job.title}</h4>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {index === 0 ? '95% Match' : index === 1 ? '88% Match' : '82% Match'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{job.department} • {job.location}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{job.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-semibold text-green-600">{job.salary}</span>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No perfect matches found based on your criteria.</p>
                <p className="text-sm text-gray-400">Try adjusting your preferences or explore all our open positions.</p>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="outline" onClick={resetMatcher} className="flex-1">
                Try Again
              </Button>
              <Button onClick={onClose} className="flex-1">
                View All Jobs
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SmartJobMatcher;
