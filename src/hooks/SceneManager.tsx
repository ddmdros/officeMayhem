import React from "react";
import Intro from "../components/Intro/Intro";
import Recruitment from "../components/RecruitmentPage/Recruitment";
import IntroDialogue from "../components/Intro/IntroDialogue";
import { EncounterRoom } from "../components/EncounterRoom";
import { FinalResult } from "../components/FinalResult";
import type { GameScene, Brawler, ChoiceResult } from "../types/game";
import StartScreen from "../components/Intro/StartScreen";
import { useLanguage } from "./useLanguage";
import encounterTexts from "../core/constants/encounterTexts.json";

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
  const { isPt } = useLanguage();

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
        <div className="game-container">
          <div className="blur-background">
            <Recruitment
              brawlers={brawlers}
              selectedTeam={[]}
              toggleSelection={() => {}}
              onOpenDetails={() => {}}
              onStartMission={() => {}}
            />
          </div>
          <IntroDialogue
            scriptType="intro"
            onFinish={() => setCurrentScene("RECRUITING")}
          />
        </div>
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
                    (activeIndex - 1 + selectedTeam.length) %
                      selectedTeam.length
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
                <span className={chaos > 40 ? "danger-text" : ""}>
                  {chaos}/60
                </span>
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
    }

    case "POST_ENCOUNTER_DIALOGUE":
      return (
        <div className="game-container">
          <div className="blur-background">
            <div
              className="status-bar-minimal"
              style={{ position: "absolute", bottom: "20px" }}
            >
              <div className="stat-header">
                <span>{isPt ? "CAOS NO ESCRITÓTIO" : "OFFICE CHAOS"}</span>
                <span className={chaos > 40 ? "danger-text" : ""}>
                  {chaos}/60
                </span>
              </div>
              <div className="stat-bar-bg">
                <div
                  className="stat-bar-fill chaos"
                  style={{ width: `${Math.min((chaos / 60) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className="consequence-container"
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              padding: "2rem",
              backgroundColor: "rgba(0,0,0,0.85)",
              borderRadius: "12px",
              color: "white",
              maxWidth: "600px",
              margin: "0 auto",
              marginTop: "20vh",
            }}
          >
            <h2 style={{ color: "#ffcc00", marginBottom: "1rem" }}>
              {isPt ? "Relatório do incidente" : "Incident Report"}
            </h2>

            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.6",
                marginBottom: "2rem",
              }}
            >
              {currentConsequence}
            </p>

            <button
              className="btn-continue"
              style={{
                padding: "12px 24px",
                fontSize: "1rem",
                cursor: "pointer",
                backgroundColor: "#6200ea",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
              onClick={() => {
                if (encounterIndex >= 2) {
                  setCurrentScene("RESULT");
                } else {
                  setEncounterIndex((prev) => prev + 1);
                  setCurrentScene("ENCOUNTER");
                }
              }}
            >
              {encounterIndex >= 2
                ? isPt
                  ? "Ver avaliação final"
                  : "See Final Review"
                : isPt
                  ? "Próxima crise"
                  : "Next Crisis"}
            </button>
          </div>
        </div>
      );

    case "RESULT":
      return <FinalResult chaos={chaos} onReset={handleRestartGame} />;
    default:
      return null;
  }
};
