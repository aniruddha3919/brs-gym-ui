"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

interface TransitionSequenceProps {
    onComplete: () => void;
}

const TransitionSequence = ({ onComplete }: TransitionSequenceProps) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const triggerRef = useRef(null);
    const isInView = useInView(triggerRef, { amount: 0.1, once: true });

    const handleComplete = useCallback(() => {
        setShowOverlay(false);
        document.body.style.overflow = "auto";
        onComplete();

        // Smooth scroll to the next section after a tiny delay
        setTimeout(() => {
            const branchesSection = document.getElementById("branches");
            if (branchesSection) {
                branchesSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }, [onComplete]);

    useEffect(() => {
        if (isInView && !hasTriggered) {
            setHasTriggered(true);
            setShowOverlay(true);

            // Disable scroll while transition is active
            document.body.style.overflow = "hidden";

            // Safety timeout in case video fails or takes too long
            const timer = setTimeout(() => {
                handleComplete();
            }, 6000); // 6 seconds total safety

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = "auto";
            };
        }
    }, [isInView, hasTriggered, handleComplete]);

    return (
        <div ref={triggerRef} className="h-1 bg-transparent w-full relative -top-20">
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-end pb-12 overflow-hidden"
                    >
                        {/* Background Video */}
                        <video
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleComplete}
                            className="absolute inset-0 w-full h-full object-cover opacity-70"
                        >
                            <source src="/assets/brs-world.mp4" type="video/mp4" />
                        </video>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

                        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-8"
                            >
                                {/* <div className="inline-block px-4 py-1 border border-primary/50 rounded-full mb-4 backdrop-blur-sm">
                                    <span className="text-primary text-xs font-display tracking-[0.2em] uppercase">Cinematic Experience</span>
                                </div> */}
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    className="text-3xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tighter leading-tight"
                                >
                                    YOU ARE ENTERING <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient">BRS WORLD</span>
                                </motion.h2>
                            </motion.div>

                            {/* Progress Bar Container */}
                            <div className="w-full max-w-md mx-auto h-1 bg-zinc-800/50 rounded-full overflow-hidden backdrop-blur-sm mb-4">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 5, ease: "linear", delay: 0.2 }}
                                    className="h-full bg-primary origin-left shadow-[0_0_20px_rgba(255,0,0,0.6)]"
                                />
                            </div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="text-zinc-400 font-body text-[10px] tracking-[0.4em] uppercase"
                            >
                                Preparing your transformation...
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TransitionSequence;
