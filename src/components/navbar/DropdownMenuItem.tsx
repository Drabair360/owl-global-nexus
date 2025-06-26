
import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownMenuItemProps {
  to: string;
  children: React.ReactNode;
}

const DropdownMenuItem = ({ to, children }: DropdownMenuItemProps) => {
  return (
    <Link 
      to={to} 
      onClick={() => window.scrollTo(0, 0)}
      className="block px-6 py-4 text-sm text-slate-800 hover:bg-gray-50 hover:text-slate-900 transition-all duration-300 font-subtitle relative group"
    >
      {children}
      <span className="absolute bottom-0 left-6 w-0 h-0.5 gradient-amber-soft transition-all duration-500 group-hover:w-full"></span>
    </Link>
  );
};

export default DropdownMenuItem;
