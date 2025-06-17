
import React, { useEffect, useRef } from 'react';
import { Building, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        center: [10, 15], // Better center to show Africa and Europe
        projection: 'mercator'
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl());

      // Wait for map to load before adding markers
      map.current.on('load', () => {
        console.log('Map loaded, adding markers for', jobs.length, 'jobs');

        // Group jobs by location and fix coordinates
        const locationGroups = jobs.reduce((acc, job) => {
          // Ensure coordinates are in [longitude, latitude] format
          let [lng, lat] = job.coordinates;
          
          // Fix coordinate format based on known locations
          if (job.location.includes('Abuja')) {
            lng = 7.4951; lat = 9.0765;
          } else if (job.location.includes('Abidjan')) {
            lng = -4.0435; lat = 5.3599;
          } else if (job.location.includes('Aix-en-Provence')) {
            lng = 5.4474; lat = 43.5263;
          }
          
          const locationKey = `${lng},${lat}`;
          if (!acc[locationKey]) {
            acc[locationKey] = {
              coordinates: [lng, lat],
              jobs: [],
              location: job.location
            };
          }
          acc[locationKey].jobs.push(job);
          return acc;
        }, {} as Record<string, { coordinates: number[], jobs: Job[], location: string }>);

        console.log('Location groups:', Object.keys(locationGroups).length);

        // Add markers for each location group
        Object.values(locationGroups).forEach((group, index) => {
          console.log(`Adding marker ${index + 1} for ${group.location} at [${group.coordinates[0]}, ${group.coordinates[1]}] with ${group.jobs.length} jobs`);
          
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'custom-marker';
          markerElement.style.cursor = 'pointer';
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

          // Ensure coordinates are properly typed as [number, number] tuple for Mapbox
          const coordinates: [number, number] = [group.coordinates[0], group.coordinates[1]];

          // Add marker to map with proper anchor
          const marker = new mapboxgl.default.Marker({
            element: markerElement,
            anchor: 'bottom' // Anchor the marker at the bottom for proper positioning
          })
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map.current);

          console.log(`Marker successfully added at coordinates [${coordinates[0]}, ${coordinates[1]}]`);
        });

        // Global function to handle job selection from popup
        (window as any).selectJob = (jobId: string) => {
          const job = jobs.find(j => j.id === jobId);
          if (job) {
            onJobSelect(job);
          }
        };
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
  }, [jobs, onJobSelect]);

  // Zoom functions
  const handleZoomIn = () => {
    if (map.current) {
      map.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map.current) {
      map.current.zoomOut();
    }
  };

  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
      </div>
      
      <div className="relative">
        <div ref={mapContainer} className="w-full h-96 rounded-xl" />
        
        {/* Custom Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <Button
            size="icon"
            variant="outline"
            onClick={handleZoomIn}
            className="bg-white shadow-lg hover:bg-gray-50"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={handleZoomOut}
            className="bg-white shadow-lg hover:bg-gray-50"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
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
