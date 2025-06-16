import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-cyan-900 via-teal-900 via-emerald-900 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.10),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              Hot
              <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-600 bg-clip-text text-transparent block mt-2">
                News
              </span>
            </h1>
            
            <p className="text-body-large text-teal-100 mb-8 max-w-3xl mx-auto font-body">
              Stay updated with the latest developments, innovations, and insights from OWL International 
              and our portfolio companies across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        {/* Section Header */}
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">LATEST NEWS</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Explore the latest news, insights, and stories from OWL International and our portfolio companies.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1682685797497-f296491f82b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" 
                alt="News Thumbnail" 
                className="rounded-xl mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">OWL International Expands into Renewable Energy Sector</h3>
              <p className="text-muted-foreground mb-4 font-body">
                OWL International is proud to announce its expansion into the renewable energy sector, investing in sustainable energy projects across Africa.
              </p>
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <Calendar className="w-4 h-4 mr-2" />
                <span>October 26, 2024</span>
                <Tag className="w-4 h-4 mx-2" />
                <span>Renewable Energy</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-subtitle font-semibold mt-4">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* News Item 2 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1695656744705-c948541e352b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" 
                alt="News Thumbnail" 
                className="rounded-xl mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">AKOULA Platform Achieves Record User Engagement</h3>
              <p className="text-muted-foreground mb-4 font-body">
                The AKOULA platform has achieved record user engagement, with over 15,000 active users leveraging its AI-powered solutions.
              </p>
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <Calendar className="w-4 h-4 mr-2" />
                <span>October 20, 2024</span>
                <Tag className="w-4 h-4 mx-2" />
                <span>AI Platform</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-subtitle font-semibold mt-4">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* News Item 3 */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1695657358994-c96980534993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" 
                alt="News Thumbnail" 
                className="rounded-xl mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">CAOAGRO Partners with Local Farmers for Sustainable Agriculture</h3>
              <p className="text-muted-foreground mb-4 font-body">
                CAOAGRO has established new partnerships with local farmers to promote sustainable agriculture and enhance crop yields.
              </p>
              <div className="flex items-center text-sm text-muted-foreground font-body">
                <Calendar className="w-4 h-4 mr-2" />
                <span>October 15, 2024</span>
                <Tag className="w-4 h-4 mx-2" />
                <span>Sustainable Agriculture</span>
              </div>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-subtitle font-semibold mt-4">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="mr-4 font-subtitle">Previous</Button>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-subtitle">Next</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
