import { createContext, useState, type ReactNode } from 'react';
import { APP_CONTENT, type AppContent } from '../core/content';

type Language = keyof typeof APP_CONTENT;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: AppContent;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    content: APP_CONTENT[language]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

