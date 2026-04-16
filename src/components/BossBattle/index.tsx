import { useState } from 'react';
import './BossBattle.css';

export const BossBattle = ({ team, chaos, onReset }: any) => {
    const [bossHp, setBossHp] = useState(100);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [battleLog, setBattleLog] = useState("8-BIT IS OVERCLOCKING!");
    const [isVictory, setIsVictory] = useState(false);

    // Função de Ataque Única por Classe
    const executeAction = (brawler: any) => {
        if (!isPlayerTurn || isVictory) return;

        let dmg = 0;
        let effect = "";
        const bClass = brawler.classTypeName || brawler.class?.name;

        // Mecânica de "Especialista": Cada classe faz algo único na luta
        switch (bClass) {
            case 'Tank': 
                dmg = 80; effect = "TANK SMASH! 8-BIT is stunned!"; break;
            case 'Support': 
                dmg = 40; effect = "DEBUG! Chaos reduced by 10%!"; break;
            case 'Assassin': 
                dmg = 150; effect = "CRITICAL GLITCH! Huge damage!"; break;
            default: 
                dmg = 60; effect = "Standard attack deployed.";
        }

        const finalDmg = Math.floor(dmg * (1 - (chaos / 200))); // Caos reduz seu dano
        setBossHp(prev => Math.max(0, prev - finalDmg));
        setBattleLog(`${brawler.name}: ${effect} (${finalDmg} DMG)`);

        if (bossHp - finalDmg <= 0) {
            setIsVictory(true);
            return;
        }

        setIsPlayerTurn(false);
        setTimeout(() => {
            setBattleLog("8-BIT uses REBOOT BEAM! System integrity failing...");
            setIsPlayerTurn(true);
        }, 1000);
    };

    return (
        <div className="boss-battle-overlay">
            <div className="boss-ui-top">
                <h1 className="boss-name">GLITCHED 8-BIT</h1>
                <div className="boss-hp-bar">
                    <div className="hp-fill" style={{ width: `${(bossHp / 1000) * 100}%` }}></div>
                </div>
                <p className="hp-text">{bossHp} / 100 HP</p>
            </div>

            <div className="boss-stage">
                <img src="https://media.ffycdn.net/eu/supercell/igkeo5dNSVQagGzt8uYW.gif?width=2400" alt="8bit" 
                     className={`boss-sprite ${!isPlayerTurn ? 'attacking' : ''}`} />
            </div>

            <div className="battle-feed">{battleLog}</div>

            <div className="action-grid">
                {team.map((b: any) => (
                    <button 
                        key={b.id} 
                        className={`attack-btn ${!isPlayerTurn ? 'disabled' : ''}`}
                        onClick={() => executeAction(b)}
                    >
                        <img src={b.imageUrl || b.imageUrl2} alt="" />
                        <div className="btn-label">
                            <span>{b.name}</span>
                            <small>{b.classTypeName || b.class?.name}</small>
                        </div>
                    </button>
                ))}
            </div>

            {isVictory && (
                <div className="victory-modal">
                    <h2>SYSTEM STABILIZED</h2>
                    <p>Overtime avoided. For now.</p>
                    <button onClick={onReset} className="reboot-btn">REBOOT SYSTEM</button>
                </div>
            )}
        </div>
    );
};