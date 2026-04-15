import { useState, useEffect, useRef } from 'react';
import './IntroDialogue.css';

const MINA_IMAGES = {
    regular: "https://media.ffycdn.net/eu/supercell/FpgRNhm8tdpQ8y14BoZo.png?width=2400",
    happy: "https://media.ffycdn.net/eu/supercell/CBQWRFKKAP8BKTBHopRC.png?width=2400",
    gg: "https://media.ffycdn.net/eu/supercell/9UFXRiKeE48FiLuHdwUB.png?width=2400",
    sad: "https://media.ffycdn.net/eu/supercell/RS476M78pHpz3trKdEqh.png?width=2400",
    phew: "https://media.ffycdn.net/eu/supercell/JYUzckQ3H668Lj32hRUz.png?width=2400",
    facePalm: "https://media.ffycdn.net/eu/supercell/k7Cp4Ro6agLbxK1f6qqm.png?width=2400",
    thanks: "https://media.ffycdn.net/eu/supercell/oYQj3JvPtBWTmqFwkzeQ.png?width=2400",
    clap: "https://media.ffycdn.net/eu/supercell/oYSe1fznh2GAvtCUJ2nk.png?width=2400",
    angry: "https://media.ffycdn.net/eu/supercell/RPcZGHbhrYvWiUdHdRcM.png?width=2400"
};

const DIALOGUES = [
    {
        text: "Listen up, intern! The HR coffee machine just exploded, and the São Paulo office has turned into a total Battle Royale.",
        character: "Mina",
        image: MINA_IMAGES.regular
    },
    {
        text: "We need to get to the 13th floor, but the emergency brakes kicked in. We're stuck in this elevator!",
        character: "Mina",
        image: MINA_IMAGES.sad 
    },
    {
        text: "One of your specialists needs to get us out of here. Choose wisely—every action has a cost!",
        character: "Mina",
        image: MINA_IMAGES.gg
    }
];

const IntroDialogue = ({ onFinish }: { onFinish: () => void }) => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const currentFullText = DIALOGUES[index].text;

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
            setDisplayedText(currentFullText.slice(0, i + 1));
            i++;

            if (i >= currentFullText.length) {
                stopTyping();
            }
        }, 30);

        return () => stopTyping();
    }, [index, currentFullText]);

    const handleNext = () => {
        if (isTyping) {
            stopTyping();
            setDisplayedText(currentFullText);
        } else {
            if (index < DIALOGUES.length - 1) {
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
                        src={DIALOGUES[index].image}
                        alt="Mina HR"
                        className="mina-portrait"
                        key={index}
                    />
                </div>
                
            <div className="dialogue-box">

                <span className="character-name">
                    {DIALOGUES[index].character} | Starr Corp HR
                </span>
                <p className="dialogue-text">{displayedText}</p>

                {!isTyping && <div className="next-indicator">CLICK TO CONTINUE ▼</div>}
            </div>
        </div>
    );
};

export default IntroDialogue;