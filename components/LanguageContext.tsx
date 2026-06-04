import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { TRANSLATIONS, TranslationType } from './Translations';

interface LanguageContextType {
  locale: 'ko' | 'en';
  t: TranslationType;
  setLocale: (l: 'ko' | 'en') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 경로가 정확히 /en 이거나 /en/ 로 시작하는지 검사
  const checkIsEn = (path: string) => /^\/en(\/|$)/.test(path);

  const [locale, setLocaleState] = useState<'ko' | 'en'>(checkIsEn(window.location.pathname) ? 'en' : 'ko');

  // 외부(뒤로가기 등)에 의한 URL 변경 감지
  const syncLocaleWithUrl = useCallback(() => {
    const isEn = checkIsEn(window.location.pathname);
    setLocaleState(isEn ? 'en' : 'ko');
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', syncLocaleWithUrl);
    return () => window.removeEventListener('popstate', syncLocaleWithUrl);
  }, [syncLocaleWithUrl]);

  // 언어 전환 버튼 클릭 시 실행
  const setLocale = useCallback((newLocale: 'ko' | 'en') => {
    // 1. 상태 즉시 업데이트 (UI 반응성 확보)
    setLocaleState(newLocale);

    const currentPath = window.location.pathname;
    const isCurrentlyEn = checkIsEn(currentPath);
    
    let newPath = currentPath;

    if (newLocale === 'en' && !isCurrentlyEn) {
      // 한국어 -> 영어: 앞에 /en 추가
      newPath = `/en${currentPath === '/' ? '' : currentPath}`;
    } else if (newLocale === 'ko' && isCurrentlyEn) {
      // 영어 -> 한국어: 앞의 /en 제거
      newPath = currentPath.replace(/^\/en/, '') || '/';
    }
    
    // 2. URL 업데이트 (히스토리에 기록)
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
      // App.tsx 등 다른 리스너들에게 알림
      window.dispatchEvent(new Event('popstate'));
    }
  }, []);

  const t = useMemo(() => TRANSLATIONS[locale], [locale]);

  const value = useMemo(() => ({
    locale,
    t,
    setLocale
  }), [locale, t, setLocale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
