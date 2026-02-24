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
      name: 'Solutions', 
      path: '/solutions',
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
            { name: '스타트업', path: '/solutions/startup' },
            { name: '중소기업', path: '/solutions/sme' },
            { name: '교육기관', path: '/solutions/education' },
            { name: '이커머스', path: '/solutions/ecommerce' },
            { name: '엔터프라이즈', path: '/solutions/enterprise' },
          ]
        },
        {
          category: '+ 성장 단계별 전략',
          items: [
            { name: '창업 초기 단계', path: '/solutions/early-stage' },
            { name: '성장 단계', path: '/solutions/growth-stage' },
            { name: '확장 단계', path: '/solutions/expansion-stage' },
          ]
        }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      type: 'mega',
      dropdown: [
        {
          category: 'Network',
          items: [
            { name: 'Fortinet', path: '/services/network?tab=fortinet' },
            { name: 'AXGATE', path: '/services/network?tab=axgate' },
            { name: 'NETGEAR', path: '/services/network?tab=netgear' },
            { name: 'ARUBA', path: '/services/network?tab=aruba' },
            { name: 'Ruckus', path: '/services/network?tab=ruckus' },
            { name: 'ZyXEL', path: '/services/network?tab=zyxel' },
            { name: 'Maintenance', path: '/services/network?tab=maintenance' },
          ]
        },
        {
          category: 'IT Infra',
          items: [
            { name: 'ADPaC (자사 솔루션)', path: '/services/it-infra?tab=adpac' },
            { name: 'ID PaC (자사 솔루션)', path: '/services/it-infra?tab=idpac' },
            { name: 'Active Directory', path: '/services/it-infra?tab=ad' },
          ]
        },
        {
          category: 'Security (SASE)',
          items: [
            { name: 'SASE / ZTNA', path: '/services/security?tab=sase' },
            { name: 'IAM (OKTA)', path: '/services/security?tab=iam' },
            { name: 'EPP / EDR', path: '/services/security?tab=edr' },
            { name: 'DLP (유출방지)', path: '/services/security?tab=dlp' },
            { name: 'CASB (클라우드 감시)', path: '/services/security?tab=casb' },
            { name: 'Email Security', path: '/services/security?tab=email' },
            { name: 'NAC (접근제어)', path: '/services/security?tab=nac' },
          ]
        },
        {
          category: 'Software (Cloud)',
          items: [
            { name: 'SaaS (Google/MS)', path: '/services/software?tab=saas' },
            { name: 'IaaS (Naver Cloud)', path: '/services/software?tab=iaas' },
            { name: 'Backup (Acronis)', path: '/services/software?tab=backup' },
            { name: 'Design (Adobe/Unity)', path: '/services/software?tab=design' },
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
                      className={clsx(
                        "absolute top-full left-0 bg-white shadow-xl rounded-xl py-4 mt-0 border border-gray-100 overflow-hidden",
                        // @ts-ignore
                        link.type === 'mega' ? "w-[680px] -left-[240px] grid grid-cols-4 gap-2 px-6" : "w-64"
                      )}
                    >
                      {link.dropdown.map((section, idx) => (
                        <div key={idx} className={clsx("mb-4 last:mb-0", 
                          // @ts-ignore
                          link.type === 'mega' && "mb-0"
                        )}>
                          <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-2">
                            {section.category}
                          </div>
                          <div className="space-y-1">
                            {section.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded-md"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
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
