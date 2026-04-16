import React from 'react';
import './HelpRecruitment.css';

interface HelpRecruitmentProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpRecruitment: React.FC<HelpRecruitmentProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className="info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-info" onClick={onClose}>×</button>
        <h3 className="info-title">CORPORATE GUIDELINES</h3>
        
        <div className="info-item">
          <span className="info-icon">🧨</span>
          <div>
            <h4>OFFICE CHAOS</h4>
            <p>The measure of workplace sanity. If this hits 100%, HR (Mina) has a meltdown and the mission is aborted. Keep it low!</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">⏰</span>
          <div>
            <h4>OVERTIME</h4>
            <p>Your shift is ticking. Poor decisions add hours to your workday. Reach 100% and you're stuck in the office... forever.</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">🏢</span>
          <div>
            <h4>SPECIALISTS</h4>
            <p>Each Class (Tank, Support, etc.) reacts differently to crises. Strategy isn't about numbers anymore; it's about who you trust to fix the copier.</p>
          </div>
        </div>

        <div className="info-footer">
          <p>“Safety is a suggestion. Productivity is a requirement.” — Starr Corp Management</p>
        </div>
      </div>
    </div>
  );
};

export default HelpRecruitment;