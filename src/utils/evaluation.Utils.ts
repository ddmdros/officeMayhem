import { evaluationTextsData } from "../core/constants/";

interface EvaluationResult {
  title: string;
  description: string;
  rank: string;
  color: string;
}

export const getFinalEvaluation = (
  totalChaos: number,
  isPt: boolean,
): EvaluationResult => {
  const langKey = isPt ? "pt" : "en";
  const texts = evaluationTextsData[langKey];

  const getRankedData = () => {
    if (totalChaos <= 0) return { rank: "S", ...texts.S };
    if (totalChaos <= 40) return { rank: "A", ...texts.A };
    if (totalChaos <= 80) return { rank: "C", ...texts.C };
    return { rank: "F", ...texts.F };
  };

  const { rank, title, desc } = getRankedData();

  const colors: Record<string, string> = {
    S: "#ffcc00",
    A: "#4caf50",
    C: "#00d2ff",
    F: "#ff4b4b",
  };

  return { title, description: desc, rank, color: colors[rank] };
};
