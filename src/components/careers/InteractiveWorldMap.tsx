
import React, { useState } from 'react';
import { MapPin, Zap, Building, Plus, Minus, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from './types';

interface InteractiveWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const InteractiveWorldMap: React.FC<InteractiveWorldMapProps> = ({ jobs, onJobSelect }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Group jobs by location for better visualization
  const jobsByLocation = jobs.reduce((acc, job) => {
    const key = job.location.split(',')[0]; // Get city name
    if (!acc[key]) acc[key] = [];
    acc[key].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  const locations = [
    { 
      name: 'Abuja', 
      country: 'Nigeria',
      x: '52%', 
      y: '45%', 
      jobs: jobsByLocation['Abuja'] || [],
      color: 'from-green-500 to-emerald-600'
    },
    { 
      name: 'Abidjan', 
      country: 'Côte d\'Ivoire',
      x: '48%', 
      y: '55%', 
      jobs: jobsByLocation['Abidjan'] || [],
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Aix-en-Provence', 
      country: 'France',
      x: '51%', 
      y: '35%', 
      jobs: jobsByLocation['Aix-en-Provence'] || [],
      color: 'from-blue-500 to-purple-600'
    },
    { 
      name: 'Remote', 
      country: 'Global',
      x: '15%', 
      y: '20%', 
      jobs: jobs.filter(j => j.remote) || [],
      color: 'from-cyan-500 to-teal-600'
    }
  ];

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  const handleReset = () => setZoomLevel(1);

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl p-8 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Building className="w-8 h-8 text-blue-400" />
            <h3 className="text-3xl font-bold text-white font-heading">Global Opportunities</h3>
          </div>
          
          {/* Zoom Controls */}
          <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-2 backdrop-blur-sm border border-slate-700/50">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              className="h-8 w-8 p-0 text-white hover:bg-slate-700/50"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-white text-sm font-mono min-w-[3rem] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
              className="h-8 w-8 p-0 text-white hover:bg-slate-700/50"
            >
              <Plus className="w-4 h-4" />
            </Button>
            <div className="w-px h-6 bg-slate-600 mx-1" />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="h-8 w-8 p-0 text-white hover:bg-slate-700/50"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Enhanced World Map Container */}
        <div className="relative w-full h-96 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Detailed Continents with Enhanced Geography */}
            
            {/* Africa - More detailed shape */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/60 to-slate-600/60 border border-slate-500/40 shadow-lg"
              style={{ 
                left: '45%', 
                top: '25%', 
                width: '15%', 
                height: '45%',
                clipPath: 'polygon(35% 0%, 65% 5%, 85% 15%, 95% 30%, 100% 45%, 95% 65%, 85% 80%, 70% 95%, 50% 100%, 25% 95%, 10% 85%, 5% 70%, 0% 50%, 5% 35%, 15% 20%, 25% 10%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            />
            
            {/* Europe - Enhanced detail */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/60 to-slate-600/60 border border-slate-500/40 shadow-lg"
              style={{ 
                left: '45%', 
                top: '15%', 
                width: '12%', 
                height: '20%',
                clipPath: 'polygon(10% 30%, 30% 10%, 50% 5%, 70% 0%, 85% 10%, 95% 25%, 100% 40%, 90% 60%, 80% 75%, 60% 85%, 40% 90%, 20% 85%, 5% 70%, 0% 50%, 5% 35%)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
            />
            
            {/* Americas - North and South */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/60 to-slate-600/60 border border-slate-500/40 shadow-lg"
              style={{ 
                left: '15%', 
                top: '20%', 
                width: '18%', 
                height: '55%',
                clipPath: 'polygon(20% 0%, 40% 5%, 60% 0%, 80% 10%, 90% 25%, 95% 40%, 100% 55%, 95% 70%, 85% 85%, 70% 95%, 50% 100%, 30% 95%, 15% 85%, 5% 70%, 0% 55%, 5% 40%, 10% 25%, 15% 10%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            />
            
            {/* Asia - Larger and more detailed */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/60 to-slate-600/60 border border-slate-500/40 shadow-lg"
              style={{ 
                left: '65%', 
                top: '18%', 
                width: '25%', 
                height: '50%',
                clipPath: 'polygon(0% 20%, 15% 10%, 30% 5%, 50% 0%, 70% 5%, 85% 15%, 95% 25%, 100% 40%, 95% 55%, 85% 70%, 70% 80%, 50% 85%, 30% 80%, 15% 70%, 5% 55%, 0% 40%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
              }}
            />

            {/* Australia */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/60 to-slate-600/60 border border-slate-500/40 shadow-lg"
              style={{ 
                left: '75%', 
                top: '65%', 
                width: '8%', 
                height: '12%',
                clipPath: 'polygon(0% 30%, 20% 10%, 50% 0%, 80% 10%, 100% 40%, 90% 70%, 70% 90%, 40% 100%, 10% 80%)',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}
            />

            {/* Ocean depths effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/10 to-blue-950/20 pointer-events-none" />

            {/* Location Markers */}
            {locations.map((location) => (
              location.jobs.length > 0 && (
                <div
                  key={location.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: location.x, top: location.y }}
                  onMouseEnter={() => setHoveredLocation(location.name)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => location.jobs[0] && onJobSelect(location.jobs[0])}
                >
                  {/* Enhanced pulsing ring */}
                  <div className={`absolute inset-0 w-10 h-10 bg-gradient-to-r ${location.color} rounded-full animate-ping opacity-30`} />
                  <div className={`absolute inset-1 w-8 h-8 bg-gradient-to-r ${location.color} rounded-full animate-ping opacity-20 animation-delay-200`} />
                  
                  {/* Main marker with enhanced styling */}
                  <div className={`relative w-8 h-8 bg-gradient-to-r ${location.color} rounded-full shadow-xl flex items-center justify-center group-hover:scale-125 transition-all duration-300 border-3 border-white ring-2 ring-slate-300/50`}>
                    <MapPin className="w-4 h-4 text-white drop-shadow-md" />
                  </div>
                  
                  {/* Enhanced job count badge */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-xl border-2 border-white">
                    {location.jobs.length}
                  </div>
                  
                  {/* Enhanced location label */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-900/95 text-white px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap backdrop-blur-sm border border-slate-700 shadow-2xl">
                    <div className="font-semibold text-blue-400">{location.name}</div>
                    <div className="text-xs text-slate-300">{location.country}</div>
                    <div className="text-xs text-green-400 font-medium">{location.jobs.length} position{location.jobs.length !== 1 ? 's' : ''}</div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-l border-t border-slate-700"></div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Enhanced hovered location details */}
        {hoveredLocation && (
          <div className="mt-6 bg-slate-800/80 border border-slate-600/50 rounded-xl p-6 backdrop-blur-md animate-fade-in shadow-2xl">
            {(() => {
              const location = locations.find(l => l.name === hoveredLocation);
              if (!location || location.jobs.length === 0) return null;
              
              return (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-5 h-5 bg-gradient-to-r ${location.color} rounded-full shadow-lg`} />
                    <h4 className="text-xl font-semibold text-white">{location.name}, {location.country}</h4>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                      {location.jobs.length} opportunity{location.jobs.length !== 1 ? 'ies' : 'y'}
                    </span>
                  </div>
                  <div className="grid gap-3">
                    {location.jobs.slice(0, 3).map((job) => (
                      <div 
                        key={job.id}
                        className="flex items-center justify-between p-4 bg-slate-700/60 rounded-lg hover:bg-slate-700/80 transition-all duration-200 cursor-pointer border border-slate-600/30 hover:border-slate-500/50"
                        onClick={() => onJobSelect(job)}
                      >
                        <div>
                          <h5 className="text-white font-medium">{job.title}</h5>
                          <p className="text-slate-300 text-sm">{job.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-blue-400 text-sm font-medium">{job.salary}</p>
                          <p className="text-slate-400 text-xs">{job.experience}</p>
                        </div>
                      </div>
                    ))}
                    {location.jobs.length > 3 && (
                      <p className="text-slate-400 text-sm text-center font-medium">
                        +{location.jobs.length - 3} more position{location.jobs.length - 3 !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Enhanced Legend */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
            <span>Active Positions</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full"></div>
            <span>Job Count</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Click to Explore</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="flex gap-1">
              <Plus className="w-3 h-3" />
              <Minus className="w-3 h-3" />
            </div>
            <span>Zoom Controls</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorldMap;
