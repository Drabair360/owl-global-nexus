
import React from 'react';
import GoogleJobMapWrapper from './GoogleJobMap';
import { Job } from './types';

interface RealWorldMapProps {
  jobs: Job[];
  onJobSelect: (job: Job) => void;
}

const RealWorldMap: React.FC<RealWorldMapProps> = ({ jobs, onJobSelect }) => {
  return <GoogleJobMapWrapper jobs={jobs} onJobSelect={onJobSelect} />;
};

export default RealWorldMap;
