
import React, { useState } from 'react';
import { MapPin, Zap } from 'lucide-react';
import { Job } from './types';

interface CustomJobMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const CustomJobMap: React.FC<CustomJobMapProps> = ({ jobs, onJobSelect }) => {
  const [hoveredJob, setHoveredJob] = useState<Job | null>(null);

  // Group jobs by location for better visualization
  const jobsByLocation = jobs.reduce((acc, job) => {
    const key = job.location.split(',')[0]; // Get city name
    if (!acc[key]) acc[key] = [];
    acc[key].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  const locations = [
    { name: 'Abuja', x: 52, y: 45, jobs: jobsByLocation['Abuja'] || [] },
    { name: 'Abidjan', x: 48, y: 55, jobs: jobsByLocation['Abidjan'] || [] },
    { name: 'Aix-en-Provence', x: 51, y: 35, jobs: jobsByLocation['Aix-en-Provence'] || [] },
    { name: 'Remote', x: 25, y: 25, jobs: jobs.filter(j => j.remote) || [] }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-2xl p-8 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative">
        <h3 className="text-2xl font-bold text-white mb-6 font-heading">Global Opportunities</h3>
        
        {/* Custom SVG World Map */}
        <div className="relative">
          <svg viewBox="0 0 100 60" className="w-full h-80 bg-slate-800/50 rounded-xl">
            {/* Simplified world continents */}
            <defs>
              <linearGradient id="continentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
            
            {/* Africa */}
            <path
              d="M45 25 Q50 20 55 25 L58 35 Q60 45 55 55 Q50 60 45 55 Q40 50 42 40 Q40 30 45 25 Z"
              fill="url(#continentGradient)"
              stroke="#64748b"
              strokeWidth="0.2"
            />
            
            {/* Europe */}
            <path
              d="M45 15 Q50 10 55 15 Q58 20 55 25 Q50 20 45 25 Q42 20 45 15 Z"
              fill="url(#continentGradient)"
              stroke="#64748b"
              strokeWidth="0.2"
            />
            
            {/* Americas */}
            <path
              d="M15 20 Q20 15 25 20 L28 35 Q30 50 25 55 Q20 60 15 55 Q10 45 12 35 Q10 25 15 20 Z"
              fill="url(#continentGradient)"
              stroke="#64748b"
              strokeWidth="0.2"
            />
            
            {/* Asia */}
            <path
              d="M65 20 Q75 15 85 20 L88 35 Q90 45 85 50 Q75 55 65 50 Q60 40 62 30 Q60 25 65 20 Z"
              fill="url(#continentGradient)"
              stroke="#64748b"
              strokeWidth="0.2"
            />

            {/* Job location markers */}
            {locations.map((location, index) => (
              location.jobs.length > 0 && (
                <g key={location.name}>
                  {/* Pulsing circle animation */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="2"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="0.5"
                    opacity="0.6"
                    className="animate-ping"
                  />
                  
                  {/* Main marker */}
                  <circle
                    cx={location.x}
                    cy={location.y}
                    r="1.5"
                    fill="#3b82f6"
                    className="cursor-pointer hover:fill-blue-400 transition-colors"
                    onMouseEnter={() => setHoveredJob(location.jobs[0])}
                    onMouseLeave={() => setHoveredJob(null)}
                    onClick={() => onJobSelect(location.jobs[0])}
                  />
                  
                  {/* Job count badge */}
                  <circle
                    cx={location.x + 2}
                    cy={location.y - 2}
                    r="1"
                    fill="#ef4444"
                  />
                  <text
                    x={location.x + 2}
                    y={location.y - 1.5}
                    fontSize="1"
                    fill="white"
                    textAnchor="middle"
                    className="font-bold"
                  >
                    {location.jobs.length}
                  </text>
                </g>
              )
            ))}
          </svg>

          {/* Location labels */}
          {locations.map((location) => (
            location.jobs.length > 0 && (
              <div
                key={`label-${location.name}`}
                className="absolute bg-slate-800/90 text-white px-2 py-1 rounded text-xs font-medium pointer-events-none"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y + 5}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                {location.name} ({location.jobs.length})
              </div>
            )
          ))}
        </div>

        {/* Hovered job preview */}
        {hoveredJob && (
          <div className="mt-4 bg-slate-800/50 border border-slate-600 rounded-lg p-4 animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <h4 className="text-white font-semibold">{hoveredJob.title}</h4>
            </div>
            <p className="text-slate-300 text-sm">{hoveredJob.location}</p>
            <p className="text-blue-400 text-sm">{hoveredJob.department}</p>
          </div>
        )}

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Active Positions</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Job Count</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomJobMap;
