import React, { useState, useEffect, memo } from 'react';
import { Menu, X, ChevronDown, Settings, EyeOff, Zap, Shield, Smartphone, Globe } from 'lucide-react';
import { useTranslation } from './LanguageContext';

// --- Navbar (Clean, Fixed B2B Grid Header) ---
export const Navbar: React.FC<{ onOpenContact: () => void; onNavigate: (p: string, t?: string) => void }> = memo(({ onOpenContact, onNavigate }) => {
  const { locale, t, setLocale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.solution, id: 'solution', items: [{ name: 'mmWave Radar', id: 'radar' }, { name: 'On-Device AI', id: 'ai' }, { name: 'Data Insight', id: 'data' }] },
    { name: t.nav.product, id: 'product', items: [{ name: 'Hardware', id: 'hardware' }, { name: 'Software', id: 'software' }] },
    { name: t.nav.company, id: 'company', items: [{ name: 'Team', id: 'team' }, { name: 'Vision', id: 'vision' }, { name: 'Careers', id: 'careers' }] },
    { name: t.nav.support, id: 'support', items: [{ name: 'FAQ', id: 'faq' }, { name: 'Privacy Policy', id: 'privacy' }] },
  ];

  const handleMobileNav = (id: string, subId?: string) => {
    setIsOpen(false);
    onNavigate(id, subId);
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-xl font-extrabold tracking-widest cursor-pointer text-secondary"
          onClick={() => { handleMobileNav('home'); window.scrollTo(0,0); }}
        >
          HUGNICS
        </div>

        {/* Desktop GNB */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((nav) => (
            <div 
              key={nav.id} 
              className="relative group" 
              onMouseEnter={() => setActiveMenu(nav.id)} 
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center text-xs font-semibold tracking-wider py-2 text-gray-900 hover:text-primary transition-colors uppercase">
                {nav.name}
                <ChevronDown size={12} className={`ml-1 transition-transform duration-200 ${activeMenu === nav.id ? 'rotate-180 text-primary' : 'opacity-40'}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white rounded-md shadow-md border border-gray-100 p-1.5 transition-all duration-200 transform ${activeMenu === nav.id ? 'opacity-100 scale-100 visible translate-y-2' : 'opacity-0 scale-95 invisible translate-y-0'}`}>
                {nav.items.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => { onNavigate(item.id === 'privacy' ? 'privacy' : nav.id, item.id); setActiveMenu(null); }} 
                    className="block w-full text-left px-4 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-primary rounded transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center text-xs font-bold text-gray-400">
            <button 
              onClick={(e) => { e.preventDefault(); setLocale('ko'); }} 
              className={`hover:text-secondary transition-colors ${locale === 'ko' ? 'text-primary font-extrabold' : 'font-semibold'}`}
            >
              KO
            </button>
            <span className="mx-2 text-gray-200">|</span>
            <button 
              onClick={(e) => { e.preventDefault(); setLocale('en'); }} 
              className={`hover:text-secondary transition-colors ${locale === 'en' ? 'text-primary font-extrabold' : 'font-semibold'}`}
            >
              EN
            </button>
          </div>

          <button 
            onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')} 
            className="text-xs font-semibold text-gray-500 hover:text-secondary uppercase tracking-wider"
          >
            {t.common.preview}
          </button>
          <button 
            onClick={onOpenContact} 
            className="bg-primary text-white px-5 py-2.5 rounded text-xs font-bold hover:bg-orange-700 tracking-wider transition-all uppercase"
          >
            {t.common.contact}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')} className="p-2 text-gray-400">
            <Globe size={18} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-secondary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <div className="p-6 space-y-6">
          {navItems.map(nav => (
            <div key={nav.id} className="space-y-2">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{nav.name}</div>
              <div className="flex flex-col gap-2.5 pl-2">
                {nav.items.map(item => (
                  <button key={item.id} onClick={() => handleMobileNav(nav.id, item.id)} className="text-left text-base font-semibold text-gray-800 hover:text-primary">{item.name}</button>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <button onClick={() => { setIsOpen(false); onOpenContact(); }} className="w-full bg-primary text-white py-3.5 rounded font-bold text-center text-sm shadow-sm">{t.common.contact}</button>
          </div>
        </div>
      </div>
    </nav>
  );
});

// --- Hero (Clean layout, asymmetric grids and framed imagery) ---
export const Hero: React.FC<{ onOpenContact: () => void; onNavigate: (p: string, t?: string) => void }> = memo(({ onOpenContact, onNavigate }) => {
  const { t, locale } = useTranslation();
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 animate-fade-in-up">
        {/* Left Column: Copywriting */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="text-primary text-xs font-bold tracking-widest uppercase mb-6">
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.15] mb-6 tracking-tight whitespace-pre-line">
            {t.hero.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="text-primary italic font-serif font-semibold">{line}</span> : line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-8 max-w-xl font-medium leading-relaxed whitespace-pre-line">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={onOpenContact} 
              className="bg-primary text-white px-8 py-3.5 rounded text-sm font-bold tracking-wider hover:bg-orange-700 transition-all flex items-center justify-center gap-2 uppercase shadow-sm"
            >
              {locale === 'en' ? 'Free Trial' : '무료 체험단 신청하기'} <ArrowRight size={18} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')} 
              className="bg-secondary text-white px-8 py-3.5 rounded text-sm font-bold tracking-wider hover:bg-black transition-all flex items-center justify-center gap-2 uppercase shadow-sm"
            >
              <Settings size={16} /> {t.common.preview}
            </button>
          </div>
        </div>

        {/* Right Column: Premium Mockup/Photo Frame */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-md lg:max-w-none border border-gray-100 p-4 bg-white shadow-xl rounded-2xl">
            <div className="overflow-hidden rounded-xl aspect-[4/3] bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=85&w=1200" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700" 
                alt="Hugnics Care Core Value" 
                loading="eager" 
              />
            </div>
            
            {/* Elegant text info overlay */}
            <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-2xl hidden md:block max-w-[245px] border border-white/10">
              <div className="text-primary text-[10px] font-bold tracking-widest uppercase mb-1.5">Technology</div>
              <p className="text-xs font-semibold text-gray-300 leading-normal">
                {locale === 'en' ? '60GHz mmWave radar sensing system.' : '60GHz 고주파 전파 기술 기반의 정밀 인체 감지 센서.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

// --- Features (Premium Grid with Thin-Bordered Cards) ---
export const Features = memo(() => {
  const { t } = useTranslation();
  const items = [
    { icon: <EyeOff size={32}/>, title: t.features.f1_t, desc: t.features.f1_d },
    { icon: <Zap size={32}/>, title: t.features.f2_t, desc: t.features.f2_d },
    { icon: <Shield size={32}/>, title: t.features.f3_t, desc: t.features.f3_d },
    { icon: <Smartphone size={32}/>, title: t.features.f4_t, desc: t.features.f4_d }
  ];
  return (
    <section className="bg-white py-24 px-6 lg:px-12 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 tracking-tight whitespace-pre-line">{t.features.title}</h2>
            <p className="text-base text-gray-400 font-semibold tracking-wide">{t.features.subtitle}</p>
          </div>
          <div className="h-[1px] flex-grow bg-gray-100 mb-2.5 hidden md:block ml-16"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group relative bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
              {/* Large clean index number */}
              <div className="absolute top-6 right-8 text-4xl font-extrabold text-gray-100 group-hover:text-primary/10 transition-colors tracking-tighter">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div className="text-primary mb-8">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// --- Footer (Sleek, Clean Typography Corporate Footer) ---
export const Footer: React.FC<{ onNavigate: (p: string, t?: string) => void }> = memo(({ onNavigate }) => {
  const { t, locale } = useTranslation();
  return (
    <footer className="bg-secondary py-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-5">
            <div className="text-2xl font-black tracking-widest mb-6 text-white">HUGNICS</div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-sm">
              Invisible Safety, Warm Care. <br/>
              {locale === 'en' ? 'Hugnics researches technology that protects dignity and fills care gaps.' : '허그닉스는 존엄을 지키는 기술을 연구하고 세상의 모든 돌봄 공백을 채웁니다.'}
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold text-[10px] text-gray-500 tracking-[0.2em] mb-6 uppercase">COMPANY</h5>
              <ul className="space-y-3.5 text-xs text-gray-400 font-semibold">
                <li><button onClick={()=>onNavigate('company', 'team')} className="hover:text-primary transition-colors">{locale === 'en' ? 'Team' : '팀 소개'}</button></li>
                <li><button onClick={()=>onNavigate('company', 'vision')} className="hover:text-primary transition-colors">{locale === 'en' ? 'Vision' : '비전 및 미션'}</button></li>
                <li><button onClick={()=>onNavigate('company', 'careers')} className="hover:text-primary transition-colors">{locale === 'en' ? 'Careers' : '인재 영입'}</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[10px] text-gray-500 tracking-[0.2em] mb-6 uppercase">PRODUCT</h5>
              <ul className="space-y-3.5 text-xs text-gray-400 font-semibold">
                <li><button onClick={()=>onNavigate('product', 'hardware')} className="hover:text-primary transition-colors">Hardware</button></li>
                <li><button onClick={()=>onNavigate('product', 'software')} className="hover:text-primary transition-colors">Platform</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[10px] text-gray-500 tracking-[0.2em] mb-6 uppercase">SUPPORT</h5>
              <ul className="space-y-3.5 text-xs text-gray-400 font-semibold">
                <li><button onClick={()=>onNavigate('support', 'faq')} className="hover:text-primary transition-colors">FAQ</button></li>
                <li><button onClick={()=>onNavigate('privacy')} className="hover:text-primary transition-colors">Privacy</button></li>
                <li><button onClick={()=>onNavigate('support')} className="hover:text-primary transition-colors">Support</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[11px] text-gray-500 font-semibold">
          <div className="space-y-1.5">
            <p className="text-gray-400">© 2026 Hugnics Inc. All rights reserved.</p>
            <p>{locale === 'en' ? 'Startup Promotion Center, Dongguk Univ, Seoul, Korea' : '서울특별시 중구 필동로 1길 30, 동국대학교 창업진흥센터'}</p>
          </div>
          <div className="text-left md:text-right space-y-1.5">
            <p>{locale === 'en' ? 'CEO: Jihun Han' : '대표이사: 한지훈'} | {locale === 'en' ? 'Biz No: 123-45-67890' : '사업자등록번호: 123-45-67890'}</p>
            <p className="text-primary font-bold">Email: contact@hugnics.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

const ArrowRight = ({ size, className, strokeWidth = 2 }: any) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
