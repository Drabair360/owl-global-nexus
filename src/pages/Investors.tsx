
import React from 'react';
import Navbar from '@/components/Navbar';
import InvestorLogin from '@/components/InvestorLogin';
import Footer from '@/components/Footer';

const InvestorsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <InvestorLogin />
      <Footer />
    </div>
  );
};

export default InvestorsPage;
