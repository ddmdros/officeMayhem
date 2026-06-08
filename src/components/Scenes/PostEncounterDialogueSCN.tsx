import { useLanguage } from "../../hooks/useLanguage";
import type { GameScene } from "../../types/game";
import type { ChaosLevel } from "../../types/game";

interface PostEncounterDialogueProps {
  chaos: number;
  currentConsequence: string | null;
  lastActionLevel: ChaosLevel | null;
  encounterIndex: number;
  setCurrentScene: (scene: GameScene) => void;
  setEncounterIndex: React.Dispatch<React.SetStateAction<number>>;
  lastAddedChaos: number | null;
}

const PostEncounterDialogueSCN: React.FC<PostEncounterDialogueProps> = ({
  chaos,
  currentConsequence,
  lastActionLevel,
  encounterIndex,
  setCurrentScene,
  setEncounterIndex,
  lastAddedChaos,
}) => {
  const { isPt } = useLanguage();
  const maxChaos = 100;

  const stampText = {
    good: isPt ? "PERFEITO!" : "PERFECT!",
    neutral: isPt ? "ACEITÁVEL..." : "ACCEPTABLE...",
    bad: isPt ? "DESASTRE!" : "DISASTER!",
  };

  return (
    <div className="game-container">
      <div className="blur-background">
        <div
          className="status-bar-minimal"
          style={{ position: "absolute", bottom: "20px" }}
        >
          <div className="stat-header">
            <span>{isPt ? "CAOS NO ESCRITÓTIO" : "OFFICE CHAOS"}</span>
            <span className={chaos > 75 ? "danger-text" : ""}>
              {Math.min(chaos, maxChaos)}/{maxChaos}{" "}
            </span>
          </div>
          <div className="stat-bar-bg">
            <div
              className="stat-bar-fill chaos"
              style={{ width: `${Math.min((chaos / maxChaos) * 100, 100)}%` }}
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

        {lastActionLevel && (
          <div className={`evaluation-stamp ${lastActionLevel}`}>
            {stampText[lastActionLevel]}
          </div>
        )}

        {lastAddedChaos !== null && (
          <div
            className={`added-chaos-indicator ${lastAddedChaos > 0 ? "danger" : "safe"}`}
          >
            +{lastAddedChaos} CAOS
          </div>
        )}

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
            if (chaos > 100 || encounterIndex >= 2) {
              setCurrentScene("RESULT");
            } else {
              setEncounterIndex((prev) => prev + 1);
              setCurrentScene("ENCOUNTER");
            }
          }}
        >
          {chaos >= 100 || encounterIndex >= 2
            ? isPt
              ? "Ver avaliação final"
              : "See Final Review"
            : isPt
              ? "Avançar"
              : "Next"}
        </button>
      </div>
    </div>
  );
};

export default PostEncounterDialogueSCN;
