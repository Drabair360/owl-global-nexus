
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface JobMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const JobMap: React.FC<JobMapProps> = ({ jobs, onJobSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return;

    // Dynamic import of mapbox-gl
    import('mapbox-gl').then((mapboxgl) => {
      if (map.current) return; // Initialize map only once

      mapboxgl.default.accessToken = mapboxToken;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 1.5,
        center: [20, 20],
        projection: 'mercator'
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl());

      // Add markers for each job
      jobs.forEach((job) => {
        if (job.coordinates[0] !== 0 || job.coordinates[1] !== 0) {
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'custom-marker';
          markerElement.innerHTML = `
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors shadow-lg">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </div>
          `;

          markerElement.addEventListener('click', () => {
            onJobSelect(job);
          });

          // Create popup
          const popup = new mapboxgl.default.Popup({
            offset: 25,
            closeButton: false,
            closeOnClick: false
          }).setHTML(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">${job.title}</h3>
              <p class="text-xs text-gray-600">${job.location}</p>
              <p class="text-xs text-blue-600">${job.department}</p>
            </div>
          `);

          // Add marker to map
          new mapboxgl.default.Marker(markerElement)
            .setLngLat(job.coordinates)
            .setPopup(popup)
            .addTo(map.current);
        }
      });
    }).catch((error) => {
      console.error('Error loading Mapbox:', error);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [mapboxToken, jobs, onJobSelect]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <div className="max-w-md mx-auto">
          <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-subtitle">Enable Interactive Map</h3>
          <p className="text-gray-600 mb-4 font-body">
            To view job locations on an interactive map, please enter your Mapbox public token.
          </p>
          <p className="text-sm text-gray-500 mb-4 font-body">
            Get your free token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>
          </p>
          
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <div>
              <Label htmlFor="mapboxToken" className="sr-only">Mapbox Token</Label>
              <Input
                id="mapboxToken"
                type="text"
                placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImNsZjR..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="text-center"
              />
            </div>
            <Button type="submit" disabled={!mapboxToken.trim()} className="w-full font-subtitle">
              Load Map
            </Button>
          </form>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowTokenInput(false)}
            className="mt-2 text-gray-500 font-body"
          >
            Skip for now
          </Button>
        </div>
      </div>
    );
  }

  if (!mapboxToken) {
    return (
      <div className="bg-gray-100 rounded-lg p-8 text-center">
        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 font-body">Interactive map is not available without a Mapbox token.</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowTokenInput(true)}
          className="mt-2 font-subtitle"
        >
          <Settings className="w-4 h-4 mr-2" />
          Configure Map
        </Button>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className="w-full h-96 rounded-lg" />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowTokenInput(true)}
        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm font-subtitle"
      >
        <Settings className="w-4 h-4 mr-2" />
        Configure
      </Button>
    </div>
  );
};

export default JobMap;
