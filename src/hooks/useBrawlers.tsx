import { useState, useEffect } from "react";
import brawlerLocalData from "../core/constants/brawlerLocalData.json";
import { useLanguage } from "../hooks/useLanguage";
import type { Brawler } from "../types/game";

export const useBrawlers = () => {
  const [brawlers, setBrawlers] = useState<Brawler[]>([]);
  const [loading, setLoading] = useState(true);
  const { isPt, lang } = useLanguage();

  useEffect(() => {
    const loadBrawlers = () => {
      try {
        const dataList = brawlerLocalData.list || [];

        const processedList = dataList.map((brawler: Brawler) => {
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
