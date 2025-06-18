
import React, { useEffect, useRef } from 'react';
import { Target, TrendingUp, Users, Globe, Lightbulb, Shield, Cpu, Network, Zap } from 'lucide-react';

const VisionSection = () => {
  const euroRef = useRef<HTMLSpanElement>(null);
  const billionRef = useRef<HTMLSpanElement>(null);

  // Utility function to wrap each character in a span for individual animation
  const wrapLettersInSpans = (text: string, className: string = '') => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`inline-block ${className}`}
        style={{
          animationDelay: `${index * 0.1}s`
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-domino-cascade');
        }
      });
    }, observerOptions);

    if (euroRef.current) observer.observe(euroRef.current);
    if (billionRef.current) observer.observe(billionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Enhanced CSS for domino-effect animation */}
      <style>
        {`
        @keyframes dominoCascade {
          0% { 
            transform: rotateY(0deg); 
          }
          15% { 
            transform: rotateY(90deg); 
          }
          30% { 
            transform: rotateY(180deg); 
          }
          45% { 
            transform: rotateY(270deg); 
          }
          60% { 
            transform: rotateY(360deg); 
          }
          100% { 
            transform: rotateY(360deg); 
          }
        }
        
        @keyframes dominoCycle {
          0% { 
            transform: rotateY(0deg); 
          }
          8% { 
            transform: rotateY(90deg); 
          }
          16% { 
            transform: rotateY(180deg); 
          }
          24% { 
            transform: rotateY(270deg); 
          }
          32% { 
            transform: rotateY(360deg); 
          }
          40% { 
            transform: rotateY(360deg); 
          }
          100% { 
            transform: rotateY(360deg); 
          }
        }
        
        .animate-domino-cascade span {
          animation: dominoCycle 12s ease-in-out infinite;
          transform-style: preserve-3d;
          display: inline-block;
        }
        
        .animate-domino-cascade span:nth-child(1) { animation-delay: 2s; }
        .animate-domino-cascade span:nth-child(2) { animation-delay: 2.1s; }
        .animate-domino-cascade span:nth-child(3) { animation-delay: 2.2s; }
        .animate-domino-cascade span:nth-child(4) { animation-delay: 2.3s; }
        .animate-domino-cascade span:nth-child(5) { animation-delay: 2.4s; }
        .animate-domino-cascade span:nth-child(6) { animation-delay: 2.5s; }
        .animate-domino-cascade span:nth-child(7) { animation-delay: 2.6s; }
        .animate-domino-cascade span:nth-child(8) { animation-delay: 2.7s; }
        .animate-domino-cascade span:nth-child(9) { animation-delay: 2.8s; }
        .animate-domino-cascade span:nth-child(10) { animation-delay: 2.9s; }
        .animate-domino-cascade span:nth-child(11) { animation-delay: 3.0s; }
        .animate-domino-cascade span:nth-child(12) { animation-delay: 3.1s; }
        .animate-domino-cascade span:nth-child(13) { animation-delay: 3.2s; }
        .animate-domino-cascade span:nth-child(14) { animation-delay: 3.3s; }
        .animate-domino-cascade span:nth-child(15) { animation-delay: 3.4s; }
        .animate-domino-cascade span:nth-child(16) { animation-delay: 3.5s; }
        .animate-domino-cascade span:nth-child(17) { animation-delay: 3.6s; }
        .animate-domino-cascade span:nth-child(18) { animation-delay: 3.7s; }
        .animate-domino-cascade span:nth-child(19) { animation-delay: 3.8s; }
        .animate-domino-cascade span:nth-child(20) { animation-delay: 3.9s; }
        .animate-domino-cascade span:nth-child(21) { animation-delay: 4.0s; }
        .animate-domino-cascade span:nth-child(22) { animation-delay: 4.1s; }
        .animate-domino-cascade span:nth-child(23) { animation-delay: 4.2s; }
        .animate-domino-cascade span:nth-child(24) { animation-delay: 4.3s; }
        .animate-domino-cascade span:nth-child(25) { animation-delay: 4.4s; }
        .animate-domino-cascade span:nth-child(26) { animation-delay: 4.5s; }
        .animate-domino-cascade span:nth-child(27) { animation-delay: 4.6s; }
        .animate-domino-cascade span:nth-child(28) { animation-delay: 4.7s; }
        .animate-domino-cascade span:nth-child(29) { animation-delay: 4.8s; }
        .animate-domino-cascade span:nth-child(30) { animation-delay: 4.9s; }
        .animate-domino-cascade span:nth-child(31) { animation-delay: 5.0s; }
        .animate-domino-cascade span:nth-child(32) { animation-delay: 5.1s; }
        .animate-domino-cascade span:nth-child(33) { animation-delay: 5.2s; }
        .animate-domino-cascade span:nth-child(34) { animation-delay: 5.3s; }
        .animate-domino-cascade span:nth-child(35) { animation-delay: 5.4s; }
        .animate-domino-cascade span:nth-child(36) { animation-delay: 5.5s; }
        .animate-domino-cascade span:nth-child(37) { animation-delay: 5.6s; }
        .animate-domino-cascade span:nth-child(38) { animation-delay: 5.7s; }
        .animate-domino-cascade span:nth-child(39) { animation-delay: 5.8s; }
        .animate-domino-cascade span:nth-child(40) { animation-delay: 5.9s; }
        `}
      </style>

      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23334155' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Enhanced SVG Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Vision Header */}
        <div className="text-center mb-16">
          <h2 className="text-section text-slate-800 mb-8 font-brand">OUR VISION</h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed mb-8 font-body">
              Building a{' '}
              <span ref={euroRef} className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {wrapLettersInSpans('€5B+ portfolio ecosystem by 2030')}
              </span>, 
              <span className="block mt-2">
                connecting{' '}
                <span ref={billionRef} className="font-semibold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  {wrapLettersInSpans('1 billion Africans')}
                </span>{' '}
                through our integrated AI-powered platforms
              </span>
              <span className="block mt-2 text-xl text-slate-600">
                across fintech, agritech, real estate, and creative industries.
              </span>
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Portfolio Impact Multiplier */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-12 font-body">Portfolio Synergy Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">AI-Powered Ecosystem</h4>
                <p className="text-slate-600 leading-relaxed font-body">
                  AKOULA's AI backbone processes <span className="font-semibold text-blue-600">100K+ daily API calls</span>, 
                  powering intelligent automation across all portfolio companies and driving unprecedented efficiency gains.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4 font-body">Integrated Value Chain</h4>
                <p className="text-slate-600 leading-relaxed font-body">
                  From CAOAGRO's <span className="font-semibold text-emerald-600">€10M+ industrial projects</span> to KIDZ LAB's 
                  <span className="font-semibold text-emerald-600"> 95% talent matching</span>, our platforms create multiplying value across industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Our Vision Statement</h3>
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed font-body">
                We're not just building companies—we're architecting Africa's digital infrastructure for the next century. 
                With AKOULA's AI achieving <span className="font-semibold text-blue-600">99.8% accuracy rates</span> and 
                our platforms already reaching <span className="font-semibold text-emerald-600">54 African countries</span>, 
                we're positioned to exceed every projection.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-body">
                By 2027, we'll hit our <span className="font-semibold text-amber-600">€1B portfolio milestone</span>. 
                By 2030, we'll surpass <span className="font-semibold text-blue-600">€5B in total portfolio value</span>, 
                having created over <span className="font-semibold text-emerald-600">500,000 direct jobs</span> and 
                transformed how a billion people work, trade, and thrive across Africa.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-slate-700 italic font-body text-lg">
                  "We're not predicting Africa's future—we're building it. Every platform, every algorithm, 
                  every partnership is designed to create unstoppable momentum toward continental prosperity."
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">Our Partnership Philosophy</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="group-hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-slate-800 mb-2 font-body text-lg">Strategic Intelligence</h4>
                  <p className="text-slate-600 font-body">
                    We provide AI-powered market intelligence, strategic guidance, and operational excellence 
                    that goes far beyond traditional capital investment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="group-hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-slate-800 mb-2 font-body text-lg">Local Leadership Excellence</h4>
                  <p className="text-slate-600 font-body">
                    We empower African talent and build solutions that understand local contexts while 
                    creating global impact and sustainable competitive advantages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="group-hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold text-slate-800 mb-2 font-body text-lg">Exponential Impact</h4>
                  <p className="text-slate-600 font-body">
                    Every investment multiplies through our integrated ecosystem, creating cascading value 
                    that transforms entire communities and industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Targets */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-12 font-body">
            Milestone Trajectory to 2030
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                €5B+
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Portfolio Value</div>
              <div className="text-slate-600 font-body">Total ecosystem valuation by 2030</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                500K+
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Jobs Created</div>
              <div className="text-slate-600 font-body">Direct employment across Africa</div>
            </div>
            
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                1B+
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Lives Impacted</div>
              <div className="text-slate-600 font-body">People reached through our platforms</div>
            </div>

            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                54
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">Countries</div>
              <div className="text-slate-600 font-body">Complete African market coverage</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 font-body">
            Join Africa's Transformation
          </h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed font-body">
            Whether you're an entrepreneur ready to scale across Africa, an investor seeking 
            exponential returns, or a partner committed to continental transformation, 
            this is your moment to be part of history.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              Partner With Us
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
