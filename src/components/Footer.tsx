
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import DoNotSellModal from '@/components/DoNotSellModal';

const Footer = () => {
  const [showDoNotSell, setShowDoNotSell] = useState(false);

  return (
    <>
      <footer className="gradient-institutional text-white relative overflow-hidden">
        {/* Sophisticated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-amber-300 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content - Right-aligned columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Company Info - Takes 5 columns */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-3 mb-6 group">
                <img 
                  src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" 
                  alt="OWL International Logo" 
                  className="w-10 h-10 filter invert brightness-0 transition-transform duration-300 group-hover:scale-110"
                />
                <div>
                  <span className="text-xl font-condensed font-semibold tracking-wide">OWL INTERNATIONAL</span>
                  <div className="text-xs text-gray-300 font-body">SAS</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 font-body text-body-large max-w-md leading-relaxed">
                Transforming Africa through strategic investments, cutting-edge technology, 
                and innovative industrial solutions that create lasting prosperity for communities worldwide.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-300 font-body group hover:text-amber-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  47 Boulevard de Courcelles, 75008 Paris, France
                </div>
                <div className="flex items-center text-sm text-gray-300 font-body group hover:text-amber-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  contact@internationalowl.com
                </div>
                <div className="flex items-center text-sm text-gray-300 font-body group hover:text-amber-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 mr-3 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                  +33 7 44 98 87 89
                </div>
              </div>
            </div>

            {/* Right-aligned columns container */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 lg:ml-8">
              
              {/* Company Links */}
              <div>
                <h3 className="text-lg font-condensed font-semibold mb-4 text-amber-400 tracking-wide">COMPANY</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        About Owl
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        Careers
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        Hot News
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/impact" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        Impact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Portfolio & Investors */}
              <div>
                <h3 className="text-lg font-condensed font-semibold mb-4 text-amber-400 tracking-wide">PORTFOLIO</h3>
                <ul className="space-y-3 mb-6">
                  <li>
                    <Link to="/portfolio" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        Investments
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
                
                <h3 className="text-lg font-condensed font-semibold mb-4 text-amber-400 tracking-wide">INVESTORS</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/investors" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        Investor Portal
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/scouts" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        Scouts
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-condensed font-semibold mb-4 text-amber-400 tracking-wide">QUICK LINKS</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body flex items-center group">
                      <span className="relative">
                        CAOAGRO.COM
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body flex items-center group">
                      <span className="relative">
                        KIDZ LAB
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </li>
                  <li>
                    <Link to="/solutions" className="text-gray-300 hover:text-amber-400 transition-all duration-300 font-body group">
                      <span className="relative">
                        AKOULA
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700/50 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="text-lg font-condensed font-semibold mb-2 text-amber-400 tracking-wide">STAY CONNECTED</h3>
              <p className="text-gray-300 text-sm mb-4 font-body">
                Get updates on our latest projects and investment opportunities.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-gray-600/50 rounded-lg text-sm font-body text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all duration-300"
                />
                <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 font-body font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Links - Horizontal Layout */}
          <div className="border-t border-gray-700/50 pt-8 mb-8">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm font-body group">
                <span className="relative">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm font-body group">
                <span className="relative">
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm font-body group">
                <span className="relative">
                  Cookie Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
              <button 
                onClick={() => setShowDoNotSell(true)}
                className="text-gray-400 hover:text-amber-400 transition-all duration-300 text-sm font-body group"
              >
                <span className="relative">
                  Do Not Sell My Info
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm font-body mb-4 md:mb-0">
              © 2025 OWL International SAS. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <DoNotSellModal 
        isOpen={showDoNotSell} 
        onClose={() => setShowDoNotSell(false)} 
      />
    </>
  );
};

export default Footer;
