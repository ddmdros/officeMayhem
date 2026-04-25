import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/LegalModal.css";
interface LegalModalProps {
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ onClose }) => {
  const { uiText, lang } = useLanguage();
  const { legal_modal } = uiText;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal legal-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>{lang === 'en' ? 'LEGAL INFO' : 'INFORMAÇÕES LEGAIS'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

<div className="settings-content legal-content-scroll">
  <div className="legal-text-container">
    <p 
      className="legal-modal-text"
      dangerouslySetInnerHTML={{ __html: legal_modal.disclaimer }} 
    />
  </div>
  
  <div className="legal-links-grid">
    <a 
      href={`https://supercell.com/en/terms-of-service/${lang === 'pt' ? 'pt' : ''}`} 
      target="_blank" 
      rel="noreferrer" 
      className="legal-link-btn"
    >
      {legal_modal.tos_btn}
    </a>
    <a 
      href={`https://supercell.com/en/fan-content-policy/${lang === 'pt' ? 'pt/' : ''}`} 
      target="_blank" 
      rel="noreferrer" 
      className="legal-link-btn"
    >
      {legal_modal.policy_btn}
    </a>
  </div>

  {/* Botões de ação total que você curtiu */}
  <div className="legal-actions-stack">
    <a 
      href="LINK_DO_SEU_GITHUB" 
      target="_blank" 
      rel="noreferrer" 
      className="menu-action-btn doc-btn"
    >
      {lang === 'en' ? '📂 PROJECT DOCUMENTATION' : '📂 DOCUMENTAÇÃO DO PROJETO'}
    </a>

    <button className="menu-action-btn back-btn" onClick={onClose}>
      {legal_modal.back_btn}
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default LegalModal;