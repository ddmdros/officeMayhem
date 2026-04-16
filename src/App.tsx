import './App.css'
import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Intro from './components/Intro'
import { BRAWLER_DATA_PATCH } from './constants/brawlerPatch'
import { CLASS_ICONS } from './constants/gameAssets'
import BrawlerModal from './components/BrawlerModal'
import IntroDialogue from './components/IntroDialogue'
import { Encounter } from './components/Encounter'
import { EncounterRoom } from './components/EncounterRoom'
import "./components/EncounterScreen/EncounterScreen.css"
import { BossBattle } from './components/BossBattle'

import Recruitment from './components/Recruitment'

const cleanBrawlText = (text: string) => {
    if (!text) return "";
    return text.replace(/<![^>]*>/g, "x");
}


type GameScene = "START" | "INTRO_DIALOGUE" | "RECRUITING" | "PRE_ENCOUNTER_DIALOGUE" | "ENCOUNTER" | "POST_ENCOUNTER_DIALOGUE" | "BOSS";
function App() {
    const [brawlers, setBrawlers] = useState<any[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<any[]>([]);
    const [viewingBrawler, setViewingBrawler] = useState<any | null>(null);
    const [currentScene, setCurrentScene] = useState<GameScene>('START');
    const [overtime, setOvertime] = useState(0);
    const [chaos, setChaos] = useState(0);
    const [encounterIndex, setEncounterIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(1); // Começa no brawler do meio

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
            {currentScene === "START" && (
                <>
                    <Banner
                        title="STARR CORP: OFFICE MAYHEM"
                        tagline="An interactive fan-made strategy experience powered by the Brawl Stars API."
                    />
                    <Intro onStart={() => setCurrentScene("INTRO_DIALOGUE")} />
                </>
            )}

            {currentScene === "INTRO_DIALOGUE" && (
                <div className="game-container">
                    <div className='blur-background'>
                        <Recruitment brawlers={brawlers} selectedTeam={[]} toggleSelection={() => { }} onOpenDetails={() => { }} onStartMission={() => { }} />
                    </div>
                    <IntroDialogue
                        scriptType="intro"
                        onFinish={() => setCurrentScene("RECRUITING")} />
                </div>
            )}

            {currentScene === "RECRUITING" && (
                <Recruitment
                    brawlers={brawlers}
                    selectedTeam={selectedTeam}
                    toggleSelection={toggleSelection}
                    onOpenDetails={setViewingBrawler}
                    onStartMission={() => setCurrentScene("PRE_ENCOUNTER_DIALOGUE")}
                />

            )}

            {currentScene === "PRE_ENCOUNTER_DIALOGUE" && (

                <div className="game-container">
                    <div className='blur-background bg-office-lobby'>
                        <section className='encounter-section'>
                            <div className="elevator-doors-mock"></div>
                        </section>
                    </div>
                    <IntroDialogue
                        scriptType="elevator_crisis"
                        onFinish={() => setCurrentScene("ENCOUNTER")}
                    />
                </div>
            )}


            {currentScene === "ENCOUNTER" && (
    <section className='encounter-section'>
        <div className='encounter-container'>
            <h2 className='encounter-title'>{Encounter[encounterIndex].title}</h2>
            <p className='encounter-desc'>{Encounter[encounterIndex].description}</p>

            <div className="deck-selector-container">
                <button className="nav-btn prev" onClick={prevCard}>◀</button>
                
                <div className="deck-wrapper">
                    {selectedTeam.map((brawler, index) => {
                        let position = "next";
                        if (index === activeIndex) position = "active";
                        else if (index === (activeIndex - 1 + selectedTeam.length) % selectedTeam.length) position = "prev";

                        return (
                            <EncounterRoom
                                key={brawler.id}
                                brawler={brawler}
                                encounter={Encounter[encounterIndex]}
                                onChoice={handleChoice}
                                position={position}
                                isActive={index === activeIndex}
                            />
                        );
                    })}
                </div>

                <button className="nav-btn next" onClick={nextCard}>▶</button>
            </div>
        </div>

<div className='status-bar-minimal'>
    <div className='stat-item'>
        <div className='stat-header'>
            <span>OFFICE CHAOS</span>
            <span className={chaos > 70 ? 'danger-text' : ''}>{chaos}%</span>
        </div>
        <div className='stat-bar-bg'>
            <div className='stat-bar-fill chaos' style={{ width: `${chaos}%` }}></div>
        </div>
    </div>

    <div className='stat-item'>
        <div className='stat-header'>
            <span>OVERTIME</span>
            <span className={overtime > 70 ? 'danger-text' : ''}>{overtime}%</span>
        </div>
        <div className='stat-bar-bg'>
            <div className='stat-bar-fill overtime' style={{ width: `${overtime}%` }}></div>
        </div>
    </div>
</div>    </section>
)}

{currentScene === "POST_ENCOUNTER_DIALOGUE" && (
                <div className="game-container">
                    <div className='blur-background'>
                        {/* Mostramos o HUD borrado ao fundo para dar continuidade */}
                        <div className='status-bar-minimal' style={{position: 'absolute', bottom: '20px'}}>
                             {/* ... mesmos itens de chaos/overtime ... */}
                        </div>
                    </div>
                    <IntroDialogue
                        scriptType="performance_review"
                        onFinish={() => {
                            // SÓ AQUI decidimos o futuro do jogador
                            if (encounterIndex < Encounter.length - 1) {
                                setEncounterIndex(prev => prev + 1);
                                setCurrentScene("ENCOUNTER");
                            } else {
                                setCurrentScene("BOSS");
                            }
                        }}
                    />
                </div>
            )}


           {/* CENA: BOSS FINAL */}
{currentScene === "BOSS" && (
    <BossBattle 
        team={selectedTeam} 
        chaos={chaos} 
        overtime={overtime} 
        onReset={handleRestartGame} // Reinicia o jogo
    />
)}

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
