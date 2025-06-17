
import React, { useEffect, useRef } from 'react';
import { Building, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
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
        center: [20, 20],
        projection: 'mercator'
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl());

      // Wait for map to load before adding markers
      map.current.on('load', () => {
        console.log('Map loaded, adding markers for', jobs.length, 'jobs');

        // Group jobs by location using exact coordinates
        const locationGroups = jobs.reduce((acc, job) => {
          const [lng, lat] = job.coordinates;
          const locationKey = `${lng},${lat}`;
          
          if (!acc[locationKey]) {
            acc[locationKey] = {
              coordinates: [lng, lat] as [number, number],
              jobs: [],
              location: job.location
            };
          }
          acc[locationKey].jobs.push(job);
          return acc;
        }, {} as Record<string, { coordinates: [number, number], jobs: Job[], location: string }>);

        console.log('Location groups created:', Object.keys(locationGroups).length);

        // Add markers for each location group
        Object.values(locationGroups).forEach((group, index) => {
          const [lng, lat] = group.coordinates;
          console.log(`Adding marker ${index + 1} for ${group.location} at [${lng}, ${lat}] with ${group.jobs.length} jobs`);
          
          // Create custom marker element
          const markerElement = document.createElement('div');
          markerElement.innerHTML = `
            <div style="position: relative;">
              <div style="
                width: 32px;
                height: 32px;
                background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
                border: 2px solid white;
                transition: transform 0.2s ease;
              " onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div style="
                position: absolute;
                top: -4px;
                right: -4px;
                width: 20px;
                height: 20px;
                background: #ef4444;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 10px;
                font-weight: bold;
                border: 2px solid white;
              ">
                ${group.jobs.length}
              </div>
            </div>
          `;

          // Create popup with job listings
          const popupContent = `
            <div style="padding: 12px; max-width: 300px;">
              <h3 style="font-weight: bold; font-size: 14px; margin-bottom: 8px; color: #1f2937;">${group.location}</h3>
              <div style="max-height: 160px; overflow-y: auto;">
                ${group.jobs.map(job => `
                  <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 8px;">
                    <h4 style="font-weight: 600; font-size: 12px; color: #111827; margin-bottom: 4px;">${job.title}</h4>
                    <p style="font-size: 11px; color: #6b7280; margin-bottom: 4px;">${job.department} • ${job.salary}</p>
                    <button 
                      onclick="window.selectJob('${job.id}')"
                      style="font-size: 11px; color: #2563eb; font-weight: 500; background: none; border: none; cursor: pointer; padding: 0;"
                      onmouseover="this.style.color='#1d4ed8'"
                      onmouseout="this.style.color='#2563eb'"
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
            maxWidth: '320px'
          }).setHTML(popupContent);

          // Create marker with standard settings
          const marker = new mapboxgl.default.Marker({
            element: markerElement
          })
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(map.current);

          console.log(`Marker successfully added at coordinates [${lng}, ${lat}]`);
        });

        // Fit map to show all markers
        if (jobs.length > 1) {
          const bounds = new mapboxgl.default.LngLatBounds();
          jobs.forEach(job => {
            bounds.extend(job.coordinates);
          });
          map.current.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 50, right: 50 },
            maxZoom: 8
          });
        } else if (jobs.length === 1) {
          map.current.setCenter(jobs[0].coordinates);
          map.current.setZoom(6);
        }

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

  // Fit to all markers
  const handleFitToMarkers = () => {
    if (map.current && jobs.length > 0) {
      import('mapbox-gl').then((mapboxgl) => {
        const bounds = new mapboxgl.default.LngLatBounds();
        
        // Use actual job coordinates directly
        jobs.forEach(job => {
          bounds.extend(job.coordinates);
        });
        
        if (map.current) {
          map.current.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 50, right: 50 },
            maxZoom: 6
          });
        }
      });
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
        
        {/* Custom Map Controls */}
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
          <Button
            size="icon"
            variant="outline"
            onClick={handleFitToMarkers}
            className="bg-white shadow-lg hover:bg-gray-50"
            title="Fit to All Markers"
          >
            <Maximize2 className="w-4 h-4" />
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
