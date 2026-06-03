import { useState, useEffect } from "react";
import brawlerLocalData from "../core/constants/brawlerLocalData.json";
import { useLanguage } from "../hooks/useLanguage";
import type { Brawler, RawBrawler } from "../types/game";
import { getChaosValue } from "../utils/gameBalanceUtils";
import type { RawEncounterAction } from "../types/game";

export const useBrawlers = () => {
  const [brawlers, setBrawlers] = useState<Brawler[]>([]);
  const [loading, setLoading] = useState(true);
  const { isPt, lang } = useLanguage();

  useEffect(() => {
    const loadBrawlers = () => {
      try {
        const dataList = (brawlerLocalData.list as RawBrawler[]) || [];

        const processedList = dataList.map((brawler: RawBrawler) => {
          return {
            ...brawler,
            description:
              isPt && brawler.description_ptbr
                ? brawler.description_ptbr
                : brawler.description,
            className:
              isPt && brawler.class.name_ptbr
                ? brawler.class.name_ptbr
                : brawler.class.name,
            classColor: brawler.class.color,
            iconUrl: brawler.class.iconUrl,

            encounters: brawler.encounters.map((enc: RawEncounterAction) => ({
              ...enc,
              chaosValue: getChaosValue(enc.chaos),
              chaosLevel: enc.chaos,
              chaos: enc.chaos,
            })),
          };
        });

        setBrawlers(processedList);
      } catch (error) {
        console.error("Error processing JSON:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBrawlers();
  }, [lang, isPt]);

  return { brawlers, loading };
};
