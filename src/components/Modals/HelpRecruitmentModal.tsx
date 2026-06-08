import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import helpTextData from "../../core/constants/helpRecruitment.json";
import "../../styles/HelpRecruitmentModal.css";

interface HelpRecruitmentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpRecruitmentModal: React.FC<HelpRecruitmentProps> = ({
  isOpen,
  onClose,
}) => {
  const { lang } = useLanguage();

  if (!isOpen) return null;

  const content = helpTextData[lang];

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className="info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-info" onClick={onClose}>
          ×
        </button>
        <h3 className="info-title">{content.title}</h3>

        <div className="info-item">
          <h4>{content.recruitment.title}</h4>
          <p>{content.recruitment.description}</p>
        </div>

        <div className="info-item">
          <h4>{content.classes.title}</h4>

          <div className="classes-list">
            <div className="class-row">
              <img
                src="/assets/icons/SweetTalk_icon.png"
                alt="Lábia"
                className="custom-class-icon"
              />
              <p>
                <strong>{content.classes.sweetTalk.name}</strong>{" "}
                {content.classes.sweetTalk.desc}
              </p>
            </div>

            <div className="class-row">
              <img
                src="/assets/icons/BruteForce_icon.png"
                alt="Brutalidade"
                className="custom-class-icon"
              />
              <p>
                <strong>{content.classes.brutality.name}</strong>{" "}
                {content.classes.brutality.desc}
              </p>
            </div>

            <div className="class-row">
              <img
                src="/assets/icons/Logistics_icon.png"
                alt="Logística"
                className="custom-class-icon"
              />
              <p>
                <strong>{content.classes.logistics.name}</strong>{" "}
                {content.classes.logistics.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <h4>{content.choose.title}</h4>
          <p>{content.choose.description}</p>
        </div>

        <div className="info-item">
          <h4>{content.chaos.title}</h4>
          <p>{content.chaos.description}</p>
        </div>

        <div className="info-footer">
          <button className="btn-back-to-game" onClick={onClose}>
            {content.footer}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpRecruitmentModal;
