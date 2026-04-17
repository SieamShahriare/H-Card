import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  locale: Language;
  t: (key: string) => string;
  setLocale: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Language>(() => {
    return (localStorage.getItem('app_language') as Language) || 'en';
  });

  const setLocale = useCallback((lang: Language) => {
    setLocaleState(lang);
    localStorage.setItem('app_language', lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLocale(locale === 'en' ? 'bn' : 'en');
  }, [locale, setLocale]);

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let result = (translations as any)[locale];
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        // Fallback to English
        let fallback = (translations as any)['en'];
        for (const fk of keys) {
          if (fallback && fallback[fk]) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return typeof result === 'string' ? result : key;
  }, [locale]);

  const value = useMemo(() => ({ locale, t, setLocale, toggleLanguage }), [locale, t, setLocale, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
