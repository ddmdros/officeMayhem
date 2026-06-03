import type { Brawler, ChoiceResult } from "../types/game";
import { EncounterRoom } from "./EncounterRoom";
import { useLanguage } from "../hooks/useLanguage";
import encounterTexts from "../core/constants/encounterTexts.json";

interface EncounterPhaseProps {
  encounterIndex: number;
  selectedTeam: Brawler[];
  activeIndex: number;
  chaos: number;
  prevCard: () => void;
  nextCard: () => void;
  handleChoice: (result: ChoiceResult) => void;
}

export const EncounterPhase: React.FC<EncounterPhaseProps> = ({
  encounterIndex,
  selectedTeam,
  activeIndex,
  chaos,
  prevCard,
  nextCard,
  handleChoice,
}) => {
  const { isPt } = useLanguage();
  const currentEncounterData = encounterTexts.list[encounterIndex];

  if (!currentEncounterData) return null;

  const displayTitle = isPt
    ? currentEncounterData.title_ptbr
    : currentEncounterData.title;
  const displayDesc = isPt
    ? currentEncounterData.description_ptbr
    : currentEncounterData.description;
  return (
    <section className="encounter-section">
      <div className="encounter-container">
        <h2 className="encounter-title">{displayTitle}</h2>
        <p className="encounter-desc">{displayDesc}</p>

        <div className="deck-selector-container">
          <button className="nav-btn prev" onClick={prevCard}>
            ◀
          </button>

          <div className="deck-wrapper">
            {selectedTeam.map((brawler, index) => {
              let position = "next";
              if (index === activeIndex) position = "active";
              else if (
                index ===
                (activeIndex - 1 + selectedTeam.length) % selectedTeam.length
              )
                position = "prev";

              return (
                <EncounterRoom
                  key={brawler.id}
                  brawler={brawler}
                  encounterIndex={encounterIndex}
                  onChoice={handleChoice}
                  position={position}
                  isActive={index === activeIndex}
                />
              );
            })}
          </div>

          <button className="nav-btn next" onClick={nextCard}>
            ▶
          </button>
        </div>
      </div>

      <div className="status-bar-minimal">
        <div className="stat-item">
          <div className="stat-header">
            <span>{isPt ? "CAOS NO ESCRITÓRIO" : "OFFICE CHAOS"}</span>
            <span className={chaos > 40 ? "danger-text" : ""}>{chaos}/60</span>
          </div>
          <div className="stat-bar-bg">
            <div
              className="stat-bar-fill chaos"
              style={{ width: `${Math.min((chaos / 60) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
