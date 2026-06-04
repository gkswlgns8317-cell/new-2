import React, { useState, useEffect, memo } from 'react';
import { Menu, X, ChevronDown, Settings, EyeOff, Zap, Shield, Smartphone, Globe } from 'lucide-react';
import { useTranslation } from './LanguageContext';

// --- Navbar (Clean & High-Contrast) ---
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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.05)] py-3' : 'bg-white/50 backdrop-blur-sm py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-black tracking-tighter cursor-pointer text-secondary"
          onClick={() => { handleMobileNav('home'); window.scrollTo(0,0); }}
        >
          HUGNICS
        </div>

        {/* Desktop GNB */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((nav) => (
            <div 
              key={nav.id} 
              className="relative group" 
              onMouseEnter={() => setActiveMenu(nav.id)} 
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className={`flex items-center text-[14px] font-black tracking-tight py-2 transition-colors ${scrolled ? 'text-gray-700' : 'text-gray-900'} hover:text-primary uppercase`}>
                {nav.name}
                <ChevronDown size={14} className={`ml-1.5 transition-transform duration-300 ${activeMenu === nav.id ? 'rotate-180 text-primary' : 'opacity-40'}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.12)] border border-gray-50 p-2 transition-all duration-300 transform ${activeMenu === nav.id ? 'opacity-100 scale-100 visible translate-y-3' : 'opacity-0 scale-95 invisible translate-y-0'}`}>
                {nav.items.map((item) => (
                  <button 
                    key={item.id} 
                    onClick={() => { onNavigate(item.id === 'privacy' ? 'privacy' : nav.id, item.id); setActiveMenu(null); }} 
                    className="block w-full text-left px-5 py-3.5 text-[14px] font-bold text-gray-600 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
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
          <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
            <button 
              onClick={(e) => { e.preventDefault(); setLocale('ko'); }} 
              className={`px-3 py-1.5 rounded-full text-[10px] font-black transition-all ${locale === 'ko' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              KOR
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); setLocale('en'); }} 
              className={`px-3 py-1.5 rounded-full text-[10px] font-black transition-all ${locale === 'en' ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              ENG
            </button>
          </div>

          <button 
            onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')} 
            className="text-[13px] font-black text-gray-500 hover:text-secondary"
          >
            {t.common.preview}
          </button>
          <button 
            onClick={onOpenContact} 
            className="bg-primary text-white px-7 py-3 rounded-full text-[13px] font-black hover:bg-orange-700 shadow-xl shadow-primary/20 transition-all"
          >
            {t.common.contact}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')} className="p-2 text-gray-400">
            <Globe size={20} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-secondary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="p-8 space-y-9">
          {navItems.map(nav => (
            <div key={nav.id} className="space-y-4">
              <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.25em]">{nav.name}</div>
              <div className="flex flex-col gap-4">
                {nav.items.map(item => (
                  <button key={item.id} onClick={() => handleMobileNav(nav.id, item.id)} className="text-left text-xl font-bold text-gray-800">{item.name}</button>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-6 border-t">
            <button onClick={() => { setIsOpen(false); onOpenContact(); }} className="w-full bg-primary text-white py-5 rounded-2xl font-black text-center text-lg shadow-2xl shadow-primary/30">{t.common.contact}</button>
          </div>
        </div>
      </div>
    </nav>
  );
});

// --- Hero ---
export const Hero: React.FC<{ onOpenContact: () => void; onNavigate: (p: string, t?: string) => void }> = memo(({ onOpenContact, onNavigate }) => {
  const { t, locale } = useTranslation();
  return (
    <section className="relative min-h-[92vh] flex items-center bg-white pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=85&w=1920" 
          className="w-full h-full object-cover opacity-60" 
          alt="Hugnics Care Core Value" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full animate-fade-in-up">
        <div className="inline-flex items-center gap-2.5 bg-orange-50 border border-orange-100 text-primary px-5 py-2 rounded-full text-[13px] font-black mb-10 shadow-sm">
          <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
          {t.hero.badge}
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-secondary leading-[1.05] mb-10 tracking-tighter whitespace-pre-line">
          {t.hero.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i === 1 ? <span className="text-primary italic">{line}</span> : line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-2xl font-bold leading-relaxed whitespace-pre-line">
          {t.hero.desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={onOpenContact} 
            className="bg-primary text-white px-12 py-5 rounded-2xl text-xl font-black hover:bg-orange-700 shadow-[0_20px_40px_rgba(194,65,12,0.3)] transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            {locale === 'en' ? 'Free Trial' : '무료 체험단 신청하기'} <ArrowRight size={24} strokeWidth={3} />
          </button>
          <button 
            onClick={() => window.open('https://hugnics-web-926013440113.us-west1.run.app/', '_blank')} 
            className="bg-secondary text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Settings size={22} /> {t.common.preview}
          </button>
        </div>
      </div>
    </section>
  );
});

// --- Features ---
export const Features = memo(() => {
  const { t } = useTranslation();
  const items = [
    { icon: <EyeOff size={36}/>, title: t.features.f1_t, desc: t.features.f1_d },
    { icon: <Zap size={36}/>, title: t.features.f2_t, desc: t.features.f2_d },
    { icon: <Shield size={36}/>, title: t.features.f3_t, desc: t.features.f3_d },
    { icon: <Smartphone size={36}/>, title: t.features.f4_t, desc: t.features.f4_d }
  ];
  return (
    <section className="bg-white py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight tracking-tight whitespace-pre-line">{t.features.title}</h2>
            <p className="text-xl text-gray-500 font-bold">{t.features.subtitle}</p>
          </div>
          <div className="h-[3px] flex-grow bg-gray-100 mb-5 hidden md:block ml-16"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {items.map((item, i) => (
            <div key={i} className="group flex flex-col items-start transition-all duration-300">
              <div className="text-primary mb-10 bg-orange-50 p-6 rounded-3xl group-hover:bg-primary group-hover:text-white group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-secondary mb-5 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed font-bold opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// --- Footer ---
export const Footer: React.FC<{ onNavigate: (p: string, t?: string) => void }> = memo(({ onNavigate }) => {
  const { t, locale } = useTranslation();
  return (
    <footer className="bg-secondary py-32 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <div className="text-4xl font-black tracking-tighter mb-8 italic">HUGNICS</div>
            <p className="text-gray-400 text-xl font-bold leading-relaxed max-w-md">
              Invisible Safety, Warm Care. <br/>
              {locale === 'en' ? 'Hugnics researches technology that protects dignity and fills care gaps.' : '허그닉스는 존엄을 지키는 기술을 연구하고 세상의 모든 돌봄 공백을 채웁니다.'}
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="font-black text-sm text-gray-600 tracking-[0.3em] mb-10">COMPANY</h5>
              <ul className="space-y-5 text-[15px] font-black">
                <li><button onClick={()=>onNavigate('company', 'team')} className="hover:text-primary transition-colors">{locale === 'en' ? 'Team' : '팀 소개'}</button></li>
                <li><button onClick={()=>onNavigate('company', 'vision')} className="hover:text-primary transition-colors">{locale === 'en' ? 'Vision' : '비전 및 미션'}</button></li>
                <li><button onClick={()=>onNavigate('company', 'careers')} className="hover:text-primary transition-colors">{locale === 'en' ? 'Careers' : '인재 영입'}</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-sm text-gray-600 tracking-[0.3em] mb-10">PRODUCT</h5>
              <ul className="space-y-5 text-[15px] font-black">
                <li><button onClick={()=>onNavigate('product', 'hardware')} className="hover:text-primary transition-colors">Hardware</button></li>
                <li><button onClick={()=>onNavigate('product', 'software')} className="hover:text-primary transition-colors">Platform</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-sm text-gray-600 tracking-[0.3em] mb-10">SUPPORT</h5>
              <ul className="space-y-5 text-[15px] font-black">
                <li><button onClick={()=>onNavigate('support', 'faq')} className="hover:text-primary transition-colors">FAQ</button></li>
                <li><button onClick={()=>onNavigate('privacy')} className="hover:text-primary transition-colors">Privacy</button></li>
                <li><button onClick={()=>onNavigate('support')} className="hover:text-primary transition-colors">Support</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 text-[13px] text-gray-500 font-bold">
          <div className="space-y-2">
            <p className="text-gray-400">© 2026 Hugnics Inc. All rights reserved.</p>
            <p>{locale === 'en' ? 'Startup Promotion Center, Dongguk Univ, Seoul, Korea' : '서울특별시 중구 필동로 1길 30, 동국대학교 창업진흥센터'}</p>
          </div>
          <div className="text-left md:text-right space-y-2">
            <p>{locale === 'en' ? 'CEO: Jihun Han' : '대표이사: 한지훈'} | {locale === 'en' ? 'Biz No: 123-45-67890' : '사업자등록번호: 123-45-67890'}</p>
            <p className="text-primary">Email: contact@hugnics.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

const ArrowRight = ({ size, className, strokeWidth = 2 }: any) => <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
