// src/hooks/useLanguageSwitcher.ts
import { useLanguage } from "./useLanguage";

export const useLanguageSwitcher = () => {
    const { lang, setLang } = useLanguage();

    const toggleLanguage = () => {
        // Lógica simples: se for 'en', vira 'pt'. Se não, vira 'en'.
        const nextLang = lang === "en" ? "pt" : "en";
        setLang(nextLang);
    };

    return {
        language: lang,
        toggleLanguage,
    };
};