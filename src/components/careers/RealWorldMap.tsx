
import React, { useEffect, useRef } from 'react';
import { Building } from 'lucide-react';
import { Job } from './types';

interface RealWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const RealWorldMap: React.FC<RealWorldMapProps> = ({ jobs, onJobSelect }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Dynamic import of mapbox-gl
    import('mapbox-gl').then((mapboxgl) => {
      if (map.current) return; // Initialize map only once

      mapboxgl.default.accessToken = 'pk.eyJ1IjoiZHJhYmFpciIsImEiOiJjbWJ6YWllaXYxc29oMmxzMTljZmgxYTN3In0.UZdny1AZfXn1KdVM_eZgrQ';
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 2,
        center: [20, 20],
        projection: 'mercator'
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl());

      // Group jobs by location
      const locationGroups = jobs.reduce((acc, job) => {
        const locationKey = `${job.coordinates[0]},${job.coordinates[1]}`;
        if (!acc[locationKey]) {
          acc[locationKey] = {
            coordinates: job.coordinates,
            jobs: [],
            location: job.location
          };
        }
        acc[locationKey].jobs.push(job);
        return acc;
      }, {} as Record<string, { coordinates: number[], jobs: Job[], location: string }>);

      // Add markers for each location group
      Object.values(locationGroups).forEach((group) => {
        if (group.coordinates[0] !== 0 || group.coordinates[1] !== 0) {
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'custom-marker';
          markerElement.innerHTML = `
            <div class="relative">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg border-2 border-white">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border border-white">
                ${group.jobs.length}
              </div>
            </div>
          `;

          // Create popup with job listings
          const popupContent = `
            <div class="p-3 max-w-xs">
              <h3 class="font-bold text-sm mb-2">${group.location}</h3>
              <div class="space-y-2 max-h-40 overflow-y-auto">
                ${group.jobs.map(job => `
                  <div class="border-b border-gray-200 pb-2 last:border-b-0">
                    <h4 class="font-semibold text-xs text-gray-900">${job.title}</h4>
                    <p class="text-xs text-gray-600">${job.department} • ${job.salary}</p>
                    <button 
                      onclick="window.selectJob('${job.id}')"
                      class="text-xs text-blue-600 hover:text-blue-800 mt-1 font-medium"
                    >
                      View Details →
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          `;

          const popup = new mapboxgl.default.Popup({
            offset: 25,
            closeButton: true,
            closeOnClick: false,
            maxWidth: '300px'
          }).setHTML(popupContent);

          // Fix: Ensure coordinates are properly typed as [number, number] tuple
          const coordinates: [number, number] = [group.coordinates[0], group.coordinates[1]];

          // Add marker to map
          new mapboxgl.default.Marker(markerElement)
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map.current);
        }
      });

      // Global function to handle job selection from popup
      (window as any).selectJob = (jobId: string) => {
        const job = jobs.find(j => j.id === jobId);
        if (job) {
          onJobSelect(job);
        }
      };

    }).catch((error) => {
      console.error('Error loading Mapbox:', error);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [jobs, onJobSelect]);

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
      </div>
      
      <div ref={mapContainer} className="w-full h-96 rounded-xl" />
      
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
          <span className="text-gray-700">Job Locations ({jobs.length} total positions)</span>
        </div>
      </div>
    </div>
  );
};

export default RealWorldMap;
