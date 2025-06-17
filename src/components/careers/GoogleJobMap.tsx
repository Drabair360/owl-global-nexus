
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Building, RotateCcw, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface GoogleJobMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

interface LocationGroup {
  coordinates: [number, number];
  jobs: Job[];
  location: string;
}

const GoogleJobMap: React.FC<GoogleJobMapProps> = ({ jobs, onJobSelect }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationGroup | null>(null);
  const [mapType, setMapType] = useState<google.maps.MapTypeId>(google.maps.MapTypeId.ROADMAP);
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  // Group jobs by location
  const locationGroups: LocationGroup[] = React.useMemo(() => {
    const groups = jobs.reduce((acc, job) => {
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
    }, {} as Record<string, LocationGroup>);

    return Object.values(groups);
  }, [jobs]);

  // Initialize map
  const initMap = useCallback(() => {
    if (!mapRef.current) return;

    const mapInstance = new google.maps.Map(mapRef.current, {
      zoom: 2,
      center: { lat: 20, lng: 0 },
      mapTypeId: mapType,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#a2d2ff' }]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [{ color: '#f5f5f5' }]
        }
      ],
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER,
      },
      scaleControl: true,
      streetViewControl: true,
      fullscreenControl: true,
    });

    setMap(mapInstance);
  }, [mapType]);

  // Create custom markers
  const createMarkers = useCallback(() => {
    if (!map) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    locationGroups.forEach((group) => {
      const [lng, lat] = group.coordinates;
      
      // Create custom marker icon
      const markerIcon = {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="20" fill="url(#gradient)" stroke="white" stroke-width="4"/>
            <circle cx="24" cy="24" r="8" fill="white"/>
            <circle cx="32" cy="16" r="12" fill="#ef4444" stroke="white" stroke-width="2"/>
            <text x="32" y="21" text-anchor="middle" fill="white" font-size="10" font-weight="bold">${group.jobs.length}</text>
          </svg>
        `)}`,
        scaledSize: new google.maps.Size(48, 48),
        anchor: new google.maps.Point(24, 24),
      };

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: group.location,
        icon: markerIcon,
        animation: google.maps.Animation.DROP,
      });

      // Add click listener
      marker.addListener('click', () => {
        setSelectedLocation(group);
        
        // Create info window content
        const content = `
          <div style="max-width: 300px; padding: 8px;">
            <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: bold; color: #1f2937;">${group.location}</h3>
            <div style="max-height: 200px; overflow-y: auto;">
              ${group.jobs.map(job => `
                <div style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                  <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #374151;">${job.title}</h4>
                  <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280;">${job.department} • ${job.salary}</p>
                  <button 
                    onclick="window.selectJob('${job.id}')" 
                    style="background: linear-gradient(to right, #3b82f6, #8b5cf6); color: white; border: none; padding: 4px 12px; border-radius: 16px; font-size: 12px; cursor: pointer;"
                  >
                    View Details →
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `;

        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }

        infoWindowRef.current = new google.maps.InfoWindow({
          content,
          position: { lat, lng },
        });

        infoWindowRef.current.open(map);
      });

      markersRef.current.push(marker);
    });
  }, [map, locationGroups]);

  // Global function for job selection
  useEffect(() => {
    (window as any).selectJob = (jobId: string) => {
      const job = jobs.find(j => j.id === jobId);
      if (job) {
        onJobSelect(job);
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }
        setSelectedLocation(null);
      }
    };

    return () => {
      delete (window as any).selectJob;
    };
  }, [jobs, onJobSelect]);

  // Initialize map when Google Maps loads
  useEffect(() => {
    if (window.google) {
      initMap();
    }
  }, [initMap]);

  // Create markers when map is ready
  useEffect(() => {
    createMarkers();
  }, [createMarkers]);

  // Fit bounds to show all markers
  const fitToMarkers = () => {
    if (!map || locationGroups.length === 0) return;

    const bounds = new google.maps.LatLngBounds();
    locationGroups.forEach(group => {
      const [lng, lat] = group.coordinates;
      bounds.extend({ lat, lng });
    });
    
    map.fitBounds(bounds);
    
    // Ensure minimum zoom level
    google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
      if (map.getZoom()! > 10) {
        map.setZoom(10);
      }
    });
  };

  // Reset view
  const resetView = () => {
    if (!map) return;
    map.setCenter({ lat: 20, lng: 0 });
    map.setZoom(2);
    setSelectedLocation(null);
    if (infoWindowRef.current) {
      infoWindowRef.current.close();
    }
  };

  // Toggle map type
  const toggleMapType = () => {
    const types = [
      google.maps.MapTypeId.ROADMAP,
      google.maps.MapTypeId.SATELLITE,
      google.maps.MapTypeId.TERRAIN,
      google.maps.MapTypeId.HYBRID
    ];
    const currentIndex = types.indexOf(mapType);
    const nextType = types[(currentIndex + 1) % types.length];
    setMapType(nextType);
    if (map) {
      map.setMapTypeId(nextType);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
      </div>
      
      {/* Map Container */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-inner">
        <div ref={mapRef} className="w-full h-full" />
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <Button
            size="icon"
            variant="outline"
            onClick={toggleMapType}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-white/50"
            title="Toggle Map Type"
          >
            <Layers className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={resetView}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-white/50"
            title="Reset View"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={fitToMarkers}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-white/50 text-xs px-2"
            title="Fit to All Markers"
          >
            Fit All
          </Button>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white shadow-md" />
          <span className="text-gray-700 font-medium">Job Locations ({jobs.length} total positions)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
            #
          </div>
          <span className="text-gray-700 font-medium">Number of positions</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-xs">💡 Click markers for details • Use map controls to navigate</span>
        </div>
      </div>
    </div>
  );
};

// Wrapper component to handle Google Maps API loading
const GoogleJobMapWrapper: React.FC<GoogleJobMapProps> = (props) => {
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
            </div>
            <div className="w-full h-96 rounded-xl bg-gray-200 flex items-center justify-center">
              <div className="text-gray-600 font-medium">Loading Google Maps...</div>
            </div>
          </div>
        );
      case Status.FAILURE:
        return (
          <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
            </div>
            <div className="w-full h-96 rounded-xl bg-red-50 border-2 border-red-200 flex items-center justify-center">
              <div className="text-red-600 font-medium text-center">
                <p>Failed to load Google Maps</p>
                <p className="text-sm mt-2">Please check your API key configuration</p>
              </div>
            </div>
          </div>
        );
      case Status.SUCCESS:
        return <GoogleJobMap {...props} />;
    }
  };

  return (
    <Wrapper
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
      render={render}
      libraries={['places']}
    />
  );
};

export default GoogleJobMapWrapper;
