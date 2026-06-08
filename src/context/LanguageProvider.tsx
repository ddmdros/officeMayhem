import { useState, type ReactNode } from "react";
import { APP_CONTENT } from "../core/content";
import { LanguageContext, type Language } from "./LanguageContext";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    content: APP_CONTENT[language] || APP_CONTENT["en"],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
