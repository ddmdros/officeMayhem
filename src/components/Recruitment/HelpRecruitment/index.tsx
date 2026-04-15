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
        <h3 className="info-title">MISSION SPECS</h3>
        
        <div className="info-item">
          <span className="info-icon">☕</span>
          <div>
            <h4>CAFFEINE</h4>
            <p>The fuel of action. Total espresso shots needed to deploy the squad. High-tier brawlers require more coffee.</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">💼</span>
          <div>
            <h4>EFFICIENCY</h4>
            <p>The power to crush deadlines. Clears corporate crises faster and improves mission success rates.</p>
          </div>
        </div>

        <div className="info-item">
          <span className="info-icon">🧘</span>
          <div>
            <h4>RESILIENCE</h4>
            <p>Mental stamina. Protects the team from global Stress impact when facing catastrophic office failures.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpRecruitment;