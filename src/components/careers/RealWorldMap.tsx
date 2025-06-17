import React, { useState, useEffect } from 'react';
import { Building, RotateCcw, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface RealWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

interface MapPosition {
  x: number;
  y: number;
}

interface LocationGroup {
  coordinates: [number, number];
  jobs: Job[];
  location: string;
  position: MapPosition;
}

const RealWorldMap: React.FC<RealWorldMapProps> = ({ jobs, onJobSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationGroup | null>(null);
  const [mapTransform, setMapTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Convert longitude/latitude to pixel coordinates on the world map
  const coordinateToPixel = (lng: number, lat: number): MapPosition => {
    const mapWidth = 1000; // Reference map width
    const mapHeight = 500; // Reference map height
    
    // Equirectangular projection
    const x = ((lng + 180) / 360) * mapWidth;
    const y = ((90 - lat) / 180) * mapHeight;
    
    return { x, y };
  };

  // Group jobs by location and calculate positions
  const locationGroups: LocationGroup[] = React.useMemo(() => {
    const groups = jobs.reduce((acc, job) => {
      const [lng, lat] = job.coordinates;
      const locationKey = `${lng},${lat}`;
      
      if (!acc[locationKey]) {
        acc[locationKey] = {
          coordinates: [lng, lat] as [number, number],
          jobs: [],
          location: job.location,
          position: coordinateToPixel(lng, lat)
        };
      }
      acc[locationKey].jobs.push(job);
      return acc;
    }, {} as Record<string, LocationGroup>);

    return Object.values(groups);
  }, [jobs]);

  // Handle mouse/touch events for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapTransform.x, y: e.clientY - mapTransform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMapTransform(prev => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset view
  const resetView = () => {
    setMapTransform({ x: 0, y: 0, scale: 1 });
    setSelectedLocation(null);
  };

  // Fit to show all markers
  const fitToMarkers = () => {
    if (locationGroups.length === 0) return;
    
    // Center the view to show all markers
    const avgX = locationGroups.reduce((sum, group) => sum + group.position.x, 0) / locationGroups.length;
    const avgY = locationGroups.reduce((sum, group) => sum + group.position.y, 0) / locationGroups.length;
    
    setMapTransform({
      x: (500 - avgX) * 0.8, // Center with some padding
      y: (250 - avgY) * 0.8,
      scale: 1
    });
  };

  useEffect(() => {
    fitToMarkers();
  }, [locationGroups]);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900 font-heading">Global Opportunities</h3>
      </div>
      
      {/* Map Container */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden bg-gradient-to-b from-sky-200 to-blue-300 shadow-inner">
        {/* Real World Map Background */}
        <div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Subtle overlay for better marker visibility */}
          <div className="absolute inset-0 bg-blue-900/10" />
          
          {/* Job Markers */}
          {locationGroups.map((group, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{
                left: `${(group.position.x / 1000) * 100}%`,
                top: `${(group.position.y / 500) * 100}%`
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLocation(selectedLocation?.location === group.location ? null : group);
              }}
            >
              {/* Pulse Animation */}
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30" />
              
              {/* Main Marker */}
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-white">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              
              {/* Job Count Badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                {group.jobs.length}
              </div>
            </div>
          ))}
        </div>

        {/* Location Popup */}
        {selectedLocation && (
          <div className="absolute top-4 left-4 bg-white rounded-xl shadow-xl p-4 max-w-sm z-20 animate-scale-in">
            <h4 className="font-bold text-lg text-gray-900 mb-3">{selectedLocation.location}</h4>
            <div className="max-h-48 overflow-y-auto space-y-3">
              {selectedLocation.jobs.map(job => (
                <div key={job.id} className="border-b border-gray-100 pb-2 last:border-b-0">
                  <h5 className="font-semibold text-sm text-gray-800">{job.title}</h5>
                  <p className="text-xs text-gray-600 mb-2">{job.department} • {job.salary}</p>
                  <button
                    onClick={() => {
                      onJobSelect(job);
                      setSelectedLocation(null);
                    }}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <Button
            size="icon"
            variant="outline"
            onClick={resetView}
            className="bg-white shadow-lg hover:bg-gray-50"
            title="Reset View"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={fitToMarkers}
            className="bg-white shadow-lg hover:bg-gray-50"
            title="Fit to All Markers"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-white" />
          <span className="text-gray-700">Job Locations ({jobs.length} total positions)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500 border border-white" />
          <span className="text-gray-700">Number of positions</span>
        </div>
      </div>
    </div>
  );
};

export default RealWorldMap;
