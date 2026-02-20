import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter mb-6 block">
              coraise
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              기업의 IT 환경을 최적화하고<br />
              비즈니스 성장을 돕는<br />
              IT 컨설팅 파트너입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/services/startup" className="hover:text-orange-400 transition-colors">Startup</Link></li>
              <li><Link to="/services/sme" className="hover:text-orange-400 transition-colors">SME</Link></li>
              <li><Link to="/services/education" className="hover:text-orange-400 transition-colors">Education</Link></li>
              <li><Link to="/services/ecommerce" className="hover:text-orange-400 transition-colors">E-commerce</Link></li>
              <li><Link to="/services/enterprise" className="hover:text-orange-400 transition-colors">Enterprise</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-orange-400 transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="hover:text-orange-400 transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Seoul, Gangnam-gu, Teheran-ro 123</li>
              <li>support@coraise.co.kr</li>
              <li>02-1234-5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Coraise Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
