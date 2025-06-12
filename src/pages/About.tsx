
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Target, Users, Lightbulb, MapPin, Building } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16 relative">
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              About OWL International
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              A visionary holding and purchasing company transforming industries across Africa and Europe 
              through strategic investments and innovative technology solutions.
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 font-body">
                OWL International SAS bridges continents through transformative investments that create 
                sustainable prosperity. We specialize in industrial project management, cutting-edge 
                technology platforms, and strategic partnerships that fundamentally improve lives in 
                both resource-rich and resource-constrained environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Strategic Focus</h3>
                    <p className="text-muted-foreground font-body">Identifying and developing high-impact opportunities across multiple sectors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Community Impact</h3>
                    <p className="text-muted-foreground font-body">Creating new revenue streams and employment opportunities in developing regions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Innovation-Driven</h3>
                    <p className="text-muted-foreground font-body">Leveraging AI and automation to solve complex industrial challenges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2">
              <CardHeader>
                <Building className="w-12 h-12 text-amber-600 mb-4" />
                <CardTitle className="text-2xl font-heading font-semibold">Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Legal Entity</h4>
                  <p className="text-muted-foreground font-body">OWL INTERNATIONAL SAS</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Headquarters</h4>
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-muted-foreground mr-2 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground font-body">
                      47 Boulevard de Courcelles<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">Geographic Presence</h4>
                  <p className="text-muted-foreground font-body">
                    Active operations across West, East, and North Africa, with European headquarters in Paris 
                    and strategic partnerships in Germany, China, and South Africa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Divisions */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-semibold text-foreground text-center mb-12">Our Business Divisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading font-semibold flex items-center">
                    <Globe className="w-6 h-6 text-green-600 mr-3" />
                    African Operations
                  </CardTitle>
                  <CardDescription className="font-body">Industrial transformation across the continent</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li>• Turkey industrialization projects via CAOAGRO.COM</li>
                    <li>• Cocoa bean processing facilities</li>
                    <li>• Equipment sourcing from South Africa</li>
                    <li>• Turnkey project design and implementation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-heading font-semibold flex items-center">
                    <Building className="w-6 h-6 text-blue-600 mr-3" />
                    European Operations
                  </CardTitle>
                  <CardDescription className="font-body">Strategic purchasing and technology development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground font-body">
                    <li>• High-quality industrial equipment procurement</li>
                    <li>• Exclusive partnerships with German manufacturers</li>
                    <li>• AKOULA platform development and innovation</li>
                    <li>• KIDZ LAB entertainment technology solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Innovation Focus */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading font-semibold">Innovation at Our Core</CardTitle>
              <CardDescription className="text-lg font-body">
                Pioneering AI-powered solutions for tomorrow's challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏭</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Industrial Quote Builder SaaS</h3>
                  <p className="text-sm text-muted-foreground font-body">Automated pricing for agro-industrial projects</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Equipment Marketplace</h3>
                  <p className="text-sm text-muted-foreground font-body">Africa-ready B2B equipment platform</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Talent Discovery AI</h3>
                  <p className="text-sm text-muted-foreground font-body">Revolutionary entertainment industry matching</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
