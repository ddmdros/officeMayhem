import Recruitment from "../RecruitmentPage/Recruitment";
import IntroDialogue from "../Intro/IntroDialogue";
import type { GameScene, Brawler } from "../../types/game";
import React from "react";

interface IntroDialogueSCNProps {
  brawlers: Brawler[];
  setCurrentScene: (scene: GameScene) => void;
}

export const IntroDialogueSCN: React.FC<IntroDialogueSCNProps> = ({
  setCurrentScene,
  brawlers,
}) => {
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
};

export default IntroDialogueSCN;
