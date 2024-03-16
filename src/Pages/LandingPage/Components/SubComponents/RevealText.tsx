import React from "react";
import { motion } from 'framer-motion';

type props = {
    text: string
}

function RevealText({ text }:props) {
    const letterVariants = {
        hidden: {
            y: '100%',
            color: 'rgba(255,255,255,0)',
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
            },
        visible: (i:number) => ({
            y: 0,
            color: '#3b2f2f',
            opacity: 1,
            transition: {
                delay: 2.0 + i * 0.05, // Adjust delay as needed
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
            },
        }),
    };

    // Splitting text into words, then mapping over words
    const words = text.split(" ");

    return (
        <div className="w-full overflow-y-hidden flex flex-wrap">
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    {[...word].map((char, charIndex) => (
                        <motion.span
                            variants={letterVariants}
                            initial="hidden"
                            animate="visible"
                            custom={charIndex + wordIndex * word.length}
                            key={charIndex}
                        >
                            {char}
                        </motion.span>
                    ))}
                    {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
                </React.Fragment>
            ))}
        </div>
    );
}

export default RevealText;
