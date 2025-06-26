
import React from 'react';

interface DropdownMenuProps {
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropdownMenu = ({ children, onMouseEnter, onMouseLeave }: DropdownMenuProps) => {
  return (
    <div 
      className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl py-3 z-50 shadow-sophisticated"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute -top-1 left-6 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
      {children}
    </div>
  );
};

export default DropdownMenu;
