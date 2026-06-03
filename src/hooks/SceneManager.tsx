import React from "react";
import Intro from "../components/Intro/Intro";
import Recruitment from "../components/RecruitmentPage/Recruitment";
import IntroDialogue from "../components/Intro/IntroDialogue";
import { EncounterPhase } from "../components/EncounterPhase";
import { FinalResult } from "../components/FinalResult";
import type { GameScene, Brawler, ChoiceResult } from "../types/game";
import StartScreen from "../components/Intro/StartScreen";
import PostEncounterDialogueSCN from "../components/Scenes/PostEncounterDialogueSCN";
import IntroDialogueSCN from "../components/Scenes/IntroDialogueSceneSCN";

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
      return (
        <>
          <StartScreen />
          <Intro onStart={() => setCurrentScene("INTRO_DIALOGUE")} />
        </>
      );

    case "INTRO_DIALOGUE":
      return (
        <IntroDialogueSCN
          brawlers={brawlers}
          setCurrentScene={setCurrentScene}
        />
      );
    case "RECRUITING":
      return (
        <Recruitment
          brawlers={brawlers}
          selectedTeam={selectedTeam}
          toggleSelection={toggleSelection}
          onOpenDetails={setViewingBrawler}
          onStartMission={() => setCurrentScene("PRE_ENCOUNTER_DIALOGUE")}
        />
      );
    case "PRE_ENCOUNTER_DIALOGUE":
      return (
        <div className="game-container">
          <div className="blur-background bg-office-lobby">
            <section className="encounter-section">
              <div className="elevator-doors-mock"></div>
            </section>
          </div>
          <IntroDialogue
            scriptType="elevator_crisis"
            onFinish={() => setCurrentScene("ENCOUNTER")}
          />
        </div>
      );
    case "ENCOUNTER": {
      return (
        <EncounterPhase
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
      return <FinalResult chaos={chaos} onReset={handleRestartGame} />;
    default:
      return null;
  }
};
