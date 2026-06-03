import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import "../../styles/EncounterRoom.css";

interface ChaosBarProps {
  chaos: number;
  maxChaos?: number;
}

export const ChaosBar: React.FC<ChaosBarProps> = ({ chaos, maxChaos = 60 }) => {
  const { isPt } = useLanguage();

  const fillPercentage = Math.min((chaos / maxChaos) * 100, 100);

  const isDanger = chaos > maxChaos * 0.66;

  return (
    <div className="status-bar-minimal">
      <div className="stat-item">
        <div className="stat-header">
          <span>{isPt ? "CAOS NO ESCRITÓRIO" : "OFFICE CHAOS"}</span>
          <span className={isDanger ? "danger-text" : ""}>
            {chaos} / {maxChaos}
          </span>
        </div>
        <div className="stat-bar-bg">
          <div
            className="stat-bar-fill chaos"
            style={{ width: `${fillPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
