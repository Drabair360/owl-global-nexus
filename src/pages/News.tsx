
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink, TrendingUp, Globe, Zap } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const NewsPage = () => {
  const news = [
    {
      title: "OWL International Secures €50M Series A for African Expansion",
      category: "Funding",
      date: "2024-12-10",
      summary: "Major funding round to accelerate CAOAGRO operations across East and North Africa, with new processing facilities planned in Kenya and Morocco.",
      highlight: true,
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Strategic Partnership with German Engineering Leader",
      category: "Partnership",
      date: "2024-12-05",
      summary: "Exclusive agreement with Bavaria's top cocoa processing equipment manufacturer to supply cutting-edge technology for African projects.",
      highlight: true,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "AKOULA Platform Beta Launch in Q1 2025",
      category: "Product",
      date: "2024-11-28",
      summary: "Revolutionary AI-powered matching platform for agro-industry set to transform how businesses connect across Africa.",
      highlight: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "KIDZ LAB Discovers Rising Talent in West Africa",
      category: "Entertainment",
      date: "2024-11-20",
      summary: "AI talent discovery platform successfully matches 200+ young performers with international opportunities in just 3 months.",
      highlight: false,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Sustainability Milestone: 10,000 Jobs Created",
      category: "Impact",
      date: "2024-11-15",
      summary: "OWL International's projects have now created over 10,000 direct and indirect jobs across West Africa since inception.",
      highlight: true,
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "New Cocoa Processing Facility Opens in Côte d'Ivoire",
      category: "Operations",
      date: "2024-11-10",
      summary: "State-of-the-art facility in Abidjan begins operations, capable of processing 50,000 tons of cocoa beans annually.",
      highlight: false,
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Funding': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Partnership': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Product': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Entertainment': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      case 'Impact': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
      case 'Operations': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16 relative">
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Hot News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Stay updated with the latest developments, partnerships, and milestones 
              as we transform industries across Africa and Europe.
            </p>
          </div>

          {/* Featured News */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {news.filter(item => item.highlight).map((item, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground font-body">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-heading font-semibold mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base font-body">{item.summary}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* All News */}
          <div>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">All Updates</h2>
            <div className="space-y-6">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground font-body">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="p-2 bg-muted rounded-lg">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-heading font-semibold mb-2">{item.title}</CardTitle>
                          <CardDescription className="font-body">{item.summary}</CardDescription>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading font-semibold">Stay Informed</CardTitle>
              <CardDescription className="text-lg font-body">
                Get the latest updates delivered directly to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6 font-body">
                Subscribe to our newsletter for exclusive insights, project updates, and investment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-input bg-background rounded-md text-sm font-body"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md text-sm font-body hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
