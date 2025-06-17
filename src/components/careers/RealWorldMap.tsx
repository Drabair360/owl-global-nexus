
import React, { useState, useEffect } from 'react';
import { Building, RotateCcw, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';
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

  // Enhanced coordinate system with proper world map scaling
  const coordinateToPixel = (lng: number, lat: number): MapPosition => {
    const mapWidth = 1000;
    const mapHeight = 500;
    
    // More accurate Equirectangular projection
    const x = ((lng + 180) / 360) * mapWidth;
    const y = ((90 - lat) / 180) * mapHeight;
    
    return { x, y };
  };

  // Group jobs by location with corrected coordinates
  const locationGroups: LocationGroup[] = React.useMemo(() => {
    const groups = jobs.reduce((acc, job) => {
      let coordinates = job.coordinates;
      
      // Fix coordinate issues for better positioning
      if (job.location.includes('Aix-en-Provence')) {
        coordinates = [5.4474, 43.5263]; // Corrected Aix-en-Provence coordinates
      } else if (job.location.includes('Remote (Americas)')) {
        coordinates = [-95.7129, 37.0902]; // Center of USA
      } else if (job.location.includes('Remote (Asia-Pacific)')) {
        coordinates = [134.489563, -25.734968]; // Center of Australia
      } else if (job.location.includes('Remote (Africa/Europe)')) {
        coordinates = [10.4515, 51.1657]; // Central Europe
      } else if (job.location.includes('Remote (Global)')) {
        coordinates = [15, 30]; // Central position
      }
      
      const [lng, lat] = coordinates;
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

  // Enhanced zoom controls
  const handleZoomIn = () => {
    setMapTransform(prev => ({
      ...prev,
      scale: Math.min(prev.scale * 1.5, 4) // Max zoom 4x
    }));
  };

  const handleZoomOut = () => {
    setMapTransform(prev => ({
      ...prev,
      scale: Math.max(prev.scale / 1.5, 0.5) // Min zoom 0.5x
    }));
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    setMapTransform(prev => ({
      ...prev,
      scale: Math.max(0.5, Math.min(4, prev.scale * zoomFactor))
    }));
  };

  // Enhanced mouse/touch events for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapTransform.x, y: e.clientY - mapTransform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Add boundaries to prevent getting lost
    const maxOffset = 500;
    const boundedX = Math.max(-maxOffset, Math.min(maxOffset, newX));
    const boundedY = Math.max(-maxOffset, Math.min(maxOffset, newY));
    
    setMapTransform(prev => ({
      ...prev,
      x: boundedX,
      y: boundedY
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Double-click to zoom in
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleZoomIn();
  };

  // Reset view
  const resetView = () => {
    setMapTransform({ x: 0, y: 0, scale: 1 });
    setSelectedLocation(null);
  };

  // Fit to show all markers
  const fitToMarkers = () => {
    if (locationGroups.length === 0) return;
    
    const avgX = locationGroups.reduce((sum, group) => sum + group.position.x, 0) / locationGroups.length;
    const avgY = locationGroups.reduce((sum, group) => sum + group.position.y, 0) / locationGroups.length;
    
    setMapTransform({
      x: (500 - avgX) * 0.8,
      y: (250 - avgY) * 0.8,
      scale: 1.2
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
        {/* Political World Map Background */}
        <div
          className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/tools/png/ne_50m_admin_0_countries.png")`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#87CEEB', // Sky blue fallback
            transform: `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out',
            transformOrigin: 'center center'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
          onWheel={handleWheel}
        >
          {/* Subtle overlay for better marker visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-900/20" />
          
          {/* Job Markers */}
          {locationGroups.map((group, index) => (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 hover:z-30"
              style={{
                left: `${(group.position.x / 1000) * 100}%`,
                top: `${(group.position.y / 500) * 100}%`
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedLocation(selectedLocation?.location === group.location ? null : group);
              }}
            >
              {/* Enhanced Pulse Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-20 animation-delay-150" />
              
              {/* Enhanced Main Marker */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-xl hover:scale-125 transition-all duration-300 border-3 border-white ring-2 ring-blue-200">
                <div className="w-4 h-4 bg-white rounded-full shadow-inner" />
              </div>
              
              {/* Enhanced Job Count Badge */}
              <div className="absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
                {group.jobs.length}
              </div>
              
              {/* Location Label */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-gray-800 shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {group.location.split(',')[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Location Popup */}
        {selectedLocation && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 max-w-sm z-30 animate-scale-in border border-white/50">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-bold text-lg text-gray-900 pr-4">{selectedLocation.location}</h4>
              <button 
                onClick={() => setSelectedLocation(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-3">
              {selectedLocation.jobs.map(job => (
                <div key={job.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                  <h5 className="font-semibold text-sm text-gray-800 mb-1">{job.title}</h5>
                  <p className="text-xs text-gray-600 mb-2">{job.department} • {job.salary}</p>
                  <button
                    onClick={() => {
                      onJobSelect(job);
                      setSelectedLocation(null);
                    }}
                    className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                  >
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Enhanced Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <Button
            size="icon"
            variant="outline"
            onClick={handleZoomIn}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-white/50"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={handleZoomOut}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-white/50"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
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
            size="icon"
            variant="outline"
            onClick={fitToMarkers}
            className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-white/50"
            title="Fit to All Markers"
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Zoom Level Indicator */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-lg">
          {Math.round(mapTransform.scale * 100)}%
        </div>
      </div>
      
      {/* Enhanced Legend */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white shadow-md" />
          <span className="text-gray-700 font-medium">Job Locations ({jobs.length} total positions)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-pink-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
            #
          </div>
          <span className="text-gray-700 font-medium">Number of positions</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-xs">💡 Double-click to zoom • Scroll wheel to zoom • Drag to pan</span>
        </div>
      </div>
    </div>
  );
};

export default RealWorldMap;
