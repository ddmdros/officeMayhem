import IntroDialogue from "../Intro/IntroDialogue";
import type { GameScene } from "../../types/game";

interface PreEncounterSCNProps {
  setCurrentScene: (scene: GameScene) => void;
}

const PreEncounterSCN: React.FC<PreEncounterSCNProps> = ({
  setCurrentScene,
}) => {
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
};

export default PreEncounterSCN;
