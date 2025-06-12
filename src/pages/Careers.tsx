
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Briefcase, Clock, ChevronRight, Zap, Globe, TrendingUp } from 'lucide-react';

const CareersPage = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "AKOULA Technology",
      location: "Paris, France",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI platforms transforming industrial operations across Africa.",
      requirements: ["Python/TensorFlow expertise", "Machine Learning experience", "Scalable systems design"],
      tags: ["AI", "Machine Learning", "Python"]
    },
    {
      title: "Industrial Project Manager",
      department: "CAOAGRO Operations",
      location: "Abidjan, Côte d'Ivoire",
      type: "Full-time",
      experience: "7+ years",
      description: "Oversee large-scale industrial projects from conception to completion in West African markets.",
      requirements: ["Project management certification", "Industrial experience", "French/English fluency"],
      tags: ["Project Management", "Industrial", "Leadership"]
    },
    {
      title: "Real Estate Investment Analyst",
      department: "OWLOMA Investments",
      location: "Cape Town, South Africa",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze and identify premium real estate opportunities across African and European markets.",
      requirements: ["Financial modeling expertise", "Real estate knowledge", "Market analysis skills"],
      tags: ["Finance", "Real Estate", "Analytics"]
    },
    {
      title: "UX/UI Designer",
      department: "Digital Innovation",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Create intuitive interfaces for our AI-powered platforms and digital solutions.",
      requirements: ["Design system expertise", "Figma proficiency", "User research experience"],
      tags: ["Design", "UX/UI", "Digital"]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on projects that transform communities across continents"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Accelerated learning in cutting-edge technologies and markets"
    },
    {
      icon: Users,
      title: "Diverse Team",
      description: "Collaborate with talent from across Africa, Europe, and beyond"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Access to latest technologies and resources for breakthrough solutions"
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
              Shape the Future
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body leading-relaxed">
              Join our mission to transform Africa through innovation, technology, and human-centered solutions. 
              Build your career while making a lasting impact on communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-amber-500/20 hover:shadow-xl">
                <benefit.icon className="w-10 h-10 text-amber-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100 font-body text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="relative h-20 bg-gradient-to-b from-slate-800 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-800 mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-body">
              Discover opportunities across our portfolio companies and drive innovation in emerging markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white hover:transform hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold text-slate-800 mb-1">
                        {position.title}
                      </CardTitle>
                      <CardDescription className="text-amber-600 font-subtitle font-semibold">
                        {position.department}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300">
                      {position.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-body">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.experience}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 font-body leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-slate-800 mb-2">Key Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-slate-600 font-body flex items-center">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-4 bg-slate-700 hover:bg-slate-800 text-white font-subtitle font-semibold group">
                    Apply Now 
                    <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-800 mb-6">
              Our Culture
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-body">
              We believe in creating an environment where innovation thrives, diversity is celebrated, 
              and every team member can make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-800 mb-4">Collaborative Excellence</h3>
              <p className="text-slate-600 font-body leading-relaxed">
                Work alongside brilliant minds from diverse backgrounds, united by our shared mission to create positive change.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-800 mb-4">Innovation Driven</h3>
              <p className="text-slate-600 font-body leading-relaxed">
                Access cutting-edge tools and technologies while working on projects that push the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-slate-800 mb-4">Global Impact</h3>
              <p className="text-slate-600 font-body leading-relaxed">
                Every project contributes to transforming communities and creating sustainable opportunities across continents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
