
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient-soft text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
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
              </div>
            </div>
            <p className="text-blue-200 mb-6 font-body">
              Transforming Africa through strategic investments, cutting-edge technology, 
              and innovative industrial solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-brand font-semibold mb-4 text-amber-400">COMPANY</h3>
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
            <h3 className="text-lg font-brand font-semibold mb-4 text-amber-400">PORTFOLIO</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.akoulala.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body">
                  AKOULA Platform
                </a>
              </li>
              <li>
                <a href="https://www.caoagro.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body">
                  CAOAGRO
                </a>
              </li>
              <li>
                <a href="https://www.owloma.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body">
                  OWLOMA
                </a>
              </li>
              <li>
                <a href="https://www.kidzlabmodels.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors duration-300 font-body">
                  KIDZ LAB
                </a>
              </li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h3 className="text-lg font-brand font-semibold mb-4 text-amber-400">INVESTORS</h3>
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
              <li>
                <Link to="/portfolio" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Portfolio Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-brand font-semibold mb-4 text-amber-400">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-blue-200 hover:text-white transition-colors duration-300 font-body" onClick={() => window.scrollTo(0, 0)}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-blue-800/30 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-brand font-semibold mb-4 text-amber-400">STAY CONNECTED</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-blue-200 font-body">contact@owlinternational.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-blue-200 font-body">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-blue-200 font-body">Global Headquarters</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-blue-200 font-body italic">
                "With one eye on Africa, the other on the world, we craft value through visionary investments 
                rooted in cultural understanding and sustainable prosperity."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800/30 mt-8 pt-8 text-center">
          <p className="text-blue-300 font-body">
            &copy; 2024 OWL International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
