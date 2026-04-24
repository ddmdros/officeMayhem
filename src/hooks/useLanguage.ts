import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }

    // Agora o TS sabe que 'language', 'setLanguage' e 'content' existem
    const { language, setLanguage, content } = context;

    return {
        lang: language,
        setLang: setLanguage,
        uiText: content.ui,
        dialogues: content.dialogues,
        encounter: content.encounter,

        isPt: language === "pt",
        isEn: language === "en",
    };
};