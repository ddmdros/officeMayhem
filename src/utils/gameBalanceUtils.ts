import type { ChaosLevel } from "../types/game";

export const getChaosValue = (level: ChaosLevel): number => {
  const values: Record<ChaosLevel, number> = {
    good: 0,
    neutral: 25,
    bad: 40,
  };

  return values[level] || 0;
};
