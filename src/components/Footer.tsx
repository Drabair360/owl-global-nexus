
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import GeometricPattern from '@/components/GeometricPattern';
import DoNotSellModal from '@/components/DoNotSellModal';

const Footer = () => {
  const [showDoNotSell, setShowDoNotSell] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white relative overflow-hidden">
        <GeometricPattern variant="subtle" className="opacity-5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white relative">
                    <div className="absolute inset-1 rounded-full border border-white opacity-60" />
                    <div className="absolute inset-2 rounded-full border border-white opacity-30" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-heading font-semibold">OWL INTERNATIONAL</span>
                  <div className="text-xs text-gray-300 font-body">SAS</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 font-body max-w-md">
                Transforming Africa through strategic investments, cutting-edge technology, 
                and innovative industrial solutions that create lasting prosperity for communities worldwide.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-300 font-body">
                  <MapPin className="w-4 h-4 mr-2 text-amber-400" />
                  47 Boulevard de Courcelles, 75008 Paris, France
                </div>
                <div className="flex items-center text-sm text-gray-300 font-body">
                  <Mail className="w-4 h-4 mr-2 text-amber-400" />
                  contact@owl-international.com
                </div>
                <div className="flex items-center text-sm text-gray-300 font-body">
                  <Phone className="w-4 h-4 mr-2 text-amber-400" />
                  +33 1 45 67 89 00
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                    About Owl
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                    Hot News
                  </Link>
                </li>
                <li>
                  <Link to="/impact" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                    Impact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Portfolio & Legal */}
            <div>
              <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <Link to="/portfolio" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/investors" className="text-gray-300 hover:text-amber-400 transition-colors font-body">
                    Investors
                  </Link>
                </li>
                <li>
                  <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors font-body flex items-center">
                    CAOAGRO.COM
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a href="https://www.kidzlabmodels.com/premium" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors font-body flex items-center">
                    KIDZ LAB
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
              
              <h4 className="text-sm font-heading font-semibold mb-2 text-gray-400">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-body">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-body">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-body">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => setShowDoNotSell(true)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-body text-left"
                  >
                    Do Not Sell My Info
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-md">
              <h3 className="text-lg font-heading font-semibold mb-2">Stay Connected</h3>
              <p className="text-gray-300 text-sm mb-4 font-body">
                Get updates on our latest projects and investment opportunities.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-sm font-body text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                />
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700 font-body">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm font-body mb-4 md:mb-0">
              © 2024 OWL International SAS. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
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
