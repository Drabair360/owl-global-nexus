
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Globe, Award, TrendingUp, Rocket, Heart, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with gradient to white */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-slate-800 via-blue-800 via-indigo-700 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.08),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="animate-sophisticated-fade">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight font-heading">
              About
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent block mt-2">
                OWL International
              </span>
            </h1>
            
            <p className="text-body-large text-blue-100 mb-8 max-w-3xl mx-auto font-body">
              Pioneering transformative investments across Africa through strategic vision, 
              innovative technology, and sustainable development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Revolutionary Vision Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Vision Header with Dynamic Elements */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
              <Rocket className="w-6 h-6 text-blue-600 animate-bounce" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide uppercase">The Future Starts Here</span>
              <Zap className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              OUR VISION
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-700 leading-relaxed mb-8">
                We are not just building companies.
                <span className="block mt-2 font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  We are architecting humanity&apos;s next chapter.
                </span>
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12 rounded-full"></div>
            </div>
          </div>

          {/* The Manifesto */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">The Continental Renaissance</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Africa is not emerging—it is <strong>erupting</strong> with potential. 
                  We envision a continent where innovation flows like mighty rivers, 
                  where technology bridges ancient wisdom with quantum possibilities, 
                  and where every solution born here reshapes global paradigms.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">The Human Imperative</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  This is bigger than business. This is about <strong>human dignity</strong>, 
                  about ensuring that every child born today inherits a world of 
                  unprecedented opportunity. We are the bridge between what is 
                  and what must be—a future where prosperity knows no borders.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">The Catalyst Effect</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We don&apos;t just invest in ventures—we <strong>ignite movements</strong>. 
                  Each portfolio company is a beacon, each innovation a ripple that 
                  becomes a wave. Together, we are creating an ecosystem where 
                  breakthrough solutions multiply exponentially across the continent.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">The Call to Greatness</h3>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We seek the <strong>architects of tomorrow</strong>—visionaries who 
                  see beyond profit to purpose, who understand that true success 
                  is measured not in what we accumulate, but in what we accelerate 
                  for humanity. This is your invitation to shape history.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Stats Section */}
          <div className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-900 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                The Africa We&apos;re Building Together
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    1.4B+
                  </div>
                  <div className="text-lg font-semibold mb-2">People Empowered</div>
                  <div className="text-blue-200">Every innovation touches lives across the continent</div>
                </div>
                
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                    $10T+
                  </div>
                  <div className="text-lg font-semibold mb-2">Economic Potential</div>
                  <div className="text-blue-200">Unlocking Africa&apos;s unprecedented growth trajectory</div>
                </div>
                
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    ∞
                  </div>
                  <div className="text-lg font-semibold mb-2">Possibilities</div>
                  <div className="text-blue-200">When human potential meets limitless opportunity</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Vision Crystallized */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-3xl border border-white/50">
              <blockquote className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed italic mb-8">
                &quot;We stand at the intersection of what has been and what could be. 
                Africa&apos;s time is not coming—it is <strong>here</strong>. 
                The question is not whether you&apos;ll witness this transformation, 
                but whether you&apos;ll <strong>lead it</strong>.&quot;
              </blockquote>
              
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <span>Join the Movement</span>
                <Rocket className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Innovation */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Global Vision</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We envision a world where Africa is at the forefront of innovation and technology.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Excellence</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We strive for excellence in all our endeavors, setting the highest standards for ourselves and our partners.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Community Impact</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We are committed to creating sustainable opportunities and transforming lives in the communities we serve.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-3 text-foreground">Sustainable Growth</h3>
              <p className="text-muted-foreground mb-4 font-body">
                We believe in responsible and sustainable growth that benefits both our stakeholders and the environment.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-section text-slate-800 mb-6 text-center font-brand">OUR STORY</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-body-large text-slate-600 mb-6 font-body leading-relaxed">
                  Founded in 2023, OWL International emerged from a vision to bridge continents through strategic investments and innovative solutions.
                  Our journey began with a focus on identifying and nurturing high-potential ventures across Africa, leveraging technology and sustainable practices to drive growth.
                </p>
                <p className="text-body-large text-slate-600 mb-6 font-body leading-relaxed">
                  Today, we operate across multiple sectors, from digital innovation and agricultural technology to industrial solutions and creative media.
                  Our portfolio companies are interconnected, creating powerful synergies that amplify their impact and contribute to a more prosperous and sustainable future for Africa.
                </p>
              </div>
              <div>
                <img
                  src="/placeholder-image.jpg"
                  alt="OWL International Team"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-section text-slate-800 mb-6 text-center font-brand">OUR TEAM</h2>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto text-center mb-12 font-body">
              Meet the dedicated individuals driving OWL International&apos;s mission, bringing diverse expertise and a shared passion for transformative change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">John Doe</h3>
                <p className="text-muted-foreground mb-4 font-body text-center">CEO</p>
                <p className="text-muted-foreground font-body text-center">
                  Visionary leader with a passion for innovation and sustainable development.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">Jane Smith</h3>
                <p className="text-muted-foreground mb-4 font-body text-center">CTO</p>
                <p className="text-muted-foreground font-body text-center">
                  Technology expert driving our digital transformation initiatives.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
                <img
                  src="/placeholder-avatar.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-subtitle font-semibold mb-2 text-foreground text-center">David Lee</h3>
                <p className="text-muted-foreground mb-4 font-body text-center">COO</p>
                <p className="text-muted-foreground font-body text-center">
                  Operations guru ensuring seamless execution and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
