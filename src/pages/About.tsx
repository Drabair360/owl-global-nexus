
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Globe, Lightbulb, Target, Heart, Briefcase } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-institutional-soft overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
          <div className="animate-sophisticated-fade">
            <h1 className="text-display text-white mb-8 leading-tight font-heading">
              About
              <span className="gradient-text-institutional block mt-2">
                OWL International
              </span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-12 max-w-4xl mx-auto font-body leading-relaxed">
              We are pioneers of transformation, bridging continents through strategic investments 
              and innovative solutions that create lasting prosperity for communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-background relative">
        <GeometricPattern variant="background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-8 tracking-tight">
              Our Purpose
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Driven by human values and technological excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/20 dark:to-indigo-950/20 backdrop-blur-sm hover-glow">
              <CardHeader className="pb-6">
                <Target className="w-14 h-14 text-blue-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-3xl font-heading font-semibold tracking-tight">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  To transform Africa through strategic investments, cutting-edge technology, 
                  and innovative industrial solutions that create sustainable prosperity and 
                  meaningful opportunities for communities across the continent.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-950/20 dark:to-orange-950/20 backdrop-blur-sm hover-glow">
              <CardHeader className="pb-6">
                <Lightbulb className="w-14 h-14 text-amber-600 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-3xl font-heading font-semibold tracking-tight">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                  To become the leading bridge between Africa and Europe, fostering innovation, 
                  economic growth, and cultural exchange through visionary investments and 
                  transformative technological solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-semibold text-foreground mb-8 tracking-tight">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover-glow">
              <CardHeader className="text-center pb-4">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-xl font-heading font-semibold">Human-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body text-center">
                  Every decision we make prioritizes human impact and community prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover-glow">
              <CardHeader className="text-center pb-4">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-xl font-heading font-semibold">Global Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body text-center">
                  We think globally while acting locally to create meaningful change.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover-glow">
              <CardHeader className="text-center pb-4">
                <Briefcase className="w-12 h-12 text-green-500 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-xl font-heading font-semibold">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body text-center">
                  We strive for excellence in every project and partnership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-semibold text-foreground mb-8 tracking-tight">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Experienced professionals committed to transforming Africa's future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 bg-white dark:bg-slate-800 hover-glow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold">Leadership Member</CardTitle>
                  <CardDescription className="font-subtitle">Executive Position</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body text-center text-sm">
                    Dedicated to driving innovation and creating sustainable impact across Africa.
                  </p>
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

export default About;
