import { createContext } from "react";
import { APP_CONTENT, type AppContent } from "../core/content";

export type Language = keyof typeof APP_CONTENT;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: AppContent;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
