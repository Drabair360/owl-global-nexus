
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Globe, Heart, TreePine, GraduationCap, Building, TrendingUp } from 'lucide-react';

const ImpactPage = () => {
  const impactMetrics = [
    {
      icon: Users,
      value: "50,000+",
      label: "Lives Transformed",
      description: "Direct and indirect beneficiaries of our programs"
    },
    {
      icon: Building,
      value: "25",
      label: "Infrastructure Projects",
      description: "Completed across West and East Africa"
    },
    {
      icon: GraduationCap,
      value: "5,000+",
      label: "Skills Trained",
      description: "Individuals trained in advanced technologies"
    },
    {
      icon: TreePine,
      value: "95%",
      label: "Carbon Neutral",
      description: "Operations achieving sustainability goals"
    }
  ];

  const sdgGoals = [
    {
      number: "8",
      title: "Decent Work and Economic Growth",
      description: "Creating sustainable employment opportunities through technology and industrial development",
      impact: "12,000+ direct jobs created"
    },
    {
      number: "9",
      title: "Industry, Innovation and Infrastructure",
      description: "Building resilient infrastructure and promoting inclusive industrialization",
      impact: "25 major infrastructure projects"
    },
    {
      number: "4",
      title: "Quality Education",
      description: "Ensuring inclusive and equitable quality education through digital platforms",
      impact: "5,000+ individuals trained"
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      description: "Strengthening global partnerships for sustainable development",
      impact: "50+ strategic partnerships"
    }
  ];

  const stories = [
    {
      title: "Transforming Cocoa Communities in Côte d'Ivoire",
      description: "Our CAOAGRO operations have revolutionized local cocoa processing, providing direct employment to over 500 families while ensuring fair trade practices and sustainable farming techniques.",
      impact: "500 families directly benefited",
      location: "Côte d'Ivoire",
      category: "Economic Empowerment"
    },
    {
      title: "AI-Powered Education Revolution",
      description: "AKOULA's talent discovery platform has democratized access to opportunities, connecting over 2,000 young professionals with career-defining projects across Africa.",
      impact: "2,000+ careers launched",
      location: "Pan-African",
      category: "Digital Innovation"
    },
    {
      title: "Sustainable Urban Development",
      description: "OWLOMA's mixed-use developments integrate green building practices with community-centered design, creating sustainable living spaces for growing urban populations.",
      impact: "1,200 sustainable housing units",
      location: "Multiple Cities",
      category: "Environmental"
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
              Creating Lasting Impact
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body leading-relaxed">
              Our commitment to transforming communities goes beyond business success. 
              We measure our achievements by the positive change we create for people and planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:shadow-amber-500/20 hover:shadow-xl text-center">
                <metric.icon className="w-12 h-12 text-amber-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-3xl font-heading font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-blue-100 font-body text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition */}
      <div className="relative h-20 bg-gradient-to-b from-slate-800 to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      {/* SDG Goals */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-800 mb-6">
              UN Sustainable Development Goals
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-body">
              Our operations directly contribute to achieving the United Nations Sustainable Development Goals, 
              creating measurable impact across multiple dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdgGoals.map((goal, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white hover:transform hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl font-heading font-bold text-white">{goal.number}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold text-slate-800">
                        SDG {goal.number}
                      </CardTitle>
                      <CardDescription className="text-slate-600 font-subtitle font-semibold">
                        {goal.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 font-body leading-relaxed mb-4">
                    {goal.description}
                  </p>
                  <div className="bg-slate-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-subtitle font-semibold text-slate-800">{goal.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-slate-800 mb-6">
              Stories of Change
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-body">
              Real stories from communities where our investments and innovations are creating lasting transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white hover:transform hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-subtitle font-semibold rounded-full">
                      {story.category}
                    </span>
                    <span className="text-xs text-slate-500 font-body">{story.location}</span>
                  </div>
                  <CardTitle className="text-xl font-heading font-semibold text-slate-800 leading-tight">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 font-body leading-relaxed mb-4">
                    {story.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-subtitle font-semibold text-green-800">{story.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-body leading-relaxed mb-8">
            Partner with us to create sustainable solutions that transform communities and build a better future for all.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Globe className="w-5 h-5 mr-3 text-amber-400" />
            <span className="text-sm font-heading font-medium text-white tracking-wide">
              Headquartered in Paris, driving innovation across continents with human-centered values
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactPage;
