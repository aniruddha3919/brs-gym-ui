"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Reviews", href: "#social-proof" },
  { label: "Branches", href: "#branches" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    // Set initial volume
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }

    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            removeListeners();
          })
          .catch(() => {
            // Silently wait for the next interaction if browser still blocks
          });
      }
    };

    const removeListeners = () => {
      window.removeEventListener('mousedown', startAudio);
      window.removeEventListener('keydown', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('click', startAudio);
    };

    // Attempt immediately (might work if user navigated internally or from refresh)
    startAudio();

    // Interaction fallback - multiple events for high reliability
    window.addEventListener('mousedown', startAudio);
    window.addEventListener('keydown', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('click', startAudio);

    return () => {
      window.removeEventListener("scroll", onScroll);
      removeListeners();
    };
  }, [isPlaying]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-1' : 'bg-transparent py-4'}`}>
      <audio ref={audioRef} src="/bg-audio.mpeg" loop autoPlay />
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6">
        <a href="#hero" className="flex items-center">
          <Image
            src={logo}
            alt="BRS Gym - Best Gym in Hatiara Logo"
            height={120}
            className="h-16 sm:h-20 md:h-24 w-auto transition-all duration-300"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs lg:text-sm font-medium text-foreground/70 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Audio Control - Replace WhatsApp */}
        <button
          onClick={toggleAudio}
          className="flex items-center justify-center p-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-black transition-all duration-300 group shadow-lg shadow-primary/10 mr-2 sm:mr-4"
          aria-label={isPlaying ? "Mute Audio" : "Unmute Audio"}
        >
          {isPlaying ? (
            <Volume2 size={24} className="animate-pulse" />
          ) : (
            <VolumeX size={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
