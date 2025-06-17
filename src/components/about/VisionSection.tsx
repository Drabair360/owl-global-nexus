
import React from 'react';
import { Users, Globe, Rocket, Heart, Zap, Target } from 'lucide-react';

const VisionSection = () => {
  return (
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
  );
};

export default VisionSection;
