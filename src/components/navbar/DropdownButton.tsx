
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownButtonProps {
  children: React.ReactNode;
}

const DropdownButton = ({ children }: DropdownButtonProps) => {
  return (
    <button className="flex items-center text-slate-600 hover:text-slate-800 transition-all duration-300 font-subtitle text-sm font-medium relative py-2">
      {children}
      <ChevronDown className="ml-1 w-4 h-4 transition-all duration-300 group-hover:rotate-180" />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-amber-soft transition-all duration-500 group-hover:w-full"></span>
    </button>
  );
};

export default DropdownButton;
