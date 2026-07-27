import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '@/hooks/useSEO';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const PageShell = ({ title, description, children }: Props) => {
  useSEO({ title, description });
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
