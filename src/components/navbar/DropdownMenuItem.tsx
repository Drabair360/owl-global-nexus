
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
      className="block px-6 py-4 text-sm text-slate-800 hover:bg-gray-50 transition-colors font-subtitle"
    >
      {children}
    </Link>
  );
};

export default DropdownMenuItem;
