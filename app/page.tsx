import dynamic from 'next/dynamic';
import './globals.css';
import WindowEffectMidground from './components/WindowEffectMidground';

const GradientBackground = dynamic(() => import('./components/GradientBackground'), {
    ssr: false
});


const Home = () => {
    return (
        <div style={{ cursor: 'pointerl' }}>
            <GradientBackground>
                <WindowEffectMidground>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '95vh' }}>
                        <div
                            style={{ fontSize: '5rem', color: 'yellow', textShadow: '5px 5px 0px orange, -5px -5px 0px lime', fontWeight: 'bold' }}
                        >
                            hi, my name is Henry
                        </div>
                    </div>
                </WindowEffectMidground>
            </GradientBackground>
        </div>
    );
};

export default Home;
