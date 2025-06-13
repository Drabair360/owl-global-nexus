
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700" />
      
      {/* Subtle Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-slate-900/20" />
      
      {/* Minimal Grid Pattern - Much Lighter */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
    </>
  );
};

export default BackgroundEffects;
