import { useRouter } from 'next/router';
import WindowEffectMidground from '../../app/components/WindowEffectMidground';
// import TerminalContentStep1 from '../../components/TerminalContentStep1';
// import TerminalContentStep2 from '../../components/TerminalContentStep2';
import { Box, Typography } from '@mui/material';

function StepPage() {
    const router = useRouter();
    const { step } = router.query;

    let content;

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        height: '95vh',
    }
    
    const typographyStyles = {
        fontSize: 'calc(10vw - 5px)',
        color: 'yellow',
        textShadow: 'calc(0.5vw) calc(0.5vw) 0px orange, calc(-0.5vw) calc(-0.5vw) 0px lime',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',  // This will prevent the text from wrapping
        overflow: 'hidden',    // This will hide any overflow
        textOverflow: 'ellipsis' // This will add ellipsis if the text overflows
    }

    switch(step) {
        case '0':
            content = (
                <WindowEffectMidground>
                    <Box sx={containerStyles}>
                        <Typography sx={typographyStyles}>
                            hi, my name is Henry
                        </Typography>
                    </Box>
                </WindowEffectMidground>
            );
            break;
        case '1':
            content = <div />;
            break;
        case '2':
            content = <div />;
            break;
        default:
            content = <div>Invalid step</div>;
    }

    return content;
}

export default StepPage;
