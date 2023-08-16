import dynamic from 'next/dynamic';
import './globals.css';
import WindowEffectMidground from './components/WindowEffectMidground';
import { Box, Typography } from '@mui/material';

const GradientBackground = dynamic(() => import('./components/GradientBackground'), {
    ssr: false
});

// Extract styles into separate objects
const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    height: '95vh',
};

const typographyStyles = {
    fontSize: 'calc(10vw - 5px)',
    color: 'yellow',
    textShadow: 'calc(0.5vw) calc(0.5vw) 0px orange, calc(-0.5vw) calc(-0.5vw) 0px lime',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',  // This will prevent the text from wrapping
    overflow: 'hidden',    // This will hide any overflow
    textOverflow: 'ellipsis' // This will add ellipsis if the text overflows
};

const Home = () => {
    return (
        <GradientBackground>
            <WindowEffectMidground>
                <Box sx={containerStyles}>
                    <Typography sx={typographyStyles}>
                        hi, my name is Henry
                    </Typography>
                </Box>
            </WindowEffectMidground>
        </GradientBackground>
    );
};

export default Home;
