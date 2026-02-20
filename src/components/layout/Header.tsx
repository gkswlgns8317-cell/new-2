import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        {
          category: '시나리오',
          items: [
            { name: '실제 고객 사례 모음', path: '/cases' }
          ]
        },
        {
          category: '산업별 솔루션',
          items: [
            { name: '스타트업', path: '/services/startup' },
            { name: '중소기업', path: '/services/sme' },
            { name: '교육기관', path: '/services/education' },
            { name: '이커머스', path: '/services/ecommerce' },
            { name: '엔터프라이즈', path: '/services/enterprise' },
          ]
        },
        {
          category: '+ 성장 단계별 전략',
          items: [
            { name: '창업 초기 단계', path: '/services/early-stage' },
            { name: '성장 단계', path: '/services/growth-stage' },
            { name: '확장 단계', path: '/services/expansion-stage' },
          ]
        }
      ]
    },
    { name: 'Q&A', path: '/qna' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tighter flex items-center gap-2">
              <span className="text-orange-600">⌘</span> coraise
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <button 
                    className={clsx(
                      "flex items-center text-gray-600 hover:text-orange-600 font-medium transition-colors py-2",
                      activeDropdown === link.name && "text-orange-600"
                    )}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={clsx(
                      "text-gray-600 hover:text-orange-600 font-medium transition-colors py-2",
                      location.pathname === link.path && "text-orange-600"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl py-4 mt-0 border border-gray-100 overflow-hidden"
                    >
                      {link.dropdown.map((section, idx) => (
                        <div key={idx} className="mb-4 last:mb-0">
                          <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {section.category}
                          </div>
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/diagnosis"
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm hover:shadow-md text-sm"
            >
              IT 진단 받기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 h-screen overflow-y-auto pb-20">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-50 pb-2 mb-2 last:border-0">
                  {link.dropdown ? (
                    <>
                      <div className="px-3 py-2 text-base font-bold text-gray-900">{link.name}</div>
                      <div className="pl-4 space-y-4 mt-2">
                        {link.dropdown.map((section, idx) => (
                          <div key={idx}>
                            <div className="px-3 text-xs font-bold text-gray-400 uppercase mb-1">
                              {section.category}
                            </div>
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-8">
                <Link
                  to="/diagnosis"
                  className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-xl font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  무료 IT 진단 받기
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
