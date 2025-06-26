
import React from 'react';
import { useDropdownHover } from './hooks/useDropdownHover';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

const CompanyDropdown = () => {
  const { isOpen, handleMouseEnter, handleMouseLeave } = useDropdownHover();

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownButton>Company</DropdownButton>
      {isOpen && (
        <DropdownMenu 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownMenuItem to="/about">About Owl</DropdownMenuItem>
          <DropdownMenuItem to="/careers">Careers</DropdownMenuItem>
          <DropdownMenuItem to="/news">Hot News</DropdownMenuItem>
          <DropdownMenuItem to="/impact">Impact</DropdownMenuItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default CompanyDropdown;
