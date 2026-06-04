import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Hero, Features, Footer } from './components/LandingComponents';
import { SolutionPage, ProductPage, CompanyPage, SupportPage, PrivacyPage } from './components/SubPages';
import { LanguageProvider, useTranslation } from './components/LanguageContext';

const AppContent: React.FC = () => {
  const { locale, t } = useTranslation();
  const [view, setView] = useState<string>('home');
  const [activeTab, setActiveTab] = useState<string>('');

  // URL 파싱 로직 분리
  const parseLocation = useCallback(() => {
    const path = window.location.pathname;
    const isEn = /^\/en(\/|$)/.test(path);
    const pathParts = path.replace(/^\/en/, '').split('/').filter(Boolean);
    
    const currentPage = pathParts[0] || 'home';
    const subTab = pathParts[1] || '';

    const validViews = ['company', 'solution', 'product', 'privacy', 'support', 'home'];
    return {
      view: validViews.includes(currentPage) ? currentPage : 'home',
      activeTab: subTab
    };
  }, []);

  // 위치 동기화
  const syncWithLocation = useCallback(() => {
    const { view: newView, activeTab: newTab } = parseLocation();
    setView(newView);
    setActiveTab(newTab);
  }, [parseLocation]);

  // 브라우저 탭 타이틀 업데이트 (SEO 및 사용자 경험)
  useEffect(() => {
    const titleMap: Record<string, Record<string, string>> = {
      home: { ko: 'Hugnics | 허그닉스 - 존엄을 지키는 케어', en: 'Hugnics | Privacy-First Care Solution' },
      company: { ko: '회사 소개 | Hugnics', en: 'Company | Hugnics' },
      solution: { ko: '기술 솔루션 | Hugnics', en: 'Technology | Hugnics' },
      product: { ko: '제품 정보 | Hugnics', en: 'Products | Hugnics' },
      support: { ko: '고객 지원 | Hugnics', en: 'Support | Hugnics' },
      privacy: { ko: '개인정보처리방침 | Hugnics', en: 'Privacy Policy | Hugnics' }
    };

    const tabNames: Record<string, Record<string, string>> = {
      team: { ko: '팀 소개', en: 'Team' },
      vision: { ko: '비전', en: 'Vision' },
      careers: { ko: '인재 영입', en: 'Careers' },
      radar: { ko: 'Radar Tech', en: 'Radar Tech' },
      ai: { ko: 'Edge AI', en: 'Edge AI' },
      data: { ko: 'Data Insight', en: 'Data Insight' },
      hardware: { ko: 'Hardware', en: 'Hardware' },
      software: { ko: 'Software', en: 'Software' },
      faq: { ko: 'FAQ', en: 'FAQ' }
    };

    const baseTitle = titleMap[view]?.[locale] || titleMap.home[locale];
    const tabName = activeTab ? tabNames[activeTab]?.[locale] : '';
    
    document.title = tabName ? `${tabName} | ${baseTitle.split(' | ')[0]}` : baseTitle;
  }, [view, activeTab, locale]);

  // 초기 로드 및 뒤로가기 감지
  useEffect(() => {
    syncWithLocation();
    window.addEventListener('popstate', syncWithLocation);
    return () => window.removeEventListener('popstate', syncWithLocation);
  }, [syncWithLocation]);

  // 언어가 바뀌었을 때 (ENG/KOR 버튼 클릭) 현재 페이지 상태 재점검
  useEffect(() => {
    syncWithLocation();
  }, [locale, syncWithLocation]);

  const handleNavigate = useCallback((page: string, subTab?: string) => {
    const prefix = locale === 'en' ? '/en' : '';
    const subPath = subTab ? `/${subTab}` : '';
    const newPath = page === 'home' 
      ? (locale === 'en' ? '/en' : '/') 
      : `${prefix}/${page}${subPath}`;
    
    // UI 즉시 업데이트
    setView(page);
    setActiveTab(subTab || '');
    
    // URL 동기화
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [locale]);

  const openB2BContactForm = useCallback(() => {
    window.open("https://docs.google.com/forms/d/1sRN0TTU1ccxaEmmDWBkrOyowu2UraxZDcgSAaGhCOFw/viewform", '_blank');
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'company': return <CompanyPage activeTab={activeTab || 'team'} onTabChange={(tab) => handleNavigate('company', tab)} />;
      case 'solution': return <SolutionPage activeTab={activeTab || 'radar'} onTabChange={(tab) => handleNavigate('solution', tab)} />;
      case 'product': return <ProductPage activeTab={activeTab || 'hardware'} onTabChange={(tab) => handleNavigate('product', tab)} />;
      case 'privacy': return <PrivacyPage activeTab={activeTab || 'kr'} onTabChange={(tab) => handleNavigate('privacy', tab)} />;
      case 'support': return <SupportPage activeTab={activeTab || 'faq'} onTabChange={(tab) => handleNavigate('support', tab)} onOpenContact={openB2BContactForm} />;
      default: return (
        <>
          <Hero onOpenContact={openB2BContactForm} onNavigate={handleNavigate} />
          <Features />
          <div className="bg-gray-50 py-24 px-6 text-center">
            <h2 className="text-4xl font-black mb-6 text-secondary tracking-tight">
              {locale === 'en' ? "Invisible Safety, Warm Care." : "보이지 않는 곳에서, 더 따뜻하게."}
            </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto font-bold">
              {locale === 'en' ? "Hugnics researches technology that protects human dignity." : "허그닉스는 존엄을 지키는 기술을 연구합니다."}
            </p>
            <button onClick={openB2BContactForm} className="bg-primary text-white px-12 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:bg-orange-700 transition-all">
              {t.common.inquiry}
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      <Navbar onOpenContact={openB2BContactForm} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppContent />
  </LanguageProvider>
);

export default App;