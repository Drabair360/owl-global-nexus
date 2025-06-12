
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ExternalLink, TrendingUp, Globe, Zap } from 'lucide-react';

const NewsPage = () => {
  const featuredNews = {
    title: "OWL International Announces Major AI Infrastructure Investment in West Africa",
    excerpt: "Strategic partnership with leading technology providers to accelerate AKOULA platform deployment across the region.",
    date: "2024-12-10",
    readTime: "5 min read",
    category: "Investment",
    image: "/placeholder.svg"
  };

  const newsArticles = [
    {
      title: "CAOAGRO Completes First Cocoa Processing Facility in Côte d'Ivoire",
      excerpt: "Groundbreaking project showcases German engineering excellence combined with sustainable African development practices.",
      date: "2024-12-08",
      readTime: "3 min read",
      category: "Industrial",
      tag: "CAOAGRO"
    },
    {
      title: "AKOULA AI Platform Reaches 10,000 Active Users Milestone",
      excerpt: "Revolutionary matching technology transforms talent discovery and industrial operations across multiple sectors.",
      date: "2024-12-05",
      readTime: "4 min read",
      category: "Technology",
      tag: "AKOULA"
    },
    {
      title: "OWLOMA Secures Prime Real Estate Development Site in Paris",
      excerpt: "Strategic acquisition reinforces commitment to bridging African and European markets through visionary property investments.",
      date: "2024-12-03",
      readTime: "6 min read",
      category: "Real Estate",
      tag: "OWLOMA"
    },
    {
      title: "Sustainability Report: 95% Carbon Neutral Operations Achieved",
      excerpt: "Comprehensive environmental impact assessment demonstrates industry-leading commitment to sustainable development.",
      date: "2024-11-28",
      readTime: "7 min read",
      category: "Sustainability",
      tag: "Impact"
    },
    {
      title: "Partnership with African Development Bank Announced",
      excerpt: "Multi-million dollar collaboration to accelerate infrastructure development across West and East Africa.",
      date: "2024-11-25",
      readTime: "5 min read",
      category: "Partnership",
      tag: "Growth"
    },
    {
      title: "KIDZ LAB Entertainment Wins Innovation Award",
      excerpt: "AI-powered talent discovery platform recognized for excellence in creative industry transformation.",
      date: "2024-11-20",
      readTime: "3 min read",
      category: "Awards",
      tag: "AKOULA"
    }
  ];

  const marketInsights = [
    {
      icon: TrendingUp,
      title: "African Tech Investment Surge",
      value: "+340%",
      description: "Year-over-year growth in technology investments"
    },
    {
      icon: Globe,
      title: "Global Market Expansion",
      value: "15 Countries",
      description: "Active operations across African and European markets"
    },
    {
      icon: Zap,
      title: "Innovation Acceleration",
      value: "50+ Patents",
      description: "Pending intellectual property applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-semibold text-white mb-6 tracking-tight">
              Latest Insights
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body leading-relaxed">
              Stay informed with the latest developments, innovations, and market insights 
              driving transformation across Africa and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketInsights.map((insight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-amber-500/20 hover:shadow-xl">
                <insight.icon className="w-10 h-10 text-amber-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-2xl font-heading font-bold text-white mb-1">{insight.value}</div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{insight.title}</h3>
                <p className="text-blue-100 font-body text-sm">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="relative h-20 bg-gradient-to-b from-slate-800 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      {/* Featured Article */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-800 mb-6">
              Featured Story
            </h2>
          </div>

          <Card className="mb-20 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white overflow-hidden group">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-amber-500 text-white font-subtitle">{featuredNews.category}</Badge>
                  <div className="flex items-center text-sm text-slate-500 font-body">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredNews.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-slate-500 font-body">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredNews.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-semibold text-slate-800 mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-slate-600 font-body leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>
                <button className="flex items-center text-amber-600 hover:text-amber-700 font-subtitle font-semibold transition-colors duration-300">
                  Read Full Article <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>

          {/* News Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-slate-800 mb-4">
              Recent Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white hover:transform hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300 font-subtitle">
                      {article.category}
                    </Badge>
                    <Badge className="bg-amber-500 text-white text-xs font-subtitle">
                      {article.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold text-slate-800 leading-tight">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-slate-500 font-body">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 font-body leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <button className="flex items-center text-amber-600 hover:text-amber-700 font-subtitle font-medium transition-colors duration-300 group">
                    Read More 
                    <ExternalLink className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
