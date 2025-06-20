
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsModal from '@/components/NewsModal';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { newsData, NewsItem } from '@/data/newsData';
import type { CarouselApi } from '@/components/ui/carousel';

const News = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const handleReadMore = (news: NewsItem) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const getEntityColor = (entity: string) => {
    switch (entity) {
      case 'AKOULA': return 'bg-blue-100 text-blue-800';
      case 'CAOAGRO.COM': return 'bg-green-100 text-green-800';
      case 'KIDZ LAB': return 'bg-purple-100 text-purple-800';
      case 'OWLOMA': return 'bg-orange-100 text-orange-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-100">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-cyan-800 via-teal-700 via-emerald-600 to-white overflow-hidden">
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
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-section text-slate-800 mb-4 font-brand">LATEST NEWS</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto font-body">
              Explore the latest news, insights, and stories from OWL International and our portfolio companies.
            </p>
          </div>

          {/* News Carousel */}
          <div className="relative">
            <Carousel 
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {newsData.map((news) => (
                  <CarouselItem key={news.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="rounded-xl mb-4 w-full h-48 object-cover" 
                      />
                      
                      <div className="flex-1 flex flex-col">
                        <div className="mb-2">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getEntityColor(news.entity)}`}>
                            {news.entity}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground line-clamp-2">
                          {news.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 font-body flex-1 line-clamp-3">
                          {news.excerpt}
                        </p>
                        
                        <div className="flex items-center text-sm text-muted-foreground font-body mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{news.date}</span>
                          <Tag className="w-4 h-4 mx-2" />
                          <span>{news.category}</span>
                        </div>
                        
                        <button 
                          onClick={() => handleReadMore(news)}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-subtitle font-semibold mt-auto"
                        >
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {newsData.map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsModal 
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
};

export default News;
