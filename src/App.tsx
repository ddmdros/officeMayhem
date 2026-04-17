import './App.css'
import { useEffect, useState } from 'react'
import { BRAWLER_DATA_PATCH } from './core/constants/brawlerPatch'
import { CLASS_ICONS } from './core/constants/gameAssets'
import BrawlerModal from './components/BrawlerModal'
import "./components/EncounterScreen/EncounterScreen.css"
import { SceneManager } from './presentation/scenes/SceneManager'
import type { GameScene } from './presentation/scenes/types/game'

const cleanBrawlText = (text: string) => {
    if (!text) return "";
    return text.replace(/<![^>]*>/g, "x");
}


function App() {

    const [brawlers, setBrawlers] = useState<any[]>([]);
    const [currentScene, setCurrentScene] = useState<GameScene>('START');
    const [selectedTeam, setSelectedTeam] = useState<any[]>([]);
    const [viewingBrawler, setViewingBrawler] = useState<any | null>(null);
    const [overtime, setOvertime] = useState(0);
    const [chaos, setChaos] = useState(0);
    const [encounterIndex, setEncounterIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(1);


    const nextCard = () => {
        setActiveIndex((prev) => (prev + 1) % selectedTeam.length);
    };

    const prevCard = () => {
        setActiveIndex((prev) => (prev - 1 + selectedTeam.length) % selectedTeam.length);
    };

    const handleRestartGame = () => {
        // 1. Volta para a estaca zero
        setCurrentScene("START");

        // 2. Limpa o squad recrutado
        setSelectedTeam([]);

        // 3. Zera os medidores de estresse corporativo
        setOvertime(0);
        setChaos(0);

        // 4. Reseta o progresso dos encontros e a posição do deck
        setEncounterIndex(0);
        setActiveIndex(1);

        // Opcional: Log de console para debugar o reboot
        console.log("SYSTEM REBOOTED: Data cleared, returning to lobby.");
    };

    useEffect(() => {
        const fetchBrawlers = async () => {
            try {
                const response = await fetch("https://api.brawlify.com/v1/brawlers");
                if (!response.ok) {
                    throw new Error("Failed to fetch: " + response.status);
                }

                const data = await response.json();
                const cleanedList = data.list.map((brawler: any) => {
                    const patchData = BRAWLER_DATA_PATCH[brawler.name.toUpperCase()];

                    let currentBrawler = { ...brawler };

                    if (patchData) {
                        currentBrawler.class = {
                            ...currentBrawler.class,
                            name: patchData.className
                        };
                    }

                    currentBrawler.description = cleanBrawlText(currentBrawler.description);
                    currentBrawler.starPowers = currentBrawler.starPowers?.map((starPower: any) => ({
                        ...starPower,
                        description: cleanBrawlText(starPower.description)
                    }));
                    currentBrawler.gadgets = currentBrawler.gadgets?.map((gadget: any) => ({
                        ...gadget,
                        description: cleanBrawlText(gadget.description)
                    }));

                    return {
                        ...currentBrawler,
                        classIcon: CLASS_ICONS[currentBrawler.class.name] || "https://media.ffycdn.net/eu/supercell/fN2nGikE9YnX87ABcWgN.png?width=2400",

                    }
                });

                setBrawlers(cleanedList);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        fetchBrawlers();
    }, []);

    const toggleSelection = (brawler: any) => {
        const isSelected = selectedTeam.find(b => b.id === brawler.id);
        if (isSelected) {
            setSelectedTeam(prev => prev.filter(b => b.id !== brawler.id));
        } else if (selectedTeam.length < 3) {
            setSelectedTeam(prev => [...prev, brawler]);
        }
    }

    const handleChoice = (result: any) => {

        setOvertime(prev => Math.max(0, Math.min(100, prev + (result.overtime || 0))));
        setChaos(prev => Math.max(0, Math.min(100, prev + (result.chaos || 0))));

        setCurrentScene("POST_ENCOUNTER_DIALOGUE");
    };


    return (
        <main className='snap-container'>
            <SceneManager
                currentScene={currentScene}
                setCurrentScene={setCurrentScene}
                brawlers={brawlers}
                selectedTeam={selectedTeam}
                toggleSelection={toggleSelection}
                setViewingBrawler={setViewingBrawler}
                overtime={overtime}
                chaos={chaos}
                encounterIndex={encounterIndex}
                setEncounterIndex={setEncounterIndex}
                activeIndex={activeIndex}
                prevCard={prevCard}
                nextCard={nextCard}
                handleChoice={handleChoice}
                handleRestartGame={handleRestartGame}
            />








            {/* MODAL (Fora das cenas pois pode ser aberto em qualquer uma) */}
            {viewingBrawler && (
                <BrawlerModal
                    brawler={viewingBrawler}
                    onClose={() => setViewingBrawler(null)}
                />
            )}


        </main>
    )
}

export default App
