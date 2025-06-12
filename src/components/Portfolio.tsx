
import React from 'react';
import { Zap, Leaf, Cog, Camera, TrendingUp, Users, Globe, ArrowRight, BarChart3, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  return (
    <>
      {/* Integrated Investments Section - No transition, same gradient */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Innovation */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-brand font-semibold mb-3 text-slate-800">DIGITAL INNOVATION</h3>
              <p className="text-slate-700 mb-4 font-body">
                Leading the digital transformation with cutting-edge AI platforms and innovative solutions
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">AKOULA Platform</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">AI Solutions</span>
              </div>
            </div>

            {/* Agricultural Technology */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-brand font-semibold mb-3 text-slate-800">AGRO-INDUSTRIAL TECHNOLOGY</h3>
              <p className="text-slate-700 mb-4 font-body">
                Revolutionizing African agriculture through technology and sustainable farming practices
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">CAOAGRO.COM</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Smart Farming</span>
              </div>
            </div>

            {/* Industrial Solutions */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-brand font-semibold mb-3 text-slate-800">INDUSTRIAL SOLUTIONS</h3>
              <p className="text-slate-700 mb-4 font-body">
                Strategic real estate investments across Africa and Europe for sustainable development
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">OWLOMA</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Real Estate</span>
              </div>
            </div>

            {/* Creative & Media */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-brand font-semibold mb-3 text-slate-800">CREATIVE & MEDIA</h3>
              <p className="text-slate-700 mb-4 font-body">
                AI-powered talent discovery and creative content solutions across Africa
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">KIDZ LAB</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Talent Discovery</span>
              </div>
            </div>

            {/* Energy Solutions */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-brand font-semibold mb-3 text-slate-800">ENERGY SOLUTIONS</h3>
              <p className="text-slate-700 mb-4 font-body">
                Sustainable energy projects powering Africa's future development
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Renewable Energy</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Grid Solutions</span>
              </div>
            </div>

            {/* Financial Technology */}
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 border shadow-sm hover:shadow-[0_10px_40px_rgba(251,146,60,0.3)] transition-all duration-300 group hover:-translate-y-2">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-brand font-semibold mb-3 text-slate-800">FINANCIAL TECHNOLOGY</h3>
              <p className="text-slate-700 mb-4 font-body">
                Innovative fintech solutions enabling financial inclusion across Africa
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Payment Systems</span>
                <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm font-medium">Blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Portfolio Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-section text-slate-800 mb-6 font-brand">FLAGSHIP VENTURES</h2>
            <p className="text-body-large text-slate-600 max-w-4xl mx-auto font-body leading-relaxed">
              Our portfolio companies form an integrated ecosystem where innovation meets opportunity. 
              From AI-driven platforms to industrial solutions, each venture creates exponential value through strategic synergies.
            </p>
          </div>

          {/* AKOULA */}
          <div className="mb-20 bg-slate-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">AKOULA</h3>
                    <p className="text-slate-600 font-subtitle font-semibold">AI-Powered Development Platform</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Akoula brings gold-standard, agile industrial intelligence to Africa—combining the vision of an eagle, 
                  the speed of a shark, and the boundless creativity of tomorrow's makers.
                </p>
                <div className="space-y-3 mb-6 text-sm text-slate-600">
                  <div>• Industrial Quote Builder SaaS for Agro-Industry</div>
                  <div>• Africa-Ready Equipment Marketplace (Niche B2B Amazon)</div>
                  <div>• Micro-Course Platform: "Train Your Factory Staff"</div>
                  <div>• Technical Spec Sheet Generator (AI-Assisted)</div>
                  <div>• Factory Cost Estimator (CapEx + OpEx Calculator)</div>
                  <div>• Local Tech Consultant Finder (Matching Marketplace)</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">15,000+</div>
                    <div className="text-sm text-slate-600 font-subtitle">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">85%</div>
                    <div className="text-sm text-slate-600 font-subtitle">Efficiency Gain</div>
                  </div>
                </div>
                <a 
                  href="https://www.akoulala.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-700 hover:text-slate-900 font-subtitle font-semibold"
                >
                  Explore Platform <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="p-10 lg:p-12 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Powering industrial intelligence across our entire ecosystem"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CAOAGRO.COM */}
          <div className="mb-20 bg-slate-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12 bg-slate-200 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <Leaf className="w-24 h-24 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Transforming African agriculture through smart industrial solutions"
                  </p>
                </div>
              </div>
              <div className="p-10 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">CAOAGRO.COM</h3>
                    <p className="text-slate-600 font-subtitle font-semibold">Smart Agro-Industrial Solutions</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Cutting-edge agro-industrial technology combining IoT sensors, analytics, and sustainable industrial practices. 
                  CAOAGRO provides raw materials to OWLOMA while using AKOULA's AI for crop optimization.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">2,500+</div>
                    <div className="text-sm text-slate-600 font-subtitle">Farms Connected</div>
                  </div>
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">40%</div>
                    <div className="text-sm text-slate-600 font-subtitle">Yield Increase</div>
                  </div>
                </div>
                <a 
                  href="https://www.caoagro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-700 hover:text-slate-900 font-subtitle font-semibold"
                >
                  Visit Platform <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* OWLOMA */}
          <div className="mb-20 bg-slate-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">OWLOMA</h3>
                    <p className="text-slate-600 font-subtitle font-semibold">Real Estate Investment Portfolio</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  OwLoma is the real estate investment portfolio of Owl International — built on the belief that home is both a place and a purpose. 
                  With one eye on Africa, the other on Europe, we craft value through visionary, long-term property investments rooted in cultural understanding, 
                  architectural beauty, and resilient returns.
                </p>
                <p className="text-slate-600 mb-6 font-body">
                  From urban developments in European capitals to emerging cities across Africa, OwLoma connects the best of both worlds — intelligently.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">2026</div>
                    <div className="text-sm text-slate-600 font-subtitle">Launch Year</div>
                  </div>
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">3</div>
                    <div className="text-sm text-slate-600 font-subtitle">Countries</div>
                  </div>
                </div>
                <a 
                  href="https://www.owloma.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-700 hover:text-slate-900 font-subtitle font-semibold"
                >
                  Explore Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="p-10 lg:p-12 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Home className="w-24 h-24 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "Crafting value through visionary property investments"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KIDZ LAB */}
          <div className="mb-12 bg-slate-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-10 lg:p-12 bg-slate-200 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-700 font-body italic">
                    "AI-powered future of talent discovery"
                  </p>
                </div>
              </div>
              <div className="p-10 lg:p-12 order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-brand font-bold text-slate-800">KIDZ LAB</h3>
                    <p className="text-slate-600 font-subtitle font-semibold">AI-Powered Talent Discovery</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 font-body text-lg leading-relaxed">
                  Our AI-powered platform has transformed how agencies discover, match, and book talent. 
                  KIDZ LAB creates compelling content showcasing OWLOMA's properties, CAOAGRO's innovations, 
                  and uses AKOULA's AI for content optimization and audience targeting.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">500+</div>
                    <div className="text-sm text-slate-600 font-subtitle">Content Pieces</div>
                  </div>
                  <div className="text-center p-4 bg-slate-200 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">50M+</div>
                    <div className="text-sm text-slate-600 font-subtitle">Total Reach</div>
                  </div>
                </div>
                <a 
                  href="https://www.kidzlabmodels.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-700 hover:text-slate-900 font-subtitle font-semibold"
                >
                  View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Synergy Section */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-brand font-bold mb-6">The Power of Synergy</h3>
            <p className="text-xl font-body mb-8 text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our ventures form an integrated ecosystem where each company strengthens the others. AKOULA's AI powers 
              optimization across all platforms, CAOAGRO provides sustainable raw materials, OWLOMA creates strategic 
              real estate investments, while KIDZ LAB amplifies their stories across Africa and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-subtitle font-semibold mb-2">Cross-Platform Value</h4>
                <p className="text-slate-300 font-body">Shared resources and capabilities multiply impact exponentially</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-subtitle font-semibold mb-2">Talent Circulation</h4>
                <p className="text-slate-300 font-body">Expertise flows between ventures, accelerating innovation</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-subtitle font-semibold mb-2">Market Amplification</h4>
                <p className="text-slate-300 font-body">Combined reach creates unprecedented market opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
