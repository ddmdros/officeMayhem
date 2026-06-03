import StartScreen from "../Intro/StartScreen";
import Intro from "../Intro/Intro";
import type { GameScene } from "../../types/game";

interface StartSCNProps {
  setCurrentScene: (scene: GameScene) => void;
}

export const StartSCN: React.FC<StartSCNProps> = ({ setCurrentScene }) => {
  return (
    <>
      <StartScreen />
      <Intro onStart={() => setCurrentScene("INTRO_DIALOGUE")} />
    </>
  );
};

export default StartSCN;
