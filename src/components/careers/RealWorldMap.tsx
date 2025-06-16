
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { MapPin, Building, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RealWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const RealWorldMap: React.FC<RealWorldMapProps> = ({ jobs, onJobSelect }) => {
  // Define location coordinates
  const locations = [
    {
      name: 'Abuja',
      country: 'Nigeria',
      coords: [9.0579, 7.4951] as LatLngExpression,
      jobs: jobs.filter(job => job.location.includes('Abuja')),
      color: '#10b981'
    },
    {
      name: 'Abidjan',
      country: "Côte d'Ivoire", 
      coords: [5.3600, -4.0083] as LatLngExpression,
      jobs: jobs.filter(job => job.location.includes('Abidjan')),
      color: '#f59e0b'
    },
    {
      name: 'Aix-en-Provence',
      country: 'France',
      coords: [43.5297, 5.4474] as LatLngExpression,
      jobs: jobs.filter(job => job.location.includes('Aix-en-Provence')),
      color: '#3b82f6'
    }
  ];

  // Filter out locations with no jobs
  const activeLocations = locations.filter(location => location.jobs.length > 0);

  // Create custom markers for each location
  const createCustomIcon = (color: string, count: number) => {
    return new Icon({
      iconUrl: `data:image/svg+xml,${encodeURIComponent(`
        <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 3.5 1.5 6.5 3.5 8.5L12.5 41l9-20c2-2 3.5-5 3.5-8.5C25 5.596 19.404 0 12.5 0z" fill="${color}"/>
          <circle cx="12.5" cy="12.5" r="7" fill="white"/>
          <text x="12.5" y="17" text-anchor="middle" font-size="10" font-weight="bold" fill="${color}">${count}</text>
        </svg>
      `)}`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities Map</h3>
      </div>
      
      <div className="h-96 rounded-xl overflow-hidden border-2 border-gray-200">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {activeLocations.map((location) => (
            <Marker
              key={location.name}
              position={location.coords}
              icon={createCustomIcon(location.color, location.jobs.length)}
            >
              <Popup className="custom-popup">
                <div className="p-2 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5" style={{ color: location.color }} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.country}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    {location.jobs.slice(0, 3).map((job) => (
                      <div key={job.id} className="p-2 bg-gray-50 rounded-lg">
                        <h5 className="font-medium text-sm text-gray-900">{job.title}</h5>
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
                    {location.jobs.length > 3 && (
                      <p className="text-xs text-gray-500 text-center">
                        +{location.jobs.length - 3} more position{location.jobs.length - 3 !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-600 border-t pt-2">
                    <Users className="w-4 h-4" />
                    <span>{location.jobs.length} open position{location.jobs.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
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
