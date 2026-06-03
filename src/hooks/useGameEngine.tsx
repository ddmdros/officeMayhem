import { useState } from "react";
import type {
  Brawler,
  ChoiceResult,
  GameScene,
  ChaosLevel,
} from "../types/game";

export const useGameEngine = () => {
  const [currentScene, setCurrentScene] = useState<GameScene>("START");
  const [selectedTeam, setSelectedTeam] = useState<Brawler[]>([]);
  const [chaos, setChaos] = useState(0);
  const [encounterIndex, setEncounterIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentConsequence, setCurrentConsequence] = useState<string | null>(
    null,
  );
  const [lastActionLevel, setLastActionLevel] = useState<ChaosLevel | null>(
    null,
  );

  const toggleSelection = (brawler: Brawler) => {
    const alreadySelected = selectedTeam.find((b) => b.id === brawler.id);
    if (alreadySelected) {
      setSelectedTeam((prev) => prev.filter((b) => b.id !== brawler.id));
    } else if (selectedTeam.length < 3) {
      setSelectedTeam((prev) => [...prev, { ...brawler, isUsed: false }]);
    }
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % selectedTeam.length);
  };

  const prevCard = () => {
    setActiveIndex(
      (prev) => (prev - 1 + selectedTeam.length) % selectedTeam.length,
    );
  };

  const handleChoice = (result: ChoiceResult) => {
    if (result.chaos) setChaos((prev) => prev + result.chaos);
    setCurrentConsequence(result.consequence);
    setLastActionLevel(result.chaosLevel);

    setSelectedTeam((prev) =>
      prev.map((b) =>
        b.name === result.brawlerName ? { ...b, isUsed: true } : b,
      ),
    );

    setCurrentScene("POST_ENCOUNTER_DIALOGUE");
  };

  const handleRestartGame = () => {
    setCurrentScene("RECRUITING");
    setSelectedTeam([]);
    setChaos(0);
    setEncounterIndex(0);
    setActiveIndex(0);
    setCurrentConsequence(null);
    setLastActionLevel(null);
  };

  return {
    currentScene,
    setCurrentScene,
    selectedTeam,
    toggleSelection,
    chaos,
    encounterIndex,
    setEncounterIndex,
    activeIndex,
    setActiveIndex,
    nextCard,
    prevCard,
    handleChoice,
    handleRestartGame,
    currentConsequence,
    lastActionLevel,
  };
};
