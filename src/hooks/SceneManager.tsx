import React from "react";
import {
  RecruitmentSCN,
  EncounterPhaseSCN,
  PostEncounterDialogueSCN,
  IntroDialogueSCN,
  StartSCN,
  PreEncounterSCN,
  FinalSCN,
} from "../components/Scenes";
import type { GameScene, Brawler, ChoiceResult } from "../types/game";

interface SceneManagerProps {
  currentScene: GameScene;
  setCurrentScene: (scene: GameScene) => void;
  brawlers: Brawler[];
  selectedTeam: Brawler[];
  toggleSelection: (brawler: Brawler) => void;
  setViewingBrawler: (brawler: Brawler | null) => void;
  chaos: number;
  encounterIndex: number;
  setEncounterIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  prevCard: () => void;
  nextCard: () => void;
  handleChoice: (result: ChoiceResult) => void;
  handleRestartGame: () => void;
  currentConsequence: string | null;
}

export const SceneManager: React.FC<SceneManagerProps> = ({
  currentScene,
  setCurrentScene,
  brawlers,
  selectedTeam,
  toggleSelection,
  setViewingBrawler,
  chaos,
  encounterIndex,
  setEncounterIndex,
  activeIndex,
  prevCard,
  nextCard,
  handleChoice,
  handleRestartGame,
  currentConsequence,
}) => {
  switch (currentScene) {
    case "START":
      return <StartSCN setCurrentScene={setCurrentScene} />;

    case "INTRO_DIALOGUE":
      return (
        <IntroDialogueSCN
          brawlers={brawlers}
          setCurrentScene={setCurrentScene}
        />
      );
    case "RECRUITING":
      return (
        <RecruitmentSCN
          brawlers={brawlers}
          selectedTeam={selectedTeam}
          toggleSelection={toggleSelection}
          onOpenDetails={setViewingBrawler}
          onStartMission={() => setCurrentScene("PRE_ENCOUNTER_DIALOGUE")}
        />
      );
    case "PRE_ENCOUNTER_DIALOGUE":
      return <PreEncounterSCN setCurrentScene={setCurrentScene} />;
    case "ENCOUNTER": {
      return (
        <EncounterPhaseSCN
          encounterIndex={encounterIndex}
          selectedTeam={selectedTeam}
          activeIndex={activeIndex}
          chaos={chaos}
          prevCard={prevCard}
          nextCard={nextCard}
          handleChoice={handleChoice}
        />
      );
    }

    case "POST_ENCOUNTER_DIALOGUE":
      return (
        <PostEncounterDialogueSCN
          chaos={chaos}
          currentConsequence={currentConsequence}
          encounterIndex={encounterIndex}
          setCurrentScene={setCurrentScene}
          setEncounterIndex={setEncounterIndex}
        />
      );

    case "RESULT":
      return <FinalSCN chaos={chaos} onReset={handleRestartGame} />;
    default:
      return null;
  }
};
