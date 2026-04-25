import React, { useState } from "react";
import "../styles/StartScreen.css";
import { useLanguage } from "../hooks/useLanguage";
import LegalModal from "./LegalModal";
import SettingsModal from "./SettingsModal";
import HeroBanner from "./HeroBanner";

import hamburgerMenuIcon from "../assets/icons/hamburguer_menu_yellow.png";

const StartScreen: React.FC = () => {
  const { uiText } = useLanguage();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  if (!uiText || !uiText.banner_intro || !uiText.legal_modal) return null;

  return (
    <section className="banner snap-section">
      <button className="settings-trigger-btn" onClick={() => setIsSettingsOpen(true)}>
        <span className="icon"><img src={hamburgerMenuIcon} alt="Settings" /></span>
      </button>
      
      {isSettingsOpen && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
          onOpenLegal={() => setIsLegalOpen(true)}
        />
      )}

      {isLegalOpen && (
        <LegalModal onClose={() => setIsLegalOpen(false)} />
      )}

      <HeroBanner 
        title={uiText.banner_intro.title} 
        tagline={uiText.banner_intro.tagline} 
      />
    </section>
  );
};

export default StartScreen;