
import React from 'react';

const MilestoneTrajectory = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 mb-16">
      <h3 className="text-2xl font-semibold text-slate-800 text-center mb-12 font-body">
        Milestone Trajectory to 2030
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center group">
          <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            €5B+
          </div>
          <div className="text-lg font-semibold text-slate-800 mb-2">Portfolio Value</div>
          <div className="text-slate-600 font-body">Total ecosystem valuation by 2030</div>
        </div>
        
        <div className="text-center group">
          <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            500K+
          </div>
          <div className="text-lg font-semibold text-slate-800 mb-2">Jobs Created</div>
          <div className="text-slate-600 font-body">Direct employment across Africa</div>
        </div>
        
        <div className="text-center group">
          <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            1B+
          </div>
          <div className="text-lg font-semibold text-slate-800 mb-2">Lives Impacted</div>
          <div className="text-slate-600 font-body">People reached through our platforms</div>
        </div>

        <div className="text-center group">
          <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            54
          </div>
          <div className="text-lg font-semibold text-slate-800 mb-2">Countries</div>
          <div className="text-slate-600 font-body">Complete African market coverage</div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneTrajectory;
