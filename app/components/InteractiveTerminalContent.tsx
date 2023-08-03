"use client"
import { FC, useState, useEffect, useCallback } from 'react';

interface InteractiveTerminalContentProps {
    children: React.ReactNode;
    step: number;
    setStep: (step: number) => void;
}

const InteractiveTerminalContent: FC<InteractiveTerminalContentProps> = ({ children, step, setStep }) => {
    const [content, setContent] = useState([children]);
    const [keypressCount, setKeypressCount] = useState(0);

    const initialOptions = [
        'portfolio',
        'github',
        'linkedin',
        'contact me',
    ];

    const [selectedOption, setSelectedOption] = useState(0);
    const [options, setOptions] = useState(initialOptions);

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (content.length < 3) {
            if (event.key === 'Enter') {
                setContent(prevContent => [...prevContent, 'hi, I am Henry MacAfee, software engineer', `i would love to show you some things: `]);
            } else if (keypressCount < 5) {
                setKeypressCount(prevCount => prevCount + 1);
            } else {
                setContent(prevContent => [...prevContent, '(please press Enter...)']);
                setKeypressCount(0);
            }
        } else {
            if (event.key === 'ArrowUp' && options.length > 0) {
                setSelectedOption(prevSelectedOption => (prevSelectedOption - 1 + options.length) % options.length);
            } else if (event.key === 'ArrowDown' && options.length > 0) {
                setSelectedOption(prevSelectedOption => (prevSelectedOption + 1) % options.length);
            } else if (event.key === 'Enter') {
                if (selectedOption === 0) {
                    setStep(2)
                } else if (selectedOption === 1) {
                    window.open("https://github.com/hmac2222", "_blank")
                } else if (selectedOption === 2) {
                    window.open("https://www.linkedin.com/in/henry-macafee/", "_blank")
                } else if (selectedOption === 3) {
                    window.open("mailto:henry.macafee@gmail.com?subject=we%20want%20you%20to%20come%20work%20for%20us&body=Dear%20Henry:%0A%0Awow%20your%20portfolio%20site%20is%20totally%20cool", "_blank")
                } else {
                    return
                }
                return
            } else {
                return
            }
        }
    }, [content, keypressCount, selectedOption]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <>
            {content.map((line, index) => (
                <div key={index}>{line}{(index === content.length - 1) && content.length < 3 && <span className="cursor" />}</div>
            ))}
            <br />
            {content.length >= 3 && options.map((option, index) => (
                <div key={option} className={index === selectedOption ? 'selected' : ''}>
                    {index === selectedOption ? `•  ${option}` : '  ' + `${option}`}
                </div>
            ))}
        </>
    );
};

export default InteractiveTerminalContent;
