import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, X, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import DoNotSellModal from './DoNotSellModal';

const Footer = () => {
  const [isDoNotSellModalOpen, setIsDoNotSellModalOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/30 via-transparent to-indigo-700/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-900/50 to-blue-950/70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-800/40 to-indigo-900/60 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Brand Section - Wider column */}
          <div className="lg:col-span-2 lg:pr-8">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" alt="OWL International Logo" className="w-10 h-10 brightness-0 invert transition-transform duration-300 hover:scale-110 flex-shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-white tracking-wide whitespace-nowrap" style={{
                fontFamily: 'Avenir Next, sans-serif'
              }}>
                  OWL INTERNATIONAL
                </span>
                <span style={{
                fontFamily: 'Avenir Next, sans-serif'
              }} className="text-sm text-white-300 -mt-1 font-semibold">SAS</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Transforming Africa through strategic investments, cutting-edge technology, 
              and innovative industrial solutions that create lasting prosperity for communities worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">47 Boulevard de Courcelles, 75008 Paris, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@internationalowl.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+33 7 44 98 87 89</span>
              </div>
            </div>

            {/* STAY CONNECTED section positioned under contact info */}
            <div className="mt-12 mb-12">
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>STAY CONNECTED</h3>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-gray-300 text-sm">
                  Get updates on our latest projects and investment opportunities.
                </p>
                <div className="flex gap-3">
                  <input type="email" placeholder="Enter your email" className="px-4 py-2 bg-slate-800/60 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-sm backdrop-blur-sm transition-all duration-300" />
                  <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 hover:from-yellow-500 hover:via-amber-600 hover:to-orange-700 text-white rounded-lg transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 active:scale-95" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side columns container */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
              {/* Column 1: Company */}
              <div className="group relative cursor-pointer">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide relative inline-block" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>
                  COMPANY
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-out"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }} onClick={() => window.scrollTo(0, 0)}>
                      About Owl
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }} onClick={() => window.scrollTo(0, 0)}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }} onClick={() => window.scrollTo(0, 0)}>
                      Hot News
                    </Link>
                  </li>
                  <li>
                    <Link to="/impact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }} onClick={() => window.scrollTo(0, 0)}>
                      Impact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Portfolio & Investors */}
              <div>
                <div className="group relative cursor-pointer mb-8">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide relative inline-block" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }}>
                    PORTFOLIO
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-out"></span>
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                      fontFamily: 'Avenir Next, sans-serif'
                    }} onClick={() => window.scrollTo(0, 0)}>
                        Investments
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="group relative cursor-pointer">
                  <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide relative inline-block" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }}>
                    INVESTORS
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-out"></span>
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/investors" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                      fontFamily: 'Avenir Next, sans-serif'
                    }} onClick={() => window.scrollTo(0, 0)}>
                        Investor Portal
                      </Link>
                    </li>
                    <li>
                      <Link to="/scouts" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
                      fontFamily: 'Avenir Next, sans-serif'
                    }} onClick={() => window.scrollTo(0, 0)}>
                        Scouts
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Quick Links */}
              <div className="group relative cursor-pointer">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-wide relative inline-block" style={{
                  fontFamily: 'Avenir Next, sans-serif'
                }}>
                  QUICK LINKS
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-out"></span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold flex items-center justify-end" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }}>
                      AKOULA <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold flex items-center justify-end" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }}>
                      CAOAGRO.COM <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.owloma.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold flex items-center justify-end" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }}>
                      OWLOMA <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold flex items-center justify-end" style={{
                    fontFamily: 'Avenir Next, sans-serif'
                  }}>
                      KIDZ LAB <span className="ml-1 text-xs">↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with legal links and social */}
        <div className="pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 order-1">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }} onClick={() => window.scrollTo(0, 0)}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }} onClick={() => window.scrollTo(0, 0)}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }} onClick={() => window.scrollTo(0, 0)}>
                Cookie Policy
              </Link>
              <button onClick={() => setIsDoNotSellModalOpen(true)} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold" style={{
              fontFamily: 'Avenir Next, sans-serif'
            }}>
                Do Not Share or Sell My Info
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 order-2">
              <a href="https://www.linkedin.com/company/owlinternational" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/owlinternational" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <X size={20} />
              </a>
              <a href="https://www.instagram.com/owlinternational" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 OWL International SAS. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <DoNotSellModal isOpen={isDoNotSellModalOpen} onClose={() => setIsDoNotSellModalOpen(false)} />
    </footer>
  );
};

export default Footer;
