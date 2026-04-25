import { useLanguage } from "./useLanguage";

export const useLanguageSwitcher = () => {
    const { lang, setLang } = useLanguage();

    const toggleLanguage = () => {
        const nextLang = lang === "en" ? "pt" : "en";
        setLang(nextLang);
    };

    return {
        language: lang,
        toggleLanguage,
        setLanguage: setLang,
    };
};