import './App.css'
import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Intro from './components/Intro'
import { BRAWLER_DATA_PATCH } from './constants/brawlerPatch'
import { CLASS_BALANCING, RARITY_ECONOMY, type BrawlerClass } from './constants/gameLogic'
import { CLASS_ICONS } from './constants/gameAssets'
import BrawlerModal from './components/BrawlerModal'
import IntroDialogue from './components/IntroDialogue'
import { Encounter } from './components/Encounter'
import { EncounterRoom } from './components/EncounterRoom'
import "./components/EncounterScreen/EncounterScreen.css"

import Recruitment from './components/Recruitment'

const cleanBrawlText = (text: string) => {
    if (!text) return "";
    return text.replace(/<![^>]*>/g, "x");
}


type GameScene = "RECRUITING" | "DIALOGUE" | "ENCOUNTER" | "BOSS";

function App() {
    const [brawlers, setBrawlers] = useState<any[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<any[]>([]);
    const [viewingBrawler, setViewingBrawler] = useState<any | null>(null);
    const [currentScene, setCurrentScene] = useState<GameScene>('RECRUITING');
    const [stress, setStress] = useState(0);
    const [energy, setEnergy] = useState(3);
    const [encounterIndex, setEncounterIndex] = useState(0);

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
                    const bClass = brawler.class.name as BrawlerClass;
                    const bRarity = brawler.rarity.name as keyof typeof RARITY_ECONOMY;
                    const stats = CLASS_BALANCING[bClass] || CLASS_BALANCING["Damage Dealer"];
                    const economy = RARITY_ECONOMY[bRarity] || RARITY_ECONOMY["Rare"];

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
                        gameStats: {
                            efficiency: Math.floor(stats.baseEfficiency * economy.buff),
                            resilience: Math.floor(stats.baseResilience * (1 + (economy.buff - 1) - 2)),
                            caffeine: economy.cost
                        }
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
        setStress(prev => Math.max(0, Math.min(100, prev + (result.stress || 0))));
        setEnergy(prev => Math.max(0, prev + (result.energy || 0)));

        if (encounterIndex < Encounter.length - 1) {
            setEncounterIndex(prev => prev + 1);
        } else {
            setCurrentScene("BOSS");
        }
    };


    return (
        <main className='snap-container'>
            {currentScene === "RECRUITING" && (
                <>

                    <Banner
                        title="STARR CORP: OFFICE MAYHEM"
                        tagline="An interactive fan-made strategy experience powered by the Brawl Stars API."
                    />

                    <Intro />

                    <Recruitment
                    brawlers={brawlers}
                    selectedTeam={selectedTeam}
                    toggleSelection={toggleSelection}
                    onOpenDetails={setViewingBrawler}
                    onStartMission={() => setCurrentScene("DIALOGUE")}
                    />

                    {viewingBrawler && (
                        <BrawlerModal
                            brawler={viewingBrawler}
                            onClose={() => setViewingBrawler(null)}
                        />
                    )}

           
                </>
            )}

            {currentScene === "DIALOGUE" && (
                <div className="game-container">
                    <div className='encounter-background-blur'>
                        <IntroDialogue onFinish={() => setCurrentScene("ENCOUNTER")} />
                    </div>
                </div>
            )}


            {currentScene === "ENCOUNTER" && (
                <section className='encounter-section'>

                    <div className='encounter-container'>
                        <h2 className='encounter-title'>{Encounter[encounterIndex].title}</h2>
                        <p className='encounter-desc'>{Encounter[encounterIndex].description}</p>

                        <div className='choices-grid'>
                            {selectedTeam.map(brawler => (
                                <EncounterRoom
                                    key={brawler.id}
                                    brawler={brawler}
                                    encounter={Encounter[encounterIndex]}
                                    onChoice={handleChoice}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='status-bar'>
                        <div className='stress-meter'>
                            <span>STRESS LEVEL: {stress}%</span>
                            <div className='progress-bar'><div className='fill' style={{ width: `${stress}%` }}></div></div>
                        </div>
                        <div className='energy-meter'>☕ {energy} ENERGY LEFT</div>
                    </div>
                </section>
            )}

            {currentScene === "BOSS" && (
                <section className='boss-screen'>
                    <h2 className='brand-title'>FINAL BOSS: 8-BIT</h2>
                    <p>Your team arrived with {stress}% Stress and {energy} Energy!</p>
                </section>
            )}

        </main>
    )
}

export default App
