import React from "react";

import type { Brawler } from "../../types/game";

interface BrawlerCardContent_EncounterRoom_Props {
  brawler: Brawler;
  label: string;
  effect: string;
  className: string;
  isPt: boolean;
  isUsed?: boolean;
}

export const BrawlerCardContent_EncounterRoom: React.FC<
  BrawlerCardContent_EncounterRoom_Props
> = ({ brawler, label, effect, className, isPt, isUsed }) => {
  return (
    <>
      <div className="brawler-header">
        <div className="portrait-wrapper">
          <img
            src={brawler.imageUrl2}
            alt={brawler.name}
            className="brawler-thumb"
          />
        </div>
        <div className="brawler-info">
          <h3 className="brawler-name">{brawler.name}</h3>
          <span className="class-badge">{className}</span>
        </div>
      </div>

      <div className="action-content">
        <h4 className="action-label">{label}</h4>
        <p className="action-effect">
          {isUsed
            ? isPt
              ? "Funcionário indisponível"
              : "Unavailable employee"
            : effect}
        </p>
      </div>
    </>
  );
};

export default BrawlerCardContent_EncounterRoom;
