
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Award, Users, TrendingUp, Globe, Star, Gift, Handshake } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const ScoutsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-institutional-soft overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-white mb-6 leading-tight">
              Become an
              <span className="gradient-text-institutional">
                {" "}OWL Scout
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-body">
              Join our exclusive network of visionary investors who discover and share breakthrough opportunities 
              in emerging markets, technologies, and transformative ventures across Africa and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-amber-soft hover:from-amber-600 hover:to-orange-700 text-white font-subtitle font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply to Become a Scout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-background relative">
        <GeometricPattern variant="subtle" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              The OWL Scout Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              At OWL International, we believe that the next breakthrough innovations and investment opportunities 
              come from those who are closest to emerging trends, technologies, and market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-semibold text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                OWL Scouts are the eyes and ears of innovation across the globe. As trusted partners in our 
                investment ecosystem, they identify groundbreaking opportunities in agro-industry, technology, 
                real estate, and emerging sectors that align with our mission of transforming Africa through strategic investments.
              </p>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                We're always eager to hear about the latest trends, breakthroughs, and opportunities in the 
                industries and world regions we serve. Our Scouts help us stay ahead of the curve, ensuring 
                we never miss a transformative opportunity.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-8 rounded-xl border border-border hover-glow">
              <Search className="w-16 h-16 text-amber-600 mb-6" />
              <h3 className="text-2xl font-heading font-semibold mb-4">What We're Looking For</h3>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2" />
                  <span>Revolutionary agro-industrial technologies and processing innovations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2" />
                  <span>AI and tech solutions addressing African market needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2" />
                  <span>Strategic real estate and infrastructure developments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2" />
                  <span>Sustainable and impactful business models</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2" />
                  <span>Co-development opportunities in emerging markets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section className="py-20 bg-accent/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Exclusive Scout Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Our loyalty program rewards Scouts with exceptional benefits and unique opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover-glow">
              <CardHeader className="text-center">
                <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-heading font-semibold">Welcome Package</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-amber-500 mr-2 mt-1" />
                    <span>Exclusive OWL Scout certification and credentials</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-amber-500 mr-2 mt-1" />
                    <span>Access to private investment briefings</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-amber-500 mr-2 mt-1" />
                    <span>Premium research reports and market insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover-glow">
              <CardHeader className="text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-heading font-semibold">Participation Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                    <span>Co-investment opportunities in discovered deals</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                    <span>Preferred allocation in Scout-sourced investments</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-blue-500 mr-2 mt-1" />
                    <span>Development partnership opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 hover-glow">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl font-heading font-semibold">Elite Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mr-2 mt-1" />
                    <span>Success-based bonus and finder's fees</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mr-2 mt-1" />
                    <span>Annual Scout recognition events</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-4 h-4 text-green-500 mr-2 mt-1" />
                    <span>Lifetime network access and privileges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 hover-glow">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-heading font-semibold">Global Network Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-body">
                  Connect with fellow Scouts, industry leaders, and OWL's extensive network across Africa, Europe, and beyond.
                </p>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-blue-500 mr-2" />
                    <span>Quarterly Scout networking events</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-blue-500 mr-2" />
                    <span>Access to OWL's executive team</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-blue-500 mr-2" />
                    <span>Cross-continental collaboration opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 hover-glow">
              <CardHeader>
                <Handshake className="w-12 h-12 text-amber-600 mb-4" />
                <CardTitle className="text-2xl font-heading font-semibold">Partnership Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-body">
                  Beyond scouting, exceptional Scouts can become strategic partners in development and co-investment initiatives.
                </p>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-amber-500 mr-2" />
                    <span>Joint venture development rights</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-amber-500 mr-2" />
                    <span>Regional partnership opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-amber-500 mr-2" />
                    <span>Technology licensing collaborations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white relative">
        <GeometricPattern variant="background" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
            Ready to Join the Elite?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body">
            Become part of an exclusive network that shapes the future of investments across emerging markets.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 font-subtitle font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-subtitle font-bold px-8 py-3 rounded-lg transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScoutsPage;
