import "../../styles/EncounterRoom.css";
import { useLanguage } from "../../hooks/useLanguage";
import type { Brawler, ChoiceResult } from "../../types/game";
import BrawlerCardContent_EncounterRoom from "./BrawlerCardContent_EncounterRoom";

interface EncounterRoom_Manager_Props {
  brawler: Brawler;
  encounterIndex: number;
  onChoice: (result: ChoiceResult) => void;
  position: "active" | "prev" | "next" | string;
  isActive: boolean;
}

export const EncounterRoom_Manager = ({
  brawler,
  encounterIndex,
  onChoice,
  position,
  isActive,
}: EncounterRoom_Manager_Props) => {
  const { isPt } = useLanguage();

  const currentAction = brawler?.encounters?.[encounterIndex];

  if (!currentAction) {
    return (
      <div className={`choice-card ${position} error`}>
        <p>{isPt ? "Dados não encontrados" : "Data not found"}</p>
      </div>
    );
  }
  const label = isPt ? currentAction.label_ptbr : currentAction.label;
  const effect = isPt ? currentAction.effect_ptbr : currentAction.effect;
  const consequence = isPt
    ? currentAction.consequence_ptbr
    : currentAction.consequence;

  const className =
    (isPt ? brawler.class?.name_ptbr : brawler.class?.name) || "Unknown";

  const handleSelect = () => {
    if (!isActive || brawler.isUsed) return;
    onChoice({
      chaos: currentAction.chaosValue,
      chaosLevel: currentAction.chaosLevel,
      consequence: consequence,
      brawlerName: brawler.name,
    });
  };

  return (
    <div
      className={`choice-card ${position} ${isActive ? "active" : ""} ${brawler.isUsed ? "exhausted" : ""}`}
      onClick={handleSelect}
      style={{ "--class-color": "var(--card-bg-color)" } as React.CSSProperties}
    >
      {brawler.isUsed && (
        <div className="exhausted-overlay">
          <span>{isPt ? "Já jogou" : "Already played"}</span>
        </div>
      )}

      <BrawlerCardContent_EncounterRoom
        brawler={brawler}
        label={label}
        effect={effect}
        className={className}
        isPt={isPt}
        isUsed={brawler.isUsed}
      />
    </div>
  );
};
