import { useState, useEffect } from 'react';
import { BRAWLER_DATA_PATCH } from '../core/constants/brawlerPatch';
import { CLASS_ICONS } from '../assets/images/imagesLinks';
import { cleanBrawlText } from '../utils/textUtils';

export const useBrawlers = () => {
    const [brawlers, setBrawlers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrawlers = async () => {
            try {
                const response = await fetch("https://api.brawlify.com/v1/brawlers");
                const data = await response.json();
                
                const cleanedList = data.list.map((brawler: any) => {
                    const patchData = BRAWLER_DATA_PATCH[brawler.name.toUpperCase()];
                    let currentBrawler = { ...brawler };

                    if (patchData) {
                        currentBrawler.class = { ...currentBrawler.class, name: patchData.className };
                    }

                    currentBrawler.description = cleanBrawlText(currentBrawler.description);

                    return {
                        ...currentBrawler,
                        classIcon: CLASS_ICONS[currentBrawler.class.name] || "URL_PADRAO",
                    };
                });
                setBrawlers(cleanedList);
            } catch (error) {
                console.error("Starr Corp API Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBrawlers();
    }, []);

    return { brawlers, loading };
};