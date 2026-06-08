import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }

  const { language, setLanguage, content } = context;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return {
    lang: language,
    setLang: setLanguage,
    toggleLanguage,
    uiText: content.ui,
    dialogues: content.dialogues,

    isPt: language === "pt",
    isEn: language === "en",
  };
};
