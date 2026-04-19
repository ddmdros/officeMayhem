import { useState, useEffect, useRef } from 'react';
import './IntroDialogue.css';
import { DIALOGUES, UI_TEXT } from '../../../core/content';

interface IntroDialogueProps {
    scriptType: 'intro' | 'elevator_crisis' | 'performance_review';
    onFinish: () => void;
}

const IntroDialogue = ({ scriptType, onFinish }: IntroDialogueProps) => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
                    key={currentLine.image}
                />
            </div>
                
            <div className="dialogue-box">
                <span className="character-name">
                    {currentLine.name} | Starr Corp HR
                </span>
                <p className="dialogue-text">{displayedText}</p>

                {!isTyping && <div className="next-indicator">{UI_TEXT.en.dialogueScreen.clickToContinueBtn}</div>}
            </div>
        </div>
    );
};

export default IntroDialogue;