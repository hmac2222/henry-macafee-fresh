"use client"
import { FC, useState, useEffect, useCallback } from 'react';

interface InteractiveTerminalContentProps {
    children: React.ReactNode;
    step: number;
    setStep: (step: number) => void;
}

interface Option {
    label: string;
    action: () => void;
}

const InteractiveTerminalContent: FC<InteractiveTerminalContentProps> = ({ children, step, setStep }) => {
    const [content, setContent] = useState<React.ReactNode[]>([children]);
    const [keypressCount, setKeypressCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(0);

    const options: Option[] = [
        {
            label: 'portfolio',
            action: () => setStep(2)
        },
        {
            label: 'github',
            action: () => window.open("https://github.com/hmac2222", "_blank")
        },
        {
            label: 'linkedin',
            action: () => window.open("https://www.linkedin.com/in/henry-macafee/", "_blank")
        },
        {
            label: 'contact me',
            action: () => window.open("mailto:henry.macafee@gmail.com?subject=we%20want%20you%20to%20come%20work%20for%20us&body=Dear%20Henry:%0A%0Awow%20your%20portfolio%20site%20is%20totally%20cool", "_blank")
        }
    ];

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (content.length < 3) {
            if (event.key === 'Enter') {
                setContent([...content, 'hi, I am Henry MacAfee, software engineer', 'i would love to show you some things: ']);
            } else if (keypressCount < 5) {
                setKeypressCount(keypressCount + 1);
            } else {
                setContent([...content, '(please press Enter...)']);
                setKeypressCount(0);
            }
        } else {
            switch (event.key) {
                case 'ArrowUp':
                    setSelectedOption((prev) => (prev - 1 + options.length) % options.length);
                    break;
                case 'ArrowDown':
                    setSelectedOption((prev) => (prev + 1) % options.length);
                    break;
                case 'Enter':
                    options[selectedOption].action();
                    break;
                default:
                    return;
            }
        }
    }, [content, keypressCount, selectedOption]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <>
            {content.map((line, index) => (
                <div key={index}>
                    {line}
                    {index === content.length - 1 && content.length < 3 && <span className="cursor" />}
                </div>
            ))}
            <br />
            {content.length >= 3 && options.map((option, index) => (
                <div key={option.label} className={index === selectedOption ? 'selected' : ''}>
                    {index === selectedOption ? `•  ${option.label}` : `  ${option.label}`}
                </div>
            ))}
        </>
    );
};

export default InteractiveTerminalContent;
