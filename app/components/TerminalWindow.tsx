"use client"
import { FC } from 'react';
import InteractiveTerminalContent from './InteractiveTerminalContent';
import './TerminalWindow.css';  // Import the css file
import InteractiveTerminalProjectContent from './InteractiveTerminalProjectContent';

interface Props {
    children: React.ReactNode;
    step: number;
    setStep: (step: number) => void;
}

const TerminalWindow: FC<Props> = ({ children, step, setStep }) => {
    let opacity: number;
    let width: string;
    let height: string;
    let backgroundColor: string;

    switch (step) {
        case 0:
            opacity = 0;
            width = '640px';
            height = '480px';
            backgroundColor = 'rgba(0,0,0, 0.6)';
            break;
        case 1:
            opacity = 1;
            width = '640px';
            height = '480px';
            backgroundColor = 'rgba(0,0,0, 0.6)';
            break;
        case 2:
            opacity = 1;
            width = '640px';
            height = '480px';
            backgroundColor = 'rgba(0,0,0, 0.6)';
            break;
        default:
            opacity = 0;
            width = '640px';
            height = '480px';
            backgroundColor = 'rgba(0,0,0, 0.6)';
    }

    return (
        <div style={{
            position: 'absolute',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            border: '4px solid rgba(255, 255, 255, 0.8)',
            borderTopWidth: '20px',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: '16px',
            padding: '20px',
            opacity: opacity,
            transition: 'opacity 1s, width 1s, height 1s',
        }}>
            {step < 2 ? <InteractiveTerminalContent step={step} setStep={setStep
            }>{children}</InteractiveTerminalContent> : <InteractiveTerminalProjectContent />}
        </div>
    );
};

export default TerminalWindow;
