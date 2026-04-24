import React from "react";
import Intro from "../components/Intro";
import Recruitment from "../components/Recruitment";
import IntroDialogue from "../components/IntroDialogue";
import { EncounterRoom } from "../components/EncounterRoom";
import { BossBattle } from "../components/BossBattle";
import { ENCOUNTER } from "../core/content/encounter";
import type { GameScene } from "../types/game";
import StartScreen from "../components/StartScreen";

interface SceneManagerProps {
    currentScene: GameScene;
    setCurrentScene: (scene: GameScene) => void;
    brawlers: any[];
    selectedTeam: any[];
    toggleSelection: (brawler: any) => void;
    setViewingBrawler: (brawler: any) => void;
    overtime: number;
    chaos: number;
    encounterIndex: number;
    setEncounterIndex: React.Dispatch<React.SetStateAction<number>>;
    activeIndex: number;
    prevCard: () => void;
    nextCard: () => void;
    handleChoice: (result: any) => void;
    handleRestartGame: () => void;
}

export const SceneManager: React.FC<SceneManagerProps> = ({
    currentScene, setCurrentScene, brawlers, selectedTeam, toggleSelection,
    setViewingBrawler, overtime, chaos, encounterIndex, setEncounterIndex,
    activeIndex, prevCard, nextCard, handleChoice, handleRestartGame
}) => {


    switch (currentScene) {
        case "START":
            return (
                <>
                    <StartScreen />
                    <Intro onStart={() => setCurrentScene("INTRO_DIALOGUE")} />
                </>
            );

        case "INTRO_DIALOGUE":
            return (
                <div className="game-container">
                    <div className='blur-background'>
                        <Recruitment brawlers={brawlers} selectedTeam={[]} toggleSelection={() => { }} onOpenDetails={() => { }} onStartMission={() => { }} />
                    </div>
                    <IntroDialogue
                        scriptType="intro"
                        onFinish={() => setCurrentScene("RECRUITING")} />
                </div>
            );
        case "RECRUITING":
            return (

                <Recruitment
                    brawlers={brawlers}
                    selectedTeam={selectedTeam}
                    toggleSelection={toggleSelection}
                    onOpenDetails={setViewingBrawler}
                    onStartMission={() => setCurrentScene("PRE_ENCOUNTER_DIALOGUE")}
                />
            );
        case "PRE_ENCOUNTER_DIALOGUE":
            return (
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
            );
        case "ENCOUNTER":
            return (
                <section className='encounter-section'>
                    <div className='encounter-container'>
                        <h2 className='encounter-title'>{ENCOUNTER[encounterIndex].title}</h2>
                        <p className='encounter-desc'>{ENCOUNTER[encounterIndex].description}</p>

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
                                            encounter={ENCOUNTER[encounterIndex]}
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
                    </div>
                </section>
            );
        
        case "POST_ENCOUNTER_DIALOGUE":
            return(
                <div className="game-container">
                    <div className='blur-background'>
                        <div className='status-bar-minimal' style={{position: 'absolute', bottom: '20px'}}>
                        </div>
                    </div>
                    <IntroDialogue
                        scriptType="performance_review"
                        onFinish={() => {
                            if (encounterIndex < ENCOUNTER.length - 1) {
                                setEncounterIndex(prev => prev + 1);
                                setCurrentScene("ENCOUNTER");
                            } else {
                                setCurrentScene("BOSS");
                            }
                        }}
                    />
                </div>
            )    
        
        case "BOSS":
            return(
                    <BossBattle 
        team={selectedTeam} 
        chaos={chaos} 
        overtime={overtime} 
        onReset={handleRestartGame}
    />
            )
    }



}



