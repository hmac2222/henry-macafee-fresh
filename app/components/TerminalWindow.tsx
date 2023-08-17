"use client";
import { FC } from 'react';
import InteractiveTerminalContent from './InteractiveTerminalContent';
import './TerminalWindow.css';  // Import the css file
import InteractiveTerminalProjectContent from './InteractiveTerminalProjectContent';
import { useMediaQuery } from '@mui/material';

interface Props {
    children: React.ReactNode;
    step: number;
    setStep: (step: number) => void;
}

const TerminalWindow: FC<Props> = ({ children, step, setStep }) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    
    let opacity: number = (step === 0 || step > 2) ? 0 : 1;
    let width: string = isMobile ? '320px' : '640px';
    let height: string = '480px';
    let backgroundColor: string = 'rgba(0,0,0, 0.6)';

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
        {step < 2 ? 
            <InteractiveTerminalContent step={step} setStep={setStep}>
                {children}
            </InteractiveTerminalContent> 
            : <InteractiveTerminalProjectContent />
        }
    </div>
);
};

export default TerminalWindow;