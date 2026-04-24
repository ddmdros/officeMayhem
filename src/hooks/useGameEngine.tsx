import { useState } from 'react';
import type { GameScene } from '../types/game';

export const useGameEngine = () => {
    const [currentScene, setCurrentScene] = useState<GameScene>('START');
    const [selectedTeam, setSelectedTeam] = useState<any[]>([]);
    const [overtime, setOvertime] = useState(0);
    const [chaos, setChaos] = useState(0);
    const [encounterIndex, setEncounterIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleSelection = (brawler: any) => {
        const isSelected = selectedTeam.find(b => b.id === brawler.id);
        if (isSelected) {
            setSelectedTeam(prev => prev.filter(b => b.id !== brawler.id));
        } else if (selectedTeam.length < 3) {
            setSelectedTeam(prev => [...prev, brawler]);
        }
    };

    const handleChoice = (result: any) => {
        setOvertime(prev => Math.max(0, Math.min(100, prev + (result.overtime || 0))));
        setChaos(prev => Math.max(0, Math.min(100, prev + (result.chaos || 0))));
        setCurrentScene("POST_ENCOUNTER_DIALOGUE");
    };

    const handleRestartGame = () => {
        setCurrentScene("START");
        setSelectedTeam([]);
        setOvertime(0);
        setChaos(0);
        setEncounterIndex(0);
        setActiveIndex(1);
    };

    const handleResultDialogue = (result: { overtime: number; chaos: number }) => {
    if (result.overtime >= 80 && result.chaos >= 80) {
        return "Your team went ALL-IN on the risky move, causing an unprecedented corporate meltdown! The CEO is furious, and you're all sent to Overtime for eternity. Game Over.";        
    } else if (result.overtime >= 80) {
        return "Your team went all-in on the risky move, causing a catastrophic failure! The CEO is furious, and you're all sent to Overtime for eternity. Game Over.";
    }
}

    return {
        currentScene, setCurrentScene,
        selectedTeam, toggleSelection,
        overtime, chaos,
        encounterIndex, setEncounterIndex,
        activeIndex, setActiveIndex,
        handleChoice, handleRestartGame, handleResultDialogue
    };

    
};