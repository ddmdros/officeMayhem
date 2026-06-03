import type { Brawler, ChoiceResult } from "../../types/game";
import { EncounterRoom } from "../EncounterRoom";
import { useLanguage } from "../../hooks/useLanguage";
import encounterTexts from "../../core/constants/encounterTexts.json";
import { ChaosBar } from "../UI/ChaosBar";

interface EncounterPhaseSCNProps {
  encounterIndex: number;
  selectedTeam: Brawler[];
  activeIndex: number;
  chaos: number;
  prevCard: () => void;
  nextCard: () => void;
  handleChoice: (result: ChoiceResult) => void;
}

export const EncounterPhaseSCN: React.FC<EncounterPhaseSCNProps> = ({
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

      <ChaosBar chaos={chaos} />
    </section>
  );
};
