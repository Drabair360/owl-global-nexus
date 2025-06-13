
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Seamless Gradient Transition Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 via-slate-800/90 via-slate-700/85 via-slate-600/80 to-slate-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-indigo-900/20 via-purple-900/15 via-amber-900/10 to-transparent" />
      
      {/* Enhanced Atmospheric Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.10),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.08),transparent_50%)]" />
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse" style={{animationDuration: '8s'}} />
      </div>
    </>
  );
};

export default BackgroundEffects;
