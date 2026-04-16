import { useState, useEffect, useRef } from 'react';
import './IntroDialogue.css';

const MINA_IMAGES = {
    regular: "https://media.ffycdn.net/eu/supercell/FpgRNhm8tdpQ8y14BoZo.png?width=2400",
    happy: "https://media.ffycdn.net/eu/supercell/CBQWRFKKAP8BKTBHopRC.png?width=2400",
    gg: "https://media.ffycdn.net/eu/supercell/9UFXRiKeE48FiLuHdwUB.png?width=2400",
    sad: "https://media.ffycdn.net/eu/supercell/RS476M78pHpz3trKdEqh.png?width=2400",
    phew: "https://media.ffycdn.net/eu/supercell/JYUzckQ3H668Lj32hRUz.png?width=2400",
    facePalm: "https://media.ffycdn.net/eu/supercell/k7Cp4Ro6agLbxK1f6qqm.png?width=2400",
    thanks: "https://media.ffycdn.net/eu/supercell/oYj3JvPtBWTmqFwkzeQ.png?width=2400",
    clap: "https://media.ffycdn.net/eu/supercell/oYSe1fznh2GAvtCUJ2nk.png?width=2400",
    angry: "https://media.ffycdn.net/eu/supercell/RPcZGHbhrYvWiUdHdRcM.png?width=2400"
};

type DialogueKey = 'intro' | 'elevator_crisis' | 'performance_review';

const DIALOGUES: Record<DialogueKey, { name: string; text: string; image: string }[]> = {
  intro: [
    { 
      name: "Mina", 
      text: "Welcome to the Starr Corp Brazil Branch! Ignore the flickering lights and the smell of burnt coffee. It's just... corporate charm.", 
      image: MINA_IMAGES.regular 
    },
    { 
      name: "Mina", 
      text: "Your first task: Recruit 3 Brawlers for our Special Task Force. Try to pick ones that won't cry when they see a 50-page contract.", 
      image: MINA_IMAGES.happy 
    },
    { 
      name: "Mina", 
      text: "We have 3 floors of pure bureaucratic chaos to navigate. If the elevators try to bite you, just kick them back.", 
      image: MINA_IMAGES.facePalm 
    },
    { 
      name: "Mina", 
      text: "Our goal is to deliver the Q1 Report to the CEO at the top floor. If we fail, we're stuck in Overtime FOREVER. Ready? Let's go!", 
      image: MINA_IMAGES.angry 
    }
  ],
  elevator_crisis: [
    { name: "Mina", text: "Great team! Now... BAD NEWS. The elevator is possessed by a 1990s printer demon.", image: MINA_IMAGES.facePalm },
    { name: "Mina", text: "We're taking the stairs. Get ready.", image: MINA_IMAGES.angry }
  ],
  performance_review: [
    { name: "Mina", text: "Not bad! You guys actually survived the first floor. I'm impressed... and $50 richer from a bet.", image: MINA_IMAGES.gg }
  ]
};

interface IntroDialogueProps {
    scriptType: 'intro' | 'elevator_crisis' | 'performance_review';
    onFinish: () => void;
}

const IntroDialogue = ({ scriptType, onFinish }: IntroDialogueProps) => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Pega a lista de falas baseada no tipo passado por prop
    const currentScript = DIALOGUES[scriptType];
    const currentLine = currentScript[index];

    const stopTyping = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setIsTyping(false);
    };

    useEffect(() => {
        let i = 0;
        setDisplayedText("");
        setIsTyping(true);

        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
            setDisplayedText(currentLine.text.slice(0, i + 1));
            i++;

            if (i >= currentLine.text.length) {
                stopTyping();
            }
        }, 30);

        return () => stopTyping();
    }, [index, currentLine.text]);

    const handleNext = () => {
        if (isTyping) {
            stopTyping();
            setDisplayedText(currentLine.text);
        } else {
            // Verifica o tamanho da lista correta
            if (index < currentScript.length - 1) {
                setIndex(prev => prev + 1);
            } else {
                onFinish();
            }
        }
    };

    return (
        <div className="dialogue-screen" onClick={handleNext}>
            <div className="portrait-area">
                <img
                    src={currentLine.image}
                    alt="Mina HR"
                    className="mina-portrait"
                    key={currentLine.image} // Key muda para resetar animação da imagem
                />
            </div>
                
            <div className="dialogue-box">
                <span className="character-name">
                    {currentLine.name} | Starr Corp HR
                </span>
                <p className="dialogue-text">{displayedText}</p>

                {!isTyping && <div className="next-indicator">CLICK TO CONTINUE ▼</div>}
            </div>
        </div>
    );
};

export default IntroDialogue;