
import React from 'react';
import { useDropdownHover } from './hooks/useDropdownHover';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

const InvestorsDropdown = () => {
  const { isOpen, handleMouseEnter, handleMouseLeave } = useDropdownHover();

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownButton>Investors</DropdownButton>
      {isOpen && (
        <DropdownMenu 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropdownMenuItem to="/investors">Investor Portal</DropdownMenuItem>
          <DropdownMenuItem to="/scouts">Scouts</DropdownMenuItem>
        </DropdownMenu>
      )}
    </div>
  );
};

export default InvestorsDropdown;
