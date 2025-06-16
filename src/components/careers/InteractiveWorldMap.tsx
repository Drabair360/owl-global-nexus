
import React, { useState } from 'react';
import { MapPin, Zap, Building } from 'lucide-react';
import { Job } from './types';

interface InteractiveWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const InteractiveWorldMap: React.FC<InteractiveWorldMapProps> = ({ jobs, onJobSelect }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

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
        <div className="flex items-center gap-3 mb-8">
          <Building className="w-8 h-8 text-blue-400" />
          <h3 className="text-3xl font-bold text-white font-heading">Global Opportunities</h3>
        </div>
        
        {/* World Map Container */}
        <div className="relative w-full h-96 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
          {/* Continents Background - CSS shapes */}
          <div className="absolute inset-0">
            {/* Africa */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/40 to-slate-600/40 rounded-tl-3xl rounded-br-3xl border border-slate-600/30"
              style={{ 
                left: '45%', 
                top: '25%', 
                width: '15%', 
                height: '45%',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 95% 70%, 80% 100%, 20% 100%, 0% 70%, 5% 30%)'
              }}
            />
            
            {/* Europe */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/40 to-slate-600/40 rounded-lg border border-slate-600/30"
              style={{ 
                left: '45%', 
                top: '15%', 
                width: '12%', 
                height: '20%',
                clipPath: 'polygon(0% 40%, 60% 0%, 100% 20%, 90% 80%, 40% 100%, 0% 80%)'
              }}
            />
            
            {/* Americas */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/40 to-slate-600/40 rounded-l-2xl border border-slate-600/30"
              style={{ 
                left: '15%', 
                top: '20%', 
                width: '18%', 
                height: '55%',
                clipPath: 'polygon(0% 0%, 70% 0%, 100% 30%, 95% 70%, 80% 100%, 0% 100%)'
              }}
            />
            
            {/* Asia */}
            <div 
              className="absolute bg-gradient-to-br from-slate-700/40 to-slate-600/40 rounded-r-3xl border border-slate-600/30"
              style={{ 
                left: '65%', 
                top: '18%', 
                width: '25%', 
                height: '50%',
                clipPath: 'polygon(0% 20%, 80% 0%, 100% 40%, 90% 80%, 60% 100%, 0% 90%)'
              }}
            />
          </div>

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
                {/* Pulsing ring */}
                <div className={`absolute inset-0 w-8 h-8 bg-gradient-to-r ${location.color} rounded-full animate-ping opacity-40`} />
                
                {/* Main marker */}
                <div className={`relative w-6 h-6 bg-gradient-to-r ${location.color} rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform border-2 border-white`}>
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                
                {/* Job count badge */}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  {location.jobs.length}
                </div>
                
                {/* Location label */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm border border-slate-700">
                  <div className="font-semibold">{location.name}</div>
                  <div className="text-xs text-slate-300">{location.country}</div>
                  <div className="text-xs text-blue-400">{location.jobs.length} position{location.jobs.length !== 1 ? 's' : ''}</div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Hovered location details */}
        {hoveredLocation && (
          <div className="mt-6 bg-slate-800/70 border border-slate-600/50 rounded-xl p-6 backdrop-blur-sm animate-fade-in">
            {(() => {
              const location = locations.find(l => l.name === hoveredLocation);
              if (!location || location.jobs.length === 0) return null;
              
              return (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-4 h-4 bg-gradient-to-r ${location.color} rounded-full`} />
                    <h4 className="text-xl font-semibold text-white">{location.name}, {location.country}</h4>
                  </div>
                  <div className="grid gap-3">
                    {location.jobs.slice(0, 3).map((job) => (
                      <div 
                        key={job.id}
                        className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors cursor-pointer"
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
                      <p className="text-slate-400 text-sm text-center">
                        +{location.jobs.length - 3} more position{location.jobs.length - 3 !== 1 ? 's' : ''}
                      </p>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
            <span>Active Positions</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>Job Count</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Click to Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorldMap;
