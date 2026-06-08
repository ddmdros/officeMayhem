import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "../../styles/SettingsModal.css";

interface SettingsModalProps {
  onClose: () => void;
  onOpenLegal: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  onClose,
  onOpenLegal,
}) => {
  const { lang, setLang, isPt } = useLanguage();

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>{lang === "en" ? "SETTINGS" : "CONFIGURAÇÕES"}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-group">
            <label>{lang === "en" ? "LANGUAGE" : "IDIOMA"}</label>
            <div className="lang-toggle-row">
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                ENGLISH
              </button>
              <button
                className={`lang-btn ${lang === "pt" ? "active" : ""}`}
                onClick={() => setLang("pt")}
              >
                PORTUGUÊS
              </button>
            </div>
          </div>

          <div className="settings-group">
            <label>{lang === "en" ? "PROJECT" : "PROJETO"}</label>
            <div className="nav-column">
              <a
                href="https://github.com/ddmdros/officeMayhem"
                target="_blank"
                rel="noreferrer"
                className="menu-action-btn"
              >
                {lang === "en" ? "Documentation" : "Documentação"}
              </a>
              <button
                className="menu-action-btn"
                onClick={() => {
                  onClose();
                  onOpenLegal();
                }}
              >
                Legal
              </button>
            </div>
          </div>

          <button
            className="menu-action-btn back-btn"
            onClick={onClose}
            style={{ marginTop: "10px" }}
          >
            {isPt ? "BACK" : "VOLTAR"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
