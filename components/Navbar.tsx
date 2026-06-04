import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (page: string, subTab?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'SOLUTION', 
      id: 'solution',
      items: [
        { name: 'mmWave Radar', id: 'radar' },
        { name: 'On-Device AI', id: 'ai' },
        { name: 'Data Insight', id: 'data' }
      ]
    },
    { 
      name: 'PRODUCT', 
      id: 'product',
      items: [
        { name: 'Hardware (Sensor)', id: 'hardware' },
        { name: 'Software (App/Web)', id: 'software' }
      ]
    },
    { 
      name: 'COMPANY', 
      id: 'company',
      items: [
        { name: 'Team', id: 'team' },
        { name: 'Vision', id: 'vision' },
        { name: 'Careers', id: 'careers' }
      ]
    },
    { 
      name: 'SUPPORT', 
      id: 'support',
      items: [
        { name: 'FAQ', id: 'faq' },
        { name: 'Privacy Policy', id: 'privacy' }
      ]
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-2" 
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-2xl font-black tracking-tighter text-secondary">
              HUGNICS
            </span>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((nav) => (
              <div 
                key={nav.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(nav.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center text-[15px] font-bold transition-colors py-2 ${
                    activeDropdown === nav.id ? 'text-primary' : 'text-gray-700'
                  }`}
                >
                  {nav.name}
                  <ChevronDown size={14} className={`ml-1.5 transition-transform duration-300 ${activeDropdown === nav.id ? 'rotate-180 text-primary' : 'opacity-40'}`} />
                </button>
                
                {/* Mega Menu Style Dropdown */}
                <div 
                   className={`absolute top-full -left-4 w-52 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden transition-all duration-300 transform origin-top ${
                     activeDropdown === nav.id ? 'opacity-100 scale-100 translate-y-2 visible' : 'opacity-0 scale-95 translate-y-0 invisible'
                   }`}
                >
                   <div className="py-3 px-1">
                     {nav.items.map((item) => (
                       <button
                         key={item.id}
                         onClick={() => {
                           if (item.id === 'privacy') {
                               onNavigate('privacy', 'kr');
                           } else {
                               onNavigate(nav.id, item.id);
                           }
                           setActiveDropdown(null);
                           window.scrollTo({ top: 0, behavior: 'smooth' });
                         }}
                         className="block w-full text-left px-5 py-3 text-[14px] font-medium text-gray-600 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
                       >
                         {item.name}
                       </button>
                     ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
             <button
              onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')}
              className="text-[14px] font-bold text-gray-500 hover:text-secondary transition-colors px-4"
            >
              체험 미리보기
            </button>
            <button
              onClick={onOpenContact}
              className="bg-primary text-white px-7 py-3 rounded-full text-[14px] font-bold hover:bg-orange-700 transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
            >
              B2B 도입 문의
            </button>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((nav) => (
            <div key={nav.id} className="space-y-3">
               <div className="text-xs font-black text-gray-400 uppercase tracking-widest">{nav.name}</div>
               <div className="grid grid-cols-1 gap-2">
                 {nav.items.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => {
                       onNavigate(nav.id, item.id);
                       setIsOpen(false);
                     }}
                     className="text-left text-lg font-bold text-gray-800 py-1"
                   >
                     {item.name}
                   </button>
                 ))}
               </div>
            </div>
          ))}
          <div className="pt-6 border-t border-gray-50">
            <button
              onClick={() => { setIsOpen(false); onOpenContact(); }}
              className="w-full bg-primary text-white py-4 rounded-2xl font-black text-center shadow-xl shadow-primary/20"
            >
              B2B 도입 문의
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;