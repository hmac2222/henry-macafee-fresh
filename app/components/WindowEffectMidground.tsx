'use client'
import { FC, useEffect, useState } from 'react';
import TerminalWindow from './TerminalWindow';

interface Window {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
}

interface Props {
    children: React.ReactNode;
}

const WindowEffectMidground: FC<Props> = ({ children }) => {
    const [windows, setWindows] = useState<Window[]>([]);
    const [step, setStep] = useState(0);

    useEffect(() => {
        let id = 0;
        const interval = setInterval(() => {
            // Create a new window
            const width = Math.max(window.innerWidth * 0.3, Math.random() * window.innerWidth);
            const height = Math.max(window.innerHeight * 0.3, Math.random() * window.innerHeight);
            const newWindow: Window = {
                id: id++,
                x: Math.random() * (window.innerWidth - width),
                y: Math.random() * (window.innerHeight - height),
                width: width,
                height: height,
            };
            setWindows((windows) => [...windows, newWindow]);

            // Remove the window after .75 seconds
            setTimeout(() => {
                setWindows((windows) => windows.filter((window) => window.id !== newWindow.id));
            }, 750);
        }, 500);

        // Display the content box after 3 seconds
        setTimeout(() => {
            setStep(1);
            clearInterval(interval);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            {children}
            {windows.map((window) => (
                <div
                    key={window.id}
                    style={{
                        position: 'absolute',
                        left: `${window.x}px`,
                        top: `${window.y}px`,
                        width: `${window.width}px`,
                        height: `${window.height}px`,
                        border: '4px solid rgba(255, 255, 255, 0.6)',
                        borderTopWidth: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        animation: 'fade-out 1.5s',
                    }}
                />
            ))}
            <TerminalWindow step={step} setStep={setStep}>{`~/henry-macafee$ greeting.sh`}</TerminalWindow>
            <style jsx>{`
                @keyframes fade-out {
                    from {
                        opacity: .7;
                    }
                    to {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default WindowEffectMidground;
