import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { Building, RotateCcw, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

// Ensure TypeScript recognizes Google Maps types
/// <reference types="@types/google.maps" />

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

  // Fix coordinate validation and positioning
  const validateCoordinates = (coords: [number, number]): { lat: number; lng: number } => {
    const [lng, lat] = coords;
    
    // Validate latitude and longitude ranges
    const validLat = Math.max(-90, Math.min(90, lat));
    const validLng = Math.max(-180, Math.min(180, lng));
    
    return { lat: validLat, lng: validLng };
  };

  // Enhanced location groups with coordinate fixes
  const locationGroups: LocationGroup[] = React.useMemo(() => {
    const groups = jobs.reduce((acc, job) => {
      // Fix coordinate system issues and validate
      const validCoords = validateCoordinates(job.coordinates);
      const locationKey = `${validCoords.lng},${validCoords.lat}`;
      
      if (!acc[locationKey]) {
        acc[locationKey] = {
          coordinates: [validCoords.lng, validCoords.lat] as [number, number],
          jobs: [],
          location: job.location
        };
      }
      acc[locationKey].jobs.push(job);
      return acc;
    }, {} as Record<string, LocationGroup>);

    return Object.values(groups);
  }, [jobs]);

  // Initialize map with disabled native controls to prevent overlaps
  const initMap = useCallback(() => {
    if (!mapRef.current || !window.google) return;

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
      // Disable native controls to prevent overlaps
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      // Keep essential controls
      gestureHandling: 'cooperative',
      clickableIcons: false,
    });

    setMap(mapInstance);
  }, [mapType]);

  // Create enhanced markers with better positioning
  const createMarkers = useCallback(() => {
    if (!map || !window.google) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    locationGroups.forEach((group, index) => {
      const [lng, lat] = group.coordinates;
      const position = { lat, lng };
      
      // Add slight offset for overlapping markers
      const offset = 0.05;
      const offsetPosition = {
        lat: lat + (Math.sin(index * 0.5) * offset),
        lng: lng + (Math.cos(index * 0.5) * offset)
      };
      
      // Create enhanced marker icon with better visibility
      const markerIcon = {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
          <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
              </linearGradient>
              <filter id="shadow${index}">
                <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
              </filter>
            </defs>
            <circle cx="28" cy="28" r="22" fill="url(#gradient${index})" stroke="white" stroke-width="4" filter="url(#shadow${index})"/>
            <circle cx="28" cy="28" r="10" fill="white"/>
            <circle cx="38" cy="18" r="14" fill="#ef4444" stroke="white" stroke-width="3"/>
            <text x="38" y="24" text-anchor="middle" fill="white" font-size="11" font-weight="bold">${group.jobs.length}</text>
          </svg>
        `)}`,
        scaledSize: new google.maps.Size(56, 56),
        anchor: new google.maps.Point(28, 28),
      };

      const marker = new google.maps.Marker({
        position: group.jobs.length > 3 ? offsetPosition : position,
        map,
        title: `${group.location} (${group.jobs.length} positions)`,
        icon: markerIcon,
        animation: google.maps.Animation.DROP,
        optimized: false, // Better for custom icons
      });

      // Enhanced click listener with better info window
      marker.addListener('click', () => {
        setSelectedLocation(group);
        
        // Create enhanced info window content
        const content = `
          <div style="max-width: 320px; padding: 12px; font-family: 'Inter', sans-serif;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <div style="width: 12px; height: 12px; background: linear-gradient(45deg, #3b82f6, #ec4899); border-radius: 50%;"></div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">${group.location}</h3>
            </div>
            <div style="max-height: 240px; overflow-y: auto; padding-right: 8px;">
              ${group.jobs.map((job, jobIndex) => `
                <div style="padding: 12px 0; border-bottom: ${jobIndex < group.jobs.length - 1 ? '1px solid #e5e7eb' : 'none'};">
                  <h4 style="margin: 0 0 6px 0; font-size: 15px; font-weight: 600; color: #374151; line-height: 1.4;">${job.title}</h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                    <span style="font-size: 12px; color: #6b7280; background: #f3f4f6; padding: 2px 8px; border-radius: 12px;">${job.department}</span>
                    <span style="font-size: 12px; color: #059669; background: #ecfdf5; padding: 2px 8px; border-radius: 12px;">${job.salary}</span>
                  </div>
                  <button 
                    onclick="window.selectJob('${job.id}')" 
                    style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; border: none; padding: 6px 14px; border-radius: 18px; font-size: 13px; cursor: pointer; font-weight: 500; transition: all 0.2s; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);"
                    onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 8px rgba(59, 130, 246, 0.4)';"
                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 4px rgba(59, 130, 246, 0.3)';"
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
          position: group.jobs.length > 3 ? offsetPosition : position,
          maxWidth: 340,
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
    if (window.google && window.google.maps) {
      initMap();
    }
  }, [initMap]);

  // Create markers when map is ready
  useEffect(() => {
    createMarkers();
  }, [createMarkers]);

  // Fit bounds to show all markers with padding
  const fitToMarkers = () => {
    if (!map || locationGroups.length === 0 || !window.google) return;

    const bounds = new google.maps.LatLngBounds();
    locationGroups.forEach(group => {
      const [lng, lat] = group.coordinates;
      bounds.extend({ lat, lng });
    });
    
    map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
    
    // Ensure reasonable zoom level
    google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
      const zoom = map.getZoom();
      if (zoom !== undefined && zoom > 12) {
        map.setZoom(12);
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
        
        {/* Repositioned Custom Controls - Left Side to Avoid Conflicts */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          <Button
            size="icon"
            variant="outline"
            onClick={toggleMapType}
            className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white border-white/50 transition-all duration-200"
            title={`Switch to ${mapType === google.maps.MapTypeId.ROADMAP ? 'Satellite' : mapType === google.maps.MapTypeId.SATELLITE ? 'Terrain' : mapType === google.maps.MapTypeId.TERRAIN ? 'Hybrid' : 'Road'} View`}
          >
            <Layers className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={resetView}
            className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white border-white/50 transition-all duration-200"
            title="Reset to World View"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {/* Fit All Control - Bottom Right */}
        <div className="absolute bottom-4 right-4 z-20">
          <Button
            size="sm"
            variant="outline"
            onClick={fitToMarkers}
            className="bg-white/95 backdrop-blur-sm shadow-lg hover:bg-white border-white/50 text-xs px-3 py-1 transition-all duration-200"
            title="Show All Job Locations"
          >
            Show All
          </Button>
        </div>
      </div>
      
      {/* Enhanced Legend */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 border-2 border-white shadow-md flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-700 font-medium">Job Locations ({jobs.length} total positions)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
            #
          </div>
          <span className="text-gray-700 font-medium">Number of positions</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-xs">💡 Click markers for details • Use controls to navigate • Markers are positioned to avoid overlap</span>
        </div>
      </div>
    </div>
  );
};

// Enhanced wrapper with better error handling
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
            <div className="w-full h-96 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <div className="text-gray-600 font-medium">Loading interactive map...</div>
                <div className="text-gray-400 text-sm mt-2">Preparing job locations</div>
              </div>
            </div>
          </div>
        );
      case Status.FAILURE:
        return (
          <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
            </div>
            <div className="w-full h-96 rounded-xl bg-red-50 border-2 border-red-200 flex items-center justify-center">
              <div className="text-red-600 font-medium text-center max-w-md">
                <div className="text-lg mb-2">⚠️ Map temporarily unavailable</div>
                <p className="text-sm mb-4">The interactive map couldn't load. This might be due to:</p>
                <ul className="text-xs text-left space-y-1 mb-4">
                  <li>• Google Maps API configuration</li>
                  <li>• Network connectivity issues</li>
                  <li>• Temporary service interruption</li>
                </ul>
                <p className="text-xs text-gray-600">Job listings are still available below the map.</p>
              </div>
            </div>
          </div>
        );
      case Status.SUCCESS:
        return <GoogleJobMap {...props} />;
    }
  };

  // Get API key from environment variables
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  // If no API key, show a helpful message
  if (!apiKey) {
    return (
      <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-8 h-8 text-orange-600" />
          <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
        </div>
        <div className="w-full h-96 rounded-xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center">
          <div className="text-orange-600 font-medium text-center max-w-md">
            <div className="text-lg mb-2">🗺️ Interactive map setup required</div>
            <p className="text-sm mb-4">To view job locations on an interactive map, configure the Google Maps API key.</p>
            <p className="text-xs text-gray-600">Job listings are available below.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Wrapper
      apiKey={apiKey}
      render={render}
      libraries={['places']}
      version="3.55"
    />
  );
};

export default GoogleJobMapWrapper;
