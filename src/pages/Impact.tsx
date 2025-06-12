
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, Globe, Heart, Factory, GraduationCap } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';

const ImpactPage = () => {
  const metrics = [
    {
      number: "10,000+",
      label: "Jobs Created",
      description: "Direct and indirect employment across our projects",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      number: "€150M",
      label: "Economic Impact",
      description: "Generated value in local communities",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />
    },
    {
      number: "25",
      label: "Communities Transformed",
      description: "Villages and towns positively impacted",
      icon: <Heart className="w-8 h-8 text-red-600" />
    },
    {
      number: "5,000+",
      label: "People Trained",
      description: "Technical skills development programs",
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />
    }
  ];

  const stories = [
    {
      title: "Transforming Cocoa Communities in Côte d'Ivoire",
      location: "San-Pédro Region, Côte d'Ivoire",
      impact: "2,500 farmers now earn 40% more through direct processing partnerships",
      description: "Our CAOAGRO operations have revolutionized the local cocoa supply chain, enabling farmers to process their beans locally rather than exporting raw materials. This value-addition strategy has dramatically increased incomes while creating hundreds of technical jobs.",
      image: "🏭",
      metrics: ["40% income increase", "800 direct jobs", "2,500 farmers benefited"]
    },
    {
      title: "Youth Empowerment Through Technology",
      location: "Abidjan, Côte d'Ivoire",
      impact: "500+ young people trained in digital skills and industrial operations",
      description: "Through our training programs and KIDZ LAB platform, we're bridging the digital divide by providing cutting-edge technology education and entertainment industry opportunities to young Africans.",
      image: "💻",
      metrics: ["500+ trained", "85% employment rate", "12 months avg program"]
    },
    {
      title: "Women's Economic Participation",
      location: "Multiple Locations",
      impact: "60% of our administrative and quality control positions filled by women",
      description: "We prioritize gender equality in all our operations, creating opportunities for women in traditionally male-dominated industries while providing leadership development programs.",
      image: "👩‍💼",
      metrics: ["60% women in QC roles", "45% women managers", "100% equal pay"]
    }
  ];

  const initiatives = [
    {
      title: "Local Supplier Development",
      description: "Building capacity among local suppliers to meet international standards",
      icon: <Factory className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Education Partnerships",
      description: "Collaborating with universities to develop relevant technical curricula",
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Community Health Programs",
      description: "Supporting healthcare infrastructure in project areas",
      icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
      title: "Environmental Sustainability",
      description: "Implementing eco-friendly practices across all operations",
      icon: <Globe className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16 relative">
        <GeometricPattern variant="background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Measuring the meaningful change we create in communities across Africa and Europe. 
              Every project, every partnership, every innovation is designed to improve lives.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-heading font-semibold text-foreground mb-2">
                    {metric.number}
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Stories */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
              Stories of Transformation
            </h2>
            <div className="space-y-8">
              {stories.map((story, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-2">
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{story.image}</div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-heading font-semibold mb-2">{story.title}</CardTitle>
                            <CardDescription className="text-sm text-muted-foreground font-body mb-2">
                              📍 {story.location}
                            </CardDescription>
                            <div className="text-lg font-heading font-semibold text-primary mb-4">
                              {story.impact}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground font-body">{story.description}</p>
                      </CardContent>
                    </div>
                    <div className="bg-muted/30 p-6 flex items-center">
                      <div className="w-full">
                        <h4 className="font-heading font-semibold mb-4">Key Metrics</h4>
                        <div className="space-y-3">
                          {story.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              <span className="text-sm font-body">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Ongoing Initiatives */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-8 text-center">
              Ongoing Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {initiative.icon}
                      <CardTitle className="font-heading font-semibold">{initiative.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-body">{initiative.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Commitment Statement */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-heading font-semibold">Our Commitment</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground mb-6 font-body max-w-3xl mx-auto">
                We believe that sustainable development comes from empowering local communities, 
                creating economic opportunities, and building lasting partnerships. Every project 
                we undertake is designed to leave a positive, measurable impact that extends far 
                beyond our direct operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-heading font-semibold mb-2">Measurable Impact</h3>
                  <p className="text-sm text-muted-foreground font-body">Every initiative tracked with clear KPIs</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🤝</div>
                  <h3 className="font-heading font-semibold mb-2">Local Partnership</h3>
                  <p className="text-sm text-muted-foreground font-body">Working hand-in-hand with communities</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🌱</div>
                  <h3 className="font-heading font-semibold mb-2">Sustainable Growth</h3>
                  <p className="text-sm text-muted-foreground font-body">Building for long-term prosperity</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;
