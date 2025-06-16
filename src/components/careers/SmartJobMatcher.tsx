
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Brain, Zap, X, Star } from 'lucide-react';
import { Job } from './types';

interface SmartJobMatcherProps {
  jobs: Job[];
  onClose: () => void;
  onJobSelect: (job: Job) => void;
}

const SmartJobMatcher: React.FC<SmartJobMatcherProps> = ({ jobs, onClose, onJobSelect }) => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    skills: [] as string[],
    interests: [] as string[],
    experience: '',
    location: '',
    remote: false
  });
  const [matches, setMatches] = useState<Array<Job & { score: number }>>([]);

  const skillOptions = [
    'React', 'TypeScript', 'Python', 'Machine Learning', 'Data Analysis',
    'Project Management', 'Strategic Planning', 'Financial Analysis',
    'Marketing', 'CAD Design', 'Industrial Engineering', 'AI Development'
  ];

  const interestOptions = [
    'Innovation', 'Africa Development', 'Sustainability', 'Technology',
    'Investment', 'Agriculture', 'Manufacturing', 'Data Science',
    'Strategic Growth', 'Community Impact'
  ];

  const handleSkillToggle = (skill: string) => {
    setPreferences(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleInterestToggle = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const calculateMatches = () => {
    const scoredJobs = jobs.map(job => {
      let score = 0;
      
      // Skill matching
      preferences.skills.forEach(skill => {
        if (job.title.toLowerCase().includes(skill.toLowerCase()) ||
            job.description.toLowerCase().includes(skill.toLowerCase()) ||
            job.requirements.some(req => req.toLowerCase().includes(skill.toLowerCase()))) {
          score += 20;
        }
      });

      // Interest matching
      preferences.interests.forEach(interest => {
        if (job.description.toLowerCase().includes(interest.toLowerCase()) ||
            job.department.toLowerCase().includes(interest.toLowerCase())) {
          score += 15;
        }
      });

      // Location preference
      if (preferences.remote && job.remote) score += 25;
      if (preferences.location && job.location.toLowerCase().includes(preferences.location.toLowerCase())) {
        score += 20;
      }

      // Experience matching
      if (preferences.experience && job.experience.toLowerCase().includes(preferences.experience.toLowerCase())) {
        score += 30;
      }

      return { ...job, score };
    });

    const sortedMatches = scoredJobs
      .filter(job => job.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setMatches(sortedMatches);
    setStep(3);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 font-heading flex items-center gap-3">
              <Brain className="w-6 h-6 text-purple-500" />
              Smart Job Matcher
              <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Zap className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Let's find your perfect role!</h3>
              <p className="text-gray-600">Tell us about your skills and interests</p>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-3 block">What are your key skills?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {skillOptions.map(skill => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={skill}
                      checked={preferences.skills.includes(skill)}
                      onCheckedChange={() => handleSkillToggle(skill)}
                    />
                    <Label htmlFor={skill} className="text-sm">{skill}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-3 block">What interests you most?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {interestOptions.map(interest => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest}
                      checked={preferences.interests.includes(interest)}
                      onCheckedChange={() => handleInterestToggle(interest)}
                    />
                    <Label htmlFor={interest} className="text-sm">{interest}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={() => setStep(2)} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Next: Location & Experience
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Almost there!</h3>
              <p className="text-gray-600">Tell us about your preferences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Preferred Experience Level</Label>
                <Input
                  id="experience"
                  placeholder="e.g., Senior, Mid, Entry"
                  value={preferences.experience}
                  onChange={(e) => setPreferences(prev => ({ ...prev, experience: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="location">Preferred Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Abuja, Remote, France"
                  value={preferences.location}
                  onChange={(e) => setPreferences(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remote"
                checked={preferences.remote}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, remote: checked as boolean }))}
              />
              <Label htmlFor="remote">I'm interested in remote opportunities</Label>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button onClick={calculateMatches} className="flex-1 bg-gradient-to-r from-green-500 to-teal-600 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Find My Matches
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Your Perfect Matches!</h3>
              <p className="text-gray-600">Based on your preferences, here are the best opportunities for you</p>
            </div>

            <div className="space-y-4">
              {matches.map((job, index) => (
                <div
                  key={job.id}
                  className="bg-gradient-to-r from-white to-blue-50 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => {
                    onJobSelect(job);
                    onClose();
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                        <Badge className={`bg-gradient-to-r from-green-500 to-blue-500 text-white`}>
                          {job.score}% Match
                        </Badge>
                        {index === 0 && <Star className="w-5 h-5 text-yellow-500" />}
                      </div>
                      <p className="text-gray-600 mb-2">{job.location} • {job.department}</p>
                      <p className="text-gray-700 text-sm line-clamp-2">{job.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{job.salary}</p>
                      <p className="text-sm text-gray-500">{job.experience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {matches.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">No matches found. Try adjusting your preferences!</p>
                <Button onClick={() => setStep(1)} className="mt-4" variant="outline">
                  Update Preferences
                </Button>
              </div>
            )}

            <Button onClick={onClose} variant="outline" className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SmartJobMatcher;
