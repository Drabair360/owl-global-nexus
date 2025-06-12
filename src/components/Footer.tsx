
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import DoNotSellModal from './DoNotSellModal';

const Footer = () => {
  const [showDoNotSellModal, setShowDoNotSellModal] = useState(false);

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,146,60,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/4d7f9a85-a58b-4911-9097-b446f027e04a.png" 
                alt="OWL International Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-brand tracking-wide">OWL INTERNATIONAL</span>
            </div>
            <p className="text-slate-300 font-body leading-relaxed">
              Transforming Africa through strategic investments, cutting-edge technology, and human-centered innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-300 font-body">
                <MapPin className="w-4 h-4 mr-3 text-amber-400 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center text-sm text-slate-300 font-body">
                <Mail className="w-4 h-4 mr-3 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@owlinternational.com" className="hover:text-amber-400 transition-colors duration-300">
                  contact@owlinternational.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold tracking-tight">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/careers" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold tracking-tight">Investors</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/investors" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  Investor Portal
                </Link>
              </li>
              <li>
                <Link to="/scouts" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  Scouts
                </Link>
              </li>
              <li>
                <Link to="/impact" onClick={() => window.scrollTo(0, 0)} className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Portfolio Companies */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold tracking-tight">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.caoagro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body flex items-center"
                >
                  CAOAGRO <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.akoulala.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body flex items-center"
                >
                  AKOULA <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.owloma.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body flex items-center"
                >
                  OWLOMA <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.kidzlabmodels.com/premium" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-body flex items-center"
                >
                  KIDZ LAB <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm font-body">
                © {new Date().getFullYear()} OWL International. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 font-body">
                Privacy Policy
              </Link>
              <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 font-body">
                Terms of Service
              </Link>
              <Link to="/cookies" onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-amber-400 transition-colors duration-300 font-body">
                Cookie Policy
              </Link>
              <button 
                onClick={() => setShowDoNotSellModal(true)} 
                className="text-slate-400 hover:text-amber-400 transition-colors duration-300 font-body"
              >
                Do Not Sell My Personal Information
              </button>
            </div>
          </div>
        </div>
      </div>

      <DoNotSellModal 
        isOpen={showDoNotSellModal} 
        onClose={() => setShowDoNotSellModal(false)} 
      />
    </footer>
  );
};

export default Footer;
