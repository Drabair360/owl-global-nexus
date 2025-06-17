
import React from 'react';
import { MapPin, Building, Users, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface RealWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const RealWorldMap: React.FC<RealWorldMapProps> = ({ jobs, onJobSelect }) => {
  console.log('RealWorldMap: Rendering with', jobs.length, 'jobs');

  // Define location data
  const locations = [
    {
      name: 'Abuja',
      country: 'Nigeria',
      jobs: jobs.filter(job => job.location.includes('Abuja')),
      color: '#10b981'
    },
    {
      name: 'Abidjan',
      country: "Côte d'Ivoire", 
      jobs: jobs.filter(job => job.location.includes('Abidjan')),
      color: '#f59e0b'
    },
    {
      name: 'Aix-en-Provence',
      country: 'France',
      jobs: jobs.filter(job => job.location.includes('Aix-en-Provence')),
      color: '#3b82f6'
    }
  ];

  // Filter out locations with no jobs
  const activeLocations = locations.filter(location => location.jobs.length > 0);

  console.log('RealWorldMap: Active locations:', activeLocations.length);

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
      </div>
      
      {/* Temporary message instead of map */}
      <div className="h-96 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertTriangle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map Coming Soon</h4>
          <p className="text-gray-600 mb-6">We're working on bringing you an interactive world map to explore our global opportunities.</p>
          
          {/* Location cards as fallback */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {activeLocations.map((location) => (
              <div key={location.name} className="bg-white rounded-lg p-4 shadow-md border">
                <div className="flex items-center gap-2 mb-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: location.color }}
                  />
                  <div className="text-left">
                    <h5 className="font-semibold text-gray-900">{location.name}</h5>
                    <p className="text-sm text-gray-600">{location.country}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {location.jobs.slice(0, 2).map((job) => (
                    <div key={job.id} className="text-left">
                      <h6 className="font-medium text-sm text-gray-900">{job.title}</h6>
                      <p className="text-xs text-gray-600">{job.department} • {job.salary}</p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-1 text-xs h-6"
                        onClick={() => onJobSelect(job)}
                      >
                        View Details
                      </Button>
                    </div>
                  ))}
                  {location.jobs.length > 2 && (
                    <p className="text-xs text-gray-500 text-center">
                      +{location.jobs.length - 2} more position{location.jobs.length - 2 !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-600 border-t pt-2 mt-3">
                  <Users className="w-4 h-4" />
                  <span>{location.jobs.length} open position{location.jobs.length !== 1 ? 's' : ''}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {activeLocations.map((location) => (
          <div key={location.name} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: location.color }}
            />
            <span className="text-gray-700">
              {location.name} ({location.jobs.length})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealWorldMap;
