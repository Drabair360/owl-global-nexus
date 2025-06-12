
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient-soft text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" 
                alt="OWL International Logo" 
                className="w-10 h-10"
              />
              <div>
                <span className="text-xl font-brand text-white tracking-wide">
                  OWL INTERNATIONAL
                </span>
                <div className="text-sm text-blue-200 font-body">SAS</div>
              </div>
            </div>
            <p className="text-blue-200 mb-6 font-body">
              Transforming Africa through strategic investments, cutting-edge technology, 
              and innovative industrial solutions that create lasting prosperity for communities worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-blue-200 font-body">47 Boulevard de Courcelles, 75008 Paris, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-blue-200 font-body">contact@internationalowl.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-blue-200 font-body">+33 7 44 98 87 89</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-['Montserrat'] font-semibold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  About OWL
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Hot News
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-['Montserrat'] font-semibold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">PORTFOLIO</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/portfolio" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Investments
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-['Montserrat'] font-semibold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">INVESTORS</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/investors" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                    Investor Portal
                  </Link>
                </li>
                <li>
                  <Link to="/scouts" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                    Scouts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-['Montserrat'] font-semibold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body flex items-center">
                  AKOULA <span className="ml-1 text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body flex items-center">
                  CAOAGRO.COM <span className="ml-1 text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.owloma.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body flex items-center">
                  OWLOMA <span className="ml-1 text-xs">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body flex items-center">
                  KIDZ LAB <span className="ml-1 text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay Connected Section */}
        <div className="border-t border-blue-800/30 mt-12 pt-8">
          <div className="mb-8">
            <h3 className="text-lg font-['Montserrat'] font-semibold mb-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent tracking-wide">STAY CONNECTED</h3>
            <p className="text-blue-200 font-body mb-6">
              Get updates on our latest projects and investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 bg-blue-800/30 border border-blue-700/50 rounded-md text-white placeholder-blue-300 focus:outline-none focus:border-amber-400 font-body"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-md hover:from-amber-600 hover:to-orange-700 transition-colors duration-300 font-body">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-blue-800/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy" className="text-blue-300 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-300 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-blue-300 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                Cookie Policy
              </Link>
              <button className="text-blue-300 hover:text-white transition-colors duration-300 font-body">
                Do Not Sell My Info
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-blue-300 font-body">
              © 2025 OWL International SAS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
