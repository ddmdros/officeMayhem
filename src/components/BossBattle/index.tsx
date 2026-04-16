import { useState, useEffect } from 'react';
import './BossBattle.css';

interface BossProps {
    team: any[];
    chaos: number;
    overtime: number;
    onReset: () => void;
}

export const BossBattle = ({ team, chaos, overtime, onReset }: BossProps) => {
    // HP do Boss aumenta conforme o Overtime
    const [bossHp, setBossHp] = useState(500 + overtime * 5);
    const [playerTurn, setPlayerTurn] = useState(true);
    const [battleLog, setBattleLog] = useState("8-BIT HAS INFECTED THE MAINFRAME!");
    const [isDead, setIsDead] = useState(false);

    const calculateDamage = (brawler: any) => {
        // Eficiência base menos a penalidade de Caos
        const baseDmg = brawler.gameStats.efficiency * 10;
        const penalty = (chaos / 100) * 20;
        return Math.max(10, Math.floor(baseDmg - penalty));
    };

    const handleAttack = (brawler: any) => {
        if (!playerTurn || isDead) return;

        const dmg = calculateDamage(brawler);
        setBossHp(prev => Math.max(0, prev - dmg));
        setBattleLog(`${brawler.name} dealt ${dmg} damage to the Glitch!`);
        
        if (bossHp - dmg <= 0) {
            setIsDead(true);
            setBattleLog("STARR CORP SAVED! 8-BIT DEFEATED!");
            return;
        }

        setPlayerTurn(false);
        // Contra-ataque do Boss automático após 1 segundo
        setTimeout(bossCounterAttack, 1000);
    };

    const bossCounterAttack = () => {
        setBattleLog("8-BIT uses LASER BEAM! System stability decreasing...");
        setPlayerTurn(true);
    };

    return (
        <div className={`boss-screen ${chaos > 70 ? 'glitch-bg' : ''}`}>
            <div className="boss-header">
                <h1 className="boss-title">FINAL BOSS: 8-BIT</h1>
                <div className="boss-hp-container">
                    <div className="hp-bar-fill" style={{ width: `${(bossHp / (500 + overtime * 5)) * 100}%` }}></div>
                    <span>{bossHp} HP</span>
                </div>
            </div>

            <div className="boss-visual">
                <img src="https://vignette.wikia.nocookie.net/brawlstars/images/2/2a/8-Bit_Portrait.png" className="boss-img" alt="8-bit" />
            </div>

            <p className="battle-log">{battleLog}</p>

            <div className="boss-team-actions">
                {team.map(brawler => (
                    <button 
                        key={brawler.id} 
                        className="boss-attack-btn"
                        onClick={() => handleAttack(brawler)}
                        disabled={!playerTurn || isDead}
                    >
                        {brawler.name} ATTACK
                    </button>
                ))}
            </div>
/* Dentro do BossBattle.tsx */
{isDead && (
    <div className="victory-overlay">
        <h2>MISSION ACCOMPLISHED</h2>
        <p>You survived another day at Starr Corp.</p>
        <button className="reset-btn" onClick={onReset}>
            REBOOT SYSTEM
        </button>
    </div>
)}
        </div>
    );
};