
import React from 'react';
import Navbar from '@/components/Navbar';
import InvestorLogin from '@/components/InvestorLogin';

const InvestorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <InvestorLogin />
    </div>
  );
};

export default InvestorsPage;
