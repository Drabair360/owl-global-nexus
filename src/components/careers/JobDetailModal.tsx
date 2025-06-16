
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Briefcase, DollarSign, Users, Heart, X } from 'lucide-react';
import { Job } from './types';
import ApplicationForm from './ApplicationForm';

interface JobDetailModalProps {
  job: Job;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  const [showApplication, setShowApplication] = useState(false);

  if (showApplication) {
    return (
      <ApplicationForm 
        job={job} 
        onClose={onClose}
        onBack={() => setShowApplication(false)}
      />
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 font-heading">
              {job.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium font-body">{job.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Experience</p>
                <p className="font-medium font-body">{job.experience}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Type</p>
                <p className="font-medium font-body">{job.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Salary</p>
                <p className="font-medium font-body">{job.salary}</p>
              </div>
            </div>
          </div>

          {/* Department and Remote Badges */}
          <div className="flex gap-2">
            <Badge variant="secondary" className="font-body">
              {job.department}
            </Badge>
            {job.remote && (
              <Badge className="bg-blue-500 text-white font-body">
                Remote Friendly
              </Badge>
            )}
          </div>

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 font-subtitle">About This Role</h3>
            <p className="text-gray-700 leading-relaxed font-body">{job.description}</p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-3 font-subtitle">What We're Looking For</h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 font-body">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-3 font-subtitle">What We Offer</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Culture */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold font-subtitle">Why OWL International?</h3>
            </div>
            <p className="text-gray-700 font-body">
              Join a team that's transforming Africa through strategic investments and innovative technology. 
              We value cultural understanding, visionary thinking, and authentic impact. Your work will create 
              lasting prosperity for communities while building sustainable business solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <Button 
              onClick={() => setShowApplication(true)}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-subtitle"
            >
              Apply for This Position
            </Button>
            <Button variant="outline" className="font-subtitle">
              Save Job
            </Button>
            <Button variant="outline" className="font-subtitle">
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailModal;
