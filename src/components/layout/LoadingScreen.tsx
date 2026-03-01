"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show loading screen for 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loading"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                >
                    {/* Animated background gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"
                        animate={{
                            background: [
                                "linear-gradient(to bottom right, #000000, #18181b, #000000)",
                                "linear-gradient(to bottom right, #18181b, #000000, #18181b)",
                                "linear-gradient(to bottom right, #000000, #18181b, #000000)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Pulsing rings */}
                    <motion.div
                        className="absolute w-64 h-64 rounded-full border-2 border-primary/20"
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.5, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                    <motion.div
                        className="absolute w-64 h-64 rounded-full border-2 border-primary/20"
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.5, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 1,
                        }}
                    />

                    {/* Logo container */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo with scale animation */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            {/* Glow effect behind logo */}
                            <motion.div
                                className="absolute inset-0 blur-3xl bg-primary/30 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <Image
                                src={logo}
                                alt="BRS Logo"
                                width={200}
                                height={200}
                                className="relative z-10"
                                priority
                            />
                        </motion.div>

                        {/* Loading text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-8 flex flex-col items-center gap-4"
                        >
                            <p className="text-foreground/80 text-sm uppercase tracking-[0.3em] font-bold">
                                Loading
                            </p>

                            {/* Animated loading bar */}
                            <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary via-yellow-300 to-primary"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Sparkle effects */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary rounded-full"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
