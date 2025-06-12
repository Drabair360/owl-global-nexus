
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Briefcase, Globe, ArrowRight } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const CareersPage = () => {
  const franceJobs = [
    {
      title: "Senior Industrial Project Manager",
      department: "Operations",
      location: "Paris, France",
      type: "Full-time",
      description: "Lead complex industrial projects across Africa, managing end-to-end delivery of cocoa processing facilities and equipment installations.",
      requirements: ["5+ years in industrial project management", "Experience with international projects", "Fluency in French and English"]
    },
    {
      title: "AI Platform Developer",
      department: "Technology",
      location: "Paris, France",
      type: "Full-time",
      description: "Develop and enhance our AKOULA platform, building intelligent matching systems for agro-industry and entertainment sectors.",
      requirements: ["3+ years in AI/ML development", "Experience with Python and React", "Knowledge of recommendation systems"]
    },
    {
      title: "Business Development Manager - Europe",
      department: "Sales",
      location: "Paris, France",
      type: "Full-time",
      description: "Expand our European partnerships and client base, focusing on equipment procurement and strategic alliances.",
      requirements: ["5+ years in B2B sales", "Network in industrial equipment sector", "Proven track record in international business"]
    }
  ];

  const ivoryCoastJobs = [
    {
      title: "Operations Director - West Africa",
      department: "Operations",
      location: "Abidjan, Côte d'Ivoire",
      type: "Full-time",
      description: "Oversee all West African operations, including project implementation, local partnerships, and team management.",
      requirements: ["7+ years in operations management", "Experience in West Africa", "Bilingual French/English"]
    },
    {
      title: "Local Procurement Specialist",
      department: "Supply Chain",
      location: "Abidjan, Côte d'Ivoire",
      type: "Full-time",
      description: "Manage local sourcing and procurement activities, building relationships with regional suppliers and contractors.",
      requirements: ["3+ years in procurement", "Knowledge of local markets", "Strong negotiation skills"]
    },
    {
      title: "Community Impact Coordinator",
      department: "Social Impact",
      location: "Abidjan, Côte d'Ivoire",
      type: "Full-time",
      description: "Design and implement community development programs, measuring social impact and building stakeholder relationships.",
      requirements: ["Experience in community development", "Understanding of local culture", "Project management skills"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16 relative">
        <GeometricPattern variant="background" />
        
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Help us transform communities and industries across Africa and Europe. 
              We're looking for passionate individuals ready to make a global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="font-heading font-semibold">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Work on projects that transform entire economies and create lasting change across continents.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="font-heading font-semibold">Diverse Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Join a multicultural team spanning France, Côte d'Ivoire, and beyond, united by shared vision.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <Briefcase className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="font-heading font-semibold">Innovation Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">Work with cutting-edge AI technology and innovative industrial solutions at the forefront of change.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* France Opportunities */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">🇫🇷 France Opportunities</h2>
            <p className="text-lg text-muted-foreground font-body">Join our Paris headquarters team</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {franceJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-500/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-body">{job.department}</CardDescription>
                    </div>
                    <Button className="font-body">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 font-body">{job.description}</p>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-muted-foreground font-body">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Côte d'Ivoire Opportunities */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">🇨🇮 Côte d'Ivoire Opportunities</h2>
            <p className="text-lg text-muted-foreground font-body">Be part of our African operations team</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {ivoryCoastJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-500/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-body">{job.department}</CardDescription>
                    </div>
                    <Button variant="outline" className="font-body">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground font-body">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 font-body">{job.description}</p>
                  <div>
                    <h4 className="font-heading font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-muted-foreground font-body">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading font-semibold">Ready to Join Us?</CardTitle>
              <CardDescription className="text-lg font-body">
                Our application process is designed to find the best fit for both you and our mission.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">1. Apply Online</h3>
                  <p className="text-sm text-muted-foreground font-body">Submit your application with CV and cover letter</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">2. Interview Process</h3>
                  <p className="text-sm text-muted-foreground font-body">Video interviews with hiring managers and team members</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2">3. Join the Team</h3>
                  <p className="text-sm text-muted-foreground font-body">Onboarding and integration into your new role</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
