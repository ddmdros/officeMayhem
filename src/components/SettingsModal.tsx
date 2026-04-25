import React from "react";
import { useLanguageSwitcher } from "../hooks/useLanguageSwitcher";
import "../styles/SettingsModal.css";

interface SettingsModalProps {
    onClose: () => void;
    onOpenLegal: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, onOpenLegal }) => {
    const { language, setLanguage } = useLanguageSwitcher();

    return (
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
                <div className="settings-header">
                    <h2>{language === 'en' ? 'SETTINGS' : 'CONFIGURAÇÕES'}</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="settings-content">
                    <div className="settings-group">
                        <label>{language === 'en' ? 'LANGUAGE' : 'IDIOMA'}</label>
                        <div className="lang-toggle-row">
                            <button
                                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                                onClick={() => setLanguage('en')}
                            >ENGLISH</button>
                            <button
                                className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
                                onClick={() => setLanguage('pt')}
                            >PORTUGUÊS</button>
                        </div>
                    </div>

                    <div className="settings-group">
                        <label>{language === 'en' ? 'PROJECT' : 'PROJETO'}</label>
                        <div className="nav-column">
                            <a href="LINK_DO_SEU_GITHUB" target="_blank" rel="noreferrer" className="menu-action-btn">
                                <span className="icon">📂</span> {language === 'en' ? 'Documentation' : 'Documentação'}
                            </a>
                            <button
                                className="menu-action-btn"
                                onClick={() => {
                                    onClose();
                                    onOpenLegal();  
                                }}
                            >
                                <span className="icon">⚖️</span> Legal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;