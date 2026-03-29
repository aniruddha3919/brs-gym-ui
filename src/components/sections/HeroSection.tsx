"use client";

import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import { Star, Sparkles, Gift } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const [isVideoLoaderReady, setIsVideoLoaderReady] = useState(false);

  useEffect(() => {
    // Safety timeout: dismiss loader after 8 seconds maximum
    const timer = setTimeout(() => {
      setIsVideoLoaderReady(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVideoLoaderReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoLoaderReady]);

  // Typewriter animation state
  const [displayedHeading1, setDisplayedHeading1] = useState("");
  const [displayedHeading2, setDisplayedHeading2] = useState("");
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const heading1 = "BRS : Where";
  const heading2 = "Body REDEFINED";
  const description = "Experience next-level training at the best gym in Hatiara. A high-energy environment designed for performance, transformation, and total wellness.";

  useEffect(() => {
    if (!isVideoLoaderReady) return;

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const startTypewriter = () => {
      // Reset all states
      setDisplayedHeading1("");
      setDisplayedHeading2("");
      setDisplayedDescription("");
      setShowCursor(true);

      // Typewriter effect for heading 1
      let heading1Index = 0;
      const heading1Interval = setInterval(() => {
        if (heading1Index <= heading1.length) {
          setDisplayedHeading1(heading1.slice(0, heading1Index));
          heading1Index++;
        } else {
          clearInterval(heading1Interval);
          // Start heading 2 after heading 1 is complete
          let heading2Index = 0;
          const heading2Interval = setInterval(() => {
            if (heading2Index <= heading2.length) {
              setDisplayedHeading2(heading2.slice(0, heading2Index));
              heading2Index++;
            } else {
              clearInterval(heading2Interval);
              // Start description after heading 2 is complete
              let descIndex = 0;
              const descInterval = setInterval(() => {
                if (descIndex <= description.length) {
                  setDisplayedDescription(description.slice(0, descIndex));
                  descIndex++;
                } else {
                  clearInterval(descInterval);
                  // Wait 2 seconds then restart the animation
                  setTimeout(() => {
                    startTypewriter();
                  }, 2000);
                }
              }, 20); // Faster for description
            }
          }, 80);
        }
      }, 100);
    };

    // Start the animation
    startTypewriter();

    return () => {
      clearInterval(cursorInterval);
    };
  }, [isVideoLoaderReady]);

  // Floating particles animation variants
  const particleVariants: Variants = {
    animate: (i: number) => ({
      y: [0, -30, 0],
      x: [0, Math.random() * 20 - 10, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2,
      },
    }),
  };

  return (
    <>
      <AnimatePresence>
        {!isVideoLoaderReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              {/* Diamond Icon */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
              >
                <path
                  d="M12 2L4 8L12 22L20 8L12 2Z"
                  fill="url(#diamond-gradient-loader)"
                  stroke="#FACC15"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 8L12 22L20 8H4Z"
                  fill="url(#diamond-gradient-dark-loader)"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient id="diamond-gradient-loader" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FACC15" />
                    <stop offset="0.5" stopColor="#EAB308" />
                    <stop offset="1" stopColor="#CA8A04" />
                  </linearGradient>
                  <linearGradient id="diamond-gradient-dark-loader" x1="12" y1="8" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CA8A04" />
                    <stop offset="1" stopColor="#854D0E" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-white font-display text-2xl tracking-widest uppercase relative z-10">BRS GYM</h2>
                <div className="h-1 w-48 bg-zinc-800 rounded-full overflow-hidden relative z-10">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-primary"
                    animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <p className="text-zinc-500 font-display text-xs uppercase tracking-[0.2em] relative z-10">
                  Loading Experience...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="hero" className="relative h-screen min-h-[600px] flex flex-col items-center justify-between overflow-hidden bg-black">
        {/* Background Video with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ scale }}
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Desktop: YouTube Background */}
          <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 w-[180%] h-[180%] transform -translate-x-1/2 -translate-y-1/2 opacity-40 grayscale-[20%]"
              src="https://www.youtube.com/embed/M7NWZDeoj2M?autoplay=1&mute=1&loop=1&playlist=M7NWZDeoj2M&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&showinfo=0"
              allow="autoplay; encrypted-media"
              onLoad={() => {
                if (typeof window !== "undefined" && window.innerWidth >= 768) {
                  setIsVideoLoaderReady(true);
                }
              }}
            />
          </div>

          {/* Mobile: Local Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => {
              if (typeof window !== "undefined" && window.innerWidth < 768) {
                setIsVideoLoaderReady(true);
              }
            }}
            onLoadedData={() => {
              if (typeof window !== "undefined" && window.innerWidth < 768) {
                setIsVideoLoaderReady(true);
              }
            }}
            className="md:hidden absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
          >
            <source src="/hero-video-2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Strong gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />
      </motion.div>

      {/* Top Badge - PREMIUM GYM */}
      <motion.div
        className="relative z-20 pt-24 sm:pt-28 md:pt-32"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border-2 border-zinc-300/60 bg-gradient-to-r from-zinc-800/50 via-zinc-700/50 to-zinc-800/50 backdrop-blur-sm relative overflow-hidden">
          {/* Platinum shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
          />

          <div className="flex items-center gap-2 relative z-10">
            {/* Diamond Icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M12 2L4 8L12 22L20 8L12 2Z"
                fill="url(#diamond-gradient)"
                stroke="#E5E7EB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8L12 22L20 8H4Z"
                fill="url(#diamond-gradient-dark)"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="diamond-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F3F4F6" />
                  <stop offset="0.5" stopColor="#D1D5DB" />
                  <stop offset="1" stopColor="#9CA3AF" />
                </linearGradient>
                <linearGradient id="diamond-gradient-dark" x1="12" y1="8" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9CA3AF" />
                  <stop offset="1" stopColor="#6B7280" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-bold bg-gradient-to-r from-zinc-200 via-zinc-50 to-zinc-200 bg-clip-text text-transparent">
              PREMIUM GYM IN YOUR AREA
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Hero Content - Centered and Bottom */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 pb-6 sm:pb-12 md:pb-16 mb-10">
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto sm:mx-0 text-center sm:text-left">
          {/* Main Heading */}
          <h2 className="sr-only">Best Gym in Hatiara</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-white mb-2 sm:mb-3">
              {displayedHeading1}
              {displayedHeading1 === heading1 && !displayedHeading2 && showCursor && (
                <span className="animate-pulse">|</span>
              )}
              <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                {displayedHeading2}
                {displayedHeading2 === heading2 && !displayedDescription && showCursor && (
                  <span className="animate-pulse">|</span>
                )}
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-foreground/60 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl"
          >
            {displayedDescription}
            {displayedDescription && displayedDescription !== description && showCursor && (
              <span className="animate-pulse">|</span>
            )}
          </motion.p>

          {/* Start Training Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-4 sm:mb-6 relative"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(250, 204, 21, 0.8)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-5 w-full sm:w-auto px-12 sm:px-16 py-3 sm:py-4 bg-primary text-black font-bold text-sm sm:text-base md:text-lg rounded-full relative overflow-hidden transition-all duration-300"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(250, 204, 21, 0.3)",
                  "0 0 40px rgba(250, 204, 21, 0.6)",
                  "0 0 20px rgba(250, 204, 21, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{
                  scale: [1, 1.3, 1.3],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              {/* Second pulsing ring with delay */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{
                  scale: [1, 1.3, 1.3],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1,
                }}
              />

              {/* Enhanced animated shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
              />
              <span className="relative z-10">Start Training</span>
            </motion.button>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-4 mt-8 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/5 w-fit"
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&h=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=100&h=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=100&h=100&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=100&h=100&auto=format&fit=crop",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden relative shadow-lg"
                >
                  <img src={src} alt="Gym Member" className="w-full h-full object-cover" />
                </motion.div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-primary flex items-center justify-center shadow-lg relative z-10">
                <span className="text-black text-[10px] font-bold">+700</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={10} className="fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white font-display font-bold text-xs tracking-wider uppercase">
                700+ ACTIVE MEMBERS
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
