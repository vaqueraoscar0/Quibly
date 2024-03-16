import {useEffect, useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import loadingAnimation from '/src/Pages/LandingPage/assets/Pulse-1s-200px.svg'

type props = {}

function IntroOverlay({}: props) {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHide(true);
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {!hide && (
                <motion.div
                    id={"intro-overlay"}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={'flex flex-col justify-center items-center fixed inset-0 z-50 bg-white'}
                >
                    <div className={"w-full h-full flex justify-center items-center overflow-y-hidden "}>
                        <img src={loadingAnimation} alt="Loading" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default IntroOverlay;
