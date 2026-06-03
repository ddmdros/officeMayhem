import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { getFinalEvaluation } from "../../utils/evaluation.Utils";
import "../../styles/FinalSCN.css";

interface FinalSCN_Props {
  chaos: number;
  onReset: () => void;
}

export const FinalSCN: React.FC<FinalSCN_Props> = ({ chaos, onReset }) => {
  const { isPt } = useLanguage();

  const result = getFinalEvaluation(chaos, isPt);

  return (
    <div className="result-screen">
      <div className="result-card">
        <h1 className="rank-display" style={{ color: result.color }}>
          {result.rank}
        </h1>
        <h2 className="result-title">{result.title}</h2>
        <p className="result-desc">{result.description}</p>

        <div className="final-stats">
          <p>
            {isPt ? "Nível de Caos final:" : "Final Chaos level:"}{" "}
            <strong>{chaos}</strong>
          </p>
        </div>

        <button className="reboot-btn" onClick={onReset}>
          {isPt ? "TENTAR NOVAMENTE" : "TRY AGAIN"}
        </button>
      </div>
    </div>
  );
};

export default FinalSCN;
