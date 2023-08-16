import dynamic from 'next/dynamic';
import './globals.css';
import WindowEffectMidground from './components/WindowEffectMidground';
import { Box, Typography } from '@mui/material';

const GradientBackground = dynamic(() => import('./components/GradientBackground'), {
    ssr: false
});

const DynamicMobileCheck = dynamic(() => import('./components/MobileCheck'), {
    ssr: false
    // You can add a loading component if desired
  });

// Extract styles into separate objects
const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    height: '95vh'
};

const typographyStyles = {
    fontSize: '5rem',
    color: 'yellow',
    textShadow: '5px 5px 0px orange, -5px -5px 0px lime',
    fontWeight: 'bold'
};

const Home = () => {
    return (
        <GradientBackground>
            <WindowEffectMidground>
                <DynamicMobileCheck>
                    <Box sx={containerStyles}>
                        <Typography sx={typographyStyles}>
                            hi, my name is Henry
                        </Typography>
                    </Box>
                </DynamicMobileCheck>
            </WindowEffectMidground>
        </GradientBackground>
    );
};

export default Home;
